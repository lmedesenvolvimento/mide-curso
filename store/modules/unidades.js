import S from 'string'
import manifest from '@/manifest.json'

const state = {
  current: null,
  data: manifest.unidades.map((u) => {
    u.id = S(u.id).underscore().s
    u.url = require(`@/assets/${u.url}`)
    u.percentage = 0
    return u
  }),
  logs: []
}

const actions = {
  addProgressByActivity({ state, commit }, { id, type, number }) {
    const isHasInLog = state.logs.some(
      (log) => log.type === type && log.id === id
    )

    if (isHasInLog) return

    const unidade = state.data.find((u) => u.id === state.current.id)
    const percentage = (unidade?.percentage || 0) + number

    commit('UPDATE_PERCENTAGE', { percentage, unidadeId: state.current.id })
    commit('ADD_LOGS', { id, type, number })
  },
  setLogs({ commit }, payload) {
    commit('SET_LOGS', payload)
  },
  setCurrent({ commit }, payload) {
    commit('SET_CURRENT', payload)
  },
  updatePercentage({ commit }, { percentage, unidadeId }) {
    commit('UPDATE_PERCENTAGE', {
      percentage,
      unidadeId: S(unidadeId).underscore().s,
      skipResApi: true
    })
  }
}

const mutations = {
  SET_CURRENT(state, payload) {
    state.current = { ...payload }
  },
  ADD_LOGS(state, payload) {
    state.logs.push({ ...payload, createdAt: new Date() })
  },
  SET_LOGS(state, payload) {
    const logs = JSON.parse(payload)
    if (Array.isArray(logs)) {
      state.logs = [...payload]
    }
  },
  UPDATE_PERCENTAGE(state, { percentage, unidadeId, skipResApi }) {
    const unidadeIndex = state.data.findIndex((u) => u.id === unidadeId)
    state.data[unidadeIndex] = { ...state.data[unidadeIndex], percentage }

    if (skipResApi) {
      return
    }

    try {
      const API = new global.BridgeRestApi()
      API.registrarPorcentagemConclusaoUnidade(unidadeId, percentage)
      API.registrarDadosGenericos('logs', JSON.stringify(state.logs))
    } catch (error) {
      console.log('ERROR registrarPorcentagemConclusaoUnidade', error)
    }
  },
  COMPLETE_UNIDADE() {
    const unidadeIndex = state.data.findIndex(
      (u) => u?.id === state.current?.id
    )
    if (unidadeIndex > 0) {
      state.data[unidadeIndex].completed = true
    }
  }
}

const getters = {
  findEventBy: (state) => (id, type) => {
    return state.logs.find((log) => log.type === type && log.id === id)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
