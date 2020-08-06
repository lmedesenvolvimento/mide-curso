<template>
  <div class="chat-dialog">
    <div ref="content" class="chat-dialog-content">
      <div class="chat-dialog-header">
        <slot name="header"> Dialog Header {{ scrollIndex }} </slot>
      </div>
      <transition-group
        name="chat-dialog-content-items"
        class="chat-dialog-content-items"
      >
        <div
          v-for="(dialog, index) in visibleDiaologs"
          :key="index"
          class="chat-dialog-content-item container is-fluid"
        >
          <div
            class="columns is-mobile is-vcentered"
            :class="{ 'is-right': dialog.right }"
          >
            <figure class="image is-48x48">
              <img
                v-if="dialog.avatar"
                class="is-rounded"
                :src="dialog.avatar"
              />
            </figure>
            <div class="column">
              <div v-if="dialog.type === 'bool'">
                <div
                  v-show="dialog.text"
                  class="chat-dialog-content-item-box is-bool"
                >
                  {{ dialog.text }}
                </div>
              </div>
              <div
                v-else-if="dialog.type === 'text'"
                v-html="dialog.text"
              ></div>
              <div v-else-if="dialog.type === 'end'"></div>
              <div
                v-else
                class="chat-dialog-content-item-box"
                v-html="dialog.text"
              ></div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'scrollIndex',
    event: 'change'
  },
  props: {
    dialogs: {
      type: Array,
      default: null
    },
    scrollIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    visibleDiaologs() {
      return this.dialogs?.filter((d, index) => this.scrollIndex >= index)
    }
  },
  watch: {
    scrollIndex() {
      this.$nextTick(() => {
        const divContent = this.$refs.content
        if (divContent) {
          divContent.scrollTop = divContent.scrollHeight
        }
      })
    }
  }
}
</script>

<style lang="scss">
.chat-dialog {
  max-width: $tablet;
  margin: auto;
  &-header {
    text-align: center;
    font-weight: bold;
    small {
      font-weight: normal;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    height: 50vh;
    overflow-x: hidden;
    overflow-y: auto;
    transition: all;
    padding: 3rem 0px;
    margin: -20px;
    &-items {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex: 1;
    }
    &-item {
      position: relative;
      flex: none;
      min-height: $gap * 2;
      margin-top: $gap;
      &:first-child::before {
        position: absolute;
        background: linear-gradient(
          to bottom,
          transparent,
          transparentize(white, 0.2),
          transparentize(white, 0.2)
        );
        display: block;
        content: ' ';
        width: 100%;
        height: $gap * 4;
        top: $gap * -5;
        margin-left: $gap * -1;
        margin-right: $gap * -1;
        z-index: 5;
      }
      .columns {
        &.is-right {
          flex-direction: row-reverse;
          .chat-dialog-content-item-box {
            margin-left: 48px;
            margin-right: 0px;
          }
        }
      }
      &-box {
        background-color: transparentize($color: #ddd, $amount: 0.5);
        padding: 0.5rem 1rem;
        border-radius: 0.75rem;
        margin-right: 48px;
        &.is-bool {
          background-color: $info;
          display: inline-block;
          float: right;
          color: white;
          font-weight: bold;
          border-bottom-right-radius: 0px;
        }
      }
    }
  }
}

.chat-dialog-content-items-enter-active,
.chat-dialog-content-items-leave-active {
  transition: all 1s;
}
.chat-dialog-content-items-enter, .chat-dialog-content-items-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
