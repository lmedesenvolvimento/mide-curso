import manifest from '@/manifest.json'

let aulas = []

manifest.unidades.forEach((u) => {
  aulas = aulas.concat(
    u.aulas.map((a) => ({
      unidadeId: u.id,
      ...a
    }))
  )
})

const state = {
  current: null,
  data: aulas.map((a) => {
    a.completed = false
    return a
  })
}

const actions = {
  setCurrent({ commit, getters }, payload) {
    commit('SET_CURRENT', payload)
    commit('COMPLETE_AULA')

    const aulasCompleted = this.getters.getCurrentAulas.every(
      ({ completed }) => completed
    )

    if (aulasCompleted) {
      commit('unidades/COMPLETE_UNIDADE', null, { root: true })
    }
  }
}

const mutations = {
  SET_CURRENT(state, payload) {
    state.current = { ...payload }
  },
  COMPLETE_AULA(state) {
    const aulaIndex = state.data.findIndex((a) => a.id === state.current.id)
    state.data[aulaIndex].completed = true
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
