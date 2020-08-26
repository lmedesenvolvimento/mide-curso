<template>
  <mide-aulas-container>
    <div id="unidade-I-tematica-II">
      <p class="titulos">
        Objetivos de aprendizagem:
      </p>
      <p>
        - Conhecer as competências relacionadas à cultura digital elencadas pela
        Base Nacional Comum Curricular (BNCC);
      </p>
      <p>
        - Incentivar o contato dos professores com as tecnologias da informação
        e comunicação para se comunicar, acessar e disseminar informações,
        produzir conhecimentos, resolver problemas e exercer protagonismo e
        autoria na vida pessoal e coletiva.
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
          Agora que determinamos algumas <b>características</b> da
          <b>Cibercultura</b>, vamos voltar nosso olhar à educação. Como a
          <b>cultura digital</b> se insere no <b>currículo escolar</b>? E qual o
          papel do <b>professor</b> nessa inserção?<br /><b>Vamos descobrir?</b>
        </div>
      </div>

      <hr />

      <p>
        Diante das características da cibercultura e tendo em vista sua ampla
        presença no cotidiano de alunos e professores, sobretudo pela
        disseminação massiva dos smartphones, fica evidente a necessidade de
        todos compreenderem de que maneira a cultura digital atua em nossas
        vidas e como utilizá-la em nosso favor no processo pedagógico.
      </p>
      <p>
        Sabendo da importância de se compreender como podemos usar a cultura
        digital ao nosso favor, vamos nos apoiar na Base Nacional Comum
        Curricular (BNCC).
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
            tenham assegurados seus direitos de aprendizagem e desenvolvimento,
            em conformidade com o que preceitua o Plano Nacional de Educação
            (PNE).”
          </p>
        </div>
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
          <b>dez competências gerais</b>, que apoiem os direitos de aprendizagem
          e desenvolvimento.
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
              <div class="card-header-title">
                {{ collapse.title }}
              </div>
              <a class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-up' : 'menu-down'"> </b-icon>
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
        Para a BNCC as práticas pedagógicas devem se basear dentro de um
        contexto histórico e cultural.
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
          disponível, atuar com discernimento e responsabilidade nos contextos
          das culturas digitais, aplicar conhecimentos para resolver problemas,
          ter autonomia para tomar decisões, ser proativo para identificar os
          dados de uma situação e buscar soluções, conviver e aprender com as
          diferenças e as diversidades.”
        </i>
      </p>

      <div class="columns">
        <div class="column is-7 fala-carla">
          Na base, duas competências chamam atenção para a cultura digital.
          Vejamos o que diz a competência 4.
        </div>

        <div class="column is-1 colchete2">
          <img src="~assets/images/colchete-explicacao-pequeno.png" />
        </div>

        <div class="column">
          <img src="~assets/images/carla-explicacao.png" />
        </div>
      </div>
      <img src="~assets/images/marcos-explicacao.png" />
      <p>
        Competência 4 “Utilizar diferentes linguagens – verbal (oral ou
        visual-motora, como Libras, e escrita), corporal, visual, sonora e
        digital –, bem como conhecimentos das linguagens artística, matemática e
        científica, para se expressar e partilhar informações, experiências,
        ideias e sentimentos em diferentes contextos, além de produzir sentidos
        que levem ao entendimento mútuo.”
      </p>
      <img src="~assets/images/carla-explicacao.png" />
      <p>
        Percebam que essa competência fala sobre saber se comunicar utilizando
        diferentes linguagem. Como você poderia estimular seus alunos a se
        comunicarem através dessas linguagens?
      </p>
      <img src="~assets/images/marcos-explicacao.png" />
      <p>Agora vamos ver o que diz a competência 5.</p>
      <img src="~assets/images/carla-explicacao.png" />
      <p>
        “Compreender, utilizar e criar tecnologias digitais de informação e
        comunicação de forma crítica, significativa, reflexiva e ética nas
        diversas práticas sociais (incluindo as escolares) para se comunicar,
        acessar e disseminar informações, produzir conhecimentos, resolver
        problemas e exercer protagonismo e autoria na vida pessoal e coletiva.”
      </p>
      <img src="~assets/images/marcos-explicacao.png" />
      <p>
        Essa competência é mais voltada para a cultura digital. Nela,
        compreendemos a importância de utilizar e criar tecnologias digitais de
        forma crítica, significativa e ética. Sabe o que eu pensei? Como podemos
        iniciar uma conversa com os alunos sobre discussões em redes sociais,
        por exemplo?
      </p>

      <div class="fundo">
        <center>
          <h6 class="title is-6">
            Essa reportagem mostra algumas estratégias para se discutir o tema
            com os alunos:
          </h6>
          <img src="~assets/images/imagem-reportagem.png" />
          <p>
            Veja mais em:
            http://fundacaotelefonica.org.br/noticias/internet-segura-tres-estrategias-para-discutir-o-tema-na-escola/
          </p>
        </center>
      </div>
      <img src="~assets/images/icone-contextualizacao.png" class="icones" />
      <h6 class="title is-6">
        Saberes necessários para a construção das competências de inclusão e
        letramento digitais
      </h6>
      <p>
        A construção destas competências encontra-se em três elementos que
        definem, hoje, a inclusão e o letramento digitais: saber <b>LER</b>,
        saber <b>ESCREVER</b> e saber <b>PARTICIPAR</b> na internet (OCHS,
        2019).
      </p>
      <img
        src="~assets/images/marcos-e-carla-leitura-escola.png"
        class="icones"
      />
      <h6>SABER LER</h6>
      <br />
      Saber LER na internet significa realizar a leitura crítica dos textos de
      mídia em qualquer formato, utilizando-se de habilidades no domínio das
      técnicas de busca, organização e produção do conhecimento. Esta análise
      crítica só é possível quando se entende o significado da mídia na
      sociedade e a importância da liberdade de expressão. Também fazem parte da
      leitura competente o entendimento sobre como circulam as informações na
      grande mídia e nos diversos ambientes que compõem a internet, como as
      mídias sociais, bem como a comunicação de conteúdo patrocinado e
      influenciadores.

      <hr />
      <img src="~assets/images/carla-explicacao.png" />
      <p>
        Saber ler na internet envolve saber conferir a qualidade da informação
        encontrada. Você confere as informações que recebe? Em que sites você
        costuma buscar as informações?
      </p>

      <hr />

      <img src="~assets/images/carla-saber-escrever.png" class="icones" />
      <h6>SABER ESCREVER</h6>
      <br />
      Saber ESCREVER na internet significa produzir mídias desenvolvidas de
      forma técnica e criativa, utilizando-se de ferramentas digitais adequadas,
      adaptando-se continuamente a novos recursos para produção e
      compartilhamento de conhecimento. Para tanto, é necessário utilizar
      adequadamente textos, imagens, dados e áudio, entendendo e adequando as
      suas linguagens a cada formato de mídia.

      <hr />

      <img src="~assets/images/marcos-explicacao.png" />
      <p>
        Que conteúdos os alunos de vocês produzem na Internet? Que tal uma roda
        de conversa sobre esse assunto?
      </p>
      <hr />
      <img
        src="~assets/images/marcos-ecarla-saber-participar-na-internet.png"
      />
      <p>
        Saber PARTICIPAR na internet envolve utilizar a internet de forma
        segura, responsável e consciente, em função da interação com outras
        pessoas. Isto envolve habilidades de compreensão dos efeitos da
        participação em redes sociais virtuais, combatendo a desinformação, o
        bullying e o discurso de ódio, bem como os mecanismos de denúncia destes
        eventos. A participação na internet envolve ainda o próprio uso
        equilibrado da rede, entendendo-a como uma das perspectivas da vida
        social e da construção da consciência crítica, não como o centro das
        atividades cotidianas. A preservação da privacidade e a compreensão de
        sua importância fazem parte deste processo participativo.
      </p>
      <hr />
      <img src="~assets/images/carla-explicacao.png" />
      <p>
        Como seus os alunos estão acessando e participando das mídias? Como
        seria interessante saber como eles se percebem e são críticos em relação
        a isso?
      </p>
      <img src="~assets/images/marcos-explicacao.png" />
      <p>
        Tudo isso parece ser bem interessante. Vamos refletir um pouco que
        competência podemos desenvolver para discutir todas essas temáticas com
        nossos alunos?
      </p>
      <hr />
      <img src="~assets/images/icone-contextualizacao.png" class="icones" />
      <h6 class="title is-6">Competências digitais do professor</h6>

      <p>
        Quais as competências necessárias ao professor, no sentido de promover e
        viabilizar a construção destas competências nos alunos? A Comunidade
        Europeia e, de forma cada vez mais consistente, também os pesquisadores
        brasileiros (TAROUCO, 2019), têm utilizado o framework DigCompEdu para
        categorizar as competências digitais dos professores. O instrumento
        organiza-se em seis áreas (REDECKER, 2017):
      </p>

      <ol>
        1. Engajamento Profissional - Utilização das tecnologias digitais pelo
        professor para comunicação, colaboração e seu próprio desenvolvimento
        profissional. O uso da internet e das mídias digitais pelo professor
        interfere em sua própria evolução profissional;
      </ol>
      <ol>
        2. Recursos Digitais - O professor cria, compartilha e fornece recursos
        digitais em rede;
      </ol>
      <ol>
        3.Ensinar e Aprender - Gerenciamento e organização das tecnologias
        digitais no ensino e na aprendizagem;
      </ol>
      <ol>
        4. Avaliação da aprendizagem -Utilização das tecnologias digitais para a
        avaliação da aprendizagem;
      </ol>
      <ol>
        5. Capacitar os alunos - O professor utiliza estratégias de ensino e
        aprendizagem centradas no aluno, buscando a inclusão, personalização e
        engajamento através das mídias digitais;
      </ol>
      <ol>
        Buscar a competência digital dos alunos - O professor cria condições
        para a utilização criativa, crítica e responsável da internet para
        informação, comunicação, produção de conteúdos, bem-estar e resolução de
        problemas.
      </ol>

      <p>
        Claro que o desenvolvimento destas competências possui gradações,
        constituindo um processo contínuo de evolução do professor.
      </p>
      <p>
        O framework prevê uma evolução contínua onde o professor inicia como
        Novato/Explorador, desenvolvendo algumas habilidades digitais básicas.
        Em seguida atinge o estágio de Integrador/Especialista, onde expande,
        estrutura suas práticas pedagógicas on-line. Por fim, na fase mais
        elevada, de Líder/Pioneiro, ele sente-se apto a compartilhar suas
        práticas, além de criticar suas próprias práticas.
      </p>
      <hr />
      <img src="~assets/images/icone-contextualizacao.png" class="icones" />
      <h6 class="title is-6">
        Posturas e atitudes do professor necessárias à promoção das competências
        tecnológicas digitais nos alunos
      </h6>

      <p>
        O professor da Educação Básica precisa assumir determinadas posturas e
        consequentes atitudes pedagógicas que buscam efetivar a construção das
        competências e dos saberes já descritos. Assim, em seu cotidiano
        escolar, o professor deve buscar o uso transversal dos recursos e
        ferramentas da internet, sempre tendo em vista estes elementos
        educativos.
      </p>
      <p>
        O professor deve incentivar uma cultura de aprendizagem contínua que
        coloque as mídias digitais e o conhecimento como elementos profundamente
        relacionados, em evolução contínua. O objetivo é criar uma cultura de
        crítica saudável, interessada e comprometida com a cidadania, dentro de
        uma compreensão ampla das tecnologias digitais como fundamentais nesta
        construção.
      </p>
      <p>
        Incluir memes, vídeos, jogos digitais e situações típicas de redes
        sociais virtuais nas discussões e recursos didáticos dos conteúdos
        abordados é um bom começo. Porém é necessário abrir espaço para a
        discussão e a compreensão do cotidiano dos alunos, onde as tecnologias
        digitais inserem-se em contextos e situações diversas daquelas do
        professor.
      </p>
      <p>
        A aprendizagem significativa deve ser perseguida pelos docentes,
        utilizando em aula, sempre que possível, dispositivos como o smartphone
        e ferramentas de uso cotidiano do aluno, especialmente as redes sociais,
        fóruns de discussão da internet, blogs, jornais e revistas digitais.
      </p>

      <h6 class="title is-6">Cuidados que devem ser tomados</h6>
      <p>
        Cuidado especial deve ser tomado quanto a uma postura responsável e
        crítica do aluno em relação à rede. Neste sentido, o professor deve
        promover atividades que ponham em debate aspectos éticos das relações
        sociais na internet: respeitar opiniões diversas, evitar o cyberbullying
        (e denunciar a sua prática), identificação de situações de
        desinformação, ao mesmo tempo em que estimula experiências de
        engajamento que fortaleçam essas posturas no aluno.
      </p>
      <p>
        Cuidados na exposição do aluno na internet. Os alunos realizam na
        internet muitas de suas atividades cotidianas, inclusive aquelas ligadas
        à aprendizagem escolar. Eles estão, portanto, bastante expostos a
        diversas situações de assédio e uso indevido de dados, dentre outros. É
        importante, então debater com eles as possibilidades e os riscos dessa
        exposição, sobretudo comentários, mensagens de texto e áudio,
        fotografias e vídeos. É importante que saibam: uma vez que algo foi
        publicado, ficará na rede de forma permanente, mesmo que seja
        aparentemente apagado pelo autor. Toda publicação é automaticamente
        replicada e espelhada em múltiplas cópias em servidores mundo afora.
      </p>

      <img src="~assets/images/carla-explicacao.png" />
      <p>
        que tal você verificar se conseguiu compreender algumas das ideias
        apresentadas aqui nessa temática?
      </p>
      <img src="~assets/images/marcos-explicacao.png" />
      <p>
        Respondam as questões acerca da cultura digital apresentada na Base
        Nacional Comum Curricular (BNCC).
      </p>

      <h1 class="title is-2">~~ COMPONENTE COM QUESTÕES ~~</h1>

      <img src="~assets/images/carla-explicacao.png" />
      <p>
        Nesta unidade, conhecemos o conceito de cibercultura, em que contexto
        ele surgiu e como influencia as práticas na sociedade.
      </p>
      <img src="~assets/images/marcos-explicacao.png" />
      <p>
        Também estudamos como a BNCC apresenta a cultura digital nas
        competências gerais.
      </p>
      <img src="~assets/images/carla-explicacao.png" />
      <p>
        Na próxima unidade, vamos apresentar o conceito de Recursos Educacionais
        Digitais e sua classificação.
      </p>
      <hr />
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
#unidade-I-introducao {
  .column {
    font: 15px avenir-next-lt-pro-regular;
    padding-right: 5px;
  }
  // REFACTOR
  // .colchete1 {
  //   margin-top: 40px;
  //   margin-left: -30px;
  // }
  // .fala-marcos {
  //   margin-top: 52px;
  //   margin-left: -60px;
  //   margin-right: 10px;
  // }
  // .fala-carla {
  //   @include clearfix;
  //   position: relative;
  //   text-align: right;
  //   margin-top: 55px;
  // }
  // .colchete2 {
  //   margin-top: 50px;
  // }
  .textobncc {
    background: url('~assets/images/quadro-bncc.png') no-repeat;
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
