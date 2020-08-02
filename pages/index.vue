<template>
  <div class="page">
    <h1>Homepage.vue</h1>
    <b-button type="is-primary" @click="openWelcomeDialog"
      >Open Dialog</b-button
    >
    <ModalChatDialog :visible="isWelcomeActive" />
  </div>
</template>

<script>
import ModalChatDialog from '@/components/ModalChatDialog'

export default {
  components: { ModalChatDialog },
  data() {
    return {
      isWelcomeActive: false
    }
  },
  methods: {
    openWelcomeDialog() {
      this.isWelcomeActive = true
    }
  }
}
</script>

<style lang="scss"></style>
