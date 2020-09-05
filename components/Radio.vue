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
        <span v-else class="check"></span>

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
    &.is-disabled:not(.is-valid) {
      opacity: 0.3;
      .b-radio.radio {
        input[type='radio']:checked + .check:before {
          display: none;
        }
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
</style>
