<template>
  <div class="challenge">
    <div class="challenge-box">
      <div class="challenge-question">
        <slot name="quesiton" />
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
              :disabled="disabled"
              :setModel="select"
            >
              <b-button
                tag="a"
                :type="isSelected(option) ? 'is-primary' : 'is-light'"
                :disabled="disabled"
                >{{ option.text }}</b-button
              >
            </slot>
          </span>
          <input
            :name="name"
            type="radio"
            :value="option.value"
            class="challenge-radio"
            @change="select(option)"
          />
        </label>
      </div>
      <button
        name="challenge"
        class="challenge-submit button is-rounded "
        :disabled="disabled"
        @click="submit"
      >
        {{ submitBtnText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name,
    correct: {
      type: String,
      default: null
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
      disabled: false
    }
  },
  created() {
    this.$on('change', (value) => {
      this.selectedOption = value
    })
  },
  methods: {
    isSelected(option) {
      return this.selectedOption === option.value
    },
    select(option) {
      this.$emit('change', option.value)
    },
    submit() {
      const valid = this.correct === this.selectedOption
      this.disabled = valid
      alert(valid ? 'Parabéns Correto' : 'Falha errado')
    }
  }
}
</script>

<style lang="scss">
.challenge {
  user-select: none;
  margin-bottom: 1.5rem;
  text-align: center;

  &-box {
    width: 100%;
    padding: $gap;
    background: #e4e9f2;
    border-radius: $radius;
  }

  &-options {
    @include avenir;
    margin: $gap 0px;
  }

  &-option {
    margin: 0px ($gap / 4);
  }

  &-question {
    text-align: center;
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
