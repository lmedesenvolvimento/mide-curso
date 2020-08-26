<template>
  <div class="column is-3-desktop is-6-tablet is-12-mobile">
    <div class="card mide-unidades-card">
      <div class="card-image">
        <figure class="image is-3by1"></figure>
      </div>

      <nuxt-link :to="toLesson">
        <p class="card-header-title">{{ unidade.titulo }}</p>
      </nuxt-link>

      <div class="card-content has-text-left">
        <slot name="description" /> {{ unidade.descricao }}
        <div class="mide-progress">
          30%
          <progress class="progress is-info" value="30" max="100"></progress>
        </div>
      </div>
    </div>
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
    background: transparent
      url('https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
      0% 0% no-repeat;
    background-size: cover;
    border-radius: 15px 15px 0px 0px;
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
