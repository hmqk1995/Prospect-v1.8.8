import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    attribute: null
  },
  mutations: {
    setAttribute(state, name) {
      $.get(_restUrl + 'prsp/v1/attribute/' + name)
      .then((response) => {
        console.log(response.data)
        state.attribute = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  actions: {

  }
})
