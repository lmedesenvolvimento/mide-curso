import manifest from '@/manifest.json'

const state = {
  current: null,
  data: manifest.unidades.map((u) => {
    u.url = require(`@/assets/${u.url}`)
    u.percentage = 0
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
  UPDATE_PERCENTAGE(state, { percentage, unidadeId }) {
    const unidadeIndex = state.data.findIndex((u) => u.id === unidadeId)
    state.data[unidadeIndex] = { ...state.data[unidadeIndex], percentage }
  },
  COMPLETE_UNIDADE() {
    const unidadeIndex = state.data.findIndex(
      (u) => u?.id === state.current?.id
    )
    if (unidadeIndex) {
      state.data[unidadeIndex].completed = true
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
