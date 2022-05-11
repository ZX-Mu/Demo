# vue-electron-demo

简单搭了一个demo，支持在Web浏览器及Electron中运行vue。

使用Vue 2.x，Vuex 3.x，ElementUI 2.x，Electron 13

可通过docker在服务器上运行demo项目。

### 1. 依赖包下载
`npm install`

### 2. 本地打包运行
#### web
> 运行：`npm start` 或 `npm run serve`
>
> 打包：`npm run build`

#### 桌面(electron)

> 运行：`npm run serve:electron`
>
> 当前环境打包：`npm run build:electron`
>
> Mac环境打包：`npm run build:electron:mac`
>
> Windows 32位环境打包：`npm run build:electron:win32`
>
> Windows 64位环境打包：`npm run build:electron:win64`


### 3. 本地访问
#### web
> http://localhost:8090/#/

#### 桌面(electron)
> 运行后自动启动客户端

### 4.部署
#### web（docker）
> 打包：npm run build
>
> 镜像：docker-build.sh 中为docker编译命令【 注意Mac下 inter和M1 编译命令不同 】


