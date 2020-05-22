<template>
  <div class="layout">
    <mide-navbar />
    <div class="layout__content">
      <div class="container">
        <nuxt />
      </div>
    </div>
    <mide-footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.layout {
  &__content {
    width: 100%;
    height: auto;
    min-height: 66vh;
  }
}
</style>
