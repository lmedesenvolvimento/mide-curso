<template>
  <nuxt-child />
</template>

<script>
export default {
  created() {
    const api = new global.BridgeRestApi()
    const course = api.obterDadosCurso()
    console.log(api, course)
  }
}
</script>

<style></style>
