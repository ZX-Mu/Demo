/**
 * @Author: zhaoxin
 * @Date: 2022/3/15 18:15
 * @LastEditors: zhaoxin
 * @LastEditTime: 2022-05-10 16:59
 * @Description: desc
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import client from './modules/client'

const store = new Vuex.Store({
  modules: {
    client,
  }
})

export default store;
