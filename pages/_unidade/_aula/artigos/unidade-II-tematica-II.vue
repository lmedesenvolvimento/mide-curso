<template>
  <mide-aulas-container>
    <div id="unidade-II-tematica-II">
      <h6 class="titulos">
        Objetivos de aprendizagem:
      </h6>
      <li>
        Apresentar os recursos educacionais digitais disponíveis na Plataforma
        Integrada de Recursos Educacionais Digitais do Ministério da Educação.
      </li>
      <li>
        Compreender a sua utilização e suas contribuições nas práticas de sala
        de aula.
      </li>

      <div class="block-bordered">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="dialog-box is-right">
              Nesse módulo, vamos apresentar 5 RED de Língua Portuguesa e 5 de
              Matemática desenvolvidos, com apoio do Ministério da Educação pela
              Universidade Federal do Ceará, no projeto Mídias Digitais na
              Educação (MIDE).
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
              Qual componente curricular você quer conhecer primeiro?
            </div>
          </div>
        </div>
      </div>
      LINGUA PORTUGUESA OU MATEMÁTICA (botões)
      <p>se portugues</p>
      <img src="~assets/images/capa-portugues.png" />

      <div class="title">Língua Portuguesa</div>
      <mide-tabs>
        <b-tab-item label="1º RED">
          <div class="title is-uppercase">de olho na lista</div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Diariamente, escrevemos e lemos listas de produtos que temos
                  que comprar no supermercado, fazemos listas de convidados para
                  um aniversário ou, até mesmo, listamos as atividades
                  programadas para o dia.
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
                  Assim, realizar uma atividade que envolva criar listas é
                  significativo para as crianças, pois tem uma função social não
                  só na infância, já que este uso percorre, inclusive, a vida
                  adulta.
                </div>
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
                <div class="dialog-box">
                  Vamos conhecer um recurso que trabalha com o gênero lista?
                </div>
              </div>
              <div class="column is-3">
                <figure>
                  <img src="~assets/images/marcos-explicacao.png" />
                </figure>
              </div>
            </div>
          </div>
          <div class="columns is-vcentered">
            <div class="column is-6">
              <figure>
                <img
                  src="~assets/images/imagem-quadrada-de-olho-na-lista.png"
                  class="icones"
                />
              </figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">DE OLHO NA LISTA</h6>
                O recurso “De olho na lista” busca trabalhar com a leitura e a
                produção de listas, por meio da apresentação de situações nas
                quais três personagens deverão utilizar listas para realizar
                atividades planejadas para o cotidiano, tais como compras e
                organização de tarefas. Logo, o RED em questão foi pensado para
                proporcionar a compreensão acerca do gênero lista, além de sua
                organização composicional. Intenta-se que o aluno consiga
                relacionar as características do gênero às situações-problema
                que se apresentam ao longo do recurso. O RED apresenta um
                repertório de palavras diversificado, de maneira que os alunos
                em processo de alfabetização e de letramento trabalhem a
                competência leitora e a classificação de palavras com base em
                seu campo semântico.
              </div>
            </div>
          </div>
          <div class="w-100 has-background-light">
            <section>
              <div class="title is-uppercase">atividades listadas na bncc</div>
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
          Imagens para galeria:
          <div class="has-background-grey-dark">
            <img src="~assets/images/unidade-II/tela-de-olho-na-lista-2.png" />
            <img src="~assets/images/unidade-II/tela-de-olho-na-lista-3.png" />
            <img src="~assets/images/unidade-II/tela-de-olho-na-lista-4.png" />
            <img src="~assets/images/unidade-II/tela-de-olho-na-lista-5.png" />
            <img src="~assets/images/unidade-II/tela-de-olho-na-lista-6.png" />
            <img src="~assets/images/unidade-II/tela-de-olho-na-lista-7.png" />
            <img src="~assets/images/unidade-II/tela-de-olho-na-lista-8.png" />
            <img src="~assets/images/unidade-II/tela-de-olho-na-lista-9.png" />
          </div>

          <img src="~assets/images/tela-de-olho-na-lista-1.png" />
          <p>
            Ficou curioso para conhecer esse recurso? Você pode encontrá-lo em:
            https://plataformaintegrada.mec.gov.br/recurso?id=34570&name=De%20olho%20na%20lista
          </p>
        </b-tab-item>

        <b-tab-item label="2º RED">
          <div class="title is-uppercase">qual seu pedido?</div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Você já reparou como nosso país tem uma cultura heterogênea?
                  As músicas, as danças e a culinária se diferenciam bastante de
                  uma região para outra.
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
                  Sim! A culinária de uma região pode mostrar muito sobre os
                  costumes e a realidade sociocultural. Nesse sentido, os
                  cardápios de restaurantes surgem como um texto informativo da
                  vida cotidiana que mostra os hábitos de consumo.
                </div>
              </div>
            </div>
          </div>

          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Pois é! Por isso, queremos mostrar para você um recurso que
                  tem como objetivo trabalhar a leitura e a produção de
                  cardápios.
                </div>
              </div>
              <div class="column is-3">
                <figure>
                  <img src="~assets/images/marcos-explicacao.png" />
                </figure>
              </div>
            </div>
          </div>
          <div class="columns is-vcentered">
            <div class="column is-6">
              <figure>
                <img
                  src="~assets/images/imagem-quadrada-qual-o-seu-pedido.png"
                  class="icones"
                />
              </figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">QUAL O SEU PEDIDO?</h6>
                O recurso "Qual é o seu pedido?" busca trabalhar a leitura e a
                produção de cardápios, por meio da apresentação de situações de
                interação com esse gênero, contextualizadas nas funções de
                cliente, de garçom/garçonete e de chef. Assim, pretende-se
                explorar a compreensão sobre o gênero a partir de sua
                funcionalidade. Este recurso explora elementos de jogos, como
                avatares e recompensas, para que o aluno consiga relacionar as
                características do gênero às situações-problema que se
                apresentam ao longo do recurso. Ainda, busca-se trazer um
                repertório de pratos diversificados, de maneira que os alunos em
                processo de alfabetização e de letramento possam observar
                diferentes ortografias e ampliar seu vocabulário e conhecimento
                de mundo.
              </div>
            </div>
          </div>

          <div class="w-100 has-background-light">
            <section>
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

          Imagens para galeria:
          <div class="has-background-grey-dark">
            <img src="~assets/images/unidade-II/tela-qual-o-seu-pedido-1.png" />
            <img src="~assets/images/unidade-II/tela-qual-o-seu-pedido-2.png" />
            <img src="~assets/images/unidade-II/tela-qual-o-seu-pedido-3.png" />
            <img src="~assets/images/unidade-II/tela-qual-o-seu-pedido-4.png" />
            <img src="~assets/images/unidade-II/tela-qual-o-seu-pedido-5.png" />
            <img src="~assets/images/unidade-II/tela-qual-o-seu-pedido-6.png" />
            <img src="~assets/images/unidade-II/tela-qual-o-seu-pedido-7.png" />
          </div>

          Ficou curioso para conhecer esse recurso? Você pode encontrá-lo em:
          https://plataformaintegrada.mec.gov.br/recurso?id=35899&name=Qual%20%C3%A9%20o%20
        </b-tab-item>

        <b-tab-item label="3º RED">
          <div class="title is-uppercase">fábulas animadas</div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <figure>
                  <img src="~assets/images/carla-explicacao.png" />
                </figure>
              </div>
              <div class="column">
                <div class="dialog-box is-left">
                  Olá! Você gosta de ouvir histórias?
                </div>
              </div>
            </div>
          </div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Sim! Quando eu era criança, meu gênero favorito era a fábula!
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
                  O meu também! Além do mais, gosto muito desse gênero, pois
                  apresenta uma narrativa que constrói um ensinamento ou uma
                  moral. Vamos conhecer como o recurso “Fábulas animadas” pode
                  apoiar as atividades desse gênero?
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-vcentered">
            <div class="column is-6">
              <figure>
                <img
                  src="~assets/images/imagem-quadrada-fabulas.png"
                  class="icones"
                />
              </figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">FÁBULAS ANIMADAS</h6>
                O recurso apresenta duas fábulas, que são “O Galo e a Raposa” e
                “O Ratinho, o Gato e o Galo”. Cada uma destas fábulas contém
                atividades específicas, apresentadas em uma sequência didática
                linear. Durante a leitura da primeira fábula, "O Galo e a
                Raposa", o alunos é convidado a identificar elementos que faltam
                e que fazem parte da construção de sentido do texto, passando
                por reflexões ortográficas. As atividades contêm questões de
                interpretação referentes à estrutura da fábula e suas principais
                características. Em cada atividade, o aluno recebe adesivos que
                serão usados nas ilustrações da segunda fábula. Na segunda
                fábula, "O Ratinho, o Gato e o Galo", o aluno realiza a leitura
                da história, devendo completar as ilustrações com os adesivos
                que foram recebidos na etapa anterior. Ao final, o aluno deverá
                elaborar uma moral de acordo com a fábula lida, de modo que ele
                escreva a sua percepção acerca do desfecho da história.
              </div>
            </div>
          </div>

          Imagens para galeria:
          <div class="has-background-grey-dark">
            <img src="~assets/images/unidade-II/tela-fabulas-1.png" />
            <img src="~assets/images/unidade-II/tela-fabulas-2.png" />
            <img src="~assets/images/unidade-II/tela-fabulas-3.png" />
            <img src="~assets/images/unidade-II/tela-fabulas-4.png" />
            <img src="~assets/images/unidade-II/tela-fabulas-5.png" />
            <img src="~assets/images/unidade-II/tela-fabulas-6.png" />
            <img src="~assets/images/unidade-II/tela-fabulas-7.png" />
            <img src="~assets/images/unidade-II/tela-fabulas-8.png" />
            <img src="~assets/images/unidade-II/tela-fabulas-9.png" />
          </div>
          Ficou curioso para conhecer esse recurso? Você pode encontrá-lo em:
          https://plataformaintegrada.mec.gov.br/recurso?id=34568&name=F%C3%A1bulas%20Animadas
        </b-tab-item>

        <b-tab-item label="4º RED">
          <div class="title is-uppercase">revista digital da criança</div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Já pensou que legal seria se tivéssemos um recurso que
                  trabalhasse os gêneros de uma revista?
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
                  Ah, você ainda não conhece o recurso Revista Digital da
                  Criança?
                </div>
              </div>
            </div>
          </div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Não, quero conhecer! Em qual ano posso utilizar? Mostra para
                  mim?
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
                  Já usei no quarto e no quinto ano. Claro! Vamos lá?
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-vcentered">
            <div class="column is-6">
              <figure>
                <img
                  src="~assets/images/imagem-quadrada-revista-digital.png"
                  class="icones"
                />
              </figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">REVISTA DIGITAL DA CRIANÇA</h6>
                O RED é dividido em seções, simulando o formato de uma revista
                convencional, tendo início com a capa, que é a tela inicial do
                recurso. Em seguida, o RED traz um editorial, com uma breve
                apresentação dos editores, e o sumário, que apresenta todo o seu
                conteúdo. Aborda-se, na seção posterior, um infográfico
                interativo sobre a evolução das brincadeiras infantis. Nele,
                apresentam-se curiosidades (Quando começou? Como se brinca? Você
                sabia?) sobre as brincadeiras: faz de conta, cabra-cega,
                amarelinha e games. Em seguida, o recurso traz um caça-palavras
                sobre as brincadeiras apresentadas no infográfico. Na seção
                seguinte, o recurso apresenta uma entrevista com Maria Clara, de
                nove anos, sobre a produção de conteúdo digital. Após a
                entrevista, tem-se um jogo da memória, no qual o aluno deverá
                relacionar cartas de baralho sobre as perguntas e as respostas
                da entrevista. Por último, o recurso apresenta a seção das
                cartas dos leitores, na qual é possível ter acesso às cartas de
                Laura e Bernardo, duas crianças fictícias que discutem uma
                reportagem sobre o uso de canudos descartáveis. O RED é
                concluído com a produção de uma carta do leitor feita pelo
                aluno, sobre algum tema de interesse tratado na revista que foi
                lida.
              </div>
            </div>
          </div>
          Imagens para galeria:
          <div class="has-background-grey-dark">
            <img src="~assets/images/unidade-II/tela-revista-digital-2.png" />
            <img src="~assets/images/unidade-II/tela-revista-digital-3.png" />
            <img src="~assets/images/unidade-II/tela-revista-digital-4.png" />
            <img src="~assets/images/unidade-II/tela-revista-digital-5.png" />
            <img src="~assets/images/unidade-II/tela-revista-digital-6.png" />
            <img src="~assets/images/unidade-II/tela-revista-digital-7.png" />
            <img src="~assets/images/unidade-II/tela-revista-digital-8.png" />
            <img src="~assets/images/unidade-II/tela-revista-digital-9.png" />
          </div>
          Ficou curioso para conhecer esse recurso? Você pode encontrá-lo em:
          https://plataformaintegrada.mec.gov.br/recurso?id=35900&name=Revista%20Digital%20da%20Crian%C3%A7a
        </b-tab-item>

        <b-tab-item label="5º RED">
          <div class="title is-uppercase">AVENTURA NO MUNDO DOS QUADRINHOS</div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Já conhecemos recursos para trabalhar os gêneros lista,
                  cardápio, fábula e até um recurso que utiliza a estrutura de
                  uma revista e os gêneros que a compõem.
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
                  Vamos conhecer, agora, um recurso que explora um gênero muito
                  conhecido e adorado tanto por crianças como por adultos? Os
                  quadrinhos! Vamos lá?
                </div>
              </div>
            </div>
          </div>

          <div class="columns is-vcentered">
            <div class="column is-6">
              <figure>
                <img
                  src="~assets/images/imagem-quadrada-aventura-no-mundo.png"
                  class="icones"
                />
              </figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">AVENTURA NO MUNDO DOS QUADRINHOS</h6>
                O recurso foi pensado em dois modos de jogo. O primeiro modo é
                intitulado Iniciar Aventura e o segundo o Mundo de Liz. A ideia
                é trabalhar uma narrativa que terá os personagens Croma, Albedo
                e Vernáculo, que vivem no Mundo dos Quadrinhos. Albedo roubou
                algumas páginas do livro o Mundo de Liz. Croma, com a ajuda do
                senhor das palavras, Vernáculo, terá que resgatá-las. O primeiro
                modo possui quatro fases, que são: Primeira fase: se passa na
                Estrada de Requadros, trabalhando-se o fluxo de leitura dos
                quadrinhos. Os alunos terão que organizar os quadrinhos em sua
                ordem correta, conforme a lógica da narrativa. Segunda fase:
                acontece na Ilha dos Balões. Aqui será trabalhada a relação
                entre exemplos de balões de fala e o seu significado, além
                daqueles usados dentro da narrativa para a criação de efeito de
                sentido. Terceira fase: se passa no Bosque de Ícona, nos quais
                serão trabalhados enigmas, por meio dos recursos gráficos
                presentes nos quadrinhos, tais como expressões faciais e linhas
                cinéticas. Quarta fase: se passa na chamada Montanha de Litera,
                onde acontecerá uma batalha final, representada por meio dos
                aspectos interpretativos dos quadrinhos. Estes incluem aspectos
                textuais, gráficos e não verbais dos quadros. Após reunir todas
                as páginas perdidas do livro o Mundo de Liz, o segundo modo de
                jogo é ativado. Nele, serão apresentadas informações adicionais
                sobre o Mundo de Liz, história em quadrinhos selecionada para o
                desenvolvimento deste recurso educacional digital.
              </div>
            </div>
          </div>
          Imagens para galeria:
          <div class="has-background-grey-dark">
            <img src="~assets/images/unidade-II/tela-aventura-no-mundo-2.png" />
            <img src="~assets/images/unidade-II/tela-aventura-no-mundo-3.png" />
            <img src="~assets/images/unidade-II/tela-aventura-no-mundo-4.png" />
            <img src="~assets/images/unidade-II/tela-aventura-no-mundo-5.png" />
            <img src="~assets/images/unidade-II/tela-aventura-no-mundo-6.png" />
            <img src="~assets/images/unidade-II/tela-aventura-no-mundo-7.png" />
            <img src="~assets/images/unidade-II/tela-aventura-no-mundo-8.png" />
            <img src="~assets/images/unidade-II/tela-aventura-no-mundo-9.png" />
          </div>
          Ficou curioso para conhecer esse recurso? Você pode encontrá-lo em:
          https://plataformaintegrada.mec.gov.br/recurso?id=36041&name=Aventura%20no%20Mundo%20dos%20Quadrinhos
        </b-tab-item>
      </mide-tabs>

      <p>se matemática</p>
      <img src="~assets/images/capa-matematica.png" />
      <mide-tabs>
        <b-tab-item label="1º RED"> </b-tab-item>
        <b-tab-item label="2º RED"> </b-tab-item>
        <b-tab-item label="3º RED"> </b-tab-item>
        <b-tab-item label="4º RED"> </b-tab-item>
        <b-tab-item label="5º RED"> </b-tab-item>
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
              Nesta unidade, aprendemos que os Recursos Educacionais Digitais
              são qualquer recurso digital que pode ser utilizado no cenário
              educacional.
            </div>
          </div>
        </div>
      </div>
      <div class="block-bordered">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="dialog-box is-right">
              Vimos que eles podem ser classificados em 5 tipos: animação,
              simulação, tutorial, áudio e jogo.
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
              Também conhecemos alguns RED de Língua Portuguesa e de Matemática
              disponíveis na Plataforma MEC/RED.
            </div>
          </div>
        </div>
      </div>
      <div class="block-bordered">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="dialog-box is-right">
              Que tal conhecermos como planejar aulas usando RED?
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
              Vamos ver isso na próxima Unidade.
            </div>
          </div>
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
          title: 'HABILIDADE (EF12LP01) ',
          text:
            'Ler palavras novas com precisão na decodificação, no caso de palavras de uso frequente, ler globalmente, por memorização.'
        },
        {
          title: 'HABILIDADE (EF12LP04)',
          text:
            'Ler e compreender, em colaboração com os colegas e com a ajuda do professor ou já com certa autonomia, listas [...] do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto do texto e relacionando sua forma de organização à sua finalidade.'
        },
        {
          title: 'HABILIDADE (EF01LP02)',
          text:
            'Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética – usando letras/grafemas que representem fonemas.'
        },
        {
          title: 'HABILIDADE (EF01LP08)',
          text:
            'Relacionar elementos sonoros (sílabas, fonemas, partes de palavras) com sua representação escrita.'
        },
        {
          title: 'HABILIDADE (EF01LP17)',
          text:
            'Planejar e produzir, em colaboração com os colegas e com a ajuda do professor, listas [...] do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto/finalidade do texto.'
        },
        {
          title: 'HABILIDADE (EF01LP20)',
          text:
            'Identificar e reproduzir, em listas [...] a formatação e diagramação específica de cada um desses gêneros.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#unidade-II-tematica-II {
  section {
    margin-bottom: 50px;
    padding: 50px;
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
