import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    provienceData: {}
  },
  getters: {
    getprovienceData: (state) => {
      return state.provienceData
    }
  },
  mutations: {
    clearprovienceData(state) {
      state.provienceData = {}
    },
    pushprovienceData(state, payload: object) {
      state.provienceData = payload
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage: window.sessionStorage,
      // 存储的 key 的key值
      key: 'store'
      // render(state: any) {
      //   // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
      //   return { ...state }
      // }
    })
  ]
})
