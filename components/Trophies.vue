<template>
  <div class="mide-trophies">
    <div class="box">
      <div class="mide-trophies-header">Conquistas</div>
      <div class="mide-trophies-item">semente</div>
      <div class="mide-trophies-item">planta</div>
      <div class="mide-trophies-item">árvore</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.mide-trophies {
  max-width: 25%;
  width: 25%;
  padding: 0.75rem;
  .box {
    padding: $gap;
    border: 1px solid #e8e8e8;
    border-radius: $gap;
  }
  &-header {
    @include avenir-bold;
    letter-spacing: 1.4px;
    color: $secondary;
    text-align: center;
    text-transform: uppercase;
  }
  &-item {
    @include avenir-bold;
    letter-spacing: 1.4px;
    text-align: center;
    text-transform: uppercase;
    color: #545454;
    padding: 2rem 0px;
  }
}
</style>
