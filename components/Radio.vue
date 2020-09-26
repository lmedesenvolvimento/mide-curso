<template>
  <div class="mide-radio">
    <div
      class="field"
      :class="{ 'is-disabled': isDisabled, 'is-valid': isValid }"
    >
      <label class="b-radio radio">
        <input
          ref="input"
          type="radio"
          :name="name"
          :value="value"
          :model_value="input"
          :disabled="isDisabled"
          @click="select"
        />

        <b-icon v-if="isValid" icon="checkbox-marked-circle" type="is-success">
        </b-icon>
        <span v-else class="check">
          <b-icon icon="close"></b-icon>
        </span>

        <span class="control-label">
          <slot></slot>
        </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name,
    value: null,
    input: null,
    valid: {
      type: [Boolean, Function],
      default: false
    },
    disabled: {
      type: [Boolean, Function],
      default: false
    }
  },
  data() {
    return {
      checked: false
    }
  },
  computed: {
    isValid() {
      return typeof this.valid === 'function' ? this.valid() : this.valid
    },
    isDisabled() {
      return typeof this.disabled === 'function'
        ? this.disabled()
        : this.disabled
    }
  },
  watch: {
    valid(newValue) {},
    checked(newValue) {
      this.$refs.input.checked = newValue
    }
  },
  created() {
    this.$parent.$on('challenge:submit', () => {
      this.checked = false
    })
  },
  methods: {
    select() {
      this.checked = !this.checked
      this.$emit('input', this.value)
    }
  }
}
</script>

<style lang="scss">
.mide-radio {
  .field {
    .check .icon {
      display: none;
    }
    &.is-disabled:not(.is-valid) {
      animation: disabled-radio-opacity 1.5s ease forwards;
      .b-radio.radio {
        input[type='radio']:checked + .check:before {
          display: none;
        }
      }
      .check {
        position: relative;
        animation: disabled-check-color 1.5s ease forwards;
        .icon {
          display: inline;
          [class^='mdi']::before {
            animation: disabled-radio-icon-opacity 1.5s ease forwards;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            font-size: 14px;
            color: $danger;
          }
        }
      }
      .control-label {
        animation: is-invalid 1.5s ease forwards;
        border-radius: 0.5rem;
      }
    }
    &.is-valid {
      .b-radio.radio {
        input[type='radio']:checked + .check:before {
          display: none;
        }
        .control-label {
          border: 1px solid $success;
          border-radius: 0.5rem;
        }
      }
    }
  }
  .b-radio {
    display: flex;
    padding: 0.25rem 0px;
    .control-label {
      flex: 1;
      font-weight: 400;
      margin-left: 0.5rem;
      padding: 1rem;
      text-align: left;
    }
  }
}
@keyframes is-invalid {
  0% {
    border: 1px solid $danger;
    border-radius: 0.5rem;
  }
  90% {
    border: 1px solid $danger;
  }
  100% {
    border: 1px solid transparent;
  }
}
@keyframes disabled-check-color {
  0% {
    border-color: $danger;
  }
  90% {
    border-color: $danger;
  }
  100% {
    border-color: #777;
  }
}
@keyframes disabled-radio-icon-opacity {
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes disabled-radio-opacity {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}
</style>
