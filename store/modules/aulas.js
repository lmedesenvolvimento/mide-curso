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
  setCurrent({ commit, dispatch }, payload) {
    commit('SET_CURRENT', payload)
    commit('COMPLETE_AULA')
    dispatch('calcPercentage')

    const aulasCompleted = this.getters.getCurrentAulas.every(
      ({ completed }) => completed
    )

    if (aulasCompleted) {
      commit('unidades/COMPLETE_UNIDADE', null, { root: true })
    }
  },
  calcPercentage({ state, commit, rootState }) {
    const aula = state.data.find((a) => a.id === state.current.id)

    const isHasInLog = rootState?.unidades?.logs.some(
      (log) => log.type === 'aula:completed' && log.id === aula.id
    )

    if (isHasInLog) return

    const unidade = rootState?.unidades?.data?.find(
      (u) => u.id === aula.unidadeId
    )

    const percentage = (unidade.percentage || 0) + aula.percentage

    commit(
      'unidades/UPDATE_PERCENTAGE',
      { percentage, unidadeId: aula.unidadeId },
      { root: true }
    )

    commit(
      'unidades/ADD_LOGS',
      { id: aula.id, type: 'aula:completed' },
      { root: true }
    )
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
