<template>
  <div v-if="!visible" class="mide-aulas-navigation-toggle-btn">
    <a class="card-header-icon" @click.stop="toggle">
      <b-icon icon="arrow-right"></b-icon>
    </a>
  </div>
  <section v-else class="mide-aulas-navigation">
    <div id="card-header-top" class="card-header">
      <p class="card-header-title"></p>
      <a class="card-header-icon" @click.stop="toggle">
        <b-icon icon="close"></b-icon>
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
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <p class="mide-aulas-navigation-unidade-text">{{ unidade.descricao }}</p>
      <hr class="dropdown-divider" />
      <div class="card-content">
        <div class="content">
          <nuxt-link
            v-for="(aula, i) in unidade.aulas"
            :key="aula.id"
            :to="lessonUrl(unidade, aula)"
            class="mide-aulas-navigation-item columns"
            :class="{ 'is-active': isLessonActive(aula) }"
          >
            <input
              class="radio"
              type="radio"
              name="answer"
              :checked="isLessonActive(aula)"
            />

            <br />
            <div class="mide-aulas-navigation-title">
              <div id="tituloaula">{{ aula.titulo }} {{ i++ }}</div>
              <p>{{ aula.descricao }}</p>
              <hr class="dropdown-divider" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
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
    }
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
  align-self: flex-start;
  border: 1px solid #e8e8e8;
  opacity: 1;
  border-radius: 25px;
  min-width: 320px;
  max-width: 320px;
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
  }
  .card-header-title {
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1.2px;
    color: #c0315f;
    text-transform: uppercase;
  }

  &-toggle-btn {
    background-color: white;
    box-shadow: 3px 3px 9px transparentize($color: #000000, $amount: 0.75);
    margin: $gap * 2 0px;
    border-radius: $gap;
    border: 1px solid transparentize($color: #000000, $amount: 0.9);
    .card-header-icon {
      padding: 0.75rem 2.5rem;
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
    &:last-child:not(.is-active) .card-header {
      border-radius: 0 0 25px 25px;
    }
    &-text {
      padding: 20px 0px;
      text-align: center;
    }
  }

  .collapse {
    .collapse-trigger {
      display: block;
    }
    &:last-child {
      border-radius: 0 0 25px 25px;
    }

    &-content {
      height: 240px;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0 30px 15px 30px;

      .radio {
        border: 1px solid #c2c2c2;
        opacity: 1;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        margin-bottom: 15px;
      }

      .mide-aulas-navigation-title {
        padding-top: 15px;
        #tituloaula {
          text-transform: uppercase;
        }
        p {
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
