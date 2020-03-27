<template>
  <div class="layout__default">
    <b-navbar wrapper-class="container" class="is-spaced has-shadow">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <a class="top-navbar-logo">
            <img
              src="~assets/images/mide-logo-colorida.png"
              alt="Mide logo"
              width="50"
            />
          </a>
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
          title: 'Início',
          icon: 'icon-study',
          pack: 'icon',
          to: { name: 'inspire' }
        },
        {
          title: 'Biblioteca',
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

    .top-navbar-item {
      font-family: 'Segoe UI', sans-serif;
      letter-spacing: 1.4px;
      font-size: 14px;
      text-transform: uppercase;
      display: flex;
    }
  }
  &__content {
    flex: 1;
    width: 100%;
  }
}
</style>
