<template>
  <section class="mide-home-page section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <div class="tile body-progress is-2 is-mobile">
            <div class="tile is-vertical  is-ancestor box">
              <p class="body-progress-title has-text-centered">Conquistas</p>
              <br />
              <article class="tile is-child">semente</article>
              <article class="tile is-child">planta</article>
              <article class="tile is-child">árvore</article>
            </div>
          </div>
        </div>
        <div class="column is-three-quarters-desktop">
          <div class="columns">
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
  .body-progress {
    float: left;
    position: absolute;
    .body-progress-title {
      font: 14px avenir-next-lt-pro-bold;
      letter-spacing: 1.4px;
      color: #c0315f;
      text-transform: uppercase;
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    .body-progress {
      position: relative;
      left: 32%;
    }
    .body-card {
      margin-top: 8%;
      width: 100%;
      float: 0;
      margin-right: 5%;
    }
  }
}
</style>
