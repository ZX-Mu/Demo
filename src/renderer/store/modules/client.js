/**
 * @Author: zhaoxin
 * @Date: 2022/3/15 19:15
 * @LastEditors: zhaoxin
 * @LastEditTime: 2022-05-10 14:48
 * @Description: 信息
 */

const client = {
  namespaced: true,
  state: () => ({
    userId: null,
  }),
  getters: {},
  mutations: {
    SET_UCC_ID(state, userId) {
      state.userId = userId
      console.log('client mutations [SET_UCC_ID]: ', userId)
    },
  },
  actions: {}
}

export default client
