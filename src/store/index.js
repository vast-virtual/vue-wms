import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import errorLog from './modules/errorLog'
import tagsView from './modules/tagsView'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
    tagsView,
    settings,
    user
  },
  getters
})

export default store
