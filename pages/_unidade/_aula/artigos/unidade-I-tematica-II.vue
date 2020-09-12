<template>
  <mide-aulas-container description="Temática 2 - A cultura digital na BNCC">
    <div id="unidade-I-tematica-II">
      <article>
        <h6 class="titulos">
          Objetivos de aprendizagem:
        </h6>
        <li>
          Conhecer as competências relacionadas à cultura digital elencadas pela
          Base Nacional Comum Curricular (BNCC);
        </li>
        <li>
          Incentivar o contato dos professores com as tecnologias da informação
          e comunicação para se comunicar, acessar e disseminar informações,
          produzir conhecimentos, resolver problemas e exercer protagonismo e
          autoria na vida pessoal e coletiva.
        </li>

        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column is-3">
              <figure>
                <img src="~assets/images/unidade-I/marcos-unidade-1.png" />
              </figure>
            </div>
            <div class="column">
              <div class="dialog-box is-right">
                Agora que determinamos algumas <b>características</b> da
                <b>Cibercultura</b>, vamos voltar nosso olhar à educação. Como a
                <b>cultura digital</b> se insere no <b>currículo escolar</b>? E
                qual o papel do <b>professor</b> nessa inserção?<br /><b
                  >Vamos descobrir?</b
                >
              </div>
            </div>
          </div>
        </div>
        <p>
          Diante das <strong>características</strong> da
          <strong>cibercultura</strong> e tendo em vista sua ampla presença no
          cotidiano de alunos e professores, sobretudo pela disseminação massiva
          dos smartphones, fica evidente a necessidade de todos compreenderem de
          que maneira a cultura digital atua em nossas vidas e como utilizá-la
          em nosso favor no processo pedagógico.
        </p>
        <p>
          Sabendo da importância de se compreender como podemos usar a cultura
          digital ao nosso favor, vamos nos apoiar na Base Nacional Comum
          Curricular (BNCC).
        </p>
        <p>Lembrando que:</p>

        <div class="highlighted">
          <h3 class="title">Base Nacional Comum Curricular (BNCC)</h3>
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
        <br />

        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="dialog-box is-right">
                A <b>BNCC</b> é um <b>documento plural</b> e estabelece um
                <b>conjunto de aprendizagens</b>
                essenciais e indispensáveis para que todas as escolas possam a
                ter uma referência nacional obrigatória para a elaboração ou
                adequação de seus currículos e propostas pedagógicas.
              </div>
            </div>
            <div class="column is-3">
              <figure>
                <img src="~assets/images/marcos-explicacao.png" />
              </figure>
            </div>
          </div>
        </div>

        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column is-3">
              <figure>
                <img src="~assets/images/carla-explicacao.png" />
              </figure>
            </div>
            <div class="column">
              <div class="dialog-box is-left">
                Portanto, ao longo da <b>Educação Básica</b>, as aprendizagens
                essenciais definidas na <b>BNCC</b> devem concorrer para
                <b>assegurar</b> aos estudantes o desenvolvimento de
                <b>dez competências gerais</b>, que apoiem os direitos de
                aprendizagem e desenvolvimento.
              </div>
            </div>
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
                  <b-icon :icon="props.open ? 'menu-up' : 'menu-down'">
                  </b-icon>
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
          É muito importante que possamos refletir novas formas de se comunicar
          ao invés de apenas pensar em acúmulo de informações. Por isso, podemos
          refletir sobre como a cultura digital nos ajuda a:
        </p>

        <center>
          <img src="~assets/images/unidade-I/infografico-cultura-digital.png" />
        </center>
        <p>
          Nós, professores, precisamos pensar que essas competências nos ajudam
          e, como também, ajudam nossos alunos a:
        </p>
        <p>
          <i>
            “Aprender a aprender, saber lidar com a informação cada vez mais
            disponível, atuar com discernimento e responsabilidade nos contextos
            das culturas digitais, aplicar conhecimentos para resolver
            problemas, ter autonomia para tomar decisões, ser proativo para
            identificar os dados de uma situação e buscar soluções, conviver e
            aprender com as diferenças e as diversidades.”
          </i>
        </p>

        <div>
          <div class="columns is-vcentered">
            <div class="column is-3">
              <figure>
                <img src="~assets/images/carla-explicacao.png" />
              </figure>
            </div>
            <div class="column">
              <div class="dialog-box is-left">
                Na base, duas competências chamam atenção para a cultura
                digital. Vejamos o que diz a <strong>competência 4</strong>.
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="columns is-vcentered">
            <div class="column">
              <div class="dialog-box is-right">
                <strong>Competência 4</strong> <br />
                “Utilizar diferentes linguagens – verbal (oral ou visual-motora,
                como Libras, e escrita), corporal, visual, sonora e digital –,
                bem como conhecimentos das linguagens artística, matemática e
                científica, para se expressar e partilhar informações,
                experiências, ideias e sentimentos em diferentes contextos, além
                de produzir sentidos que levem ao entendimento mútuo.”
              </div>
            </div>
            <div class="column is-3">
              <figure>
                <img src="~assets/images/marcos-explicacao.png" />
              </figure>
            </div>
          </div>
        </div>

        <div>
          <div class="columns is-vcentered">
            <div class="column is-3">
              <figure>
                <img src="~assets/images/carla-explicacao.png" />
              </figure>
            </div>
            <div class="column">
              <div class="dialog-box is-left">
                Percebam que essa <strong>competência</strong> fala sobre saber
                se comunicar utilizando <strong>diferentes linguagem</strong>.
                Como você poderia estimular seus alunos a se comunicarem através
                dessas linguagens?
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="columns is-vcentered">
            <div class="column">
              <div class="dialog-box is-right">
                Agora vamos ver o que diz a <strong>competência 5</strong>.
              </div>
            </div>
            <div class="column is-3">
              <figure>
                <img src="~assets/images/marcos-explicacao.png" />
              </figure>
            </div>
          </div>
        </div>

        <div>
          <div class="columns is-vcentered">
            <div class="column is-3">
              <figure>
                <img src="~assets/images/carla-explicacao.png" />
              </figure>
            </div>
            <div class="column">
              <div class="dialog-box is-left">
                “Compreender, utilizar e criar tecnologias digitais de
                informação e comunicação de forma crítica, significativa,
                reflexiva e ética nas diversas práticas sociais (incluindo as
                escolares) para se comunicar, acessar e disseminar informações,
                produzir conhecimentos, resolver problemas e exercer
                protagonismo e autoria na vida pessoal e coletiva.”
              </div>
            </div>
          </div>
        </div>

        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="dialog-box is-right">
                Essa competência é mais voltada para a
                <strong>cultura digital</strong>. Nela, compreendemos a
                importância de utilizar e criar tecnologias digitais de forma
                <strong>crítica</strong>, <strong>significativa</strong> e
                <strong>ética</strong>. Sabe o que eu pensei? Como podemos
                iniciar uma conversa com os alunos sobre discussões em redes
                sociais, por exemplo?
              </div>
            </div>
            <div class="column is-3">
              <figure>
                <img src="~assets/images/marcos-explicacao.png" />
              </figure>
            </div>
          </div>
        </div>

        <div class="fundo">
          <center>
            <h6 class="title is-6">
              Essa reportagem mostra algumas estratégias para se discutir o tema
              com os alunos:
            </h6>
            <img src="~assets/images/unidade-I/imagem-reportagem.png" />
            <p>
              Veja mais em: <br />
              <a
                href="http://fundacaotelefonica.org.br/noticias/internet-segura-tres-estrategias-para-discutir-o-tema-na-escola/"
                target="_blank"
              >
                http://fundacaotelefonica.org.br/noticias/internet-segura-tres-estrategias-para-discutir-o-tema-na-escola/
              </a>
            </p>
          </center>
        </div>
        <div class="title has-icon heading">
          Saberes necessários para a construção das competências de inclusão e
          letramento digitais
        </div>
        <p>
          A construção destas competências encontra-se em três elementos que
          definem, hoje, a inclusão e o letramento digitais: saber <b>LER</b>,
          saber <b>ESCREVER</b> e saber <b>PARTICIPAR</b> na internet (OCHS,
          2019).
        </p>

        <div class="columns is-vcentered">
          <div class="column is-4">
            <figure>
              <img
                src="~assets/images/unidade-I/marcos-e-carla-leitura-escola.png"
                class="icones"
              />
            </figure>
          </div>
          <div class="column">
            <div class="is-left">
              <h6 class="titulos">SABER LER</h6>
              Saber <strong>LER</strong> na internet significa
              <strong>realizar a leitura crítica</strong> dos textos de mídia em
              qualquer formato, utilizando-se de habilidades no domínio das
              técnicas de busca, organização e produção do conhecimento. Esta
              análise crítica só é possível quando se entende o significado da
              mídia na sociedade e a importância da liberdade de expressão.
              Também fazem parte da leitura competente o entendimento sobre como
              circulam as informações na grande mídia e nos diversos ambientes
              que compõem a internet, como as mídias sociais, bem como a
              comunicação de conteúdo patrocinado e influenciadores.
            </div>
          </div>
        </div>

        <hr />
        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column is-3">
              <figure>
                <img src="~assets/images/carla-explicacao.png" />
              </figure>
            </div>
            <div class="column">
              <div class="dialog-box is-left">
                Saber <strong>ler na internet</strong> envolve saber conferir a
                <strong>qualidade da informação</strong> encontrada. Você
                confere as informações que recebe? Em que sites você costuma
                buscar as informações?
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-vcentered">
          <div class="column is-4">
            <figure>
              <img
                src="~assets/images/unidade-I/carla-saber-escrever.png"
                class="icones"
              />
            </figure>
          </div>
          <div class="column">
            <div class="is-left">
              <h6 class="titulos">SABER ESCREVER</h6>
              Saber <strong>ESCREVER</strong> na internet significa
              <strong>produzir mídias</strong> desenvolvidas
              <strong>de forma técnica e criativa</strong> , utilizando-se de
              ferramentas digitais adequadas, adaptando-se continuamente a novos
              recursos para produção e compartilhamento de conhecimento. Para
              tanto, é necessário necessário utilizar adequadamente textos,
              imagens, dados e áudio, entendendo e adequando as suas linguagens
              a cada formato de mídia.
            </div>
          </div>
        </div>
        <hr />

        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="dialog-box is-right">
                Que <strong>conteúdos</strong> os <strong>alunos</strong> de
                vocês <strong>produzem</strong> na Internet? Que tal uma
                <strong>roda de conversa</strong> sobre esse assunto?
              </div>
            </div>
            <div class="column is-3">
              <figure>
                <img src="~assets/images/marcos-explicacao.png" />
              </figure>
            </div>
          </div>
        </div>
        <hr />
        <div class="columns is-vcentered">
          <div class="column is-4">
            <figure>
              <img
                src="~assets/images/unidade-I/marcos-ecarla-saber-participar-na-internet.png"
              />
            </figure>
          </div>
          <div class="column">
            <div class="is-left">
              <h6 class="titulos">SABER PARTICIPAR NA INTERNET?</h6>
              Saber <strong>PARTICIPAR</strong> na internet envolve
              <strong>utilizar a internet</strong> de forma
              <strong> segura, responsável e consciente</strong>, em função da
              interação com outras pessoas. Isto envolve habilidades de
              compreensão dos efeitos da participação em redes sociais virtuais,
              combatendo a desinformação, o bullying e o discurso de ódio, bem
              como os mecanismos de denúncia destes eventos. A participação na
              internet envolve ainda o próprio uso equilibrado da rede,
              entendendo-a como uma das perspectivas da vida social e da
              construção da consciência crítica, não como o centro das
              atividades cotidianas. A preservação da privacidade e a
              compreensão de sua importância fazem parte deste processo
              participativo.
            </div>
          </div>
        </div>
        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column is-3">
              <figure>
                <img src="~assets/images/carla-explicacao.png" />
              </figure>
            </div>
            <div class="column">
              <div class="dialog-box is-left">
                Como seus os <strong>alunos</strong> estão acessando e
                <strong>participando das mídias</strong> ? Como seria
                interessante saber como eles se percebem e são críticos em
                relação a isso?
              </div>
            </div>
          </div>
        </div>
        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="dialog-box is-right">
                Tudo isso parece ser bem interessante. Vamos refletir um pouco
                que <strong>competência</strong> podemos
                <strong>desenvolver</strong> para
                <strong>discutir</strong> todas essas
                <strong>temáticas</strong> com nossos alunos?
              </div>
            </div>
            <div class="column is-3">
              <figure>
                <img src="~assets/images/marcos-explicacao.png" />
              </figure>
            </div>
          </div>
        </div>

        <div class="title has-icon heading">
          Competências digitais do professor
        </div>

        <p>
          Quais as competências necessárias ao professor, no sentido de promover
          e viabilizar a construção destas competências nos alunos?
        </p>
        <p>
          A Comunidade Europeia e, de forma cada vez mais consistente, também os
          pesquisadores brasileiros (TAROUCO, 2019), têm utilizado o framework
          DigCompEdu para categorizar as competências digitais dos professores.
          O instrumento organiza-se em seis áreas (REDECKER, 2017):
        </p>
        <div class="container is-fluid mb-4">
          <div class="columns is-multiline is-fill-vertical">
            <div class="column is-6 mb-2">
              <div class="card is-grey">
                <div class="card-tag is-amber">1</div>
                <div class="card-header">
                  <div class="card-header-title">Engajamento Profissional</div>
                </div>
                <div class="card-content">
                  Utilização das tecnologias digitais pelo professor para
                  comunicação, colaboração e seu próprio desenvolvimento
                  profissional. O uso da internet e das mídias digitais pelo
                  professor interfere em sua própria evolução profissional;
                </div>
              </div>
            </div>
            <div class="column is-6 mb-2">
              <div class="card is-grey">
                <div class="card-tag is-green">2</div>
                <div class="card-header">
                  <div class="card-header-title">Recursos Digitais</div>
                </div>
                <div class="card-content">
                  O professor cria, compartilha e fornece recursos digitais em
                  rede;
                </div>
              </div>
            </div>
            <div class="column is-6 mb-2">
              <div class="card is-grey">
                <div class="card-tag is-blue">3</div>
                <div class="card-header">
                  <div class="card-header-title">Ensinar e Aprender</div>
                </div>
                <div class="card-content">
                  Gerenciamento e organização das tecnologias digitais no ensino
                  e na aprendizagem;
                </div>
              </div>
            </div>
            <div class="column is-6 mb-2">
              <div class="card is-grey">
                <div class="card-tag is-cyan">4</div>
                <div class="card-header">
                  <div class="card-header-title">Avaliação da aprendizagem</div>
                </div>
                <div class="card-content">
                  Utilização das tecnologias digitais para a avaliação da
                  aprendizagem;
                </div>
              </div>
            </div>
            <div class="column is-6 mb-2">
              <div class="card is-grey">
                <div class="card-tag is-purple">5</div>
                <div class="card-header">
                  <div class="card-header-title">Capacitar os alunos</div>
                </div>
                <div class="card-content">
                  O professor utiliza estratégias de ensino e aprendizagem
                  centradas no aluno, buscando a inclusão, personalização e
                  engajamento através das mídias digitais;
                </div>
              </div>
            </div>
            <div class="column is-6 mb-2">
              <div class="card is-grey">
                <div class="card-tag is-red">6</div>
                <div class="card-header">
                  <div class="card-header-title">
                    Buscar a competência digital dos alunos
                  </div>
                </div>
                <div class="card-content">
                  O professor cria condições para a utilização criativa, crítica
                  e responsável da internet para informação, comunicação,
                  produção de conteúdos, bem-estar e resolução de problemas.
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          Claro que o desenvolvimento destas competências possui gradações,
          constituindo um processo contínuo de evolução do professor.
        </p>
        <p>
          O <strong>framework</strong> prevê uma evolução contínua onde o
          professor inicia como Novato/Explorador, desenvolvendo algumas
          habilidades digitais básicas. Em seguida atinge o estágio de
          Integrador/Especialista, onde expande, estrutura suas práticas
          pedagógicas on-line. Por fim, na fase mais elevada, de Líder/Pioneiro,
          ele sente-se apto a compartilhar suas práticas, além de criticar suas
          próprias práticas.
        </p>
        <hr />
        <div class="title has-icon heading">
          Posturas e atitudes do professor necessárias à promoção das
          competências tecnológicas digitais nos alunos
        </div>

        <p>
          O <strong>professor da Educação Básica</strong> precisa assumir
          determinadas posturas e consequentes atitudes pedagógicas que buscam
          efetivar a construção das competências e dos saberes já descritos.
          Assim, em seu cotidiano escolar, o professor deve buscar o
          <strong>uso transversal dos recursos e ferramentas da internet</strong
          >, sempre tendo em vista estes elementos educativos.
        </p>
        <p>
          O <strong>professor</strong> deve <strong>incentivar</strong> uma
          cultura de <strong>aprendizagem contínua</strong> que coloque as
          mídias digitais e o conhecimento como elementos profundamente
          relacionados, em evolução contínua. O objetivo é criar uma cultura de
          crítica saudável, interessada e comprometida com a cidadania, dentro
          de uma compreensão ampla das tecnologias digitais como fundamentais
          nesta construção.
        </p>
        <p>
          <strong>Incluir memes, vídeos, jogos digitai</strong>s e situações
          típicas de redes sociais virtuais nas discussões e recursos didáticos
          dos conteúdos abordados é um bom começo. Porém é necessário abrir
          espaço para a discussão e a compreensão do cotidiano dos alunos, onde
          as tecnologias digitais inserem-se em contextos e situações diversas
          daquelas do professor.
        </p>
        <p>
          A aprendizagem significativa deve ser perseguida pelos docentes,
          utilizando em aula, sempre que possível, dispositivos como o
          smartphone e ferramentas de uso cotidiano do aluno, especialmente as
          redes sociais, fóruns de discussão da internet, blogs, jornais e
          revistas digitais.
        </p>
        <div class="w-100 has-background-light">
          <center>
            <h6 class="title is-6">Cuidados que devem ser tomados</h6>
          </center>
          <p>
            Cuidado especial deve ser tomado quanto a uma postura responsável e
            crítica do aluno em relação à rede. Neste sentido, o professor deve
            promover atividades que ponham em debate aspectos éticos das
            relações sociais na internet: respeitar opiniões diversas, evitar o
            cyberbullying (e denunciar a sua prática), identificação de
            situações de desinformação, ao mesmo tempo em que estimula
            experiências de engajamento que fortaleçam essas posturas no aluno.
          </p>
          <p>
            Cuidados na exposição do aluno na internet. Os alunos realizam na
            internet muitas de suas atividades cotidianas, inclusive aquelas
            ligadas à aprendizagem escolar. Eles estão, portanto, bastante
            expostos a diversas situações de assédio e uso indevido de dados,
            dentre outros. É importante, então debater com eles as
            possibilidades e os riscos dessa exposição, sobretudo comentários,
            mensagens de texto e áudio, fotografias e vídeos. É importante que
            saibam: uma vez que algo foi publicado, ficará na rede de forma
            permanente, mesmo que seja aparentemente apagado pelo autor. Toda
            publicação é automaticamente replicada e espelhada em múltiplas
            cópias em servidores mundo afora.
          </p>
        </div>
        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column is-3">
              <figure>
                <img src="~assets/images/carla-explicacao.png" />
              </figure>
            </div>
            <div class="column">
              <div class="dialog-box is-left">
                Que tal você verificar se conseguiu compreender algumas das
                ideias apresentadas aqui nessa temática?
              </div>
            </div>
          </div>
        </div>
        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="dialog-box is-right">
                Respondam as questões acerca da cultura digital apresentada na
                Base Nacional Comum Curricular (BNCC).
              </div>
            </div>
            <div class="column is-3">
              <figure>
                <img src="~assets/images/marcos-explicacao.png" />
              </figure>
            </div>
          </div>
        </div>

        <mide-tabs>
          <b-tab-item label="Questão 1">
            <p>
              <challenge
                name="challege-1"
                :options="challenge1"
                correct="3"
                :hide-feedback="true"
              >
                <template slot="question">
                  <center>
                    <div class="question-title">DESAFIO!</div>
                    <p>
                      Segundo a BNCC, as atividades humanas realizam-se nas
                      práticas sociais mediadas por diferentes linguagens:
                      verbal, corporal, visual, sonora e digital. Marque a
                      alternativa que melhor expressa como os professores e
                      professoras podem estimular seus alunos a se comunicarem
                      através dessas linguagens.
                    </p>
                  </center>
                </template>
                <template #option="{option, model, setModel, tries, valid}">
                  <mide-radio
                    name="challege-3"
                    :input="model"
                    :value="option"
                    :valid="
                      () => valid && model.split(',').includes(option.value)
                    "
                    :disabled="
                      () => valid || tries.some((t) => t.includes(option.value))
                    "
                    @input="() => setModel(option)"
                  >
                    {{ option.text }}
                  </mide-radio>
                </template>
              </challenge>
            </p>
          </b-tab-item>

          <b-tab-item label="Questão 2">
            <p>
              <challenge
                name="challege-2"
                :options="challenge2"
                correct="4"
                :hide-feedback="true"
              >
                <template slot="question">
                  <center>
                    <div class="question-title">DESAFIO!</div>
                    <p>
                      Assinale a alternativa que melhor aponta como os
                      professores e professoras podem utilizar as tecnologias
                      digitais de informação e comunicação:
                    </p>
                  </center>
                </template>
                <template #option="{option, model, setModel, tries, valid}">
                  <mide-radio
                    name="challege-2"
                    :input="model"
                    :value="option"
                    :valid="
                      () => valid && model.split(',').includes(option.value)
                    "
                    :disabled="
                      () => valid || tries.some((t) => t.includes(option.value))
                    "
                    @input="() => setModel(option)"
                  >
                    {{ option.text }}
                  </mide-radio>
                </template>
              </challenge>
            </p>
          </b-tab-item>

          <b-tab-item label="Questão 3">
            <p>
              <challenge
                name="challege-33"
                :options="challenge3"
                correct="2,4,6"
                :multiple="true"
                :hide-feedback="true"
              >
                <template slot="question">
                  <div class="question-title">DESAFIO!</div>
                  <p>
                    Marque os três ítens mais importantes para incentivar a
                    cultura digital na escola
                  </p>
                </template>
                <template #option="{option, model, setModel, tries, valid}">
                  <mide-radio
                    :input="model"
                    :value="option"
                    :valid="
                      () => valid && model.split(',').includes(option.value)
                    "
                    :disabled="
                      () => valid || tries.some((t) => t.includes(option.value))
                    "
                    @input="() => setModel(option)"
                  >
                    {{ option.text }}
                  </mide-radio>
                </template>
              </challenge>
            </p>
          </b-tab-item>
        </mide-tabs>

        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column is-3">
              <figure>
                <img src="~assets/images/carla-explicacao.png" />
              </figure>
            </div>
            <div class="column">
              <div class="dialog-box is-left">
                Nesta unidade, conhecemos o conceito de cibercultura, em que
                contexto ele surgiu e como influencia as práticas na sociedade.
              </div>
            </div>
          </div>
        </div>

        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column">
              <div class="dialog-box is-right">
                Também estudamos como a BNCC apresenta a cultura digital nas
                competências gerais.
              </div>
            </div>
            <div class="column is-3">
              <figure>
                <img src="~assets/images/marcos-explicacao.png" />
              </figure>
            </div>
          </div>
        </div>

        <div class="block-bordered">
          <div class="columns is-vcentered">
            <div class="column is-3">
              <figure>
                <img src="~assets/images/carla-explicacao.png" />
              </figure>
            </div>
            <div class="column">
              <div class="dialog-box is-left">
                Na próxima unidade, vamos apresentar o conceito de Recursos
                Educacionais Digitais e sua classificação.
              </div>
            </div>
          </div>
        </div>
      </article>
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
      ],
      challenge1: [
        {
          text:
            'Ensinando o uso dessas linguagens nos aspectos gramaticais da Língua Portuguesa. Assim, os alunos poderão se comunicar corretamente e serem melhor compreendidos.',
          value: '1'
        },
        {
          text:
            'Mostrando a necessidade de escutar atentamente as explicações orais sobre os conteúdos escolares dadas pelos professores. Assim, os alunos poderão ter melhor desempenho nas avaliações.',
          value: '2'
        },
        {
          text:
            'Estimulando o uso dessas diferentes linguagens e mídias digitais. Assim, os alunos poderão compartilhar informações, experiências em diferentes contextos e produzir sentidos que levem ao diálogo, à resolução de conflitos e à cooperação.',
          value: '3'
        },
        {
          text:
            'Orientando a produção de textos escritos e a exercitação dos conteúdos escolares. Assim, os alunos conseguirão memorizar as  informações apresentadas na escola.',
          value: '4'
        }
      ],
      challenge2: [
        {
          text:
            'Orientando os alunos a não lerem toda e qualquer informação que receberem nas diversas redes sociais e mídias digitais. O importante é priorizar os livros didáticos e conteúdos escolares.',
          value: '1'
        },
        {
          text:
            'Explicando que as tecnologias digitais da informação e comunicação trazem possibilidades de reflexões, mas o livro didático é a fonte primária de informação. O que sai nas demais mídias deve servir apenas para lazer ou distração.',
          value: '2'
        },
        {
          text:
            'Orientando os alunos a não desenvolverem projetos autorais e coletivos e não possuírem perfis em redes sociais. O importante é  não perder o foco dos estudos escolares. ',
          value: '3'
        },
        {
          text:
            'Utilizando as tecnologias de forma crítica, significativa, reflexiva e ética nas diversas práticas sociais (incluindo as escolares). É importante a comunicação por meio das diferentes linguagens e mídias, produzir conhecimentos, resolver problemas e desenvolver projetos autorais e coletivos.',
          value: '4'
        }
      ],
      challenge3: [
        {
          text: 'Uma biblioteca com muitos livros didáticos impressos.',
          value: '1'
        },
        {
          text: 'Laboratório de informática ou robótica educacional.',
          value: '2'
        },
        {
          text: 'Laboratórios de ciências bem equipados;',
          value: '3'
        },
        {
          text: 'Tablets e computadores na sala de aula.',
          value: '4'
        },
        {
          text: 'Salas de aula com quadro para escrita.',
          value: '5'
        },
        {
          text: 'Conexão Wireless na escola.',
          value: '6'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#unidade-I-tematica-II {
  margin-top: 50px;
  .column {
    font: 15px avenir-next-lt-pro-regular;
    padding-right: 5px;
  }
  h6 {
    color: #c0315f;
  }
  .titulos {
    text-transform: uppercase;
    font: Bold 16px avenir-next-lt-pro-bold;
    padding: 3px 0 20px 50px;
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
  .titulos {
    text-transform: uppercase;
    font: Bold 16px avenir-next-lt-pro-bold;
    padding: 3px 0 20px 50px;
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
