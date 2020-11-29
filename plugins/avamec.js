export default ({ store }) => {
  window.onNuxtReady(() => {
    const API = new global.BridgeRestApi()

    window.addEventListener(
      'evRegistraPorcentagemConclusaoUnidade',
      (event) => {
        const { detail } = event
        console.log(event)
        evObtemPorcentagemConclusaoUnidade(detail.data, store)
      }
    )

    window.addEventListener('evObtemPorcentagemConclusaoUnidade', (event) => {
      const { detail } = event
      console.log(event)
      console.log('evObtemPorcentagemConclusaoUnidade', detail)
      evObtemPorcentagemConclusaoUnidade(detail.data, store)
    })

    window.addEventListener('evObtemRegistraDadosGenericos', (event) => {
      const { detail } = event
      console.log(event)
      console.log('evObtemRegistraDadosGenericos', detail)
      evObtemDadosGenericos(detail.data, store)
    })

    window.addEventListener('evObtemDadosGenericos', (event) => {
      const { detail } = event
      console.log(event)
      console.log('evObtemRegistraDadosGenericos', detail)
      evObtemDadosGenericos(detail.data, store)
    })

    API.obterDadosGenericos('logs')

    // Obtendo porcentagem unidades
    store.state.unidades.data.forEach((unidade) => {
      API.obterPorcentagemConclusaoUnidade(unidade.id)
    })
  })
}

function evObtemDadosGenericos(payload, store) {
  console.log(payload)

  if (payload.codigo) {
    return
  }

  store.dispatch('unidades/setLogs', payload)
}

function evObtemPorcentagemConclusaoUnidade(payload, store) {
  console.log(payload)
  store.dispatch('unidades/updatePercentage', {
    percentage: payload?.porcentagem || 0,
    unidadeId: payload.identificadorUnidade
  })
}
