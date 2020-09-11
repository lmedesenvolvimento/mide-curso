<template>
  <div class="column is-3-desktop is-6-tablet is-12-mobile">
    <nuxt-link :to="toLesson">
      <div class="card mide-unidades-card">
        <div class="card-image">
          <figure
            class="image is-2by1"
            :style="{
              'background-image': `url(${unidade.url})`
            }"
          ></figure>
        </div>

        <p class="card-header-title">{{ unidade.titulo }}</p>

        <div class="card-content has-text-left">
          <slot name="description" /> {{ unidade.descricao }}
          <div class="mide-progress">
            0%
            <progress class="progress is-info" value="0" max="100"></progress>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    unidade: {
      type: Object,
      default: null
    }
  },
  computed: {
    toLesson() {
      const lesson = this.unidade?.aulas?.find(({ initial }) => initial)
      return `/${this.unidade?.id}/${lesson?.id}/artigos/${lesson?.id}`
    }
  }
}
</script>

<style lang="scss">
.mide-unidades-card {
  box-shadow: 0px 12px 19px #3c80d116;
  border-radius: 15px;
  height: 100%;
  opacity: 1;
  .image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 15px 15px 0px 0px;
    overflow: hidden;
  }
  .card-header-title {
    font: 12px/15px avenir-next-lt-pro-bold;
    letter-spacing: 1.2px;
    color: #c0315f;
    text-transform: uppercase;
    padding: 1.5rem 1.5rem 0px;
    margin-bottom: $gap * -0.5;
  }
  .card-content {
    font-size: 14px;
  }

  .mide-progress {
    margin-top: 16px;
    color: #3153b2;
    font: 12px/15px avenir-next-lt-pro-bold;
    .progress {
      width: 85%;
      float: right;
    }
  }
}
</style>
