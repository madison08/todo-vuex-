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
    // Add task
    ADD_TASK(state, task){
      state.tasks.push(task)
    },

    // Delete task
    DELETE_TASK(state, task){
      const index = state.tasks.indexOf(task)
      state.tasks.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
