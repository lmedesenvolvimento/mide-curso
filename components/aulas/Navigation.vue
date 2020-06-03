<template>
  <section class="mide-aulas-navigation">
    <div id="card-header-top" class="card-header">
      <p class="card-header-title"></p>
      <a class="card-header-icon">
        <b-icon icon="close"> </b-icon>
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
        <p class="card-header-title">
          {{ unidade.titulo }}
        </p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
        </a>
      </div>
      <p class="mide-aulas-navigation-unidade-text">
        {{ unidade.titulo }}
      </p>
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
              AULA {{ i + 1 }}
              <p>{{ aula.titulo }}</p>
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
  methods: {
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
  position: absolute;
  right: -32px;
  top: 24px;
  border: 1px solid #e8e8e8;
  opacity: 1;
  border-radius: 25px;

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

  &-item {
    align-items: center;
  }

  &-title {
    flex: 1;
    margin-left: 16px;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1.2px;
    color: #545454;
    :active {
      color: #a9b4d4;
    }
    p {
      font-weight: normal;
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
      padding: 16px 0px;
      text-align: center;
    }
  }

  .collapse {
    &:last-child {
      border-radius: 0 0 25px 25px;
    }

    &-content {
      height: 240px;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0 30px 15px 30px;
      .radio {
        border: 1px solid #3153b2;
        opacity: 1;
        width: 22px;
        height: 22px;
        margin-right: 10px;
      }
      .mide-aulas-navigation-title {
        padding-top: 20px;
      }
    }
  }
}
</style>
