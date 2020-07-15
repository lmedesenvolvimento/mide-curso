<template>
  <section class="mide-home-page">
    <div class="container">
      <img src="~assets/images/headcurso.png" class="mide-cabecalho" />
      <div class="mide-cabecalho-text">
        <h3 class="has-text-left">Aproveite os estudos!</h3>
        <h1>Uso de recursos educativos digitais</h1>
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
  </section>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style lang="scss">
.mide-home-page {
  padding: 3.5rem 0px;
  @media (max-width: $tablet) {
    > .container > .columns {
      display: flex;
      flex-direction: column-reverse !important;
    }
  }
  .mide-cabecalho {
    margin-bottom: 20px;
  }
  .mide-cabecalho-text {
    float: right;
    width: 345px;
    h3 {
      font: 18px avenir-next-lt-pro-bold;
      letter-spacing: 1.2px;
      color: #c0315f;
      text-transform: uppercase;
      margin-top: 50px;
    }
    h1 {
      font: 35px avenir-next-lt-pro-bold;
      margin-bottom: 24px;
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
