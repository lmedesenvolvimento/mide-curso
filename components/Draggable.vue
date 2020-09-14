<template>
  <div class="mide-draggable" :class="{ 'is-validated': validated }">
    <div v-if="validated" class="mide-draggable-validated">
      <slot name="validated"></slot>
    </div>
    <Drag
      v-else
      class="mide-draggable-drag"
      :data="dataTransfer"
      :go-back="true"
      :disabled="validated || dragging"
      @dragstart="dragstart"
      @dragend="dragend"
    >
      <slot></slot>
    </Drag>
  </div>
</template>

<script>
import { Drag, DragMixin } from 'vue-easy-dnd'
export default {
  components: {
    Drag
  },
  mixins: [DragMixin],
  props: {
    dataTransfer: {
      type: [Object, String],
      default: null
    },
    group: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      dirty: false,
      draggable: true,
      dragging: false,
      validated: false
    }
  },
  methods: {
    dragstart(e) {
      this.dragging = true
    },
    dragend(e) {
      // prevent error Nuxt easy-dnd
      setTimeout(() => {
        this.dragging = false
      }, 600)

      this.validated = e.success
    },
    dragged(validated) {
      this.validated = validated
    }
  }
}
</script>

<style lang="scss">
.mide-draggable {
  user-select: none;
  &.is-dragging {
    pointer-events: none;
  }
  &.validated {
    .mide-draggable-validated {
      display: block;
    }
  }
  &:not(.validated) {
    .mide-draggable-drag {
      display: block;
    }
  }
  .mide-draggable-validated,
  .mide-draggable-drag {
    display: none;
  }
}
</style>
