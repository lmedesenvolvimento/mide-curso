<template>
  <div class="layout">
    <mide-navbar />
    <div class="layout__content">
      <div class="container">
        <mide-aulas-navigation />
        <div class="mide-lesson card">
          <div class="card-image">
            <figure class="mide-lesson-image"></figure>
          </div>
          <div class="header">
            <h3>Unidade 1</h3>
            <h1>Aula 1 - Cibercultura e Educação</h1>

            <p>
              Lorem ip sum lo rem ipsum lore ipsum lorem ipem sum ip sum loremem
              ipsum ipsum lor em ipem sum ipsemum lo rem ipsum ipsum lorem ipsum
              ip sum lorem.
            </p>
          </div>
          <br />
          <div class="card-content">
            <nuxt />
          </div>
        </div>
      </div>
    </div>
    <mide-footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.mide-lesson.card {
  box-shadow: 0px 12px 19px #3c80d116;
  border-radius: 15px;
  opacity: 1;
  width: 859px;
  height: 100%;
  .card-image {
    background: transparent url('~assets/images/bannerunit.png') 0% 0% no-repeat
      padding-box;

    border-radius: 25px 25px 0px 0px;
    .mide-lesson-image {
      margin-top: 5%;
      background: linear-gradient(180deg, #3153b2c7 0%, #192a59 100%);
      border-radius: 25px 25px 0px 0px;
      mix-blend-mode: multiply;
      height: 293px;
    }
  }
  .header {
    text-align: center;
    color: #fff;
    margin-top: -16%;
    position: relative;
    p {
      width: 647px;
      margin-left: 12%;
    }
    h1 {
      font: Bold 28px/37px Segoe UI;
    }
    h3 {
      text-transform: uppercase;
      font: Bold 14px/16px Avenir Next LT Pro;
      letter-spacing: 1.4px;
    }
  }
  p {
    margin-bottom: 1.5rem;
  }
}
</style>
