<template>
  <section class="mide-aulas-navigation">
    <div class="card-header">
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
      :class="{ 'is-active': isOpen == index }"
      @open="isOpen = index"
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
      <div class="card-content">
        <div class="content">
          <nuxt-link
            v-for="(aula, i) in unidade.aulas"
            :key="aula.id"
            :to="lessonUrl(unidade, aula)"
            class="mide-aulas-navigation-item columns"
          >
            <input
              class="radio"
              type="radio"
              name="answer"
              :checked="isLessonActive(aula)"
            />
            <div class="mide-aulas-navigation-title">
              AULA {{ i + 1 }}
              <p>{{ aula.titulo }}</p>
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
  right: 0;
  top: 24px;
  &-item {
    align-items: center;
  }
  &-title {
    flex: 1;
    margin-left: 16px;
  }
  &-unidade {
    &-text {
      padding: 16px 0px;
      text-align: center;
    }
  }
  .collapse {
    &-content {
      height: 240px;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
