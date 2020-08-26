<template>
  <div class="mide-lesson card">
    <div class="card-image">
      <figure class="mide-lesson-image"></figure>
      <div class="header">
        <h3>{{ unidade && unidade.titulo }}</h3>
        <h1>{{ unidade && unidade.descricao }}</h1>
      </div>
    </div>
    <div class="card-content">
      <slot />
      <nuxt-link
        v-if="next"
        :to="nextUrl"
        tag="div"
        class="mide-lesson-next"
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    nextUrl() {
      if (this.unidade && this.next) {
        return `/${this.unidade.id}/${this.next.id}/artigos/${this.next.id}`
      }
      return null
    },
    ...mapGetters({
      unidade: 'getCurrentUnidade',
      aula: 'getCurrentAula',
      next: 'getNextAula'
    })
  }
}
</script>

<style lang="scss">
.mide-lesson {
  justify-self: center;
  box-shadow: 0px 12px 19px #3c80d116;
  border-radius: 15px;
  opacity: 1;
  width: 100%;
  max-width: $lesson-card-width;
  min-height: 100vh;
  margin: ($gap * 2) auto;
  @media (max-width: $widescreen) {
    max-width: $tablet;
  }
  .card-image {
    background: transparent url('~assets/images/bannerunit.png') 0% 0% no-repeat
      padding-box;
    background-size: cover;
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
  .card-content {
    p {
      text-indent: 50px;
      margin-bottom: 1.5rem;
    }
  }
  &-next {
    font-size: 12px;
    font-weight: bold;
    font-family: avenir-next-lt-pro-bold;
    background-image: url('~assets/images/botao-prosseguir.png');
    width: 145px;
    height: 37px;
    margin: $gap auto;
    &:hover,
    &:active {
      cursor: pointer;
    }
  }
}

@media screen and (max-width: $widescreen) {
  .mide-lesson {
    width: 100%;
    margin: 0px auto;
    .header {
      justify-content: center;
      padding-bottom: 0px;
    }
  }
}
</style>
