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
                          v-if="card.validated"
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
      <p v-if="getEvent">
        <small>
          Respondido:
          {{ lastDateEvent }}
        </small>
      </p>
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
/* eslint-disable vue/require-default-prop */
import moment from 'moment'
import { chunk, shuffle } from 'lodash'

export default {
  model: {
    prop: 'items',
    event: 'change'
  },
  props: {
    items: Array,
    percentage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentItem: {},
      cardsPerLine: 3,
      picturesPerLine: 4,
      isDetailVisible: false,
      cardGroups: [],
      pictureGroups: []
    }
  },
  computed: {
    getEvent() {
      return this.$store.getters['unidades/findEventBy'](
        this.$attrs.id,
        'activity'
      )
    },
    lastDateEvent() {
      return moment(this.getEvent?.created_at).format('DD/MM/YYYY mm:hh:ss')
    },
    completed() {
      return this.items.filter((i) => i.validated)
    },
    currentProgress() {
      return Math.round((this.completed.length / this.items.length) * 100)
    }
  },
  watch: {
    items() {
      this.cardGroups = chunk(this.items, this.cardsPerLine)

      const isValidated = this.items?.every((c) => c.validated) || false

      if (isValidated) {
        this.$store.dispatch('unidades/addProgressByActivity', {
          id: this.$attrs.id,
          type: 'activity',
          number: this.percentage
        })
      }
    }
  },
  created() {
    this.cardGroups = chunk(this.items, this.cardsPerLine)
    this.pictureGroups = chunk(shuffle(this.items), this.picturesPerLine)
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

      this.$emit('change', newArray)
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
