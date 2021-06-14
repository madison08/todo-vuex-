import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    name: 'nom'
  },

  getters: {
    // get all taks
    allTasks: state => state.tasks,
  },

  mutations: {
    ADD_TASK(state, task){
      state.tasks.push(task)
    }
  },
  actions: {
  },
  modules: {
  }
})
