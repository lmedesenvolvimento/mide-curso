<template>
  <section class="section">
    <div class="tile body-progress is-2 is-mobile">
      <div class="tile is-vertical  is-ancestor box">
        <p class="body-progress-title has-text-centered">Conquistas</p>

        <br />

        <article class="tile is-child">semente</article>
        <article class="tile is-child">planta</article>
        <article class="tile is-child">árvore</article>
      </div>
    </div>

    <div class="columns body-card">
      <mide-card
        v-for="(unit, index) in units"
        :key="index"
        :title="unit.title"
        :unit="unit"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',

  data() {
    return {
      units: [
        {
          id: 'boas-vindas',
          title: 'Boas Vindas',
          description: 'Ensinando em um mundo digital'
        },
        {
          id: 'ementa',
          title: 'Ementa',
          description: 'Introdução ao curso'
        },
        {
          id: 'objetivos',
          title: 'Objetivos de Aprendizagem',
          description: ' Introdução ao curso'
        },
        {
          id: 'unit1',
          title: 'Unidade 1',
          description: ' Lorem ipsu'
        },
        {
          id: 'unit2',
          title: 'Unidade 2',
          description: ' Lorem ipsu'
        },
        {
          id: 'unit3',
          title: 'Unidade 3',
          description: ' Lorem ipsu'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.body-card {
  max-width: 80%;
  float: right;
  flex-wrap: wrap;
  padding-bottom: 4%;
}
.body-progress {
  float: left;
  position: absolute;
  .box {
    border: 1px solid #e8e8e8;
    border-radius: 25px;
    opacity: 1;
  }
  .body-progress-title {
    font: 14px avenir-next-lt-pro-bold;
    letter-spacing: 1.4px;
    color: #c0315f;
    text-transform: uppercase;
    opacity: 1;
  }
}

@media (max-width: 767px) {
  .body-progress {
    position: relative;
    left: 32%;
  }
  .body-card {
    margin-top: 8%;
    width: 100%;
    float: 0;
    margin-right: 5%;
  }
}
</style>
