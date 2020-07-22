<template lang="md">
 <img src="~assets/images/explicacao-carla-e-marcos.png" class="mide-explicacao" />
  <div class="mide-texto-inicial">
    <p>O mundo mudou significativamente nossa maneira de interagir, de consumir, de aprender e, também de ensinar! Nesta unidade, iremos compreender como a cultura digital pode modificar a prática docente. Trataremos de duas temáticas.</p>
    <p>Na <strong>temática 1</strong>, Cibercultura e Educação,discutiremos o conceito de cibercultura e como a mesma implica em mudanças nas práticas desenvolvidas na sociedade e na escola. </p>
    <p>Na <strong>temática 2</strong>, A cultura digital na BNCC, abordaremos as competências gerais relacionadas à cultura digital apresentadas pela Base Nacional Comum Curricular (BNCC) e suas implicações para o trabalho docente.</p>
  </div>
  <center>
  <button
        name="prosseguir"
        class="button is-rounded "
        :disabled="disabled"
        @click="submit"
  /></center>
</template>

<script>
export default {
  layout: 'aulas'
}
</script>

<style>
.mide-explicacao {
  float: left;
}
.mide-texto-inicial {
  margin-top: 32px;
  font-size: 14px;
  text-indent: 50px;
}

.button {
  margin-top: 32px;
  background-image: url('~assets/images/botao-prosseguir.png');
  width: 145px;
  height: 37px;
}
</style>
