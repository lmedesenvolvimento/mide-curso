import createPersistedState from 'vuex-persistedstate'

export default ({ app, store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'vuex',
      paths: ['aulas']
    })(store)
  })
}
