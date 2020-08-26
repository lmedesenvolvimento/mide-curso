<template>
  <div id="aula">
    <div
      class="mide-lesson-container"
      :class="{ 'is-full': !lessonNavIsVisible }"
    >
      <mide-aulas-navigation />
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      lessonNavIsVisible: ({ site }) => site.lessonNavIsVisible
    })
  }
}
</script>

<style lang="scss">
.mide-lesson-container {
  display: flex;
  align-items: flex-start;
  @media (max-width: $widescreen) {
    flex-wrap: wrap-reverse;
  }
  &.is-full .mide-lesson {
    max-width: $desktop;
  }
}

@media screen and (max-width: $widescreen) {
  #aula {
    padding: 16px;
  }
}

#aula {
  .page-enter-active,
  .page-leave-active {
    transition: all 0.5s;
  }
  .page-enter {
    opacity: 0;
    transform: translateY(25%);
  }
  .page-leave-to {
    opacity: 0;
  }
}
</style>
