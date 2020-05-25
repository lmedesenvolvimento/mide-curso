export default function({ route, store }) {
  const { params } = route

  if (params?.unidade && params?.aula) {
    store.dispatch('unidades/setCurrent', {
      id: params.unidade
    })

    store.dispatch('aulas/setCurrent', {
      id: params.aula
    })
  }
}
