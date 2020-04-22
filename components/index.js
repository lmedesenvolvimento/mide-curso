import Card from './Card.vue'
import Footer from './Footer.vue'
import Navbar from './Navbar.vue'
import BodyUnit from './BodyUnit.vue'
import NavLateral from './NavLateral.vue'

const Components = {
  install: (Vue) => {
    Vue.component('mide-card', Card)
    Vue.component('mide-footer', Footer)
    Vue.component('mide-navbar', Navbar)
    Vue.component('body-unit', BodyUnit)
    Vue.component('nav-lateral', NavLateral)
  }
}

export default Components
