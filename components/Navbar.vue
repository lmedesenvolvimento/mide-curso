<template>
  <b-navbar wrapper-class="container" class="is-spaced has-shadow mide-navbar">
    <template slot="brand">
      <nuxt-link to="/">
        <img
          id="top-navbar-logo"
          src="~assets/images/mide-logo-colorida.png"
          alt="Mide logo"
          width="90px"
        />
      </nuxt-link>
    </template>

    <template slot="end">
      <div class="top-navbar-item">
        <b-navbar-item
          v-for="(item, key) of items"
          :key="key"
          tag="nuxt-link"
          :to="item.to"
        >
          <b-icon :icon="item.icon" :pack="item.pack" class="top-navbar-icon" />
          {{ item.title }}
        </b-navbar-item>
      </div>
    </template>
  </b-navbar>
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
          to: { name: 'index' }
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
.mide-navbar {
  > .container {
    .navbar-brand {
      margin-left: 0px;
      a:not([aria-label='menu']) {
        display: flex;
        align-items: center;
      }
    }
    .top-navbar-item {
      font-family: 'Segoe UI', sans-serif;
      letter-spacing: 1.4px;
      font-size: 14px;
      text-transform: uppercase;
      text-align: center;
      display: flex;
      color: #8e8e8e;
      .top-navbar-icon {
        margin-right: 5px;
      }
    }
  }
  @media (min-width: $desktop) {
    padding: 0px !important;
  }

  @media (max-width: $tablet) {
    .navbar-brand {
      margin-left: $gap;
      a:not([aria-label='menu']) {
        margin-left: $gap;
      }
    }
    .navbar-end {
      .top-navbar-item {
        display: block;
        a {
          display: block;
          text-align: left;
        }
      }
    }
  }
}
</style>
