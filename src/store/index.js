import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    status: null,
    error: null
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    removeUser(state) {
      state.user = null
    },
    setStatus(state, payload) {
      state.status = payload
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  actions: {
    signUpAction({
      commit
    }, payload) {
      commit('setStatus', 'loading')

      firebase.auth().signUpAction(payload.email, payload.password)
        .then((response) => {
          alert('success')
          // response will have user
          // user will have uid will be updated to the state
          commit('setUser', response.user.uid)
          commit('setStatus', 'success')
        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    },

    signInAction({
      commit
    }, payload) {
      firebase.auth().signInWithPopup(payload)
        .then((response) => {
          /* eslint-disable no-console */

          console.log(response.user.uid)
          commit('setUser', response.user.uid)
          commit('setStatus', 'success')
        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    },
    signOutAction({
      commit
    }) {
      firebase.auth().signOut()
        .then(() => {
          commit('setUser', null)
          commit('setStatus', 'success')
          commit('setError', null)
        })
        .catch((error) => {
          /* eslint-disable no-console */
          console.log(error)
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    }
  },
  modules: {}
})