<template>
  <div class="column is-one-third-desktop ">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by1"></figure>
      </div>

      <nuxt-link :to="toLesson">
        <p class="card-header-title">{{ unidade.titulo }}</p>
      </nuxt-link>

      <div class="card-content has-text-left">
        <slot name="description" /> {{ unidade.descricao }}
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
      return `/unidades/${this.unidade?.id}/${lesson?.id}`
    }
  }
}
</script>

<style lang="scss">
.card {
  box-shadow: 0px 12px 19px #3c80d116;
  border-radius: 15px;
  opacity: 1;
  width: 266px;
  height: 192px;

  .image {
    background: transparent
      url('https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')
      0% 0% no-repeat padding-box;
    border-radius: 15px 15px 0px 0px;
  }
  .card-header-title {
    font: 12px/15px avenir-next-lt-pro-bold;
    letter-spacing: 1.2px;
    color: #c0315f;
    text-transform: uppercase;
    padding-top: 8%;
    margin-bottom: -8%;
  }
  .card-content {
    font-size: 14px;
  }
}
</style>
