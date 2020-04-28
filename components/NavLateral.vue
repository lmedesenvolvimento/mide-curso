<template>
  <div class="tile nav-lateral-units is-3 is-mobile">
    <div class="tile is-vertical  is-ancestor box">
      <br />
      <span class="icon is-small">
        <i class="icon-close" aria-hidden="true"></i>
      </span>
      <hr class="dropdown-divider" />

      <div class="dropdown is-active">
        <div class="dropdown-trigger">
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
          <hr class="dropdown-divider" />
        </div>
        <div id="dropdown-menu" class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <p>
              Ensinando em um<br />
              mundo digital
            </p>
            <br />
            <hr class="dropdown-divider" />
            <br />
            <a class="dropdown-item">
              <input class="radio" type="radio" name="answer" />
              <div class="nav-aula">
                AULA 1
                <p>Cibercultura e a educação</p>
              </div>
            </a>
            <hr class="dropdown-divider" />
            <br />
            <a class="dropdown-item">
              <input class="radio" type="radio" name="answer" />
              <div class="nav-aula">
                AULA 2

                <p>Cibercultura e a educação</p>
              </div></a
            >

            <hr class="dropdown-divider" />
            <br />
            <a href="#" class="dropdown-item">
              <input type="radio" class="radio" name="answer" />
              <div class="nav-aula">
                AULA 3
                <p>Cibercultura e a educação</p>
              </div>
            </a>
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
  .icon-close {
    margin-left: 350px;
  }
  .box {
    border: 1px solid #e8e8e8;
    border-radius: 25px;
    opacity: 1;
    width: 258px;

    .menu-label {
      font: Bold 12px/15px Avenir Next LT Pro;
      letter-spacing: 1.2px;
      color: #c0315f;
      opacity: 1;
      width: 150px;
      text-align: left;
    }
    .dropdown-content {
      p {
        text-align: center;
        font: Regular 16px/20px Avenir Next LT Pro;
      }
      .dropdown-item {
        font: Regular 14px/16px Avenir Next LT Pro;
        letter-spacing: 0px;
        flex-wrap: wrap;

        .radio {
          position: absolute;
        }
        .nav-aula {
          margin-left: 40px;
          width: 60px;
          margin-top: -15px;
        }
      }
      .is-rounded {
        float: left;
        margin-right: 20px;
        margin-left: 5px;
      }
    }
  }
}
</style>
