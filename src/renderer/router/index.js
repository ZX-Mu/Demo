/*
 * @Author: zhaoxin
 * @Date: 2022-03-10 16:07
 * @LastEditors: zhaoxin
 * @LastEditTime: 2022-03-28 10:20
 * @Description: desc
 */
import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Enter from '@/views/Enter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/enter',
      name: 'Enter',
      component: Enter
    }
  ]
})
