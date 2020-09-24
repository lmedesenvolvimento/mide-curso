<template>
  <section>
    <div class="mide-gameplay-cibercultura">
      <div class="w-100 has-background-light">
        <div class="question-title">Desafio</div>
        <p class="has-text-centered">
          Você poderia relacionar essas imagens com as características da
          cibercultura descritas abaixo? <strong>Arraste</strong> as imagens
          para o <strong>espaço vazio</strong> de cada característica.
        </p>
        <div class="mide-gameplay-cibercultura-pictures">
          <b-carousel
            :indicator="false"
            :arrow="true"
            :autoplay="false"
            :repeat="false"
            :arrow-hover="false"
            :has-drag="false"
            icon-pack="mdi"
            icon-prev="arrow-left"
            icon-next="arrow-right"
            icon-size=""
          >
            <b-carousel-item
              v-for="(group, groupIndex) in pictureGroups"
              :key="groupIndex"
            >
              <div class="container is-fluid">
                <div class="columns is-fill-vertical is-mobile">
                  <div
                    v-for="(item, pictureIndex) in group"
                    :key="pictureIndex"
                    class="column"
                  >
                    <mide-draggable :data-transfer="item">
                      <figure class="image is-5by4">
                        <img :src="item.img" />
                      </figure>
                      <template #validated>
                        <div class="card-area-droppable"></div>
                      </template>
                    </mide-draggable>
                  </div>
                </div>
              </div>
            </b-carousel-item>
          </b-carousel>
        </div>

        <div class="mide-gameplay-cibercultura-progress">
          <div class="mide-gameplay-cibercultura-progress-title">
            Características
          </div>
          <div class="mide-gameplay-cibercultura-progress-wrap">
            <div class="mide-gameplay-cibercultura-progress-count">
              {{ completed.length }} / {{ items.length }}
            </div>
            <b-progress
              type="is-primary"
              :value="currentProgress"
              :max="100"
              size="is-small"
            ></b-progress>
          </div>
        </div>

        <div class="mide-gameplay-cibercultura-cards">
          <b-carousel
            :indicator="false"
            :arrow="true"
            :autoplay="false"
            :repeat="false"
            :arrow-hover="false"
            :has-drag="false"
            icon-pack="mdi"
            icon-prev="arrow-left"
            icon-next="arrow-right"
            icon-size=""
          >
            <b-carousel-item
              v-for="(group, groupIndex) in cardGroups"
              :key="groupIndex"
            >
              <div class="container is-fluid is-fill">
                <div class="columns is-fill-vertical is-mobile">
                  <div
                    v-for="(card, cardIndex) in group"
                    :key="cardIndex"
                    class="column"
                  >
                    <div class="card">
                      <div class="card-content">
                        <mide-droppable
                          :copy="false"
                          :validate="(d) => d.id === card.id"
                          @dragged="onValidated"
                        >
                          <div class="card-area-droppable"></div>
                          <template #validated="{data}">
                            <figure class="image is-3by2">
                              <img :src="data.img" />
                            </figure>
                          </template>
                        </mide-droppable>
                        <p class="flex">
                          <strong>{{
                            groupIndex * cardsPerLine + cardIndex + 1
                          }}</strong>
                          -
                          {{ card.title }}
                        </p>
                        <b-button
                          class="card-feedback-btn"
                          type="is-text"
                          @click="() => openDetails(card)"
                          >Ver Feedback</b-button
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </div>
    <b-modal :active.sync="isDetailVisible" :width="800">
      <div class="card mide-gameplay-cibercultura-modal">
        <div
          class="card-image"
          :style="{
            'background-image': `url(\'${require('@/assets/images/gameplay-cibercultura/header.png')}\')`
          }"
        >
          <figure>
            <img
              :src="require('@/assets/images/gameplay-cibercultura/player.png')"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="columns is-mobile">
            <div class="column is-4">
              <figure class="image is-5by4">
                <img :src="currentItem.img" :alt="currentItem.title" />
              </figure>
            </div>
            <div class="column">
              <p class="subtitle is-6" v-html="currentItem.text"></p>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import { chunk, shuffle } from 'lodash'

