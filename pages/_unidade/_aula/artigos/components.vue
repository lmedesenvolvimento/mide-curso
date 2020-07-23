<template>
  <article id="componentes">
    <section class="fala-carla">
      <img src="~assets/images/carla-unidade-1.png" class="carla-1" />
      <img
        src="~assets/images/colchete-explicacao-medio.png"
        class="colchete"
      />
      <div id="paragrafo1">
        Antes de começar a discussão sobre <strong>cibercultura</strong>,
        gostaríamos que você viajasse no tempo até o ano de
        <strong>1960</strong>. <br />
        O que você acha que iria encontrar? Vamos viajar no tempo e
        <strong>relembrar</strong> como era a
        <strong>sociedade nessa época</strong>?
      </div>
    </section>
    <h1>1960</h1>
    <section class="carrossel">
      <br />
      <br />
      <center><div class="card-image-carrossel"></div></center>
      <h2>Mundo da música</h2>

      <center><hr class="carrossel-horizontal-line" /></center>
    </section>

    <p>
      <br />
      <center>
        Todos esses aspectos acima chamamos de cultura.
        <br />
        <b>Podemos definir cultura como:</b>
      </center>
    </p>

    <center>
      <quotes />
    </center>
    <p>
      Assim, a cultura é o entendimento pelo qual fazemos da forma como uma
      sociedade vive e se comporta socialmente. Também é preciso lembrar que a
      cultura é dinâmica. Portanto, ela muda com o tempo, algumas
      características sociais são adquiridas, outras deixada de lado.
    </p>
    <p>
      Alguns aspectos permitem que essas mudanças culturais sejam incorporadas
      na sociedade, como por exemplo, contingências ambientais, consciência
      social e invenção ou desenvolvimento de tecnologias.
    </p>
    <center>
      <question />
    </center>
    <br />
    <hr class="questionhorizontalline" />
    <br />

    <div class="title">Form Button</div>

    <challenge name="challege-1" :options="challenge" correct="capitalismo">
      <template slot="quesiton">
        <div class="question-title">DESAFIO!</div>
        <p>
          Quais dessas palavras você acha que o movimento da contracultura era
          contra?
        </p>
      </template>
    </challenge>

    <div class="title">Customs Form Button</div>

    <challenge name="challege-2" :options="challenge" correct="capitalismo">
      <template slot="quesiton">
        <div class="question-title">DESAFIO!</div>
        <p>
          Tempor dolor nostrud ex et incididunt labore aliqua reprehenderit
          culpa occaecat amet id.
        </p>
      </template>
      <template #option="{option, disabled, active}">
        <b-button
          :type="active ? 'is-danger' : 'is-light'"
          tag="a"
          :disabled="disabled"
          >{{ option.text }}</b-button
        >
      </template>
    </challenge>

    <challenge name="challege-3" :options="challenge" correct="capitalismo">
      <template slot="quesiton">
        <div class="question-title">DESAFIO!</div>
        <p>
          Voluptate minim pariatur elit nisi mollit sunt voluptate
          reprehenderit.
        </p>
      </template>
      <template #option="{option, model, disabled, setModel}">
        <label class="radio">
          <input
            type="radio"
            name="answer"
            :disabled="disabled"
            @input="() => setModel(option)"
          />
          {{ option.text }}
        </label>
      </template>
    </challenge>
  </article>
</template>

<script>
export default {
  layout: 'layout-aulas',
  data() {
    return {
      challenge: [
        { text: 'Comunismo', value: 'comunismo' },
        { text: 'Capitalismo', value: 'capitalismo' },
        { text: 'Luta de Classe', value: 'luta-de-classe' },
        { text: 'Ditadura', value: 'ditadura' }
      ]
    }
  }
}
</script>

<style lang="scss">
article {
  margin-top: 50px;
  section {
    padding-bottom: 120px;
    .carla-1 {
      float: left;
    }
    .colchete {
      // margin-bottom: 20px;
      padding: 12px;
      float: left;
      margin-top: 30px;
    }
    #paragrafo1 {
      font-size: 14px;
      padding-top: 50px;
    }
  }

  h1 {
    font: 53px avenir-next-lt-pro-bold;
    text-align: center;
    color: #4b4b4b;
    opacity: 0.33;
    z-index: 1;
    margin-bottom: -30px;
    letter-spacing: 0px;
  }
  .carrossel {
    background-color: #f3f5f9;

    .card-image-carrossel {
      background: url('~assets/images/imagem-1960-violao.png') 50% 0% no-repeat;
      border-radius: 25px 25px 0px 0px;
      height: 211px;
    }

    h2 {
      text-transform: uppercase;
      text-align: center;
      font: 16px avenir-next-lt-pro-bold;
      padding: 20px;
      letter-spacing: 0px;
      opacity: 1;
    }

    .carrossel-horizontal-line {
      border: 1px solid #c0315f;
      opacity: 1;
      width: 44px;

      margin-top: 0px;
    }
  }
  p {
    text-indent: 50px;
  }
  .questionhorizontalline {
    border: 1px solid #707070;
    opacity: 0.5;
  }
}
</style>
