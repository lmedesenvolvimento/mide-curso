<template>
  <div v-if="!visible" class="mide-aulas-navigation-toggle-btn">
    <a class="card-header-icon" @click.stop="toggle">
      <b-icon icon="icon-arrow-right" pack="custom"></b-icon>
    </a>
  </div>
  <section v-else class="mide-aulas-navigation">
    <div id="card-header-top" class="card-header">
      <p class="card-header-title"></p>
      <a class="card-header-icon" @click.stop="toggle">
        <b-icon icon="icon-close" pack="custom"></b-icon>
      </a>
    </div>
    <b-collapse
      v-for="(unidade, index) of $manifest.unidades"
      :key="index"
      class="card mide-aulas-navigation-unidade"
      animation="slide"
      :open="isOpen == index"
      :class="{ 'is-active': isOpen === index }"
      @open="isOpen = index"
      @close="isOpen = undefined"
    >
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">{{ unidade.titulo }}</p>
        <a class="card-header-icon">
          <b-icon
            :icon="props.open ? 'icon-angle-up' : 'icon-angle-down'"
            pack="custom"
          ></b-icon>
        </a>
      </div>
      <div class="collapse-items-content container is-fluid">
        <nuxt-link
          v-for="(aula, i) in unidade.aulas"
          :key="aula.id"
          :value_index="i"
          :to="lessonUrl(unidade, aula)"
          class="mide-aulas-navigation-item columns"
          :class="{ 'is-active': isLessonActive(aula) }"
        >
          <input class="radio" type="radio" name="answer" />

          <div class="mide-aulas-navigation-title">
            <div id="tituloaula">{{ aula.titulo }}</div>
            <p>{{ aula.descricao }}</p>
          </div>
        </nuxt-link>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { last } from '@/utils/arrays'

export default {
  data() {
    return {
      isOpen: 0
    }
  },
  computed: {
    visible: {
      get() {
        return this.$store.state.site.lessonNavIsVisible
      },
      set(value) {
        this.$store.dispatch('site/setLessonNav', value)
      }
    },
    ...mapState({
      unidades: ({ unidades }) => unidades.data
    })
  },
  created() {
    this.isOpen = this.unidades.findIndex((unidade) => {
      return unidade.id === this.$route.params.unidade
    })
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    },
    isLessonActive(aula) {
      const lessonSlug = last(this.$route.name.split('-'))
      return lessonSlug === aula.id
    },
    lessonUrl(unidade, aula) {
      return `/${unidade.id}/${aula.id}/artigos/${aula.id}`
    }
  }
}
</script>

<style lang="scss">
.mide-aulas-navigation {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: $gap;
  align-self: flex-start;
  border: 1px solid #e8e8e8;
  opacity: 1;
  border-radius: 25px;
  min-width: $lesson-navigation-width;
  max-width: $lesson-navigation-width;
  margin-top: $gap * 2;
  @media (max-width: $widescreen) {
    position: relative;
    width: 100%;
    max-width: $tablet;
    margin: $gap auto;
  }
  @media (max-width: $tablet) {
    display: block;
    max-width: 100%;
  }
  #card-header-top {
    border-radius: 25px 25px 0 0;
    a {
      font-size: 12px;
      color: $info;
    }
  }
  .card-header-title {
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1.2px;
    color: #c0315f;
    text-transform: uppercase;
  }

  &-toggle-btn {
    position: sticky;
    top: $gap;
    background-color: white;
    box-shadow: 3px 3px 9px transparentize($color: #000000, $amount: 0.75);
    margin: $gap * 2 0px;
    border-radius: $gap;
    border: 1px solid transparentize($color: #000000, $amount: 0.9);
    .card-header-icon {
      padding: 0.75rem 2.5rem;
      color: $info;
      .icon {
        transform: rotate(-180deg);
      }
    }
  }

  &-item {
    align-items: center;

    :active {
      color: #3153b2;
    }
  }

  &-title {
    flex: 1;
    margin-left: 16px;
    font-family: avenir-next-lt-pro-bold;
    font-size: 12px;
    letter-spacing: 1.2px;
    color: #545454;

    p {
      font-family: avenir-next-lt-pro-regular;
      font-size: 14px;
      letter-spacing: 0px;
      color: #8c8d8e;
    }
  }
  &-unidade {
    &.is-active {
      .collapse-trigger {
        margin-bottom: 0.75rem;
      }
    }
    &:last-child:not(.is-active) .card-header {
      border-radius: 0 0 25px 25px;
    }
    &-text {
      padding: 20px 0px;
      text-align: center;
    }
  }

  .collapse {
    &:first-child {
      .card-header {
        border-top: 1px solid #ddd;
      }
    }
    &:last-child {
      .card-header {
        border-bottom: none;
      }
    }
    .card-header {
      box-shadow: none;
      border-bottom: 1px solid #ddd;
    }
    .collapse-trigger {
      position: relative;
      display: block;
      z-index: 4;
      .card-header-icon {
        color: $info;
        font-size: 21px;
      }
    }
    &:last-child {
      border-radius: 0 0 25px 25px;
    }

    &-items-content {
      display: flex;
      flex-direction: column;
      justify-content: end;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      .mide-aulas-navigation-item {
        padding: 1.75rem 0.75rem;
        p {
          margin-bottom: 0px;
        }
        &:not(:last-child) {
          border-bottom: 1px solid #ddd;
        }
        &.nuxt-link-active {
          background-color: #e8e8e8;
          border-right: 3px solid $info;
        }
      }
    }

    &-content {
      display: block;
      height: auto;
      padding: 0px;

      .radio {
        border: 1px solid #c2c2c2;
        opacity: 1;
        width: 22px;
        height: 22px;
      }

      .mide-aulas-navigation-title {
        #tituloaula {
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