export default {
  data() {
    return {
      currentItem: {},
      cardsPerLine: 3,
      picturesPerLine: 4,
      isDetailVisible: false,
      items: [
        {
          id: 1,
          img: require('@/assets/images/unidade-I/1.png'),
          title: 'Ausência de espaço (atopia) e a ausência de tempo (acronia)',
          text: `
              <p>Ausência de espaço (atopia) e ausência de tempo (acronia) são características fundamentais na forma como as conhecemos no mundo físico. </p>
              <p>
                Duas das bases da percepção do real no mundo físico são o tempo e o espaço.
                Nossas atitudes neste espaço são contextualizadas, em grande parte, por estas grandezas. 
                A cibercultura, gerada no ciberespaço, altera esta percepção.  
                O tempo não é medido em termos de passado, presente e futuro, mas a partir de uma atualidade constante. 
                Por sua vez, o ciberespaço não é um espaço físico, estável; trata-se de um espaço dinâmico, em constante transformação, portanto, que somente pode ser compreendido em sua dinâmica própria.
              </p>
            `
        },
        {
          id: 2,
          img: require('@/assets/images/unidade-I/2.png'),
          title: 'Ausência do corpo',
          text:
            'Ausência do corpo enquanto ser sensível e simbólico, reduzido a sinais. O corpo é uma das nossas maiores referências no mundo físico. Ele reflete boa parte de nossas ações e reações neste meio. Na cibercultura, o corpo desaparece, dando lugar a sinais que não necessariamente representam um corpo físico. Assim, um avatar, por exemplo, ainda que represente uma figura física, pode significar apenas um perfil de um robô de software, não um ser humano. Um texto, uma foto, um vídeo, não representam necessariamente o mundo físico, podendo ser manipulados digitalmente por algoritmos, sem interferência humana direta.'
        },
        {
          id: 3,
          img: require('@/assets/images/unidade-I/3.png'),
          title: 'A conexão permanente em rede',
          text:
            'A rede, o “net”, de Internet (rede das redes), é a sua própria definição. Assim, tudo o que se publica, tudo o que se inscreve na rede é instantaneamente distribuído de forma dinâmica. A rede não apenas “armazena”, mas também constantemente distribui os dados que recebe. Quando um dado “cai na rede”, ele é automaticamente replicado, por isso não é mais possível apagá-lo em definitivo, no máximo, ele pode tornar-se menos visível.'
        },
        {
          id: 4,
          img: require('@/assets/images/unidade-I/4.png'),
          title: 'A liberação do polo de emissão',
          text:
            'Nos meios de comunicação tradicionais, como rádio e televisão, há um polo que emite para muitos receptores - o chamado broadcast, de um para muitos. Na Internet ocorre, sobretudo, o multicast, onde todos podem tornar-se broadcast. Assim, qualquer ponto (ou “nó”) da rede pode comunicar-se com os demais. A comunicação de massa, característica dos meios de mais antigos, passa à comunicação pós-massiva, que incorpora as características da comunicação anterior, mas a libera para todos que participam da rede.'
        },
        {
          id: 5,
          img: require('@/assets/images/unidade-I/5.png'),
          title:
            'As múltiplas identidades e a fragmentação do sujeito (Castells, 2010)',
          text:
            'Cada nó que compõe a Internet não corresponde necessariamente a uma identidade física. Na verdade, na maioria das vezes, isto não acontece. Nem sequer os nós são criados majoritariamente por humanos, mas por algoritmos. Mesmo que sejam diretamente humanos, estes nós não têm como assumir a complexidade da personalidade humana. Daí, fragmentam-se e assumem “personas” próprias, que tornam-se progressivamente mais distantes de suas intenções iniciais, gerando uma “teatralização” do cotidiano no ciberespaço, onde todos são personagens dinâmicos de enredos momentâneos. Ao mesmo tempo em que as pessoas exibem-se teatralmente na rede, e até por isso mesmo, há uma busca de muitos pelo anonimato - ou, pelo menos, uma tentativa de preservação de alguns aspectos de sua vida privada (muitas vezes em vão) em meio a tanta exposição.'
        },
        {
          id: 6,
          img: require('@/assets/images/unidade-I/6.png'),
          title:
            'As relações sociais crescente reguladas e controladas por corporações (Burch, 2006)',
          text:
            'Como já explicamos, no tempo da ARPANET, o governo norte-americano era o principal fiador da Internet, sobretudo em sua infraestrutura. Com o decorrer das décadas, os estados nacionais passaram a controlar esta infraestrutura e, progressivamente, repassaram-na a corporações privadas, mantendo apenas a governança normativa. Porém, nas duas últimas décadas, as corporações privadas passaram a controlar não apenas a infraestrutura física, mas também boa parte das relações sociais na Internet, especialmente, pela captura permanente de dados, montando uma gigantesca quantidade de informações sobre cada pessoa no mundo. Esta base de dados é utilizada para propósitos diversos, de interesse corporativo ou governamental, estimulando as relações sociais que interessam a estes objetivos.'
        },
        {
          id: 7,
          img: require('@/assets/images/unidade-I/7.png'),
          title:
            'A cultura remix (“Remixes, “Bootlegs, “Mashups), Memes E Marketing viral',
          text:
            'Ao reinventar-se constantemente, a cibercultura gera produtos dinâmicos decorrentes das fusões das ideias em conexão. Assim, temos a criação de misturas imagéticas e textuais, decorrentes dos fenômenos efêmeros que circulam, e o aproveitamento comercial destes fenômenos. A consequência é um “culto do amador” (KEEN, 2009), uma vez que o polo de emissão liberado faz qualquer um acessível a todos.'
        },
        {
          id: 8,
          img: require('@/assets/images/unidade-I/8.png'),
          title: 'O discurso não linear',
          text:
            'Como o tempo não mais importa, a linearidade temporal do discurso também não é importante. Através do hipertexto, o discurso é lançado na rede em partes separadas, não necessariamente na ordem cronológica física. Isto pode ocasionar perdas de partes da argumentação, má informação e/ou desinformação.'
        },
        {
          id: 9,
          img: require('@/assets/images/unidade-I/9.png'),
          title: 'A aceleração do real e o culto à velocidade (Virilio, 1996)',
          text:
            'Na Internet, tudo acontece muito mais rápido do que no mundo físico. Não pela Internet em si, mas pela comparação de um meio (físico) que está submetido ao tempo e outro meio (virtual), no qual o tempo físico não importa. As pessoas vivem em ambos e isto é difícil de lidar no dia a dia. A informação na Internet espalha-se em grande velocidade, gerando uma série de reações nas pessoas. De um lado, há uma dificuldade delas em assimilar os efeitos desta aceleração; de outro, abrem-se possibilidades de uso desta característica da cibercultura para a criação de situações de interesse de grupos e corporações.'
        },
        {
          id: 10,
          img: require('@/assets/images/unidade-I/10.png'),
          title: 'A ressignificação da privacidade',
          text:
            'No meio virtual, a ideia de privacidade muda radicalmente. Conforme já explicamos, tudo o que é colocado na rede, nela permanece. Não há a possibilidade de “apagar” (apenas há a ilusão de que se conseguiu apagar). O controle corporativo dos dados, aliado às interpretações cada vez mais sofisticadas realizadas pelos algoritmos, tornam transparentes para estes detentores de dados até as informações que não foram explicitamente colocadas na Internet. As inferências são cada vez mais precisas. Assim, a esfera do privado encontra-se em discussão profunda.'
        },
        {
          id: 11,
          img: require('@/assets/images/unidade-I/11.png'),
          title: 'A cultura do entretenimento',
          text:
            'O fascínio da manipulação tecnológica de imagens e a grande interatividade proporcionada pela Internet torna-a um ambiente essencialmente lúdico. Os avanços na sofisticação dos designs de interfaces gráficas levam as pessoas a passar horas hipnotizadas pelas telinhas de celulares e computadores. Os jogos, os vídeos, a música e, sobretudo, a mistura de todos estes e outros formatos de comunicação compõem um ambiente profundamente sedutor para pessoas de todas as idades.'
        },
        {
          id: 12,
          img: require('@/assets/images/unidade-I/12.png'),
          title: 'O “espírito” comunitário',
          text:
            'Influenciada diretamente pela contracultura dos anos 1960, a Internet, desde o princípio, revelou-se um ótimo espaço para o desenvolvimento de comunidades virtuais. Estas comunidades cresceram por meio da forte ênfase em valores como o compartilhamento e o livre debate de ideias, a partir de grupos reunidos sob características comuns. Com o passar dos anos, especialmente após a virada do século, a ideia de comunidades virtuais e seus valores foram capturados pelas corporações dominantes da Internet e viraram “redes sociais” virtuais, um espaço propício tanto para os interesses de pessoas e grupos quanto para os interesses comerciais e corporativos.'
        }
      ]
    }
  },
  computed: {
    cardGroups() {
      return chunk(this.items, this.cardsPerLine)
    },
    pictureGroups() {
      return chunk(shuffle(this.items), this.picturesPerLine)
    },
    completed() {
      return this.items.filter((i) => i.validated)
    },
    currentProgress() {
      return Math.round((this.completed.length / this.items.length) * 100)
    }
  },
  methods: {
    openDetails(item) {
      this.currentItem = item
      this.isDetailVisible = true
    },
    onValidated({ validated, data }) {
      const newArray = [...this.items]
      const index = newArray.findIndex((i) => i.id === data.id)

      newArray[index].validated = validated

      this.$set(this, 'items', newArray)
    }
  }
}
</script>

