<template>
  <section class="mide-home-page">
    <div class="container">
      <div class="columns">
        <mide-trophies />
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
}
</style>
