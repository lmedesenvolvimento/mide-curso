<template
  ><div class="question-border">
    <div class="question-box">
      <div class="question-text">
        <p>PERGUNTA!</p>
        Lorem ip sum lo rem ipsum lore ipsum lorem ipem sum ip sum loremem ipsum
        ipsum lor em ipem sum ipsemum?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    question: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.question-border {
  border-left: 7px solid #3153b2;
  border-radius: 6px 0px 0px 6px;
  width: 591px;

  .question-box {
    height: 92px;
    padding: 5px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 15px #3c80d116;
    border-radius: 15px;
    opacity: 1;

    .question-text {
      font-size: 14px;
      letter-spacing: 0px;
      color: #4b4b4b;
      padding: 0 15px 0 15px;
      p {
        font: Bold 12px avenir-next-lt-pro-bold;
        letter-spacing: 1px;
        color: #c0315f;
        margin: 5px 0 10px 0;
      }
    }
  }
}
</style>
