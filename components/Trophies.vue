<template>
  <div class="mide-trophies">
    <div class="box">
      <div class="mide-trophies-header">Conquistas</div>
      <div class="mide-trophies-item">
        <div
          class="mide-trophies-item-background"
          :style="`background-image: url(${seedPng})`"
        ></div>
        <div class="mide-trophies-item-title">
          Semente
        </div>
        <mide-radial-progress
          :diameter="progressDiameter"
          :completed-steps="33"
          :total-steps="100"
          :stroke-width="8"
          :inner-stroke-width="8"
          start-color="#3153B2"
          stop-color="#3153B2"
          inner-stroke-color="#D6D6D6"
        >
        </mide-radial-progress>
      </div>
      <div class="mide-trophies-item">
        <div
          class="mide-trophies-item-background"
          :style="`background-image: url(${plantPng})`"
        ></div>
        <div class="mide-trophies-item-title">
          Planta
        </div>
        <mide-radial-progress
          :diameter="progressDiameter"
          :completed-steps="22"
          :total-steps="100"
          :stroke-width="8"
          :inner-stroke-width="8"
          start-color="#3153B2"
          stop-color="#3153B2"
          inner-stroke-color="#D6D6D6"
        >
        </mide-radial-progress>
      </div>
      <div class="mide-trophies-item">
        <div
          class="mide-trophies-item-background"
          :style="`background-image: url(${treePng})`"
        ></div>
        <div class="mide-trophies-item-title">
          Árvore
        </div>
        <mide-radial-progress
          :diameter="progressDiameter"
          :completed-steps="50"
          :total-steps="100"
          :stroke-width="8"
          :inner-stroke-width="8"
          start-color="#3153B2"
          stop-color="#3153B2"
          inner-stroke-color="#D6D6D6"
        >
        </mide-radial-progress>
      </div>
    </div>
  </div>
</template>

<script>
import seedPng from '@/assets/images/throphies/seed.png'
import plantPng from '@/assets/images/throphies/plant.png'
import treePng from '@/assets/images/throphies/tree.png'

export default {
  data() {
    return {
      progressDiameter: 100,
      seedPng,
      plantPng,
      treePng
    }
  }
}
</script>

<style lang="scss">
.mide-trophies {
  max-width: 25%;
  width: 25%;
  padding: 0.75rem;
  user-select: none;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $gap;
    border: 1px solid #e8e8e8;
    border-radius: $gap;
  }
  &-header {
    @include avenir-bold;
    letter-spacing: 1.4px;
    color: $secondary;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: $gap * 1.2;
  }
  &-item {
    position: relative;
    @include avenir-bold;
    letter-spacing: 1.4px;
    text-align: center;
    text-transform: uppercase;
    color: #545454;
    padding: 2rem 0px;
    width: 112px;
    height: 112px + $gap * 1.5;
    &-background {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-repeat: no-repeat;
      background-size: 70%;
      background-position: center;
      filter: grayscale(100%);
    }
    &-title {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 11px;
    }
  }
  .radial-progress-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
@media screen and (max-width: $tablet) {
  .mide-trophies {
    max-width: 100%;
    width: 100%;
  }
}
</style>
