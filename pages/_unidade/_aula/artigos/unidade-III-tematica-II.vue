<template>
  <mide-aulas-container>
    <div id="unidade-III-tematica-II">
      <div class="columns">
        <div class="column is-4">
          <img src="~assets/images/unidade-I/marcos-unidade-1.png" />
        </div>

        <div class="column fala-marcos">
          Neste bloco temático, vamos ver exemplos de planos de aula usando um
          RED de Língua Portuguesa e outro de Matemática
        </div>
      </div>
      <div class="columns">
        <div class="column is-7 fala-carla">
          Qual plano você quer conhecer primeiro?
        </div>

        <div class="column is-one-third">
          <img src="~assets/images/carla-explicacao.png" />
        </div>
      </div>
    </div>
  </mide-aulas-container>
</template>

<script>
export default {
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title: '1. CONHECIMENTO',
          text:
            'Valorizar e utilizar os conhecimentos historicamente construídos sobre o mundo físico, social, cultural e digital para entender e explicar a realidade, continuar aprendendo e colaborar para a construção de uma sociedade justa, democrática e inclusiva.'
        },
        {
          title: '2. PENSAMENTO CIENTÍFICO, CRÍTICO E CRIATIVO',
          text:
            'Exercitar a curiosidade intelectual e recorrer à abordagem própria das ciências, incluindo a investigação, a reflexão, a análise crítica, a imaginação e a criatividade, para investigar causas, elaborar e testar hipóteses, formular e resolver problemas e criar soluções (inclusive tecnológicas) com base nos conhecimentos das diferentes áreas.'
        },
        {
          title: '3. REPERTÓRIO CULTURAL',
          text:
            ' Valorizar e fruir as diversas manifestações artísticas e culturais, das locais às mundiais, e também participar de práticas diversificadas da produção artístico-cultural.'
        },
        {
          title: '4. COMUNICAÇÃO',
          text:
            'Utilizar diferentes linguagens – verbal (oral ou visual-motora, como Libras, e escrita), corporal, visual, sonora e digital –, bem como conhecimentos das linguagens artística, matemática e científica, para se expressar e partilhar informações, experiências, ideias e sentimentos em diferentes contextos e produzir sentidos que levem ao entendimento mútuo.'
        },
        {
          title: '5. CULTURA DIGITAL',
          text:
            'Compreender, utilizar e criar tecnologias digitais de informação e comunicação de forma crítica, significativa, reflexiva e ética nas diversas práticas sociais (incluindo as escolares) para se comunicar, acessar e disseminar informações, produzir conhecimentos, resolver problemas e exercer protagonismo e autoria na vida pessoal e coletiva.'
        },
        {
          title: '6. TRABALHO E PROJETO DE VIDA',
          text:
            'Valorizar a diversidade de saberes e vivências culturais e apropriar-se de conhecimentos e experiências que lhe possibilitem entender as relações próprias do mundo do trabalho e fazer escolhas alinhadas ao exercício da cidadania e ao seu projeto de vida, com liberdade, autonomia, consciência crítica e responsabilidade.'
        },
        {
          title: '7. ARGUMENTAÇÃO',
          text:
            'Argumentar com base em fatos, dados e informações confiáveis, para formular, negociar e defender ideias, pontos de vista e decisões comuns que respeitem e promovam os direitos humanos, a consciência socioambiental e o consumo responsável em âmbito local, regional e global, com posicionamento ético em relação ao cuidado de si mesmo, dos outros e do planeta.'
        },
        {
          title: '8. AUTOCONHECIMENTO E AUTOCUIDADO',
          text:
            'Conhecer-se, apreciar-se e cuidar de sua saúde física e emocional, compreendendo-se na diversidade humana e reconhecendo suas emoções e as dos outros, com autocrítica e capacidade para lidar com elas.'
        },
        {
          title: '9. EMPATIA E COOPERAÇÃO',
          text:
            'Exercitar a empatia, o diálogo, a resolução de conflitos e a cooperação, fazendo-se respeitar e promovendo o respeito ao outro e aos direitos humanos, com acolhimento e valorização da diversidade de indivíduos e de grupos sociais, seus saberes, identidades, culturas e potencialidades, sem preconceitos de qualquer natureza.'
        },
        {
          title: '10. RESPONSABILIDADE E CIDADANIA',
          text:
            'Agir pessoal e coletivamente com autonomia, responsabilidade, flexibilidade, resiliência e determinação, tomando decisões com base em princípios éticos, democráticos, inclusivos, sustentáveis e solidários.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#unidade-III-tematica-II {
  .column {
    font: 15px avenir-next-lt-pro-regular;
    padding-right: 5px;
  }
  .colchete1 {
    margin-top: 40px;
    margin-left: -30px;
  }
  .fala-marcos {
    margin-top: 52px;
    margin-left: -60px;
    margin-right: 10px;
  }
  .fala-carla {
    text-align: right;
    margin-top: 55px;
  }
  .colchete2 {
    margin-top: 50px;
  }
  .textobncc {
    // background: url('~assets/images/highlighted-default.png') no-repeat;
    background-size: cover;
    background-position: center center;
    color: #fff;
    text-align: center;
    padding: $gap $gap * 1.5;
    margin: 40px 0 0 60px;
    font-size: 14px;
  }
  .fundo {
    background-color: #e8e8e8;
    width: 105%;
    margin-left: -20px;

    section {
      margin-bottom: 50px;
      padding: 50px;
      h6 {
        text-transform: uppercase;
        text-align: center;
        font: Bold 15px avenir-next-lt-pro-bold;
      }
      .card {
        border-radius: 10px;
        box-shadow: 5px 5px 15px #3c80d116;
        .card-header {
          margin-top: 20px;
        }
        .card-header-title {
          font: Bold 14px avenir-next-lt-pro-bold;
        }
        .card-content {
          text-indent: 50px;
        }
      }
    }
  }
}
</style>
