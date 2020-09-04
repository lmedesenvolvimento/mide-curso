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

      <div class="block-bordered">
        <div class="columns is-vcentered">
          <div class="column is-3">
            <figure>
              <img src="~assets/images/carla-explicacao.png" />
            </figure>
          </div>
          <div class="column">
            <div class="dialog-box is-left">
              Você gostou de conhecer esses recursos para serem explorados em
              suas aulas de Língua Portuguesa?
            </div>
          </div>
        </div>
      </div>
      <div class="block-bordered">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="dialog-box is-right">
              Você pode me ajudar em um desafio de relacionar um objetivo
              descrito com o recurso visto nesta temática?
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
              Veja as cartas e relacione um objetivo ao recurso
            </div>
          </div>
        </div>
      </div>
      <h2 class="title is-2">~~COMPONENTE DE CARTAS~~</h2>
      <p>se matemática</p>
      <img src="~assets/images/capa-matematica.png" />
      <mide-tabs>
        <b-tab-item label="1º RED">
          <div class="title is-uppercase">Meu Álbum Geométrico</div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Em algum período da nossa infância, fizemos uso ou vivenciamos
                  a utilização de um álbum de figurinhas. O processo de
                  colecionar figurinhas relacionadas a temáticas de interesse da
                  própria criança fazia com que ela desenvolvesse a persistência
                  e a motivação na busca por alcançar o objetivo de completar o
                  álbum.
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
                  Assim, contar com a utilização de um álbum para realizar
                  atividades que associam conceitos matemáticos relacionados ao
                  agrupamento e ao desagrupamento de elementos, juntamente com o
                  estabelecimento de critérios para classificar e seriar uma
                  atividade é bastante significativo para as crianças, pois
                  torna-se possível conciliar a motivação de complementar o
                  álbum com a compreensão de conceitos matemáticos.
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
                  Quer saber mais sobre sobre como conciliar a motivação do
                  preenchimento de um álbum com os conceitos matemáticos? Então,
                  vem com a gente conhecer o recurso “Meu Álbum Geométrico”!
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
              <figure></figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">MEU ALBUM GEOMÉTRICO</h6>
                O recurso “Meu Álbum Geométrico” foi desenvolvido para ser
                utilizado no 1º ano do Ensino Fundamental, visando abordar
                aspectos relacionados ao conceito do número. Usando a metáfora
                de um álbum de figurinhas, as atividades planejadas neste
                recurso tem como objetivo tratar agrupamento e desagrupamento de
                elementos, comparação de quantidades, além da determinação de
                critérios para classificar e seriar. A ideia é que ao utilizar o
                recurso, os alunos identifiquem as características das formas
                geométricas bidimensionais e tridimensionais, associando as
                figuras espaciais às suas planificações e vice-versa.
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
                  <div class="card-header-title"></div>
                  <a class="card-header-icon">
                    <b-icon :icon="props.open ? 'menu-up' : 'menu-down'">
                    </b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content"></div>
                </div>
              </b-collapse>
            </section>
          </div>
          Galeria:
          <div class="has-background-grey-dark">
            imagens aqui
          </div>

          <p>
            Ficou curioso para conhecer esse recurso? Você pode encontrá-lo em:
            https://plataformaintegrada.mec.gov.br/recurso?id=36735&name=Meu%20%C3%81lbum%20Geom%C3%A9trico
          </p>
        </b-tab-item>
        <b-tab-item label="2º RED">
          <div class="title is-uppercase">Brincando com as formas</div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  A geometria está presente em nosso cotidiano nas mais diversas
                  formas. A sua compreensão auxilia a criança a desenvolver o
                  pensamento geométrico e, com ele, a capacidade de abstração,
                  que é importante para que ela observe quão próxima é a sua
                  relação com o mundo em que vive.
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
                  Esse pensamento geométrico é capaz de auxiliar o indivíduo a
                  compreender, descrever e representar, de forma organizada, o
                  mundo em que vive.
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
                  Quer saber mais sobre como desenvolver o pensamento geométrico
                  com o uso de um recurso digital? Então, vem com a gente
                  conhecer o recurso “Brincando com as Formas”!
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
              <figure></figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">BRINCANDO COM AS FORMAS</h6>
                O recurso “Brincando com as Formas” é um jogo para ser utilizado
                no 2º ano do Ensino Fundamental, visando contribuir de forma
                específica com o processo de letramento matemático. O cenário de
                um quarto infantil foi pensado para que os alunos reconhecessem
                figuras geométricas com as quais possuem contato em seu dia a
                dia. No quarto, haverá 3 objetos animados relacionados a
                diferentes desafios que serão realizados pela criança. Cada um
                destes objetos corresponderá à uma atividade diferente que uma
                vez completada, possibilitará à criança receber as chaves de um
                objeto parecido com uma nave em formato de tetraedro, que a
                levará ao planeta TETRIX.
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
                  <div class="card-header-title"></div>
                  <a class="card-header-icon">
                    <b-icon :icon="props.open ? 'menu-up' : 'menu-down'">
                    </b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content"></div>
                </div>
              </b-collapse>
            </section>
          </div>
          Galeria:
          <div class="has-background-grey-dark">
            imagens aqui
          </div>

          <p>
            Ficou curioso para conhecer esse recurso? Você pode encontrá-lo em:
            https://plataformaintegrada.mec.gov.br/recurso?id=34566&name=Brincando%20com%20a%20formas
          </p>
        </b-tab-item>
        <b-tab-item label="3º RED">
          <div class="title is-uppercase">É o Bicho 2.0</div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Que a Matemática está presente no nosso dia a dia, isso você
                  já sabia! Agora, você sabia que é possível usar temáticas
                  relacionadas à biodiversidade e à preservação ambiental para
                  tratar conceitos de número, álgebra, geometria e probabilidade
                  e estatística?
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
                  Existe uma estreita relação entre os conceitos matemáticos e o
                  mundo real. Isso porque a Matemática está presente em nosso
                  dia a dia, e é dessa maneira que ela deve ser apresentada para
                  os estudantes.
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
                  Quer saber mais sobre essa estreita relação? Então, vem com a
                  gente conhecer o recurso “É o Bicho 2.0”!
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
              <figure></figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">É O BICHO 2.0!</h6>
                O recurso “É o Bicho 2.0” é um jogo para ser utilizado no 3º ano
                do Ensino Fundamental, visando explorar habilidades presentes em
                quatro unidades temáticas: número, álgebra, geometria e
                probabilidade e estatística. Tais temáticas são abordadas por
                meio de situações-problema e organizadas em quatro atividades
                relacionadas à preservação da natureza e da biodiversidade. Cada
                atividade foi nomeada com um animal ameaçado de extinção,
                natural da Floresta Amazônica.
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
                  <div class="card-header-title"></div>
                  <a class="card-header-icon">
                    <b-icon :icon="props.open ? 'menu-up' : 'menu-down'">
                    </b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content"></div>
                </div>
              </b-collapse>
            </section>
          </div>
          Galeria:
          <div class="has-background-grey-dark">
            imagens aqui
          </div>

          <p>
            Ficou curioso para conhecer esse recurso? Você pode encontrá-lo em:
            https://plataformaintegrada.mec.gov.br/recurso?id=36677&name=%C3%89%20o%20Bicho%202.0
          </p>
        </b-tab-item>
        <b-tab-item label="4º RED">
          <div class="title is-uppercase">Ilha das operações</div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  O que acha de utilizarmos um jogo em que associamos contextos
                  reais e fictícios para abordar conceitos matemáticos?
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
                  Ou quem sabe, compreender o campo das estruturas
                  multiplicativas por meio de desafios relacionados às situações
                  cotidianas?
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
                  Quer saber como isso é possível? Então, vem com a gente
                  conhecer o recurso “Ilha das operações”!
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
              <figure></figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">ILHA DAS OPERAÇÕES</h6>
                O recurso “Ilha das operações” é um jogo para ser utilizado no
                4º ano do Ensino Fundamental, visando explorar diferentes
                situações quaternárias do campo conceitual multiplicativo, dos
                eixos de proporção simples e proporção múltipla; da classe um
                para muitos e muitos para muitos. O cenário utilizado consiste
                de uma ilha localizada nas águas do mar Algebrius, denominada de
                Ilha das operações. Essa ilha era habitada por quatro povos que,
                por muito tempo, viveram em harmonia graças ao poder das quatro
                pedras fundamentais pertencentes a cada um deles. No Norte,
                havia a pedra Somartius; no Sul, a Menostart; o Oeste portava a
                pedra Multiplis; e o povo do Leste, a Divisarions. No centro da
                ilha, havia a Montanha da Paz, uma formação rochosa milenar que
                reunia as quatro pedras com um grande poder capaz de sustentar o
                equilíbrio da ilha. A montanha era sempre fortalecida pelas
                quatro pedras, como um símbolo da cooperação entre os povos, e
                protegida pelo sábio guardião conhecido como o Guardião
                Matemágico. Tudo ia bem até que tempos difíceis assolaram a
                ilha. Os povos do Norte e do Sul continuaram a se ajudar, mas o
                medo de não sobreviver invadiu os corações dos habitantes do
                Leste e do Oeste, dando início a várias disputas por alimentos e
                por vantagens. Logo o equilíbrio e a harmonia que fortaleciam a
                Montanha da Paz foram abalados. Com as disputas entre Leste e
                Oeste, suas respectivas pedras enfraqueceram e se perderam com o
                tempo, diminuindo a força da Montanha da Paz e dando início ao
                processo de destruição da ilha. A missão no RED “Ilha das
                operações” é achar as duas pedras fundamentais que estão
                perdidas e reuni-las novamente na montanha para restaurar a paz
                na Ilha. Para isso, o usuário deverá cumprir os quatro desafios
                propostos no recurso. A cada desafio superado, o usuário ganhará
                itens que serão usados na resolução das situações que envolvem o
                campo das estruturas multiplicativas.
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
                  <div class="card-header-title"></div>
                  <a class="card-header-icon">
                    <b-icon :icon="props.open ? 'menu-up' : 'menu-down'">
                    </b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content"></div>
                </div>
              </b-collapse>
            </section>
          </div>
          Galeria:
          <div class="has-background-grey-dark">
            imagens aqui
          </div>

          <p>
            Ficou curioso para conhecer esse recurso? Você pode encontrá-lo em:
            https://plataformaintegrada.mec.gov.br/recurso?id=338674&name=Ilha%20das%20Opera%C3%A7%C3%B5es
          </p>
        </b-tab-item>
        <b-tab-item label="5º RED">
          <div class="title is-uppercase">Divertix</div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Sabia que é possível trabalhar conceitos estatísticos por meio
                  de textos? Basta você relacionar o texto com outros recursos
                  gráficos.
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
                  E você pode fazer isso por meio de textos, relacionando
                  preferências, aptidões ou mesmo situações cotidianas.
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
                  Quer saber como isso é possível? Então, vem com a gente
                  conhecer o recurso “Divertix”!
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
              <figure></figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">DIVERTIX</h6>
                O recurso “Divertix” é um jogo para ser utilizado no 5º ano do
                Ensino Fundamental e apresenta o contexto da redação de uma
                revista que teve o seu sistema de computadores invadido por um
                vilão, com o intuito de impedir a publicação de sua última
                edição. Os alunos são convidados a participar de diversas
                atividades com o objetivo de restaurar os textos da revista
                danificados durante a invasão e terminar as reportagens a tempo
                para sua publicação. São propostas 3 atividades que correspondem
                às habilidades exigidas para funções de revisor, redator e
                designer, desempenhadas em uma revista. Ao final das três
                atividades, o jogador poderá reunir as pistas para descobrir a
                identidade do vilão invasor, e também publicar a versão final da
                revista.
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
                  <div class="card-header-title"></div>
                  <a class="card-header-icon">
                    <b-icon :icon="props.open ? 'menu-up' : 'menu-down'">
                    </b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <div class="content"></div>
                </div>
              </b-collapse>
            </section>
          </div>
          Galeria:
          <div class="has-background-grey-dark">
            imagens aqui
          </div>

          <p>
            Ficou curioso para conhecer esse recurso? Você pode encontrá-lo em:
            https://plataformaintegrada.mec.gov.br/recurso?id=36040&name=Divertix
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
              Você gostou de conhecer esses recursos para serem explorados em
              suas aulas de Matemática?
            </div>
          </div>
        </div>
      </div>
      <div class="block-bordered">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="dialog-box is-right">
              Já que falamos tanto em desafio, que tal agora você participar de
              um? Você pode me ajudar a relacionar um objetivo descrito com o
              recurso visto nesta temática?
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
              Você pode me ajudar a relacionar um objetivo descrito com o
              recurso visto nesta temática?
            </div>
          </div>
        </div>
      </div>
      <h2 class="title is-2">~~COMPONENTE CARTAS~~</h2>
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
