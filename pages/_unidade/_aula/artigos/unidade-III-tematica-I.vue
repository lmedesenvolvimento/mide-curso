<template>
  <mide-aulas-container>
    <article id="unidade-III-tematica-I">
      <p>
        Fazer planos é um tarefa essencial em nosso cotidiano. Ele é utilizado
        em várias atividades, como, por exemplo, orientar o que devemos fazer ao
        longo do dia, organizar um roteiro de viagem ou mesmo nos auxiliar a
        planejar festas de aniversário. Portanto, não poderia ser diferente nas
        atividades docentes.
      </p>
      <div class="columns">
        <div class="column is-4">
          <img src="~assets/images/marcos-unidade-1.png" />
        </div>
        <div class="column is-1">
          <img
            src="~assets/images/colchete-explicacao-medio.png"
            class="colchete1"
          />
        </div>

        <div class="column fala-marcos">
          Quando você vai viajar, como organiza e planeja a viagem?
        </div>
      </div>
      <div class="columns">
        <div class="column is-7 fala-carla">
          Geralmente, primeiro decido qual lugar desejo conhecer, os dias que
          quero chegar e partir. Depois, o local que vou me hospedar e o que
          quero conhecer como atração turística. São muitos elementos
          importantes para que a viagem tenha sucesso e possa aproveitar ao
          máximo o momento.
        </div>
        <div class="column is-1">
          <img
            src="~assets/images/colchete-explicacao-medio2.png"
            class="colchete2"
          />
        </div>

        <div class="column is-one-third">
          <img src="~assets/images/carla-explicacao.png" />
        </div>
      </div>
      <div class="columns">
        <div class="column is-4">
          <img src="~assets/images/marcos-unidade-1.png" />
        </div>
        <div class="column is-1">
          <img
            src="~assets/images/colchete-explicacao-medio.png"
            class="colchete1"
          />
        </div>

        <div class="column fala-marcos">
          Planejar uma aula, não é diferente. Dessa forma, é importante
          conhecermos os principais pontos do planejamento de aula.
        </div>
      </div>
    </article>
  </mide-aulas-container>
</template>

<script>
export default {
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title:
            'Ser de diferentes formatos (textos, imagens, vídeos, áudios, páginas web);'
        },
        {
          title:
            'Atender a distintos níveis de público e finalidades (superior, fundamental, primário, técnico, empresarial);'
        },
        {
          title:
            'Ter diferentes tamanhos ou granularidades (conteúdos atômicos independentes, lições, aulas completas, capítulos, livros);'
        },
        {
          title:
            'Ser de diversos tipos (animações, simulações, tutoriais, jogos);'
        },
        {
          title:
            'Rodar em diferentes plataformas (computadores pessoais, tablets, celulares); '
        },
        {
          title:
            'Possuir diferentes licenças e condições de uso (gratuitos, pagos, abertos e adaptáveis, fechados) e;'
        },
        {
          title: 'Abordar diferentes temáticas ou disciplinas.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#unidade-III-tematica-I {
  .imgimprensa {
    position: absolute;
    padding: 0 55px 50px;
  }
  .citacao {
    position: absolute;
    padding: 50px 120px 0;
    font-size: 14px;
  }
  .imgimprensa2 {
    position: absolute;
    margin: -20px 0 0 30px;
  }
  .definicao {
    position: absolute;
    color: #fff;
    padding: 50px;
  }
  .icones {
    float: left;
  }
}
</style>
