<template>
  <mide-aulas-container>
    <div class="columns">
      <div class="column is-4">
        <img src="~assets/images/marcos-celular.png" />
      </div>
      <div class="column is-1">
        <img
          src="~assets/images/colchete-explicacao-medio.png"
          class="colchete1"
        />
      </div>
      <div class="column fala-marcos">
        Agora que determinamos algumas <b>características</b> da
        <b>Cibercultura</b>, vamos voltar nosso olhar à educação. Como a
        <b>cultura digital</b> se insere no <b>currículo escolar</b>? E qual o
        papel do <b>professor</b> nessa inserção?<br /><b>Vamos descobrir?</b>
      </div>
    </div>

    <hr />

    <p>
      Diante das características da cibercultura e tendo em vista sua ampla
      presença no cotidiano de alunos e professores, sobretudo pela disseminação
      massiva dos smartphones, fica evidente a necessidade de todos
      compreenderem de que maneira a cultura digital atua em nossas vidas e como
      utilizá-la em nosso favor no processo pedagógico.
    </p>
    <p>
      Sabendo da importância de se compreender como podemos usar a cultura
      digital ao nosso favor, vamos nos apoiar na Base Nacional Comum Curricular
      (BNCC).
    </p>
    <p>Lembrando que:</p>
    <center>
      <div class="textobncc">
        <p><b>Base Nacional Comum Curricular (BNCC)</b></p>
        <p>
          “A Base Nacional Comum Curricular (BNCC) é um documento de caráter
          normativo que define o conjunto orgânico e progressivo de
          aprendizagens essenciais que todos os alunos devem desenvolver ao
          longo das etapas e modalidades da Educação Básica, de modo a que
          tenham assegurados seus direitos de aprendizagem e desenvolvimento, em
          conformidade com o que preceitua o Plano Nacional de Educação (PNE).”
        </p>
      </div>
      <img src="~assets/images/quadro-bncc.png" class="quadrobncc" />
    </center>
    <br />

    <div class="columns">
      <div class="column is-one-third">
        <img src="~assets/images/marcos-explicacao.png" />
      </div>
      <div class="column is-1">
        <img
          src="~assets/images/colchete-explicacao-medio.png"
          class="colchete1 "
        />
      </div>

      <div class="column fala-marcos">
        A <b>BNCC</b> é um <b>documento plural</b> e estabelece um
        <b>conjunto de aprendizagens</b>
        essenciais e indispensáveis para que todas as escolas possam a ter uma
        referência nacional obrigatória para a elaboração ou adequação de seus
        currículos e propostas pedagógicas.
      </div>
    </div>

    <div class="columns">
      <div class="column is-7 fala-carla">
        Portanto, ao longo da <b>Educação Básica</b>, as aprendizagens
        essenciais definidas na <b>BNCC</b> devem concorrer para
        <b>assegurar</b> aos estudantes o desenvolvimento de
        <b>dez competências gerais</b>, que apoiem os direitos de aprendizagem e
        desenvolvimento.
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

    <div class="fundo">
      <section>
        <h6 class="title is-6">CONHEÇA AQUI AS 10 COMPETÊNCIAS GERAIS:</h6>

        <b-collapse
          v-for="(collapse, index) of collapses"
          :key="index"
          class="card"
          animation="slide"
          :open="isOpen == index"
          @open="isOpen = index"
        >
          <div
            slot="trigger"
            slot-scope="props"
            class="card-header"
            role="button"
          >
            <p class="card-header-title">
              {{ collapse.title }}
            </p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              {{ collapse.text }}
            </div>
          </div>
        </b-collapse>
      </section>
    </div>

    <p>
      Para a BNCC as práticas pedagógicas devem se basear dentro de um contexto
      histórico e cultural.
    </p>

    <p>
      É muito importante que possamos refletir novas formas de se comunicar ao
      invés de apenas pensar em acúmulo de informações. Por isso, podemos
      refletir sobre como a cultura digital nos ajuda a:
    </p>

    <center>
      <img src="~assets/images/infografico-cultura-digital.png" />
    </center>
    <p>
      Nós, professores, precisamos pensar que essas competências nos ajudam e,
      como também, ajudam nossos alunos a:
    </p>
    <p>
      <i>
        “Aprender a aprender, saber lidar com a informação cada vez mais
        disponível, atuar com discernimento e responsabilidade nos contextos das
        culturas digitais, aplicar conhecimentos para resolver problemas, ter
        autonomia para tomar decisões, ser proativo para identificar os dados de
        uma situação e buscar soluções, conviver e aprender com as diferenças e
        as diversidades.”
      </i>
    </p>
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
p {
  text-indent: 50px;
}
.textobncc {
  position: absolute;
  color: #fff;
  max-width: 630px;
  text-align: center;
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
</style>
