const state = {
  lessonNavIsVisible: false
}

const actions = {
  setLessonNav({ commit }, bool) {
    commit('SET_LESSON_NAV', bool)
  }
}

const mutations = {
  SET_LESSON_NAV(state, bool) {
    state.lessonNavIsVisible = bool
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
