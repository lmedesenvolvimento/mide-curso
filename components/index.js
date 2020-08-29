// Plugins
import RadialProgressBar from 'vue-radial-progress'

// Unidades
import UnidadeCard from './unidades/Card.vue'

// Aulas
import AulasContainer from './aulas/Container.vue'
import AulasNavigation from './aulas/Navigation.vue'

import Footer from './Footer.vue'
import Navbar from './Navbar.vue'
import Trophies from './Trophies.vue'
import Tabs from './Tabs.vue'

// Artigos
import Question from './Question.vue'
import Challenge from './Challenge.vue'

// Chat
import ChatDialog from './ChatDialog'
import ModalChatDialog from './ModalChatDialog'

const Components = {
  install: (Vue) => {
    Vue.component('mide-footer', Footer)
    Vue.component('mide-navbar', Navbar)
    Vue.component('mide-trophies', Trophies)
    Vue.component('mide-tabs', Tabs)

    Vue.component('question', Question)
    Vue.component('challenge', Challenge)

    Vue.component('mide-unidade-card', UnidadeCard)

    Vue.component('mide-aulas-container', AulasContainer)
    Vue.component('mide-aulas-navigation', AulasNavigation)

    Vue.component('mide-chat-dialog', ChatDialog)
    Vue.component('mide-modal-chat-dialog', ModalChatDialog)

    // plugins
    Vue.component('mide-radial-progress', RadialProgressBar)
  }
}

export default Components
