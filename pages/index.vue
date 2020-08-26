<template>
  <center>
    <div class="content-index">
      <img src="~assets/images/imagem-inicio.png" />

      <h3>Curso de Formação</h3>
      <h1 class="title is-1">Uso de Recursos Educacionais Digitais</h1>
      <p>
        O curso irá lhe ajudar a entender como a cultura digital pode mudar
        algumas práticas de sala de aula e conhecer Recursos Educacionais
        Digitais (RED) de Língua Portuguesa e Matemática.
      </p>
      <br />
      <button>
        <nuxt-link to="/home">
          <img src="~assets/images/botao-iniciar-curso.png" width="200" />
        </nuxt-link>
      </button>
    </div>
  </center>
</template>

<script>
export default {}
</script>

<style lang="scss">
.content-index {
  margin-bottom: 100px;

  h3 {
    font: 18px avenir-next-lt-pro-bold;
    letter-spacing: 1.2px;
    color: #c0315f;
    text-transform: uppercase;
    margin-top: 40px;
  }
  button {
    border: none;
    background: none;
  }
}
</style>
