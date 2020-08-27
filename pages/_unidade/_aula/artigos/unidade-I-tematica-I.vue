<template>
  <mide-aulas-container>
    <div id="unidade-I-tematica-I">
      <article>
        <h6 class="titulos">
          Objetivos de aprendizagem:
        </h6>

        <li>
          Compreender a cibercultura como um aspecto favorável para a
          ressignificação da prática docente comprometida com uma educação
          cidadã;
        </li>

        <li>
          Entender o impacto das tecnologias na vida das pessoas e na sociedade,
          incluindo as relações sociais, culturais e comerciais.
        </li>
        <section class="fala-carla">
          <img
            src="~assets/images/unidade-I/carla-unidade-1.png"
            class="carla-1"
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
          <b-carousel
            :arrow="arrow"
            :arrow-both="arrowBoth"
            :arrow-hover="arrowHover"
            :icon-pack="iconPack"
            :icon-prev="iconPrev"
            :icon-next="iconNext"
            :icon-size="iconSize"
          >
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                  <center>
                    <div class="card-image-carrossel"></div>
                    <h2>Mundo da música</h2>
                    <hr class="carrossel-horizontal-line" />
                    <p>
                      No mundo na música, a banda “Os Beatles” fazia sucesso e
                      estava nas paradas das rádios. Aqui no Brasil, surgia um
                      fenômeno musical chamado MPB (Música Popular Brasileira)
                      lançando cantores como Elis Regina, Vinicius de Moraes,
                      Edu Lobo, Nara Leão e Chico Buarque.
                    </p>
                    <img
                      src="~assets/images/unidade-I/imagem-mundo-da-musica.png"
                    />
                  </center>
                </div>
              </section>
            </b-carousel-item>
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                  <center>
                    <div class="card-image-carrossel"></div>
                    <h2>Ciência e tecnologia</h2>
                    <hr class="carrossel-horizontal-line" />
                    <p>
                      No campo da ciência e tecnologia, as grandes potências
                      estavam preocupadas em conhecer o sistema solar,
                      explorando a Lua e outros planetas.
                    </p>
                    <p>
                      O piloto do Centro de Pesquisas de voo da NASA, Joseph A.
                      Walker, voou no primeiro voo do foguete norte-americano
                      X-15. Em 2 de março de 1060 alcançou no voo 48.630 pés do
                      chão. Era o nono vôo do programa.
                    </p>
                    <img
                      src="~assets/images/unidade-I/imagem-ciencia-e-tecnologia.png"
                    />
                  </center>
                </div>
              </section>
            </b-carousel-item>
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <section :class="`hero is-medium is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                  <center>
                    <div class="card-image-carrossel"></div>
                    <h2>VESTIMENTAS</h2>
                    <hr class="carrossel-horizontal-line" />
                    <p>
                      Vamos observar também que as roupas, as discussões e a
                      maneira de pensar e agir eram bem diferentes da nossa
                      época. Enfim, muitas as atividades humanas como a forma de
                      se comunicar, a arquitetura, as comidas e músicas são bem
                      diferentes das que temos hoje.
                    </p>
                    <img
                      src="~assets/images/unidade-I/imagem-vestimentas.png"
                    />
                  </center>
                </div>
              </section>
            </b-carousel-item>
          </b-carousel>
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
          sociedade vive e se comporta socialmente. Também é preciso lembrar que
          a cultura é dinâmica. Portanto, ela muda com o tempo, algumas
          características sociais são adquiridas, outras deixada de lado.
        </p>
        <p>
          Alguns aspectos permitem que essas mudanças culturais sejam
          incorporadas na sociedade, como por exemplo, contingências ambientais,
          consciência social e invenção ou desenvolvimento de tecnologias.
        </p>
        <!-- <center>
          <question />
        </center> -->
        <br />
        <hr class="questionhorizontalline" />
        <br />
        <img src="~assets/images/icone-contextualizacao.png" class="icones" />
        <div class="titulos">Contextualização Histórica</div>
        <p>
          Os anos 1960 foram muito importantes para entender a sociedade do
          século XXI. Isto porque eles iniciaram uma série de grandes
          transformações culturais que constituíram um impacto decisivo em nossa
          maneira de perceber o mundo e de viver. Estas transformações foram
          possíveis porque, de um lado, havia um sentimento da necessidade de
          reconstrução da cidadania e do relacionamento entre os povos, após o
          trauma da Segunda Guerra Mundial e do nazismo; de outro lado, a
          chamada “Guerra Fria” continuava a lembrar às pessoas que tudo poderia
          acontecer novamente, e desta vez de maneira ainda mais catastrófica.
        </p>
        <p>
          Momentos assim costumam gerar grandes discussões e consequentemente
          tentativas de solução. Um destes debates, no nível cultural, foi a
          chamada “contracultura”, no qual principalmente jovens e artistas
          rebelavam-se contra as políticas belicistas, especialmente aquelas de
          cunho nuclear. Ao mesmo tempo, defendiam uma abertura nos costumes e
          nos direitos humanos, sobretudo quanto aos direitos das mulheres, ao
          exercício da sexualidade e à vida em comunidade.
        </p>

        <challenge name="challege-1" :options="challenge" correct="capitalismo">
          <template slot="quesiton">
            <div class="question-title">DESAFIO!</div>
            <p>
              Quais dessas palavras você acha que o movimento da contracultura
              era contra?
            </p>
          </template>
        </challenge>

        <p>
          A Guerra Fria gerava o desenvolvimento de tecnologias de estratégia
          militar, na tentativa de lidar com a nova realidade da bomba nuclear.
          Uma destas tecnologias foi desenvolvida nos Estados Unidos pela ARPA -
          Advanced Research Projects Agency, pertencente ao Departamento de
          Defesa. Denominada ARPANET, constituía uma rede de troca de pacotes de
          dados utilizando dois protocolos inovadores - o TCP (Transmission
          Control Protocol) e o IP (Internet Protocol), que possibilitavam uma
          descentralização sem precedentes na comunicação. Isto dificultava a
          destruição de uma base de dados pelo inimigo. Com a redução das
          tensões da Guerra Fria, nas duas décadas seguintes a tecnologia da
          ARPANET foi aperfeiçoada e ampliada, inicialmente para a área
          científica e posteriormente para a área comercial.
        </p>
        <p>
          A tecnologia TCP/IP propiciou também um grande avanço para a economia
          mundial. Com ela, uma nova globalização foi possível, interligando
          rapidamente mercados financeiros e de consumo e propiciando o rápido
          desenvolvimento de economias locais.
        </p>
        <p>
          A ampliação das economias, sobretudo para aquelas capitalistas, foi
          facilitada pelos acordos políticos entre as grandes potências
          econômicas, que buscaram formas de cooperação até então inéditas. Ao
          mesmo tempo, o fim da União Soviética propiciou a ampliação de
          transações comerciais aos países anteriormente sob sua influência,
          graças à nova tecnologia de redes, a Internet.
        </p>
        <center>
          <div class="frase">
            Assim, a Internet nasce sob esta múltipla composição:
          </div>

          <img src="~assets/images/unidade-I/quadro-cibercultura.png" />
          <div class="frase">
            Este é o “caldo de cultura” do qual nasce a cibercultura.
          </div>
        </center>
        <br />
        <hr class="questionhorizontalline" />
        <br />

        <img src="~assets/images/icone-contextualizacao.png" class="icones" />
        <div class="titulos">Características da Cibercultura</div>
        <p>A cibercultura é definida pelo filósofo Pierre Levy como:</p>
        <center>
          <br />
          <quotes /> <br />
        </center>
        <p>
          Ele traduz em meio tecnológico avançado (daí o prefixo "ciber") as
          complexas conexões entre aqueles fenômenos históricos iniciados nos
          anos 1960, agora acrescidos de novas possibilidades, além de gerar
          outro fenômenos.
        </p>
        <br />
        <center>
          <quotes />
        </center>
        <p>
          O espaço virtual que constitui o ciberespaço é um espaço real. Ele
          gera fenômenos culturais na vida das pessoas tão válidos quanto
          aqueles do espaço físico. Portanto, não faz sentido opor o espaço
          virtual a um suposto espaço “real”. No entanto, as formas geradoras
          destes fenômenos culturais são diversas do espaço físico, devido a
          algumas características muito peculiares da cibercultura.
        </p>
        <div>Vejamos algumas destas principais características.</div>
        <br />
        <challenge name="challege-2" :options="challenge" correct="capitalismo">
          <template slot="quesiton">
            <div class="question-title">DESAFIO!</div>
            <p>
              Você poderia relacionar essas características da cibercultura
              descritas abaixo? <strong>Arraste</strong> as imagens para o
              <strong>espaço vazio</strong> de cada característica.
            </p>

            <img
              src="~assets/images/unidade-I/desafio-cibercultura-imagem-1.png"
              width="160"
              class="challenge-images"
            />
            <img
              src="~assets/images/unidade-I/desafio-cibercultura-imagem-2.png"
              width="160"
              class="challenge-images"
            />
            <img
              src="~assets/images/unidade-I/desafio-cibercultura-imagem-3.png"
              width="160"
              class="challenge-images"
            />
            <img
              src="~assets/images/unidade-I/desafio-cibercultura-imagem-4.png"
              width="160"
              class="challenge-images"
            />
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
          </template>
          <template #option="{option, model, disabled, setModel}">
            <label class="radio">
              <input
                type="radio"
                name="answer"
                :disabled="disabled"
                :model="model"
                @input="() => setModel(option)"
              />
              {{ option.text }}
            </label>
          </template>
        </challenge>

        <img src="~assets/images/carla-explicacao.png" class="carla-explica" />
        <br />
        <div class="explica-1">
          Nesta unidade, conhecemos o conceito de cibercultura, em que contexto
          ele surgiu e como influencia as práticas na sociedade.
        </div>

        <img
          src="~assets/images/marcos-explicacao.png"
          class="marcos-explica"
        />
        <div class="explica-2">
          Também estudamos como a BNCC apresenta a cultura digital nas
          competências gerais.
        </div>

        <img src="~assets/images/carla-explicacao.png" class="carla-explica" />
        <br />
        <div class="explica-1">
          Na próxima unidade, vamos apresentar o conceito de Recursos
          Educacionais Digitais e sua classificação.
        </div>
      </article>
    </div>
  </mide-aulas-container>
