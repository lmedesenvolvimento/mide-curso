import Card from './Card.vue'
import Footer from './Footer.vue'
import Navbar from './Navbar'

const Components = {
  install: (Vue) => {
    Vue.component('mide-card', Card)
    Vue.component('mide-footer', Footer)
    Vue.component('mide-navbar', Navbar)
  }
}

export default Components
