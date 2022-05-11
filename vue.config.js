/**
 * @Author: zhaoxin
 * @Date: 2022/3/10 15:24
 * @LastEditors: zhaoxin
 * @LastEditTime: 2022-03-28 17:13
 * @Description: desc
 */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true, //支持template编译
  productionSourceMap: false,
  publicPath: './',
  //web
  pages: {
    index: {
      entry: 'src/renderer/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'vue-electron-demo',
      chunks: ['chunk-vendors', 'chunk-common', 'index', 'vendors', 'lib']
    },
  },
  devServer: {
    host: '0.0.0.0', //localhost
    port: 8090,
    hotOnly: true, //热更新
    https: false,
    open: false
  },
  //electron
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/main/index.js', // 主进程入口文件
      mainProcessWatch: ['src/main'], // 检测主进程文件在更改时将重新编译主进程并重新启动
      //electron-builder配置，可与默认配置合并
      builderOptions: {
        productName: 'vue-electron-demo', //项目名，这也是生成的exe文件的前缀名
        appId: 'com.xin.app', //应用程序 ID
        copyright: 'Copyright © 2022', //版权信息
        asar: false,
        directories: { //输出文件夹
          output: "dist_electron",
        },
        extends: null,
        // files: ['**/*'],
        // extraResources: {
        //   // 拷贝dll等静态文件到指定位置,否则打包之后回出现找不大dll的问题
        //   from: 'public/',
        //   to: './'
        // },
        //MacOS 平台配置
        mac: {
          icon: "public/icons/app.icns",
        },
        dmg: {
          contents: [
            {
              type: "link",
              path: "/Applications",
              x: 410,
              y: 150,
            },
            {
              type: "file",
              x: 130,
              y: 150,
            },
          ],
        },
        //Windows 平台配置
        win: {
          icon: "public/icons/app.ico",
          // target: [{
          //   "target": "nsis", //利用nsis制作安装程序
          //   "arch": [
          //     //32 bit + 64 bit的包，但是要注意：这样打包出来的安装包体积比较大，所以建议直接打32的安装包。
          //     // "x64", //64位
          //     "ia32" //32位
          //   ]
          // }],
          target: ['nsis'], //打包的目标类型
        },
        //Linux 平台配置
        linux: {
          icon: "public/icons",
        },
        //安装过程配置
        nsis: {
          oneClick: false, //是否一键安装
          perMachine: true,
          allowToChangeInstallationDirectory: true, //允许修改安装目录
          warningsAsErrors: false,
          allowElevation: false, //允许请求提升，如果为false，则用户必须使用提升的权限重新启动安装程序。
          createDesktopShortcut: true, //创建桌面图标
          createStartMenuShortcut: true, //创建开始菜单图标
        },
        //打包后拷贝静态文件到指定位置
        extraResources: [],
      },
    },
  },
  css: {
    extract: true, //是否使用css分离插件
    sourceMap: false,//开启 CSS source maps
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src/renderer'))

    config.module.rule('images').use('url-loader')
      .tap(options => ({
        name: 'images/[name].[ext]',
        quality: 85,
        limit: 0,
        esModule: false,
      }));

    config.module.rule('svg')
      .uses.clear()
      .end()
      .use('file-loader')
      .loader('file-loader')
      .end()
      .exclude.add(resolve('src/renderer/assets/svg'))
      .end();

    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/renderer/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
      .before("svg-sprite-loader")
      .use("svgo-loader")
      .loader("svgo-loader")
      .options({
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: '(fill|stroke)'
            }
          }
        ]
      })
      .end();

    config.module.rule('js')
      .test(/\.js$/)
      .exclude.add([resolve('node_modules')])
      .end();

    config.plugin('define').tap(args => [{
      ...args,
      "window.isDefine": JSON.stringify(true)
    }]);

    if (process.env.NODE_ENV === 'production') {
      // config.optimization.minimize(true)
      //   .minimizer('terser')
      //   .tap(args => {
      //     let {terserOptions} = args[0];
      //     terserOptions.compress.drop_console = true; //关闭console
      //     terserOptions.compress.drop_debugger = true;
      //     return args
      //   });
      config.optimization.splitChunks({
        cacheGroups: {
          vendors: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10, // 一个模块里的缓存优先级
            reuseExistingChunk: true, // 如果当前代码块包含的模块已经存在，那么不在生成重复的块
          },
          lib: {
            chunks: 'all',
            test: /[\\/]src[\\/]renderer[\\/]lib[\\/]/,
            name: 'lib',
            enforce: true,
            priority: -10, // 一个模块里的缓存优先级
            reuseExistingChunk: true,
          },
        }
      });
    }
  }
}
