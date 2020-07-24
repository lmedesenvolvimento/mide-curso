-------<template>
  <div id="aula">
    <div class="mide-lesson card">
      <div class="card-image">
        <figure class="mide-lesson-image"></figure>
        <div class="header">
          <h3>{{ unidade.titulo }}</h3>
          <h1>{{ unidade.descricao }}</h1>
        </div>
      </div>
      <div class="card-content">
        <nuxt-child />
      </div>
    </div>
    <mide-aulas-navigation />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      unidade: 'getCurrentUnidade',
      aula: 'getCurrentAula'
    })
  }
}
</script>

<style lang="scss">
.mide-lesson {
  box-shadow: 0px 12px 19px #3c80d116;
  border-radius: 15px;
  position: absolute;
  opacity: 1;
  width: 800px;
  min-height: 100vh;
  margin: ($gap * 2) 64px;
  .card-image {
    background: transparent url('~assets/images/bannerunit.png') 0% 0% no-repeat
      padding-box;
    border-radius: 25px 25px 0px 0px;
    height: $lesson-card-height;
    .mide-lesson-image {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, #3153b2c7 0%, #192a59 100%);
      border-radius: 25px 25px 0px 0px;
      mix-blend-mode: multiply;
      z-index: 1;
    }
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    height: 100%;
    color: #fff;
    position: relative;
    padding-bottom: 1.5 * $gap;
    z-index: 5;
    h1 {
      margin-top: 8px;
      font: 28px avenir-next-lt-pro-bold;
    }
    h3 {
      text-transform: uppercase;
      font: 18px avenir-next-lt-pro-bold;
      letter-spacing: 1.4px;
    }
  }
  p {
    margin-bottom: 1.5rem;
  }
}
.mide-aulas-navigation {
  float: right;
  width: 260px;
  margin-top: 64px;
}

@media screen and (max-width: $widescreen) {
  #aula {
    padding: 16px;
  }
  .mide-lesson {
    width: 100%;
    margin: 0px auto;
    .header {
      justify-content: center;
      padding-bottom: 0px;
    }
  }
  .mide-aulas-navigation {
    float: none;
    margin-top: 400px;
    width: 100%;
    right: 0;
  }
}
</style>
