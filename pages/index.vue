<template>
  <center>
    <div class="content-index">
      <img src="~assets/images/imagem-inicio.png" />

      <h3>Curso de Formação</h3>
      <h1 class="title is-1">Uso de Recursos Educacionais Digitais</h1>
      <p>
        O curso ajudará você a entender como a cultura digital pode mudar
        algumas práticas de sala de aula e a conhecer Recursos Educacionais
        Digitais (RED) de Língua Portuguesa e de Matemática.
      </p>
      <br />
      <button>
        <nuxt-link to="/home">
          <img src="~assets/images/botao-iniciar-curso.png" width="200" />
        </nuxt-link>
      </button>
      <mide-modal-chat-dialog
        v-model="isWelcomeActive"
        :dialogs="dialogs"
        @dialogs="onDialogsChange"
        @close="onDialogsClose"
      />
    </div>
  </center>
</template>

<script>
import Cookies from 'js-cookie'
import { INTRO_DIALOGS } from '@/utils/strings'

export default {
  data() {
    return {
      dialogs: [...INTRO_DIALOGS],
      isWelcomeActive: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      const isShowedWelcomeDialog = !!Cookies.get('WELCOME_DIALOG')
      if (!isShowedWelcomeDialog) {
        this.isWelcomeActive = true
      }
    })
  },
  methods: {
    openWelcomeDialog() {
      this.isWelcomeActive = true
    },
    onDialogsChange(dialogs) {
      this.dialogs = dialogs
    },
    onDialogsClose() {
      Cookies.set('WELCOME_DIALOG', true, { expires: 7 })
    }
  }
}
</script>

<style lang="scss">
.content-index {
  margin-bottom: 100px;

  h3 {
    font: 18px avenir-next-lt-pro-bold;
    letter-spacing: 1.2px;
    color: #c0315f;
    text-transform: uppercase;
    margin-top: 40px;
  }
  button {
    border: none;
    background: none;
  }
}
</style>