</template>

<script>
export default {
  data() {
    return {
      challenge: [
        { text: 'Comunismo', value: 'comunismo' },
        { text: 'Capitalismo', value: 'capitalismo' },
        { text: 'Luta de Classe', value: 'luta-de-classe' },
        { text: 'Ditadura', value: 'ditadura' }
      ],

      arrow: true,
      arrowBoth: false,
      arrowHover: false,
      iconPack: 'mdi',
      iconPrev: 'arrow-left',
      iconNext: 'arrow-right',
      iconSize: '',
      carousels: [{ title: 'Slide 1' }]
    }
  }
}
</script>

<style lang="scss">
#unidade-I-tematica-I {
  article {
    margin-top: 50px;
    section {
      padding-bottom: 80px;
      .carla-1 {
        float: left;
      }
      /* .colchete {
        padding: 12px;
        float: left;
        margin-top: 30px;
      } */
      #paragrafo1 {
        float: left;
        font-size: 14px;
        padding-top: 50px;
      }
    }

    h1 {
      font: 53px avenir-next-lt-pro-bold;
      margin-left: 40%;
      color: #4b4b4b;
      opacity: 0.33;

      margin-bottom: -30px;
      letter-spacing: 0px;
    }
    .carrossel {
      background-color: #f3f5f9;
      p {
        width: 591px;
        text-align: left;
      }
      .card-image-carrossel {
        background: url('~assets/images/unidade-I/imagem-1960-violao.png') 50%
          0% no-repeat;
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
    .questionhorizontalline {
      border: 1px solid #707070;
      opacity: 0.5;
    }
    .icones {
      float: left;
    }
    h6 {
      color: #c0315f;
    }
    .titulos {
      text-transform: uppercase;
      font: Bold 16px avenir-next-lt-pro-bold;
      padding: 3px 0 20px 50px;
    }
    .frase {
      padding: 10px 0 10px 0;
    }
    .challenge-images {
      border: 2px solid #3153b2;
      border-radius: 15px;
      margin: 3px;
    }
    .carla-explica {
      float: right;
    }
    .marcos.explica {
      position: reltive;
    }
    .explica-1 {
      margin-top: 80px;
      text-align: right;
      text-indent: 50px;
    }
    .explica-2 {
      text-align: left;
      margin-top: -150px;
      margin-right: 50px;
      float: right;
      margin-left: 300px;
    }
  }
}
</style>
