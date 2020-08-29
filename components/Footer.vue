<template>
  <div class="mide-footer">
    <div class="container">
      <div class="container is-fluid">
        <div class="columns is-vcentered">
          <div class="column is-4">
            <div class="mide-footer-mide-logo">
              <img src="~@/assets/images/logo-mide-branca.png" />
            </div>
            <div class="mide-footer-description">
              Ex ex sunt minim laborum in reprehenderit esse amet deserunt.
              Occaecat non labore ut cupidatat mollit aliqua sint mollit
            </div>
          </div>
          <div class="mide-footer-vertical-line"></div>

          <div class="column">
            <p>Realização</p>
            <div class="mide-footer-logo-ministerio">
              <img src="~@/assets/images/logo-ministerio-branca.png" />
            </div>
          </div>
          <div class="column">
            <p>Produção</p>
            <div class="mide-footer-logo-proativa">
              <img src="~@/assets/images/logo-proativa-branca.png" />
            </div>
          </div>
          <div class="column">
            <div class="mide-footer-logo-lme">
              <img src="~@/assets/images/logo-lme-branca.png" />
            </div>
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
  height: $footer-height;
  color: $white;
  background-color: #a49ea0;
  > .container > .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  > .container,
  > .container > .columns {
    height: 100%;

    p {
      font-size: 14px;
      opacity: 0.6;
    }

    .mide-footer-logo-ministerio {
      width: 242px;
      margin-right: 80px;
    }
    .mide-footer-logo-proativa {
      width: 134px;
    }
    .mide-footer-logo-lme {
      padding-top: 10px;
      width: 113px;
    }
  }
  .mide-footer-mide-logo {
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
  .mide-footer-vertical-line {
    border-left: 2px solid white;
    height: 150px;
    padding-left: 40px;
    margin-right: 30px;
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .mide-footer {
    height: 100%;
    .mide-footer-vertical-line {
      display: none;
    }
  }
}
</style>
