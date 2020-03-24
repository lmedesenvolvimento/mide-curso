<template>
  <div class="mide-footer">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-4">
          <div class="mide-logo">
            <img src="~@/assets/images/logo-mide-branca.png" />
          </div>
          <div class="mide-footer-description">
            Ex ex sunt minim laborum in reprehenderit esse amet deserunt.
            Occaecat non labore ut cupidatat mollit aliqua sint mollit
          </div>
        </div>
        <div class="vl"></div>

        <div class="column">
          <p>Realização</p>
          <div class="logo-ministerio">
            <img src="~@/assets/images/logo-ministerio-branca.png" />
          </div>
        </div>
        <div class="column">
          <p>Produção</p>
          <div class="logo-proativa">
            <img src="~@/assets/images/logo-proativa-branca.png" />
          </div>
        </div>
        <div class="column">
          <div class="logo-lme">
            <img src="~@/assets/images/logo-lme-branca.png" />
          </div>
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
  min-height: 250px;
  color: $white;
  background-color: #a49ea0;
  > .container,
  > .container > .columns {
    height: 100%;

    p {
      font-size: 14px;
      opacity: 0.6;
    }

    .logo-ministerio {
      width: 242px;
      margin-right: 80px;
    }
    .logo-proativa {
      width: 134px;
    }
    .logo-lme {
      padding-top: 10px;
      width: 113px;
    }
  }
  .mide-logo {
    height: 55px;
    width: 105px;
    text-align: left;
  }
  .mide-footer-description {
    margin-top: 20px;
    padding-right: 40px;
    height: 100%;
    font-size: 12px;
    letter-spacing: 0;
    opacity: 1;
  }
  .vl {
    border-left: 2px solid white;
    height: 150px;
    padding-left: 40px;
    margin-right: 30px;
    opacity: 1;
  }
}
</style>
