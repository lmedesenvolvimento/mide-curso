<template>
  <div class="mide-footer">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-4">
          <div class="mide-logo">
            Projeto MIDE
          </div>
          <div class="mide-footer-description">
            Ex ex sunt minim laborum in reprehenderit esse amet deserunt.
            Occaecat non labore ut cupidatat mollit aliqua sint mollit
          </div>
        </div>
        <div class="column">
          Footer
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.mide-footer {
  min-height: 20vh;
  color: $white;
  background-color: #a49ea0;
  > .container,
  > .container > .columns {
    height: 100%;
  }
}
</style>
