import createPersistedState from 'vuex-persistedstate'

export default ({ app, store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'vuex',
      storage: window.sessionStorage,
      paths: ['aulas', 'unidades']
    })(store)
  })
}
