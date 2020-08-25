'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
// eslint-disable-next-line no-void
exports.default = void 0
const state = {
  lessonNavIsVisible: false
}
const actions = {
  setLessonNav: function setLessonNav(_ref, bool) {
    const commit = _ref.commit
    commit('SET_LESSON_NAV', bool)
  }
}
const mutations = {
  SET_LESSON_NAV: function SET_LESSON_NAV(state, bool) {
    state.lessonNavIsVisible = bool
  }
}
const _default = {
  namespaced: true,
  state,
  actions,
  mutations
}
exports.default = _default
