'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
// eslint-disable-next-line no-void
exports.default = void 0

const _manifest = _interopRequireDefault(require('@/manifest.json'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object)
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object)
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable
      })
    keys.push.apply(keys, symbols)
  }
  return keys
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    // eslint-disable-next-line no-var
    var source = arguments[i] != null ? arguments[i] : {}
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key])
      })
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        )
      })
    }
  }
  return target
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }
  return obj
}

let aulas = []

_manifest.default.unidades.forEach(function(u) {
  aulas = aulas.concat(
    u.aulas.map(function(a) {
      return _objectSpread(
        {
          unidadeId: u.id
        },
        a
      )
    })
  )
})

const state = {
  current: null,
  data: aulas.map(function(a) {
    a.completed = false
    return a
  })
}
const actions = {
  setCurrent: function setCurrent(_ref, payload) {
    const commit = _ref.commit
    commit('SET_CURRENT', payload)
    commit('COMPLETE_AULA')
    const aulasCompleted = this.getters.getCurrentAulas.every(function(_ref2) {
      const completed = _ref2.completed
      return completed
    })

    if (aulasCompleted) {
      commit('unidades/COMPLETE_UNIDADE', null, {
        root: true
      })
    }
  }
}
const mutations = {
  SET_CURRENT: function SET_CURRENT(state, payload) {
    state.current = _objectSpread({}, payload)
  },
  COMPLETE_AULA: function COMPLETE_AULA(state) {
    const aulaIndex = state.data.findIndex(function(a) {
      return a.id === state.current.id
    })
    state.data[aulaIndex].completed = true
  }
}
const _default = {
  namespaced: true,
  state,
  actions,
  mutations
}
exports.default = _default
