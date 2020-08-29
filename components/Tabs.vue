<template>
  <div class="mide-tabs">
    <b-tabs ref="tabs" v-model="activeTab">
      <slot></slot>
    </b-tabs>
    <div class="mide-tabs-nav">
      <b-button
        class="mide-tabs-nav-prev"
        type="is-primary"
        icon-right="arrow-left"
        :disabled="!hasPrev"
        @click="prev"
      />
      <b-button
        class="mide-tabs-nav-next"
        type="is-primary"
        icon-right="arrow-right"
        :disabled="typeof totalTabItems() === 'undefined' ? false : !hasNext"
        @click="next"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0
    }
  },
  computed: {
    hasNext() {
      const totalTabItems = this.totalTabItems()
      if (totalTabItems) {
        return this.activeTab < totalTabItems - 1
      }
      return undefined
    },
    hasPrev() {
      return this.activeTab > 0
    }
  },
  methods: {
    next() {
      if (this.activeTab < this.totalTabItems() - 1) {
        this.activeTab = this.activeTab + 1
      }
    },
    prev() {
      if (this.hasPrev) {
        this.activeTab = this.activeTab - 1
      }
    },
    totalTabItems() {
      return this.$refs.tabs?.tabItems?.length || undefined
    }
  }
}
</script>

<style lang="scss">
.mide-tabs {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  .tabs {
    display: flex;
    li {
      flex: 1;
      a {
        @include avenir-bold;
        font-weight: bold;
        padding: 1.5em 1em;
        text-transform: uppercase;
        color: $tabs-color;
        border-bottom-width: 6px;
        border-bottom-color: transparent;
      }
      &.is-active {
        a {
          border-bottom-color: $tabs-color;
        }
      }
    }
  }
  &-nav {
    position: relative;
    &-prev,
    &-next {
      position: absolute;
      bottom: 1rem;
      border-radius: 50%;
      &:disabled {
        background-color: transparent;
      }
    }
    &-prev {
      left: 1rem;
    }
    &-next {
      right: 1rem;
    }
  }
  .tab-content {
    min-height: 200px;
    padding: 2rem;
  }
}
</style>
