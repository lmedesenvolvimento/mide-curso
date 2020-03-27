<template>
  <div class="layout__default">
    <b-navbar type="is-primary" wrapper-class="container">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="~assets/buefy.png" alt="Buefy" height="28" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item
          v-for="(item, key) of items"
          :key="key"
          tag="nuxt-link"
          :to="item.to"
        >
          <b-icon :icon="item.icon" :pack="item.pack" class="mr-1" />
          {{ item.title }}
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="container layout__content">
      <nuxt />
    </div>
    <mide-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Biblioteca',
          icon: 'icon-study',
          pack: 'icon',
          to: { name: 'inspire' }
        },
        {
          title: 'Forum',
          icon: 'icon-libray',
          pack: 'icon',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.layout {
  &__default {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
  }
  &__content {
    flex: 1;
    width: 100%;
  }
}
</style>