<style lang="scss">
.mide-gameplay-cibercultura {
  font-size: 14px;
  .question-title {
    @include avenir-bold;
    color: #c0315f;
    margin-bottom: $gap;
    text-transform: uppercase;
    text-align: center;
  }
  &-progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    &-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      .progress-wrapper {
        min-width: 180px;
      }
    }
    &-count {
      @include avenir-bold;
      color: $primary;
      margin-right: 1.5rem;
    }
    &-title {
      @include avenir-bold;
      text-transform: uppercase;
    }
  }
  &-modal {
    border-radius: 24px;
    .card-image {
      background-repeat: no-repeat;
      background-size: 100% 200px;
      min-height: 200px;
      height: auto;
      figure {
        img {
          display: block;
          margin: auto;
        }
      }
    }
    .card-content {
      border: none;
    }
  }
  &-cards,
  &-pictures {
    .carousel {
      min-height: 320px;
      &-arrow {
        .icon.has-icons-left {
          left: 0rem;
        }
        .icon.has-icons-right {
          right: 0rem;
        }
      }
      &-item,
      &-items {
        width: 100%;
        height: 100%;
      }
      &-items {
        min-height: 320px;
      }
      &-item {
        position: absolute;
        .columns {
          height: 100%;
        }
        .card {
          &-content {
            padding: 16px;
            height: 100%;
          }
          &-feedback-btn {
            text-transform: uppercase;
            text-decoration: none;
            color: $primary;
          }
          .image {
            margin-bottom: 1rem;
          }
          .flex {
            flex: 1;
            margin-bottom: 0px;
          }
        }
      }
    }
  }
  &-pictures {
    margin-bottom: 1.5rem;
    .carousel {
      min-height: 210px;
      &-item {
        display: flex;
        align-items: center;
        .image {
          filter: drop-shadow(0px 0px 3px $primary);
        }
      }
      &-items {
        min-height: 210px;
      }
    }
    .columns {
      height: auto;
    }
  }
  .card-area-droppable {
    width: 100%;
    height: 136px;
    border: 2px dashed transparentize(grey, 0.5);
    border-radius: 8px;
    margin-bottom: 1rem;
  }
}
</style>
