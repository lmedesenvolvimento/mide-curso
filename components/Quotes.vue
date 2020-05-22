<template>
  <div class="quotes">
    <div class="quotes-boxlight"></div>

    <div class="quotes-box">
      <div class="quotes-text">
        Todo aquele complexo que inclui o <b>conhecimento</b>, as
        <b>crenças</b>, a <b>arte</b>, a <b>moral</b>, a <b>lei</b>, os costumes
        e todos os outros <b>hábitos</b> e capacidades adquiridos pelo homem
        como membro da sociedade.

        <div class="quotes-author">
          LARAIA, 2006
        </div>
      </div>
    </div>
    <figure class="quotes-image">
      <img src="~assets/images/aspas.png" />
    </figure>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.quotes {
  margin-bottom: 1.5rem;
  .quotes-image {
    margin-left: 80px;
    margin-top: -172px;
    position: absolute;
  }

  .quotes-boxlight {
    width: 625px;
    height: 143px;
    border: 1px solid #e8e8e8;
    border-radius: 25px;
    opacity: 0.35;
    position: absolute;
    margin-left: 120px;
    margin-top: -18px;
  }

  .quotes-box {
    margin-top: 20px;
    background: #f3f5f9 0% 0% no-repeat padding-box;
    border-radius: 13px;
    opacity: 0.52;
    width: 591px;
    height: 111px;
    font-size: 14px;
    position: relative;
    letter-spacing: 0px;
    color: #4b4b4b;
    opacity: 1;
    padding: 15px;

    .quotes-text {
      text-align: left;
      font: Regular 14px/19px Avenir Next LT Pro;
      letter-spacing: 0px;
      color: #4b4b4b;
      margin-left: 30px;
      width: 454px;
      height: 56px;
    }
    .quotes-author {
      text-align: right;
    }
  }
}
</style>
