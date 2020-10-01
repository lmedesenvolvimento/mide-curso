<template>
  <div class="challenge" :class="{ 'is-card': card }">
    <div class="challenge-box">
      <div class="challenge-question">
        <slot name="question" />
      </div>
      <div class="challenge-options">
        <label
          v-for="option in options"
          :key="option.value"
          class="challenge-option"
          :class="{ 'is-checked': option.checked }"
        >
          <span class="challenge-option-wrap">
            <slot
              name="option"
              :option="option"
              :model="selectedOption"
              :active="isSelected(option)"
              :disabled="valid"
              :setModel="select"
              :valid="valid"
              :tries="tries"
            >
              <b-button
                tag="a"
                :type="isSelected(option) ? 'is-primary' : 'is-light'"
                :disabled="valid"
                >{{ option.text }}</b-button
              >
            </slot>
          </span>
          <input
            :name="getName"
            type="radio"
            :value="option.value"
            class="challenge-radio"
            @click="select(option)"
          />
        </label>
      </div>
      <center>
        <button
          name="challenge"
          class="challenge-submit button is-rounded "
          :disabled="valid"
          @click="submit"
        >
          {{ submitBtnText }}
        </button>
      </center>
      <div v-if="!hideFeedback && dirty" class="challenge-feedback">
        <slot
          v-if="valid"
          name="success"
          :valid="valid"
          :model="selectedOption"
          :multiple="multiple"
          :totalCorrect="totalCorrect"
          :isIncluded="isSelected"
        >
          <strong class="has-text-success">Muito bem!</strong> <br />
          Respota respondida corretamente.
        </slot>
        <slot
          v-else-if="!valid"
          name="error"
          :valid="valid"
          :model="selectedOption"
          :multiple="multiple"
          :totalCorrect="totalCorrect"
          :isIncluded="isSelected"
        >
          <strong class="has-text-danger">Que pena!</strong> <br />
          Tente novamente.
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  props: {
    name,
    correct: {
      type: String,
      default: null
    },
    card: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    hideFeedback: {
      type: Boolean,
      default: false
    },
    percentage: {
      type: Number,
      default: 0
    },
    submitBtnText: {
      type: String,
      default: 'Verificar'
    },
    options: {
      type: null,
      default: []
    }
  },
  data() {
    return {
      selectedOption: undefined,
      disabled: false,
      valid: false,
      dirty: false,
      tries: []
    }
  },
  computed: {
    getName() {
      if (this.multiple) {
        return uuidv4()
      }
      return this.name
    },
    $correct() {
      return (
        (this.selectedOption &&
          this.selectedOption
            .split(',')
            .filter((o) => this.correct.split(',').includes(o))) ||
        []
      )
    },
    $incorrect() {
      return (
        (this.selectedOption &&
          this.selectedOption
            .split(',')
            .filter((o) => !this.correct.split(',').includes(o))) ||
        []
      )
    },
    totalCorrect() {
      return this.$correct.length
    }
  },
  methods: {
    isSelected(option) {
      const value = typeof option === 'object' ? option.value : option

      if (!this.selectedOption) return false

      if (this.multiple) {
        const options = this.selectedOption.split(',')
        return options.includes(value)
      }

      return this.selectedOption === value
    },
    select(option) {
      this.$nextTick(() => {
        if (this.dirty) {
          this.dirty = false
          this.selectedOption = undefined
        }

        if (this.multiple) {
          if (this.isSelected(option)) {
            const options = this.selectedOption.split(',')
            const indexOf = options.findIndex((o) => o === option.value)

            options.splice(indexOf, 1)

            this.selectedOption = options.join(',')
          } else {
            const options = [this.selectedOption, option.value]
            this.selectedOption = options.filter((o) => !!o).join(',')
          }

          return
        }
        this.selectedOption = option.value
      })
    },
    submit() {
      const options = this.selectedOption?.split(',') || []

      const validated = options.every((o) =>
        this.correct.split(',').includes(o)
      )

      this.valid =
        validated && options.length === this.correct.split(',').length

      if (this.valid) {
        this.$store.dispatch('unidades/addProgressByActivity', {
          id: this.$attrs.id,
          type: 'activity',
          number: this.percentage
        })
      } else {
        this.tries.push(this.$incorrect.join(','))
      }

      this.dirty = true

      this.$emit('challenge:submit', true)
    }
  }
}
</script>

<style lang="scss">
.challenge {
  user-select: none;
  margin-bottom: 1.5rem;

  &.is-card {
    .challenge-box {
      background: #e4e9f2;
    }
  }

  &-box {
    width: 100%;
    padding: $gap;
    border-radius: $radius;
  }

  &-options {
    @include avenir;
    margin: $gap 0px;
    text-align: center;
  }

  &-option {
    margin: 0px ($gap / 4);
  }

  &-question {
    font-size: 14px;
    letter-spacing: 0px;
    color: #4b4b4b;
    opacity: 1;

    .question-title {
      @include avenir-bold;
      color: #c0315f;
      margin-bottom: $gap;
    }
  }

  &-submit {
    margin-top: 0px;
  }

  &-radio {
    display: none;
  }

  &-feedback {
    border-top: 2px solid #ccc;
    margin-top: 2rem;
    margin-left: $gap * -1;
    margin-right: $gap * -1;
    padding: $gap $gap 0px;
    text-align: left;
    strong {
      @include avenir-bold;
      text-transform: uppercase;
    }
  }

  .is-rounded {
    width: 128px;
    height: 35px;
    background: #3153b2 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 15px #3c80d116;
    border: 1px solid #3153b2;
    color: white;
    text-transform: uppercase;
    font: Bold 12px avenir-next-lt-pro-bold;
    letter-spacing: 1px;
  }
}
</style>
