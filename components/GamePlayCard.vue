<template>
  <div class="mide-gameplay-card">
    <div class="columns is-fill-vertical is-vcentered">
      <div class="column">
        <div class="gameplay-card-deck">
          <mide-draggable
            v-for="(card, index) in sorted"
            :key="index.toString()"
            :data-transfer="card"
          >
            <div class="gameplay-card">
              <div class="gameplay-card-body">
                <div class="gameplay-card-text">
                  <div class="gameplay-card-label">OBJETIVO</div>
                  {{ card.description }}
                </div>
              </div>
            </div>
          </mide-draggable>
        </div>
      </div>
      <div class="column is-10">
        <div class="columns is-mobile is-multiline is-centered">
          <div
            v-for="(card, index) in cards"
            :key="index.toString()"
            class="gameplay-card-column"
          >
            <div class="gameplay-card is-top">
              <div class="gameplay-card-body">
                <div class="gameplay-card-media">
                  <img class="mb-1" :src="card.pic" />
                </div>
                <div class="gameplay-card-title">
                  {{ card.title }}
                </div>
              </div>
            </div>
            <div class="gameplay-card-divider"></div>
            <mide-droppable
              :validate="(d) => card && d.value === card.value"
              :copy="true"
              @dragend="(success) => dragend(success, index)"
            >
              <div class="gameplay-card is-bottom"></div>
            </mide-droppable>
            <div
              v-if="card.success"
              class="gameplay-card-success-icon has-text-centered mt-1"
            >
              <b-icon icon="check-circle" type="is-primary"></b-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/require-default-prop */
import { shuffle } from 'lodash'
export default {
  model: {
    prop: 'cards',
    event: 'change'
  },
  props: {
    cards: Array,
    percentage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      sorted: []
    }
  },
  created() {
    this.sorted = shuffle(this.cards)
  },
  methods: {
    dragend(success, index) {
      const newArray = [...this.cards]

      newArray[index].success = success
      this.$emit('change', newArray)

      const validated = this.cards.every((c) => c.success)

      if (validated) {
        this.$store.dispatch('unidades/addProgressByActivity', {
          id: this.$attrs.id,
          type: 'activity',
          number: this.percentage
        })
      }
    }
  }
}
</script>

<style lang="scss">
.mide-gameplay-card {
  position: relative;
  padding: 1.5rem 0px;
  .gameplay-card {
    user-select: none;
    background: $secondary;
    min-width: 124px;
    max-width: 124px;
    height: 221px;
    padding: 8px;
    margin: 0px 0.25rem;
    border-radius: 12px;
    &.is-bottom {
      background: transparent;
      border: 2px dashed transparentize($color: #000000, $amount: 0.75);
    }
    &-column {
      margin: 8px 2px;
    }
    &-divider {
      height: 24px;
      width: 0;
      border-left: 2px dashed transparentize($color: #000000, $amount: 0.75);
      margin: auto;
    }
    &-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      padding: 3px;
      border-radius: 8px;
      border: 2px solid lighten($color: $secondary, $amount: 15);
      color: white;
    }
    &-title {
      @include avenir-bold;
      font-size: 12px;
      text-transform: uppercase;
    }
    &-text {
      font-size: 10px;
    }
    &-label {
      margin-bottom: 12px;
    }
    &-deck {
      position: relative;
      user-select: none;
      left: -12px;
      margin: auto;
      @media (max-width: $desktop) {
        display: block;
        height: 221px;
        left: 0px;
        margin: $gap 0px;
      }
      .mide-draggable {
        position: absolute;
        top: 0;
        bottom: 0;
        max-height: 221px;
        margin: auto;
        .gameplay-card {
          border: 1px solid transparentize($color: white, $amount: 0.5);
          margin: auto;
        }
        @for $i from 1 through 5 {
          &:nth-child(#{$i}) {
            right: #{$i * -6}px;
            top: #{$i * 6}px;
            z-index: (5 - $i);
            @media (max-width: $desktop) {
              left: #{$i * 6}px;
              right: 0px;
            }
          }
        }
      }
    }
  }
}
</style>
