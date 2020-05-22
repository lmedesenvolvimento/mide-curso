<template>
  <div class="challenge">
    <div class="challenge-box">
      <div class="challenge-question">
        <p>DESAFIO!</p>
        Quais dessas palavras você acha que o movimento da contracultura era
        contra?
      </div>
      <div class="challenge-options">
        <button class="button is-white is-r">Capitalismo</button>
        <button class="button is-white">Consumismo</button>
        <button class="button is-white">Luta de Classes</button>
        <button class="button is-white">Ditadura</button>
      </div>
      <button class="button is-rounded ">Verificar</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.challenge {
  margin-bottom: 1.5rem;
  .challenge-box {
    width: 859px;
    height: 250px;
    background: #e4e9f2 0% 0% no-repeat padding-box;
  }
  .challenge-options {
    padding: 15px;

    .is-white {
      width: 133px;
      height: 46px;
      border-radius: 15px;
      margin: 8px;
      text-align: center;
      box-shadow: 5px 5px 15px #3c80d116;
      font: 12px avenir-next-lt-pro-bold;
      letter-spacing: 1px;
      color: #545454;
      opacity: 1;
      text-transform: uppercase;
    }
  }
  .challenge-question {
    padding: 20px;
    text-align: center;
    font-size: 14px;
    letter-spacing: 0px;
    color: #4b4b4b;
    opacity: 1;

    p {
      font: Bold 12px avenir-next-lt-pro-bold;
      letter-spacing: 1px;
      color: #c0315f;
      margin: 5px 0 10px 0;
    }
  }

  .is-rounded {
    width: 128px;
    height: 35px;
    background: #3153b2 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 15px #3c80d116;
    border: 1px solid #3153b2;
    color: white;
    text-transform: uppercase;
    font: Bold 12px avenir-next-lt-pro-bold;
    letter-spacing: 1px;
    margin-top: 5px;
  }
}
</style>
