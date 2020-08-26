<template>
  <section id="sobre">
    <h3>Sobre o curso</h3>
    <br />
    <div class="columns">
      <div class="column">
        <div class="text column is-6">
          <h4 class="title is-4">Ementa do curso</h4>
          <p>
            A cultura digital e o mundo contemporâneo. Recursos Educacionais
            Digitais como instrumentos de ensino e aprendizagem. Possibilidades
            do uso de RED de Língua Portuguesa e Matemática nos anos iniciais do
            Ensino Fundamental. Planejamento de aulas com suporte de Recursos
            Educacionais Digitais.
          </p>
        </div>
        <img src="~assets/images/caixa-texto.png" />
      </div>
      <div class="column imagem">
        <img src="~assets/images/imagem-1.png" />
      </div>
    </div>
    <hr />

    <div class="columns">
      <div class="column imagem">
        <img src="~assets/images/imagem-2.png" />
      </div>
      <div class="column">
        <div class="text column is-6">
          <h4 class="title is-4">Objetivos de aprendizagem</h4>

          <ol>
            1.Desenvolver conhecimento sobre o ensino e aprendizagem na cultura
            digital.
          </ol>
          <ol>
            2. Conhecer Recursos Educacionais Digitais (RED) como instrumentos
            de ensinos e aprendizagem.
          </ol>
          <ol>
            3. Planejar aulas com suporte dos RED.
          </ol>
        </div>
        <img src="~assets/images/caixa-texto.png" />
      </div>
    </div>
    <hr />

    <div class="columns">
      <div class="column">
        <div class="text column is-6">
          <h4 class="title is-4">Metodologia</h4>
          <p>
            O curso está voltado para a prática de professores dos anos iniciais
            do ensino fundamental. O conteúdo irá focar na inserção dos Recursos
            Educacionais Digitais no cotidiano escolar, focando os aspectos de
            planejamento e avaliação. O conteúdo será apresentado através de
            aulas web que incluem hipertextos, animações, imagens e vídeos. O
            material do curso poderá ser realizado de modo autoinstrucional (sem
            mediação de um tutor) ou em um ambiente virtual de aprendizagem (com
            mediação de um tutor).
          </p>
          As atividades do curso envolvem:
          <ol>
            1) Reflexões acerca da cultura digital e das contribuições das
            tecnologias digitais RED no ensino.
          </ol>
          <ol>
            2) Exposição em linguagem d3ialógica na forma de textos, animações e
            vídeos.
          </ol>
          <ol>
            3) Planejamento de aulas com suporte de RED.
          </ol>
        </div>
        <img src="~assets/images/caixa-texto.png" />
      </div>
      <div class="column imagem">
        <img src="~assets/images/imagem-3.png" />
      </div>
    </div>
    <hr />

    <div class="columns">
      <div class="column imagem">
        <img src="~assets/images/imagem-4.png" />
      </div>
      <div class="column">
        <div class="text column is-6">
          <h4 class="title is-4">Avaliação</h4>
          <p>
            A avaliação do aluno irá considerar os seguintes instrumentos de
            avaliação:
          </p>
          <ol>
            1) Discussão a distância
          </ol>
          <ol>
            2) Planejamento de uma aula com o uso de tecnologia
          </ol>
        </div>
        <img src="~assets/images/caixa-texto.png" />
      </div>
    </div>

    <center>
      <button>
        <nuxt-link to="/home">
          <img src="~assets/images/botao-retornar-ao-inicio.png" />
        </nuxt-link>
      </button>
    </center>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
#sobre {
  h3 {
    text-align: center;
    font: 18px avenir-next-lt-pro-bold;
    letter-spacing: 1.2px;
    color: #c0315f;
    text-transform: uppercase;
    margin: 50px 0 50px;
  }
  .text {
    position: absolute;
    color: #fff;
    padding: 100px;
    h4 {
      color: #fff;
    }
  }
  .imagem {
    margin-top: 50px;
  }
  button {
    border: none;
    background: none;
    margin: 10px 0 50px;
  }
}
</style>
