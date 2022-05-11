/*
 * @Author: zhaoxin
 * @Date: 2022-03-10 16:29
 * @LastEditors: zhaoxin
 * @LastEditTime: 2022-04-21 17:17
 * @Description: desc
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Button,
  Input,
  Image,
  Dialog,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import SvgIcon from './components/SvgIcon'

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Input);
Vue.use(Image);
Vue.use(Dialog);

//svg-icon配置
Vue.component('svg-icon', SvgIcon);
const requireAll = requireContext => {
  requireContext.keys().map(requireContext)
}
const req = require.context('./assets/svg', false, /\.svg$/)
requireAll(req)

//导航守卫
router.beforeEach((to, from, next) => {
  //进入enter页面之前判断下是否有数据
  if (to.name === 'Enter') {
    if (!store.state.client.userId) {
      next({path: '/'})
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
