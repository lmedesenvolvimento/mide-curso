<template>
  <div class="layout__default">
    <mide-navbar />
    <div class="container layout__content">
      <nuxt />
    </div>
    <mide-footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.layout {
  &__default {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
  }
  &__content {
    flex: 1;
    width: 100%;
  }
}
</style>
