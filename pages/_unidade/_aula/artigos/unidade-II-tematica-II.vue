<template>
  <mide-aulas-container
    description="Temática 2 - RECURSOS NA PLATAFORMA INTEGRADA DE RECURSOS EDUCACIONAIS DIGITAIS"
  >
    <div id="unidade-II-tematica-II">
      <h6 class="titulos">
        Os objetivos desta temática são:
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
              Nesse módulo, vamos apresentar <b>5 RED de Língua Portuguesa</b> e
              <b>5 de Matemática</b> desenvolvidos, com apoio do Ministério da
              Educação pela Universidade Federal do Ceará, no projeto Mídias
              Digitais na Educação (MIDE).
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
              Vamos lá conhecer os componentes curricularres.
            </div>
          </div>
        </div>
      </div>
      <img src="~assets/images/capa-portugues.png" />

      <div class="title"><center>Língua Portuguesa</center></div>
      <mide-tabs>
        <b-tab-item label="1º RED"
          ><center>
            <div class="titulos is-uppercase">de olho na lista</div>
          </center>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Diariamente, escrevemos e lemos <b>listas</b> de produtos que
                  temos que comprar no supermercado, fazemos listas de
                  convidados para um aniversário ou, até mesmo, listamos as
                  atividades programadas para o dia.
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
                  Assim, realizar uma <b>atividade</b> que envolva
                  <b>criar listas</b> é <b>significativo para as crianças</b>,
                  pois tem uma função social não só na infância, já que este uso
                  percorre, inclusive, a vida adulta.
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
                  src="~assets/images/unidade-II/imagem-quadrada-de-olho-na-lista.png"
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
              <div class="titulos is-uppercase">
                atividades listadas na bncc
              </div>
              <b-collapse
                v-for="(collapse, index) of collapses_p1"
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
                    <h6>{{ collapse.n }}.</h6>
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
          <div class="has-background-grey-dark">
            <div class="title">Confira algumas imagens do jogo:</div>
            <div class="columns is-multiline">
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-de-olho-na-lista-1.png')
                  "
                  data-fancybox="gallery-de-olho-na-lista"
                  title="Sample Text"
                  name="gallery-de-olho-na-lista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-de-olho-na-lista-1.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-de-olho-na-lista-2.png')
                  "
                  data-fancybox="gallery-de-olho-na-lista"
                  title="Sample Text"
                  name="gallery-de-olho-na-lista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-de-olho-na-lista-2.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-de-olho-na-lista-3.png')
                  "
                  data-fancybox="gallery-de-olho-na-lista"
                  title="Sample Text"
                  name="gallery-de-olho-na-lista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-de-olho-na-lista-3.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-de-olho-na-lista-4.png')
                  "
                  data-fancybox="gallery-de-olho-na-lista"
                  title="Sample Text"
                  name="gallery-de-olho-na-lista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-de-olho-na-lista-4.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-de-olho-na-lista-5.png')
                  "
                  data-fancybox="gallery-de-olho-na-lista"
                  title="Sample Text"
                  name="gallery-de-olho-na-lista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-de-olho-na-lista-5.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-de-olho-na-lista-6.png')
                  "
                  data-fancybox="gallery-de-olho-na-lista"
                  title="Sample Text"
                  name="gallery-de-olho-na-lista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-de-olho-na-lista-6.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-de-olho-na-lista-7.png')
                  "
                  data-fancybox="gallery-de-olho-na-lista"
                  title="Sample Text"
                  name="gallery-de-olho-na-lista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-de-olho-na-lista-7.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-de-olho-na-lista-8.png')
                  "
                  data-fancybox="gallery-de-olho-na-lista"
                  title="Sample Text"
                  name="gallery-de-olho-na-lista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-de-olho-na-lista-8.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-de-olho-na-lista-9.png')
                  "
                  data-fancybox="gallery-de-olho-na-lista"
                  title="Sample Text"
                  name="gallery-de-olho-na-lista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-de-olho-na-lista-9.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <br />
          <center>
            <h6 class="titulos">
              Ficou curioso para conhecer esse recurso? <br />
              Explore o jogo abaixo ou baixe diretamente do site do MEC.
            </h6>
          </center>
          <!-- <iframe
            src="https://mide-de-olho-na-lista.netlify.app"
            frameborder="0"
            width="100%"
            height="600px"
            class="zoom"
          ></iframe> -->
          <a href="https://mide-de-olho-na-lista.netlify.app" target="_blank">
            <img src="~assets/images/unidade-II/tela-de-olho-na-lista-1.png" />
          </a>
          <p>
            Baixe do site do MEC em: <br />
            <a
              href="https://plataformaintegrada.mec.gov.br/recurso?id=34570&name=De%20olho%20na%20lista"
              target="_blank"
            >
              https://plataformaintegrada.mec.gov.br/recurso?id=34570&name=De%20olho%20na%20lista
            </a>
          </p>
        </b-tab-item>

        <b-tab-item label="2º RED">
          <center>
            <div class="titulos is-uppercase">qual o seu pedido?</div>
          </center>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Você já reparou como nosso país tem uma
                  <b>cultura heterogênea</b>? As músicas, as danças e a
                  culinária se diferenciam bastante de uma região para outra.
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
                  Sim! A <b>culinária</b> de uma região pode mostrar muito sobre
                  os <b>costumes</b> e a <b>realidade sociocultural</b>. Nesse
                  sentido, os cardápios de restaurantes surgem como um texto
                  informativo da vida cotidiana que mostra os hábitos de
                  consumo.
                </div>
              </div>
            </div>
          </div>

          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Pois é! Por isso, queremos mostrar para você um recurso que
                  tem como objetivo trabalhar a <b>leitura</b> e a
                  <b>produção de cardápios</b>.
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
                  src="~assets/images/unidade-II/imagem-quadrada-qual-o-seu-pedido.png"
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
                v-for="(collapse, index) of collapses_p2"
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

          <div class="has-background-grey-dark">
            <div class="title">Confira algumas imagens do jogo:</div>
            <div class="columns is-multiline">
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-qual-o-seu-pedido-1.png')
                  "
                  data-fancybox="gallery-pedido"
                  title="Sample Text"
                  name="gallery-pedido"
                >
                  <img
                    src="~assets/images/unidade-II/tela-qual-o-seu-pedido-1.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-qual-o-seu-pedido-2.png')
                  "
                  data-fancybox="gallery-pedido"
                  title="Sample Text"
                  name="gallery-pedido"
                >
                  <img
                    src="~assets/images/unidade-II/tela-qual-o-seu-pedido-2.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-qual-o-seu-pedido-3.png')
                  "
                  data-fancybox="gallery-pedido"
                  title="Sample Text"
                  name="gallery-pedido"
                >
                  <img
                    src="~assets/images/unidade-II/tela-qual-o-seu-pedido-3.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-qual-o-seu-pedido-4.png')
                  "
                  data-fancybox="gallery-pedido"
                  title="Sample Text"
                  name="gallery-pedido"
                >
                  <img
                    src="~assets/images/unidade-II/tela-qual-o-seu-pedido-4.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-qual-o-seu-pedido-5.png')
                  "
                  data-fancybox="gallery-pedido"
                  title="Sample Text"
                  name="gallery-pedido"
                >
                  <img
                    src="~assets/images/unidade-II/tela-qual-o-seu-pedido-5.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-qual-o-seu-pedido-6.png')
                  "
                  data-fancybox="gallery-pedido"
                  title="Sample Text"
                  name="gallery-pedido"
                >
                  <img
                    src="~assets/images/unidade-II/tela-qual-o-seu-pedido-6.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-qual-o-seu-pedido-7.png')
                  "
                  data-fancybox="gallery-pedido"
                  title="Sample Text"
                  name="gallery-pedido"
                >
                  <img
                    src="~assets/images/unidade-II/tela-qual-o-seu-pedido-7.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-qual-o-seu-pedido-8.png')
                  "
                  data-fancybox="gallery-pedido"
                  title="Sample Text"
                  name="gallery-pedido"
                >
                  <img
                    src="~assets/images/unidade-II/tela-qual-o-seu-pedido-8.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <br />
          <center>
            <h6 class="titulos">
              Ficou curioso para conhecer esse recurso? <br />
              Explore o jogo abaixo ou baixe diretamente do site do MEC.
            </h6>
          </center>
          <a
            href="https://mide-qual-e-o-seu-pedido.netlify.app"
            target="_blank"
          >
            <img src="~assets/images/unidade-II/tela-qual-o-seu-pedido-8.png" />
          </a>
          <p>
            Baixe do site do MEC em: <br />
            <a
              href="https://plataformaintegrada.mec.gov.br/recurso?id=35899&name=Qual%20%C3%A9%20o%20"
              target="_blank"
            >
              https://plataformaintegrada.mec.gov.br/recurso?id=35899&name=Qual%20%C3%A9%20o%20
            </a>
          </p>
        </b-tab-item>

        <b-tab-item label="3º RED">
          <center>
            <div class="titulos is-uppercase">fábulas animadas</div>
          </center>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <figure>
                  <img src="~assets/images/carla-explicacao.png" />
                </figure>
              </div>
              <div class="column">
                <div class="dialog-box is-left">
                  Olá! Você gosta de ouvir <b>histórias</b>?
                </div>
              </div>
            </div>
          </div>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Sim! Quando eu era criança, meu <b>gênero favorito</b> era a
                  <b>fábula</b>!
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
                  O meu também! Além do mais, gosto muito desse <b>gênero</b>,
                  pois apresenta uma <b>narrativa</b> que constrói um
                  ensinamento ou uma <b>moral</b>. Vamos conhecer como o recurso
                  “Fábulas animadas” pode apoiar as atividades desse gênero?
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-vcentered">
            <div class="column is-6">
              <figure>
                <img
                  src="~assets/images/unidade-II/imagem-quadrada-fabulas.png"
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
          <div class="w-100 has-background-light">
            <section>
              <b-collapse
                v-for="(collapse, index) of collapses_p3"
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

          <div class="has-background-grey-dark">
            <div class="title">Confira algumas imagens do jogo:</div>
            <div class="columns is-multiline">
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-fabulas-1.png')
                  "
                  data-fancybox="gallery-fabulas"
                  title="Sample Text"
                  name="gallery-fabulas"
                >
                  <img src="~assets/images/unidade-II/tela-fabulas-1.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-fabulas-2.png')
                  "
                  data-fancybox="gallery-fabulas"
                  title="Sample Text"
                  name="gallery-fabulas"
                >
                  <img src="~assets/images/unidade-II/tela-fabulas-2.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-fabulas-3.png')
                  "
                  data-fancybox="gallery-fabulas"
                  title="Sample Text"
                  name="gallery-fabulas"
                >
                  <img src="~assets/images/unidade-II/tela-fabulas-3.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-fabulas-4.png')
                  "
                  data-fancybox="gallery-fabulas"
                  title="Sample Text"
                  name="gallery-fabulas"
                >
                  <img src="~assets/images/unidade-II/tela-fabulas-4.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-fabulas-5.png')
                  "
                  data-fancybox="gallery-fabulas"
                  title="Sample Text"
                  name="gallery-fabulas"
                >
                  <img src="~assets/images/unidade-II/tela-fabulas-5.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-fabulas-6.png')
                  "
                  data-fancybox="gallery-fabulas"
                  title="Sample Text"
                  name="gallery-fabulas"
                >
                  <img src="~assets/images/unidade-II/tela-fabulas-6.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-fabulas-7.png')
                  "
                  data-fancybox="gallery-fabulas"
                  title="Sample Text"
                  name="gallery-fabulas"
                >
                  <img src="~assets/images/unidade-II/tela-fabulas-7.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-fabulas-8.png')
                  "
                  data-fancybox="gallery-fabulas"
                  title="Sample Text"
                  name="gallery-fabulas"
                >
                  <img src="~assets/images/unidade-II/tela-fabulas-8.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-fabulas-9.png')
                  "
                  data-fancybox="gallery-fabulas"
                  title="Sample Text"
                  name="gallery-fabulas"
                >
                  <img src="~assets/images/unidade-II/tela-fabulas-9.png" />
                </a>
              </div>
            </div>
          </div>
          <br />
          <center>
            <h6 class="titulos">
              Ficou curioso para conhecer esse recurso? <br />
              Explore o jogo abaixo ou baixe diretamente do site do MEC.
            </h6>
          </center>
          <a href="https://mide-fabulas-animadas.netlify.app/" target="_blank">
            <img src="~assets/images/unidade-II/tela-fabulas-1.png" />
          </a>
          <p>
            Baixe do site do MEC em: <br />
            <a
              href="https://plataformaintegrada.mec.gov.br/recurso?id=34568&name=F%C3%A1bulas%20Animadas"
              target="_blank"
            >
              https://plataformaintegrada.mec.gov.br/recurso?id=34568&name=F%C3%A1bulas%20Animadas
            </a>
          </p>
        </b-tab-item>

        <b-tab-item label="4º RED">
          <center>
            <div class="titulos is-uppercase">revista digital da criança</div>
          </center>
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
                  src="~assets/images/unidade-II/imagem-quadrada-revista-digital.png"
                  class="icones"
                />
              </figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">REVISTA DIGITAL DA CRIANÇA</h6>
                O RED é dividido em <b>seções</b>, simulando o formato de uma
                <b>revista convencional</b>, tendo início com a <b>capa</b>, que
                é a tela inicial do recurso. Em seguida, o RED traz um
                <b>editorial</b>, com uma breve apresentação dos editores, e o
                <b>sumário</b>, que apresenta todo o seu conteúdo. Aborda-se, na
                seção posterior, um <b>infográfico interativo</b> sobre a
                evolução das brincadeiras infantis. Nele, apresentam-se
                curiosidades (Quando começou? Como se brinca? Você sabia?) sobre
                as brincadeiras: faz de conta, cabra-cega, amarelinha e games.
                Em seguida, o recurso traz um <b>caça-palavras</b> sobre as
                brincadeiras apresentadas no infográfico. Na seção seguinte, o
                recurso apresenta uma <b>entrevista com Maria Clara</b>, de nove
                anos, sobre a produção de conteúdo digital. Após a entrevista,
                tem-se um <b>jogo da memória</b>, no qual o aluno deverá
                relacionar cartas de baralho sobre as perguntas e as respostas
                da entrevista. Por último, o recurso apresenta a seção das
                <b>cartas dos leitores</b>, na qual é possível ter acesso às
                cartas de Laura e Bernardo, duas crianças fictícias que discutem
                uma reportagem sobre o uso de canudos descartáveis. O RED é
                concluído com a <b>produção de uma carta do leitor</b> feita
                pelo aluno, sobre algum tema de interesse tratado na revista que
                foi lida.
              </div>
            </div>
          </div>
          <div class="w-100 has-background-light">
            <section>
              <b-collapse
                v-for="(collapse, index) of collapses_p4"
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

          <div class="has-background-grey-dark">
            <div class="title">Confira algumas imagens do jogo:</div>
            <div class="columns is-multiline">
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-revista-digital-2.png')
                  "
                  data-fancybox="gallery-revista"
                  title="Sample Text"
                  name="gallery-revista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-revista-digital-2.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-revista-digital-3.png')
                  "
                  data-fancybox="gallery-revista"
                  title="Sample Text"
                  name="gallery-revista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-revista-digital-3.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-revista-digital-4.png')
                  "
                  data-fancybox="gallery-revista"
                  title="Sample Text"
                  name="gallery-revista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-revista-digital-4.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-revista-digital-5.png')
                  "
                  data-fancybox="gallery-revista"
                  title="Sample Text"
                  name="gallery-revista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-revista-digital-5.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-revista-digital-6.png')
                  "
                  data-fancybox="gallery-revista"
                  title="Sample Text"
                  name="gallery-revista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-revista-digital-6.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-revista-digital-7.png')
                  "
                  data-fancybox="gallery-revista"
                  title="Sample Text"
                  name="gallery-revista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-revista-digital-7.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-revista-digital-8.png')
                  "
                  data-fancybox="gallery-revista"
                  title="Sample Text"
                  name="gallery-revista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-revista-digital-8.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-revista-digital-9.png')
                  "
                  data-fancybox="gallery-revista"
                  title="Sample Text"
                  name="gallery-revista"
                >
                  <img
                    src="~assets/images/unidade-II/tela-revista-digital-9.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <br />
          <center>
            <h6 class="titulos">
              Ficou curioso para conhecer esse recurso? <br />
              Explore o jogo abaixo ou baixe diretamente do site do MEC.
            </h6>
          </center>
          <a
            href="http://mide-revista-digital-da-crianca.netlify.app"
            target="_blank"
          >
            <img src="~assets/images/unidade-II/tela-revista-digital-2.png" />
          </a>
          <p>
            Baixe do site do MEC em: <br />
            <a
              href="https://plataformaintegrada.mec.gov.br/recurso?id=35900&name=Revista%20Digital%20da%20Crian%C3%A7a"
              target="_blank"
            >
              https://plataformaintegrada.mec.gov.br/recurso?id=35900&name=Revista%20Digital%20da%20Crian%C3%A7a
            </a>
          </p>
        </b-tab-item>

        <b-tab-item label="5º RED">
          <center>
            <div class="titulos is-uppercase">
              AVENTURA NO MUNDO DOS QUADRINHOS
            </div>
          </center>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <figure>
                  <img src="~assets/images/carla-explicacao.png" />
                </figure>
              </div>
              <div class="column">
                <div class="dialog-box">
                  Já conhecemos recursos para trabalhar os gêneros
                  <b>lista, cardápio, fábula</b> e até um recurso que utiliza a
                  estrutura de uma revista e os gêneros que a compõem. Vamos
                  conhecer, agora, um recurso que explora um gênero muito
                  conhecido e adorado tanto por crianças como por adultos?
                  <b>Os quadrinhos!</b> Vamos lá?
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
                  src="~assets/images/unidade-II/imagem-quadrada-aventura-no-mundo.png"
                  class="icones"
                />
              </figure>
            </div>
            <div class="column">
              <div class="is-left">
                <h6 class="titulos">AVENTURA NO MUNDO DOS QUADRINHOS</h6>
                O recurso foi pensado em dois modos de jogo. O primeiro modo é
                intitulado <b>Iniciar Aventura</b> e o segundo o
                <b>Mundo de Liz</b>. A ideia é trabalhar uma narrativa que terá
                os personagens Croma, Albedo e Vernáculo, que vivem no
                <b>Mundo dos Quadrinhos</b>. Albedo roubou algumas páginas do
                livro o Mundo de Liz. Croma, com a ajuda do senhor das palavras,
                Vernáculo, terá que resgatá-las. O primeiro modo possui quatro
                fases, que são:
                <li>
                  <b>Primeira fase:</b> se passa na Estrada de Requadros,
                  trabalhando-se o fluxo de leitura dos quadrinhos. Os alunos
                  terão que organizar os quadrinhos em sua ordem correta,
                  conforme a lógica da narrativa.
                </li>
                <li>
                  <b>Segunda fase:</b> acontece na Ilha dos Balões. Aqui será
                  trabalhada a relação entre exemplos de balões de fala e o seu
                  significado, além daqueles usados dentro da narrativa para a
                  criação de efeito de sentido.
                </li>
                <li>
                  <b>Terceira fase:</b> se passa no Bosque de Ícona, nos quais
                  serão trabalhados enigmas, por meio dos recursos gráficos
                  presentes nos quadrinhos, tais como expressões faciais e
                  linhas cinéticas.
                </li>
                <li>
                  <b>Quarta fase:</b> se passa na chamada Montanha de Litera,
                  onde acontecerá uma batalha final, representada por meio dos
                  aspectos interpretativos dos quadrinhos. Estes incluem
                  aspectos textuais, gráficos e não verbais dos quadros.
                </li>
                Após reunir todas as páginas perdidas do livro o Mundo de Liz, o
                <b>segundo modo</b> de jogo é <b>ativado</b>. Nele, serão
                apresentadas <b>informações</b> adicionais sobre o
                <b>Mundo de Liz</b>, história em quadrinhos selecionada para o
                desenvolvimento deste recurso educacional digital.
              </div>
            </div>
          </div>
          <div class="w-100 has-background-light">
            <section>
              <b-collapse
                v-for="(collapse, index) of collapses_p5"
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
          <div class="has-background-grey-dark">
            <div class="title">Confira algumas imagens do jogo:</div>
            <div class="columns is-multiline">
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-aventura-no-mundo-2.png')
                  "
                  data-fancybox="gallery-quadrinhos"
                  title="Sample Text"
                  name="gallery-quadrinhos"
                >
                  <img
                    src="~assets/images/unidade-II/tela-aventura-no-mundo-2.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-aventura-no-mundo-3.png')
                  "
                  data-fancybox="gallery-quadrinhos"
                  title="Sample Text"
                  name="gallery-quadrinhos"
                >
                  <img
                    src="~assets/images/unidade-II/tela-aventura-no-mundo-3.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-aventura-no-mundo-4.png')
                  "
                  data-fancybox="gallery-quadrinhos"
                  title="Sample Text"
                  name="gallery-quadrinhos"
                >
                  <img
                    src="~assets/images/unidade-II/tela-aventura-no-mundo-4.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-aventura-no-mundo-5.png')
                  "
                  data-fancybox="gallery-quadrinhos"
                  title="Sample Text"
                  name="gallery-quadrinhos"
                >
                  <img
                    src="~assets/images/unidade-II/tela-aventura-no-mundo-5.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-aventura-no-mundo-6.png')
                  "
                  data-fancybox="gallery-quadrinhos"
                  title="Sample Text"
                  name="gallery-quadrinhos"
                >
                  <img
                    src="~assets/images/unidade-II/tela-aventura-no-mundo-6.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-aventura-no-mundo-7.png')
                  "
                  data-fancybox="gallery-quadrinhos"
                  title="Sample Text"
                  name="gallery-quadrinhos"
                >
                  <img
                    src="~assets/images/unidade-II/tela-aventura-no-mundo-7.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-aventura-no-mundo-8.png')
                  "
                  data-fancybox="gallery-quadrinhos"
                  title="Sample Text"
                  name="gallery-quadrinhos"
                >
                  <img
                    src="~assets/images/unidade-II/tela-aventura-no-mundo-8.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-aventura-no-mundo-9.png')
                  "
                  data-fancybox="gallery-quadrinhos"
                  title="Sample Text"
                  name="gallery-quadrinhos"
                >
                  <img
                    src="~assets/images/unidade-II/tela-aventura-no-mundo-9.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <br />
          <center>
            <h6 class="titulos">
              Ficou curioso para conhecer esse recurso? <br />
              Explore o jogo abaixo ou baixe diretamente do site do MEC.
            </h6>
          </center>
          <a
            href="http://mide-aventura-no-mundo-dos-quadrinhos.netlify.app"
            target="_blank"
          >
            <img src="~assets/images/unidade-II/tela-aventura-no-mundo-2.png" />
          </a>
          <p>
            Baixe do site do MEC em: <br />
            <a
              href="https://plataformaintegrada.mec.gov.br/recurso?id=36041&name=Aventura%20no%20Mundo%20dos%20Quadrinhos"
              target="_blank"
            >
              https://plataformaintegrada.mec.gov.br/recurso?id=36041&name=Aventura%20no%20Mundo%20dos%20Quadrinhos
            </a>
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
              suas aulas de <b>Língua Portuguesa</b>?
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
      <mide-game-play-card v-model="cards"></mide-game-play-card>
      <img src="~assets/images/capa-matematica.png" />
      <mide-tabs>
        <b-tab-item label="1º RED">
          <center>
            <div class="titulos is-uppercase">Meu Álbum Geométrico</div>
          </center>
          <div class="block-bordered">
            <div class="columns is-vcentered">
              <div class="column">
                <div class="dialog-box is-right">
                  Em algum período da nossa infância, fizemos uso ou vivenciamos
                  a utilização de um <b>álbum de figurinhas</b>. O processo de
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
                  atividades que associam
                  <b>conceitos matemáticos</b> relacionados ao
                  <b>agrupamento</b> e ao <b>desagrupamento</b> de elementos,
                  juntamente com o estabelecimento de critérios para classificar
                  e seriar uma atividade é bastante significativo para as
                  crianças, pois torna-se possível conciliar a motivação de
                  complementar o álbum com a compreensão de conceitos
                  matemáticos.
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
              <figure>
                <img
                  src="~assets/images/unidade-II/imagem-quadrada-meu-album-geometrico.png"
                  class="icones"
                />
              </figure>
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
              <div class="titulos is-uppercase">
                atividades listadas na bncc
              </div>
              <p>
                O recurso “Meu Álbum Geométrico” possibilita trabalhar
                habilidades tanto do campo da Matemática, quanto da Língua
                Portuguesa. No campo da Matemática, as habilidades trabalhadas
                são as seguintes:
              </p>

              <b-collapse
                v-for="(collapse, index) of collapses_m1"
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
              <br />
              <p>
                No campo da Língua Portuguesa, as habilidades trabalhadas são as
                seguintes:
              </p>
              <b-collapse
                v-for="(collapse, index) of collapses_m1_p"
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
          <div class="has-background-grey-dark">
            <div class="title">Confira algumas imagens do jogo:</div>
            <div class="columns is-multiline">
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-meu-album-geometrico-1.png')
                  "
                  data-fancybox="gallery-geometrico"
                  title="Sample Text"
                  name="gallery-geometrico"
                >
                  <img
                    src="~assets/images/unidade-II/tela-meu-album-geometrico-1.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-meu-album-geometrico-2.png')
                  "
                  data-fancybox="gallery-geometrico"
                  title="Sample Text"
                  name="gallery-geometrico"
                >
                  <img
                    src="~assets/images/unidade-II/tela-meu-album-geometrico-2.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-meu-album-geometrico-3.png')
                  "
                  data-fancybox="gallery-geometrico"
                  title="Sample Text"
                  name="gallery-geometrico"
                >
                  <img
                    src="~assets/images/unidade-II/tela-meu-album-geometrico-3.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-meu-album-geometrico-4.png')
                  "
                  data-fancybox="gallery-geometrico"
                  title="Sample Text"
                  name="gallery-geometrico"
                >
                  <img
                    src="~assets/images/unidade-II/tela-meu-album-geometrico-4.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-meu-album-geometrico-5.png')
                  "
                  data-fancybox="gallery"
                  title="Sample Text"
                  name="gallery1"
                >
                  <img
                    src="~assets/images/unidade-II/tela-meu-album-geometrico-5.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-meu-album-geometrico-6.png')
                  "
                  data-fancybox="gallery-geometrico"
                  title="Sample Text"
                  name="gallery-geometrico"
                >
                  <img
                    src="~assets/images/unidade-II/tela-meu-album-geometrico-6.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-meu-album-geometrico-7.png')
                  "
                  data-fancybox="gallery-geometrico"
                  title="Sample Text"
                  name="gallery-geometrico"
                >
                  <img
                    src="~assets/images/unidade-II/tela-meu-album-geometrico-7.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-meu-album-geometrico-8.png')
                  "
                  data-fancybox="gallery-geometrico"
                  title="Sample Text"
                  name="gallery-geometrico"
                >
                  <img
                    src="~assets/images/unidade-II/tela-meu-album-geometrico-8.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-meu-album-geometrico-9.png')
                  "
                  data-fancybox="gallery-geometrico"
                  title="Sample Text"
                  name="gallery-geometrico"
                >
                  <img
                    src="~assets/images/unidade-II/tela-meu-album-geometrico-9.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <br />
          <center>
            <h6 class="titulos">
              Ficou curioso para conhecer esse recurso? <br />
              Explore o jogo abaixo ou baixe diretamente do site do MEC.
            </h6>
          </center>
          <a
            href="http://mide-meu-album-geometrico.netlify.app"
            target="_blank"
          >
            <img
              src="~assets/images/unidade-II/tela-meu-album-geometrico-1.png"
            />
          </a>
          <p>
            Baixe do site do MEC em: <br />
            <a
              href="https://plataformaintegrada.mec.gov.br/recurso?id=36735&name=Meu%20%C3%81lbum%20Geom%C3%A9trico"
              target="_blank"
            >
              https://plataformaintegrada.mec.gov.br/recurso?id=36735&name=Meu%20%C3%81lbum%20Geom%C3%A9trico
            </a>
          </p>
        </b-tab-item>
        <b-tab-item label="2º RED">
          <center>
            <div class="titulos is-uppercase">Brincando com as formas</div>
          </center>
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
              <figure>
                <img
                  src="~assets/images/unidade-II/imagem-quadrada-brincando-com-as-formas.png"
                  class="icones"
                />
              </figure>
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
              <div class="titulos is-uppercase">
                atividades listadas na bncc
              </div>
              O recurso “Brincando com as Formas” possibilita trabalhar
              habilidades tanto do campo da Matemática, quanto das Artes. No
              campo da Matemática, as habilidades trabalhadas são as seguintes:

              <b-collapse
                v-for="(collapse, index) of collapses_m2"
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
              <br />
              <p>
                No campo das Artes, as habilidades trabalhadas são as seguintes:
              </p>
              <b-collapse
                v-for="(collapse, index) of collapses_m2_p"
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

          <div class="has-background-grey-dark">
            <div class="title">Confira algumas imagens do jogo:</div>
            <div class="columns is-multiline">
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-brincando-com-as-formas-1.png')
                  "
                  data-fancybox="gallery-formas"
                  title="Sample Text"
                  name="gallery-formas"
                >
                  <img
                    src="~assets/images/unidade-II/tela-brincando-com-as-formas-1.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-brincando-com-as-formas-2.png')
                  "
                  data-fancybox="gallery-formas"
                  title="Sample Text"
                  name="gallery-formas"
                >
                  <img
                    src="~assets/images/unidade-II/tela-brincando-com-as-formas-2.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-brincando-com-as-formas-3.png')
                  "
                  data-fancybox="gallery-formas"
                  title="Sample Text"
                  name="gallery-formas"
                >
                  <img
                    src="~assets/images/unidade-II/tela-brincando-com-as-formas-3.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-brincando-com-as-formas-4.png')
                  "
                  data-fancybox="gallery-formas"
                  title="Sample Text"
                  name="gallery-formas"
                >
                  <img
                    src="~assets/images/unidade-II/tela-brincando-com-as-formas-4.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-brincando-com-as-formas-5.png')
                  "
                  data-fancybox="gallery-formas"
                  title="Sample Text"
                  name="gallery-formas"
                >
                  <img
                    src="~assets/images/unidade-II/tela-brincando-com-as-formas-5.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-brincando-com-as-formas-6.png')
                  "
                  data-fancybox="gallery-formas"
                  title="Sample Text"
                  name="gallery-formas"
                >
                  <img
                    src="~assets/images/unidade-II/tela-brincando-com-as-formas-6.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-brincando-com-as-formas-7.png')
                  "
                  data-fancybox="gallery-formas"
                  title="Sample Text"
                  name="gallery-formas"
                >
                  <img
                    src="~assets/images/unidade-II/tela-brincando-com-as-formas-7.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-brincando-com-as-formas-8.png')
                  "
                  data-fancybox="gallery-formas"
                  title="Sample Text"
                  name="gallery-formas"
                >
                  <img
                    src="~assets/images/unidade-II/tela-brincando-com-as-formas-8.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-brincando-com-as-formas-9.png')
                  "
                  data-fancybox="gallery-formas"
                  title="Sample Text"
                  name="gallery-formas"
                >
                  <img
                    src="~assets/images/unidade-II/tela-brincando-com-as-formas-9.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <br />
          <center>
            <h6 class="titulos">
              Ficou curioso para conhecer esse recurso? <br />
              Explore o jogo abaixo ou baixe diretamente do site do MEC.
            </h6>
          </center>
          <a
            href="http://mide-brincando-com-as-formas.netlify.app"
            target="_blank"
          >
            <img
              src="~assets/images/unidade-II/tela-brincando-com-as-formas-1.png"
            />
          </a>
          <p>
            Baixe do site do MEC em: <br />
            <a
              href="https://plataformaintegrada.mec.gov.br/recurso?id=34566&name=Brincando%20com%20a%20formas"
              target="_blank"
            >
              https://plataformaintegrada.mec.gov.br/recurso?id=34566&name=Brincando%20com%20a%20formas
            </a>
          </p>
        </b-tab-item>
        <b-tab-item label="3º RED">
          <center>
            <div class="titulos is-uppercase">É o Bicho 2.0</div>
          </center>
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
              <figure>
                <img
                  src="~assets/images/unidade-II/imagem-quadrada-e-o-bicho.png"
                  class="icones"
                />
              </figure>
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
              <div class="titulos is-uppercase">
                atividades listadas na bncc
              </div>
              <p>
                O recurso “É o Bicho 2.0” trabalha as seguintes habilidades
                matemáticas:
              </p>
              <b-collapse
                v-for="(collapse, index) of collapses_m3"
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

          <div class="has-background-grey-dark">
            <div class="title">Confira algumas imagens do jogo:</div>
            <div class="columns is-multiline">
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-e-o-bicho-1.png')
                  "
                  data-fancybox="gallery-bicho"
                  title="Sample Text"
                  name="gallery-bicho"
                >
                  <img src="~assets/images/unidade-II/tela-e-o-bicho-1.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-e-o-bicho-2.png')
                  "
                  data-fancybox="gallery-bicho"
                  title="Sample Text"
                  name="gallery-bicho"
                >
                  <img src="~assets/images/unidade-II/tela-e-o-bicho-2.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-e-o-bicho-3.png')
                  "
                  data-fancybox="gallery-bicho"
                  title="Sample Text"
                  name="gallery-bicho"
                >
                  <img src="~assets/images/unidade-II/tela-e-o-bicho-3.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-e-o-bicho-4.png')
                  "
                  data-fancybox="gallery-bicho"
                  title="Sample Text"
                  name="gallery-bicho"
                >
                  <img src="~assets/images/unidade-II/tela-e-o-bicho-4.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-e-o-bicho-5.png')
                  "
                  data-fancybox="gallery-bicho"
                  title="Sample Text"
                  name="gallery-bicho"
                >
                  <img src="~assets/images/unidade-II/tela-e-o-bicho-5.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-e-o-bicho-6.png')
                  "
                  data-fancybox="gallery-bicho"
                  title="Sample Text"
                  name="gallery-bicho"
                >
                  <img src="~assets/images/unidade-II/tela-e-o-bicho-6.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-e-o-bicho-7.png')
                  "
                  data-fancybox="gallery-bicho"
                  title="Sample Text"
                  name="gallery-bicho"
                >
                  <img src="~assets/images/unidade-II/tela-e-o-bicho-7.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-e-o-bicho-8.png')
                  "
                  data-fancybox="gallery-bicho"
                  title="Sample Text"
                  name="gallery-bicho"
                >
                  <img src="~assets/images/unidade-II/tela-e-o-bicho-8.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-e-o-bicho-9.png')
                  "
                  data-fancybox="gallery-bicho"
                  title="Sample Text"
                  name="gallery-bicho"
                >
                  <img src="~assets/images/unidade-II/tela-e-o-bicho-9.png" />
                </a>
              </div>
            </div>
          </div>
          <br />
          <center>
            <h6 class="titulos">
              Ficou curioso para conhecer esse recurso? <br />
              Explore o jogo abaixo ou baixe diretamente do site do MEC.
            </h6>
          </center>
          <a href="http://mide-e-o-bicho.netlify.app" target="_blank">
            <img src="~assets/images/unidade-II/tela-e-o-bicho-1.png" />
          </a>
          <p>
            Baixe do site do MEC em: <br />
            <a
              href="https://plataformaintegrada.mec.gov.br/recurso?id=36677&name=%C3%89%20o%20Bicho%202.0"
              target="_blank"
            >
              https://plataformaintegrada.mec.gov.br/recurso?id=36677&name=%C3%89%20o%20Bicho%202.0
            </a>
          </p>
        </b-tab-item>
        <b-tab-item label="4º RED">
          <center>
            <div class="titulos is-uppercase">Ilha das operações</div>
          </center>
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
              <figure>
                <img
                  src="~assets/images/unidade-II/imagem-quadrada-ilha-das-operacoes.png"
                  class="icones"
                />
              </figure>
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
              <div class="titulos is-uppercase">
                atividades listadas na bncc
              </div>
              <p>
                O recurso “Ilha das operações” trabalha as seguintes habilidades
                matemáticas:
              </p>

              <b-collapse
                v-for="(collapse, index) of collapses_m4"
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
          <div class="has-background-grey-dark">
            <div class="title">Confira algumas imagens do jogo:</div>
            <div class="columns is-multiline">
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-ilha-das-operacoes-1.png')
                  "
                  data-fancybox="gallery-operacoes"
                  title="Sample Text"
                  name="gallery-operacoes"
                >
                  <img
                    src="~assets/images/unidade-II/tela-ilha-das-operacoes-1.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-ilha-das-operacoes-2.png')
                  "
                  data-fancybox="gallery-operacoes"
                  title="Sample Text"
                  name="gallery-operacoes"
                >
                  <img
                    src="~assets/images/unidade-II/tela-ilha-das-operacoes-2.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-ilha-das-operacoes-3.png')
                  "
                  data-fancybox="gallery-operacoes"
                  title="Sample Text"
                  name="gallery-operacoes"
                >
                  <img
                    src="~assets/images/unidade-II/tela-ilha-das-operacoes-3.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-ilha-das-operacoes-4.png')
                  "
                  data-fancybox="gallery-operacoes"
                  title="Sample Text"
                  name="gallery-operacoes"
                >
                  <img
                    src="~assets/images/unidade-II/tela-ilha-das-operacoes-4.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-ilha-das-operacoes-5.png')
                  "
                  data-fancybox="gallery-operacoes"
                  title="Sample Text"
                  name="gallery-operacoes"
                >
                  <img
                    src="~assets/images/unidade-II/tela-ilha-das-operacoes-5.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-ilha-das-operacoes-6.png')
                  "
                  data-fancybox="gallery-operacoes"
                  title="Sample Text"
                  name="gallery-operacoes"
                >
                  <img
                    src="~assets/images/unidade-II/tela-ilha-das-operacoes-6.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-ilha-das-operacoes-7.png')
                  "
                  data-fancybox="gallery-operacoes"
                  title="Sample Text"
                  name="gallery-operacoes"
                >
                  <img
                    src="~assets/images/unidade-II/tela-ilha-das-operacoes-7.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-ilha-das-operacoes-8.png')
                  "
                  data-fancybox="gallery-operacoes"
                  title="Sample Text"
                  name="gallery-operacoes"
                >
                  <img
                    src="~assets/images/unidade-II/tela-ilha-das-operacoes-8.png"
                  />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-ilha-das-operacoes-9.png')
                  "
                  data-fancybox="gallery-operacoes"
                  title="Sample Text"
                  name="gallery-operacoes"
                >
                  <img
                    src="~assets/images/unidade-II/tela-ilha-das-operacoes-9.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <br />
          <center>
            <h6 class="titulos">
              Ficou curioso para conhecer esse recurso? <br />
              Explore o jogo abaixo ou baixe diretamente do site do MEC.
            </h6>
          </center>
          <a href="http://mide-ilha-das-operacoes.netlify.app" target="_blank">
            <img
              src="~assets/images/unidade-II/tela-ilha-das-operacoes-1.png"
            />
          </a>
          <p>
            Baixe do site do MEC em: <br />
            <a
              href="https://plataformaintegrada.mec.gov.br/recurso?id=338674&name=Ilha%20das%20Opera%C3%A7%C3%B5es"
              target="_blank"
            >
              https://plataformaintegrada.mec.gov.br/recurso?id=338674&name=Ilha%20das%20Opera%C3%A7%C3%B5es
            </a>
          </p>
        </b-tab-item>
        <b-tab-item label="5º RED">
          <center>
            <div class="titulos is-uppercase">Divertix</div>
          </center>
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
              <figure>
                <img
                  src="~assets/images/unidade-II/imagem-quadrada-divertix.png"
                  class="icones"
                />
              </figure>
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
              <div class="titulos is-uppercase">
                atividades listadas na bncc
              </div>
              <p>
                O recurso “Divertix” possibilita trabalhar habilidades tanto do
                campo da Matemática, quanto da Língua Portuguesa:
              </p>
              <b-collapse
                v-for="(collapse, index) of collapses_m5"
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
              <br />
              <p>
                No campo da Língua Portuguesa, as habilidades trabalhadas são as
                seguintes:
              </p>
              <b-collapse
                v-for="(collapse, index) of collapses_m5_p"
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
          <div class="has-background-grey-dark">
            <div class="title">Confira algumas imagens do jogo:</div>
            <div class="columns is-multiline">
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-divertix-1.png')
                  "
                  data-fancybox="gallery-divertix"
                  title="Sample Text"
                  name="gallery-divertix"
                >
                  <img src="~assets/images/unidade-II/tela-divertix-1.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-divertix-2.png')
                  "
                  data-fancybox="gallery-divertix"
                  title="Sample Text"
                  name="gallery-divertix"
                >
                  <img src="~assets/images/unidade-II/tela-divertix-2.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-divertix-3.png')
                  "
                  data-fancybox="gallery-divertix"
                  title="Sample Text"
                  name="gallery-divertix"
                >
                  <img src="~assets/images/unidade-II/tela-divertix-3.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-divertix-4.png')
                  "
                  data-fancybox="gallery-divertix"
                  title="Sample Text"
                  name="gallery-divertix"
                >
                  <img src="~assets/images/unidade-II/tela-divertix-4.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-divertix-5.png')
                  "
                  data-fancybox="gallery-divertix"
                  title="Sample Text"
                  name="gallery-divertix"
                >
                  <img src="~assets/images/unidade-II/tela-divertix-5.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-divertix-6.png')
                  "
                  data-fancybox="gallery-divertix"
                  title="Sample Text"
                  name="gallery-divertix"
                >
                  <img src="~assets/images/unidade-II/tela-divertix-6.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-divertix-7.png')
                  "
                  data-fancybox="gallery-divertix"
                  title="Sample Text"
                  name="gallery-divertix"
                >
                  <img src="~assets/images/unidade-II/tela-divertix-7.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-divertix-8.png')
                  "
                  data-fancybox="gallery-divertix"
                  title="Sample Text"
                  name="gallery-divertix"
                >
                  <img src="~assets/images/unidade-II/tela-divertix-8.png" />
                </a>
              </div>
              <div class="column is-3">
                <a
                  :href="
                    require('@/assets/images/unidade-II/tela-divertix-9.png')
                  "
                  data-fancybox="gallery-divertix"
                  title="Sample Text"
                  name="gallery-divertix"
                >
                  <img src="~assets/images/unidade-II/tela-divertix-9.png" />
                </a>
              </div>
            </div>
          </div>
          <br />
          <center>
            <h6 class="titulos">
              Ficou curioso para conhecer esse recurso? <br />
              Explore o jogo abaixo ou baixe diretamente do site do MEC.
            </h6>
          </center>
          <a href="http://mide-divertix.netlify.app" target="_blank">
            <img src="~assets/images/unidade-II/tela-divertix-1.png" />
          </a>
          <p>
            Baixe do site do MEC em: <br />
            <a
              href="https://plataformaintegrada.mec.gov.br/recurso?id=36040&name=Divertix"
              target="_blank"
            >
              https://plataformaintegrada.mec.gov.br/recurso?id=36040&name=Divertix
            </a>
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
              suas aulas de <b>Matemática</b>?
            </div>
          </div>
        </div>
      </div>
      <div class="block-bordered">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="dialog-box is-right">
              Já que falamos tanto em desafio, que tal agora você participar de
              um?
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
              recurso visto nesta temática? Relacione cada um dos recursos aos
              seus objetivos descritos.
            </div>
          </div>
        </div>
      </div>
      <mide-game-play-card v-model="cards_mat"></mide-game-play-card>
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
      collapses_p1: [
        {
          n: 1,
          title: 'HABILIDADE (EF12LP01) ',
          text:
            'Ler palavras novas com precisão na decodificação, no caso de palavras de uso frequente, ler globalmente, por memorização.'
        },
        {
          n: 2,
          title: 'HABILIDADE (EF12LP04)',
          text:
            'Ler e compreender, em colaboração com os colegas e com a ajuda do professor ou já com certa autonomia, listas [...] do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto do texto e relacionando sua forma de organização à sua finalidade.'
        },
        {
          n: 3,
          title: 'HABILIDADE (EF01LP02)',
          text:
            'Escrever, espontaneamente ou por ditado, palavras e frases de forma alfabética – usando letras/grafemas que representem fonemas.'
        },
        {
          n: 4,
          title: 'HABILIDADE (EF01LP08)',
          text:
            'Relacionar elementos sonoros (sílabas, fonemas, partes de palavras) com sua representação escrita.'
        },
        {
          n: 5,
          title: 'HABILIDADE (EF01LP17)',
          text:
            'Planejar e produzir, em colaboração com os colegas e com a ajuda do professor, listas [...] do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto/finalidade do texto.'
        },
        {
          n: 6,
          title: 'HABILIDADE (EF01LP20)',
          text:
            'Identificar e reproduzir, em listas [...] a formatação e diagramação específica de cada um desses gêneros.'
        }
      ],
      collapses_p2: [
        {
          n: 1,
          title: 'HABILIDADE (EF12LP01) ',
          text:
            'Ler palavras novas com precisão na decodificação, no caso de palavras de uso frequente, ler globalmente, por memorização.'
        },
        {
          n: 2,
          title: 'HABILIDADE (EF12LP04)',
          text:
            'Ler e compreender, em colaboração com os colegas e com a ajuda do professor ou já com certa autonomia, listas [...] do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto do texto e relacionando sua forma de organização à sua finalidade.'
        },
        {
          n: 3,
          title: 'HABILIDADE (EF02LP13)',
          text:
            'Planejar e produzir bilhetes e cartas, em meio impresso e/ou digital, dentre outros gêneros do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto/finalidade do texto.'
        },
        {
          n: 4,
          title: 'HABILIDADE (EF02LP04)',
          text:
            'Ler e escrever corretamente palavras com sílabas CV, V, CVC, CCV, identificando que existem vogais em todas as sílabas.'
        },
        {
          n: 5,
          title: 'HABILIDADE (EF15LP01)',
          text:
            'Identificar a função social de textos que circulam em campos da vida social dos quais participa cotidianamente (a casa, a rua, a comunidade, a escola) e nas mídias impressa, de massa e digital, reconhecendo para que foram produzidos, onde circulam, quem os produziu e a quem se destinam.'
        },
        {
          n: 6,
          title: 'HABILIDADE (EF15LP03)',
          text: 'Localizar informações explícitas em textos.'
        }
      ],
      collapses_p3: [
        {
          n: 1,
          title: 'HABILIDADE (EF35LP21) ',
          text:
            'Ler e compreender, de forma autônoma, textos literários de diferentes gêneros e extensões, inclusive aqueles sem ilustrações, estabelecendo preferências por gêneros, temas, autores.'
        },
        {
          n: 2,
          title: 'HABILIDADE (EF15LP03)',
          text: 'Localizar informações explícitas em textos.'
        },
        {
          n: 3,
          title: 'HABILIDADE (EF15LP15)',
          text:
            'Reconhecer que os textos literários fazem parte do mundo do imaginário e apresentam uma dimensão lúdica, de encantamento, valorizando-os, em sua diversidade cultural, como patrimônio artístico da humanidade.'
        },
        {
          n: 4,
          title: 'HABILIDADE (EF15LP18)',
          text: 'Relacionar texto com ilustrações e outros recursos gráficos.'
        },
        {
          n: 5,
          title: 'HABILIDADE (EF01LP07)',
          text: 'Identificar fonemas e sua representação por letras.'
        },
        {
          n: 6,
          title: 'HABILIDADE (EF35LP03)',
          text:
            'Identificar a ideia central do texto, demonstrando compreensão global.'
        },
        {
          n: 7,
          title: 'HABILIDADE (EF35LP04)',
          text: 'Inferir informações implícitas nos textos lidos.'
        }
      ],
      collapses_p4: [
        {
          n: 1,
          title: 'HABILIDADE (EF03LP18) ',
          text:
            'Ler e compreender, com autonomia, cartas dirigidas a veículos da mídia impressa ou digital (cartas de leitor e de reclamação a jornais, revistas) e notícias, dentre outros gêneros do campo jornalístico, de acordo com as convenções do gênero carta e considerando a situação comunicativa e o tema/assunto do texto.'
        },
        {
          n: 2,
          title: 'HABILIDADE (EF04LP14)',
          text:
            'Identificar, em notícias, fatos, participantes, local e momento/tempo da ocorrência do fato noticiado.'
        },
        {
          n: 3,
          title: 'HABILIDADE (EF05LP15)',
          text:
            'Ler/assistir e compreender, com autonomia, notícias, reportagens, vídeos em vlogs argumentativos, dentre outros gêneros do campo político-cidadão, de acordo com as convenções dos gêneros e considerando a situação comunicativa e o tema/assunto do texto.'
        },
        {
          n: 4,
          title: 'HABILIDADE (EF03LP20)',
          text:
            'Produzir cartas dirigidas a veículos da mídia impressa ou digital (cartas do leitor ou de reclamação a jornais ou revistas), dentre outros gêneros do campo político-cidadão, com opiniões e críticas, de acordo com as convenções do gênero carta e considerando a situação comunicativa e o tema/assunto do texto.'
        }
      ],
      collapses_p5: [
        {
          n: 1,
          title: 'HABILIDADE (EF15LP01) ',
          text:
            'Identificar a função social de textos que circulam em campos da vida social dos quais participam cotidianamente (a casa, a rua, a comunidade, a escola) e nas mídias impressa, de massa e digital, reconhecendo para que foram produzidos, onde circulam, quem os produziu e a quem se destinam.'
        },
        {
          n: 2,
          title: 'HABILIDADE (EF15LP04)',
          text:
            'Identificar o efeito de sentido produzido pelo uso de recursos expressivos gráfico-visuais em textos multissemióticos. '
        },
        {
          n: 3,
          title: 'HABILIDADE (EF15LP14)',
          text:
            'Construir o sentido de histórias em quadrinhos e tirinhas, relacionando imagens e palavras e interpretando recursos gráficos (tipos de balões, de letras, onomatopeias).'
        },
        {
          n: 4,
          title: 'HABILIDADE (EF15LP18)',
          text: 'Relacionar texto com ilustrações e outros recursos gráficos.'
        }
      ],
      collapses_m1: [
        {
          n: 1,
          title: 'HABILIDADE (EF01MA02) ',
          text:
            'Contar de maneira exata ou aproximada, utilizando diferentes estratégias como o pareamento e outros agrupamentos.'
        },
        {
          n: 2,
          title: 'HABILIDADE (EF01MA03)',
          text:
            'Estimar e comparar quantidades de objetos de dois conjuntos (em torno de 20 elementos), por estimativa e/ou por correspondência (um a um, dois a dois) para indicar “tem mais”, “tem menos” ou “tem a mesma quantidade”.'
        },
        {
          n: 3,
          title: 'HABILIDADE (EF01MA09)',
          text:
            'Organizar e ordenar objetos familiares ou representações por figuras, por meio de atributos, tais como cor, forma e medida.'
        },
        {
          n: 4,
          title: 'HABILIDADE (EF01MA14)',
          text:
            'Identificar e nomear figuras planas (círculo, quadrado, retângulo e triângulo) em desenhos apresentados em diferentes disposições ou em contornos de faces de sólidos geométricos.'
        }
      ],
      collapses_m1_p: [
        {
          n: 1,
          title: 'HABILIDADE (EF01LP17) ',
          text:
            'Planejar e produzir, em colaboração com os colegas e com a ajuda do professor, listas, agendas, calendários, avisos, convites, receitas, instruções de montagem e legendas para álbuns, fotos ou ilustrações (digitais ou impressos), dentre outros gêneros do campo da vida cotidiana, considerando a situação comunicativa e o tema/assunto/finalidade do texto.'
        }
      ],
      collapses_m2: [
        {
          n: 1,
          title: 'HABILIDADE (EF02MA10) ',
          text:
            'Descrever um padrão (ou regularidade) de sequências repetitivas e de sequências recursivas, por meio de palavras, símbolos ou desenhos. '
        },
        {
          n: 2,
          title: 'HABILIDADE (EF02MA14)',
          text:
            'Reconhecer, nomear e comparar figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera), relacionando-as com objetos do mundo físico.'
        },
        {
          n: 3,
          title: 'HABILIDADE (EF02MA15)',
          text:
            'Reconhecer, comparar e nomear figuras planas (círculo, quadrado, retângulo e triângulo), por meio de características comuns, em desenhos apresentados em diferentes disposições ou em sólidos geométricos.'
        }
      ],
      collapses_m2_p: [
        {
          n: 1,
          title: 'HABILIDADE (EF15AR26) ',
          text:
            'Explorar diferentes tecnologias e recursos digitais (multimeios, animações, jogos eletrônicos, gravações em áudio e vídeo, fotografia, softwares etc.) nos processos de criação artística.'
        }
      ],
      collapses_m3: [
        {
          n: 1,
          title: 'HABILIDADE (EF03MA03) ',
          text:
            'Construir e utilizar fatos básicos da adição e da multiplicação para o cálculo mental ou escrito;'
        },
        {
          n: 2,
          title: 'HABILIDADE (EF03MA05) ',
          text:
            'Utilizar diferentes procedimentos de cálculo mental e escrito para resolver problemas significativos envolvendo adição e subtração com números naturais;'
        },
        {
          n: 3,
          title: 'HABILIDADE (EF03MA06) ',
          text:
            'Resolver e elaborar problemas de adição e subtração com os significados de juntar, acrescentar, separar, retirar, comparar e completar quantidades, utilizando diferentes estratégias de cálculo exato ou aproximado, incluindo cálculo mental;'
        },
        {
          n: 4,
          title: 'HABILIDADE (EF03MA10) ',
          text:
            'Identificar regularidades em sequências ordenadas de números naturais, resultantes da realização de adições ou subtrações sucessivas por um mesmo número, descrever uma regra de formação da sequência e determinar elementos faltantes ou seguintes;'
        },
        {
          n: 5,
          title: 'HABILIDADE (EF03MA12) ',
          text:
            'Descrever e representar, por meio de esboços de trajetos ou utilizando croquis e maquetes, a movimentação de pessoas ou de objetos no espaço, incluindo mudanças de direção e sentido, com base em diferentes pontos de referência;'
        },
        {
          n: 6,
          title: 'HABILIDADE (EF03MA26) ',
          text:
            'Resolver problemas cujos dados estão apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas;'
        },
        {
          n: 7,
          title: 'HABILIDADE (EF03MA27) ',
          text:
            'Ler, interpretar e comparar dados apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas, envolvendo resultados de pesquisas significativas, utilizando termos como maior e menor frequência, apropriando-se desse tipo de linguagem para compreender aspectos da realidade sociocultural significativos.'
        }
      ],
      collapses_m4: [
        {
          n: 1,
          title: 'HABILIDADE (EF04MA04) ',
          text:
            'Utilizar as relações entre adição e subtração, bem como entre multiplicação e divisão, para ampliar as estratégias de cálculo;'
        },
        {
          n: 2,
          title: 'HABILIDADE (EF04MA05) ',
          text:
            'Utilizar as propriedades das operações para desenvolver estratégias de cálculo;'
        },
        {
          n: 3,
          title: 'HABILIDADE (EF04MA06) ',
          text:
            'Resolver e elaborar problemas envolvendo diferentes significados da multiplicação (adição de parcelas iguais, organização retangular e proporcionalidade), utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos;'
        },
        {
          n: 4,
          title: 'HABILIDADE (EF04MA07) ',
          text:
            'Resolver e elaborar problemas de divisão cujo divisor tenha no máximo dois algarismos, envolvendo os significados de repartição equitativa e de medida, utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos.'
        }
      ],
      collapses_m5: [
        {
          n: 1,
          title: 'HABILIDADE (EF05MA07) ',
          text:
            'Resolver e elaborar problemas de adição e subtração com números naturais e com números racionais, cuja representação decimal seja finita, utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos;'
        },
        {
          n: 2,
          title: 'HABILIDADE (EF05MA08) ',
          text:
            'Resolver e elaborar problemas de multiplicação e divisão com números naturais e com números racionais cuja representação decimal é finita (com multiplicador natural e divisor natural e diferente de zero), utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos;'
        },
        {
          n: 3,
          title: 'HABILIDADE (EF05MA24) ',
          text:
            'Interpretar dados estatísticos apresentados em textos, tabelas e gráficos (colunas ou linhas), referentes a outras áreas do conhecimento ou a outros contextos, como saúde e trânsito, e produzir textos com o objetivo de sintetizar conclusões.'
        }
      ],
      collapses_m5_p: [
        {
          n: 1,
          title: 'HABILIDADE (EF15LP18) ',
          text: 'Relacionar texto com ilustrações e outros recursos gráficos;'
        },
        {
          n: 2,
          title: 'HABILIDADE (EF05LP23) ',
          text: 'Comparar informações apresentadas em gráficos ou tabelas.'
        }
      ],
      cards: [
        {
          title: 'De olho na lista',
          value: 'de-olho-na-lista',
          pic: require('@/assets/images/card-icons/de-olho-lista.png'),
          description:
            'Relacionar pessoas ou coisas, obedecendo uma sequência alfabética, numérica, cronológica, que tem como função organizar as palavras e facilitar a sua localização.'
        },
        {
          title: 'FÁBULAS ANIMADAS',
          value: 'fabulas-animadas',
          pic: require('@/assets/images/card-icons/fabulas-animadas.png'),
          description:
            'Identificar a ideia central do texto, demonstrando compreensão global e Inferir informações implícitas nos textos lidos.'
        },
        {
          title: 'Revista digital da criança',
          value: 'revista-digital-da-crianca',
          pic: require('@/assets/images/card-icons/revista-digital-da-crianca.png'),
          description:
            'Ler, produzir e compreender cartas dirigidas a veículos da mídia impressa ou digital, notícias, reportagens, dentre outros gêneros do campo jornalístico e político-cidadão.'
        },
        {
          title: 'Qual o pedido?',
          value: 'qual-o-pedido',
          pic: require('@/assets/images/card-icons/qual-o-pedido.png'),
          description:
            'Manipular textos e participar de situações de escuta, para ampliar o seu contato com diferentes gêneros textuais.'
        },
        {
          title: 'Aventura no mundo dos quadrinhos',
          value: 'aventura-no-mundo-dos-quadrinhos',
          pic: require('@/assets/images/card-icons/aventura-no-mundo-dos-quadrinhos.png'),
          description:
            'Identificar o efeito de sentido produzido pelo uso de recursos expressivos gráfico-visuais em textos multissemióticos.'
        }
      ],
      cards_mat: [
        {
          title: 'Meu Álbum Geométrico',
          value: 'meu-album-geometrico',
          pic: require('@/assets/images/card-icons/meu-album-geometrico.png'),
          description:
            'Identificar agrupamento e desagrupamento de elementos, comparação de quantidades além da determinação de critérios para classificar e seriar.'
        },
        {
          title: 'Brincando com as Formas',
          value: 'brincando-com-as-formasBrincando com as Formas',
          pic: require('@/assets/images/card-icons/brincando-com-as-formas.png'),
          description:
            'Reconhecer figuras geométricas com as quais possuem contato em seu dia a dia.'
        },
        {
          title: 'É o Bicho 2.0',
          value: 'e-o-bicho',
          pic: require('@/assets/images/card-icons/e-o-bicho-2.png'),
          description:
            'Explorar habilidades presentes em quatro unidades temáticas (número, álgebra, geometria e probabilidade e estatística) por meio de situações-problema.'
        },
        {
          title: 'Ilha das operações',
          value: 'ilha-das-operacoes',
          pic: require('@/assets/images/card-icons/ilha-operacao.png'),
          description:
            'Explorar diferentes situações quaternárias do campo conceitual multiplicativo, dos eixos de proporção simples e proporção múltipla; da classe um para muitos e muitos para muitos. '
        },
        {
          title: 'Divertix',
          value: 'divertix',
          pic: require('@/assets/images/card-icons/divertix.png'),
          description:
            'Elaborar, Revisar e Construir gráficos a partir de textos.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#unidade-II-tematica-II {
  h6 {
    color: #c0315f;
  }
  .title {
    color: white;
    text-align: center;
    padding: 10px;
    padding-top: 30px;
  }
  .titulos {
    text-transform: uppercase;
    font: Bold 16px avenir-next-lt-pro-bold;
  }
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
