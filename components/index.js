import Card from './Card.vue'
import Footer from './Footer.vue'

const Components = {
  install: (Vue) => {
    Vue.component('mide-card', Card)
    Vue.component('mide-footer', Footer)
  }
}

export default Components
