import site from './modules/site'
import aulas from './modules/aulas'
import unidades from './modules/unidades'

const getters = {
  getCurrentAulas(state) {
    const unidade = state.unidades.current
    return state.aulas.data.filter((a) => {
      return a.unidadeId === unidade.id
    })
  },
  getCurrentUnidade(state) {
    const unidadeId = state.unidades.current?.id
    return state.unidades.data.find(({ id }) => unidadeId === id)
  },
  getCurrentAula(state) {
    const aulaId = state.aulas.current?.id
    return state.aulas.data.find(({ id }) => aulaId === id)
  }
}

export default {
  modules: {
    site,
    aulas,
    unidades
  },
  getters
}
