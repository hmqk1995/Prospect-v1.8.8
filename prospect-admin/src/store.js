import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    attribute: null
  },
  mutations: {
    // get json from serve and store it in attribute state
    setAttribute(state, name) {
      $.get(_restUrl + 'prsp/v1/attribute/' + name)
      .then((response) => {
        console.log(response.data)
        state.attribute = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    },
    // clear current attribute info, used when going back to homepage or submitted
    clearAttribute(state) {
      state.attribute = null
    },
    // set the color info of legends
    setColor(state, info) {
      if (!info.isSubItem)
        state.attribute.legend[info.index].v = info.color
      else
        state.attribute.legend[info.parentIndex].z[info.index].v = info.color
    },
    setLegendsOrder(state, value) {
      state.attribute.legend = value
    },
    deleteLegend(state, info) {
      if (!info.isSubItem)
        state.attribute.legend.splice(info.index, 1)
      else
        state.attribute.legend[info.parentIndex].z.splice(info.index, 1)
    }
  },
  actions: {

  }
})
