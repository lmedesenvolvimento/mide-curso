import manifest from '@/manifest.json'

const state = {
  current: null,
  data: manifest.unidades.map((u) => {
    u.url = require(`@/assets/${u.url}`)
    return u
  })
}

const actions = {
  setCurrent({ commit }, payload) {
    commit('SET_CURRENT', payload)
  }
}

const mutations = {
  SET_CURRENT(state, payload) {
    state.current = { ...payload }
  },
  COMPLETE_UNIDADE() {
    const unidadeIndex = state.data.findIndex((u) => u.id === state.current.id)
    state.data[unidadeIndex].completed = true
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
