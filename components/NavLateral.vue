<template>
  <div class="tile nav-lateral-units is-3 is-mobile">
    <div class="tile is-vertical  is-ancestor box">
      <br />

      <div class="dropdown is-active">
        <div class="dropdown-trigger">
          <span class="icon is-small">
            <i class="icon-close" aria-hidden="true"></i>
          </span>
          <hr class="dropdown-divider" />
          <button
            class="button"
            aria-haspopup="false"
            aria-controls="dropdown-menu"
          >
            <p class="menu-label">
              UNIDADE 1
            </p>
            <span class="icon is-small">
              <i class="icon-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div id="dropdown-menu" class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <p>Ensinando em um mundo digital</p>
            <hr class="dropdown-divider" />
            <a href="#" class="dropdown-item is-active">
              AULA 1
            </a>
            Cibercultura e a educação
            <hr class="dropdown-divider" />
            <a class="dropdown-item">
              AULA 2
            </a>
            Cibercultura e a educação
            <hr class="dropdown-divider" />
            <a href="#" class="dropdown-item">
              AULA 3
            </a>
            Cibercultura e a educação
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
.nav-lateral-units {
  left: 950px;
  height: 632px;
  position: absolute;

  .box {
    border: 1px solid #e8e8e8;
    border-radius: 25px;
    opacity: 1;
  }
  .menu-label {
    font: Bold 12px/15px Avenir Next LT Pro;
    letter-spacing: 1.2px;
    color: #c0315f;
    opacity: 1;
  }
  p {
    text-align: center;
    font: Regular 16px/20px Avenir Next LT Pro;
  }
  .dropdown-item {
    font: 12px/15px Avenir Next LT Pro;
    letter-spacing: 1.2px;
  }
}
</style>
