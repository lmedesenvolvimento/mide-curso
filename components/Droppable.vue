<template>
  <Drop
    class="mide-droppable"
    :class="{ 'is-validated': validated }"
    :accepts-data="onValidate"
    @drop="onDrop"
  >
    <div v-if="validated" class="mide-droppable-result">
      <div v-if="copy" class="mide-copy"></div>
      <div v-else class="drag-dropped">
        <slot name="validated" :data="dataTransfer"></slot>
      </div>
    </div>
    <div v-else class="drag-shadow">
      <slot></slot>
    </div>
  </Drop>
</template>

<script>
import { Drop } from 'vue-easy-dnd'
export default {
  components: {
    Drop
  },
  props: {
    group: {
      type: String,
      default: null
    },
    validate: {
      type: [String, Function],
      default: null
    },
    copy: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dirty: false,
      validated: false,
      dataTransfer: null
    }
  },
  methods: {
    onValidate(d) {
      this.dirty = true

      if (this.validate) {
        switch (typeof this.validate) {
          case 'string':
            return d === this.validate
          case 'function':
            return this.validate(d)
          default:
            return false
        }
      }

      return true
    },
    onDrop(event) {
      this.validated = true
      this.dataTransfer = event.data

      this.$nextTick(() => {
        if (this.copy) {
          this.$el.querySelector('.mide-copy').innerHTML =
            event.source.$el.innerHTML
        }
        this.$eventHub.$emit('dragged', this.validated)
      })
    }
  }
}
</script>

<style lang="scss">
.mide-droppable {
  user-select: none;
  &.validated {
    .drag-dropped {
      display: block;
    }
  }
  &:not(.validated) {
    .drag-shadow {
      display: block;
    }
  }
  &.drop-in {
    opacity: 0.25;
    &.drop-forbidden * {
      cursor: grabbing !important;
    }
  }
  .drag-dropped,
  .drag-shadow {
    display: none;
  }
}
</style>
