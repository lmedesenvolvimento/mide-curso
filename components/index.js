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

// Form
import Radio from './Radio.vue'

// Eventos
import Droppable from './Droppable.vue'
import Draggable from './Draggable.vue'

// Jogos
import GamePlayCard from './GamePlayCard.vue'

const Components = {
  install: (Vue) => {
    Vue.component('mide-footer', Footer)
    Vue.component('mide-navbar', Navbar)
    Vue.component('mide-trophies', Trophies)
    Vue.component('mide-tabs', Tabs)

    Vue.component('question', Question)
    Vue.component('challenge', Challenge)

    Vue.component('mide-radio', Radio)

    Vue.component('mide-unidade-card', UnidadeCard)

    Vue.component('mide-aulas-container', AulasContainer)
    Vue.component('mide-aulas-navigation', AulasNavigation)

    Vue.component('mide-chat-dialog', ChatDialog)
    Vue.component('mide-modal-chat-dialog', ModalChatDialog)

    // Events
    Vue.component('mide-draggable', Draggable)
    Vue.component('mide-droppable', Droppable)

    // Jogos
    Vue.component('mide-game-play-card', GamePlayCard)

    // plugins
    Vue.component('mide-radial-progress', RadialProgressBar)
  }
}

export default Components
