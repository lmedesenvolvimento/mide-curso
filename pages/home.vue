<template>
  <section class="mide-home-page">
    <div class="container">
      <img src="~assets/images/imagem-inicio.png" class="mide-cabecalho" />
      <div class="mide-cabecalho-text">
        <h3 class="has-text-left">Aproveite os estudos!</h3>
        <h1>Uso de recursos Educacionais Digitais</h1>
        <p>
          Com este curso, você vai poder desenvolver seus conhecimentos acerca
          do uso de Recursos Educacionais Digitais como instrumentos de ensino
          de aprendizagem. Além disso, ele auxiliará no seu planejamento de
          aulas com suporte de Recursos Educacionais Digitais.
        </p>
      </div>
      <hr class="mide-horizontal-line" />
      <br />
      <div class="columns">
        <div class="column">
          <div class="columns is-multiline is-mobile">
            <mide-unidade-card
              v-for="(unidade, index) in $manifest.unidades"
              :key="index"
              :unidade="unidade"
            />
          </div>
        </div>
      </div>
    </div>
    <mide-modal-chat-dialog
      v-model="isWelcomeActive"
      :dialogs="dialogs"
      @dialogs="onDialogsChange"
    />
  </section>
</template>

<script>
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
      this.isWelcomeActive = true
    })
  },
  methods: {
    openWelcomeDialog() {
      this.isWelcomeActive = true
    },
    onDialogsChange(dialogs) {
      this.dialogs = dialogs
    }
  }
}
</script>

<style lang="scss">
.mide-home-page {
  padding: 3.5rem 0px;
  min-height: 100vh;
  @media (max-width: $tablet) {
    > .container > .columns {
      display: flex;
      flex-direction: column-reverse !important;
    }
  }
  .mide-cabecalho {
    margin-bottom: 20px;
    width: 790px;
  }
  .mide-cabecalho-text {
    float: right;
    width: 345px;
    h3 {
      font: 18px avenir-next-lt-pro-bold;
      letter-spacing: 1.2px;
      color: #c0315f;
      text-transform: uppercase;
      margin-top: 40px;
    }
    h1 {
      font: 32px avenir-next-lt-pro-bold;
      margin-bottom: 24px;
    }
    p {
      font-size: 18px;
    }
  }

  .mide-horizontal-line {
    width: 100%;
    opacity: 1;
    color: darkgray;
    height: 2px;
  }
}
</style>
