import aulas from './modules/aulas'
import unidades from './modules/unidades'

const getters = {
  getCurrentAulas(state) {
    const unidade = state.unidades.current
    return state.aulas.data.filter((a) => {
      return a.unidadeId === unidade.id
    })
  }
}

export default {
  modules: {
    aulas,
    unidades
  },
  getters
}
