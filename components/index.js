// Unidades
import UnidadeCard from './unidades/Card.vue'

// Aulas
import AulasNavigation from './aulas/Navigation.vue'

import Footer from './Footer.vue'
import Navbar from './Navbar.vue'
import Quotes from './Quotes.vue'
import Question from './Question.vue'
import Challenge from './Challenge.vue'

const Components = {
  install: (Vue) => {
    Vue.component('mide-footer', Footer)
    Vue.component('mide-navbar', Navbar)
    Vue.component('quotes', Quotes)
    Vue.component('question', Question)
    Vue.component('challenge', Challenge)

    Vue.component('mide-unidade-card', UnidadeCard)

    Vue.component('mide-aulas-navigation', AulasNavigation)
  }
}

export default Components
