<template>
  <b-modal
    ref="modal"
    :active.sync="visible"
    has-modal-card
    trap-focus
    :width="480"
    :can-cancel="false"
    :destroy-on-hide="true"
    aria-role="dialog"
    aria-modal
    @close="onClose"
  >
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Boas Vindas!</p>
      </header>
      <section class="modal-card-body">
        <mide-chat-dialog v-model="dialogIndex" :dialogs="dialogs">
          <template v-slot:header>
            <img src="~assets/images/avatar-boas-vindas-marcos.png" />
            <img src="~assets/images/avatar-boas-vindas-carla.png" /><br />
            Marcos e Carla <br />
            <small>Professores do curso</small>
            <center>
              <hr class="modal-horizontal-line" />
            </center>
          </template>
        </mide-chat-dialog>
      </section>
      <footer class="modal-card-foot">
        <div class="modal-card-foot-actions">
          <span v-if="isBool">
            <b-button type="is-info" rounded @click="yesBoolDialog"
              >Sim</b-button
            >
            <b-button type="is-info" rounded @click="noBoolDialog"
              >Não</b-button
            >
          </span>
          <b-button
            v-else
            class="modal-card-foot-actions-next"
            type="is-info"
            icon-right="icon-arrow-right"
            icon-pack="custom"
            rounded
            @click="nextDialog"
          />
        </div>
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  model: {
    prop: 'active',
    event: 'change'
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    dialogs: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      visible: false,
      dialogIndex: 0
    }
  },
  computed: {
    currentDialog() {
      return this.dialogs[this.dialogIndex]
    },
    isBool() {
      return this.currentDialog && this.currentDialog.type === 'bool'
    }
  },
  watch: {
    active(nextValue) {
      this.visible = nextValue
    },
    dialogIndex() {
      if (this.currentDialog.type === 'end') {
        this.visible = false
        this.onClose()
      }
    }
  },
  methods: {
    nextDialog() {
      if (this.dialogIndex < this.dialogs.length - 1) this.dialogIndex++
    },
    yesBoolDialog() {
      const newDialogs = [...this.dialogs, ...this.currentDialog?.yes]
      if (this.currentDialog) this.currentDialog.text = 'Sim'

      this.$emit('dialogs', newDialogs)

      this.$nextTick(() => {
        this.nextDialog()
      })
    },
    noBoolDialog() {
      if (this.currentDialog) this.currentDialog.text = 'Não'
      const newDialogs = [...this.dialogs, ...this.currentDialog?.no]

      this.$emit('dialogs', newDialogs)

      this.$nextTick(() => {
        this.nextDialog()
      })
    },
    onClose() {
      this.$emit('change', false)
      this.$emit('close', true)
      this.dialogIndex = 0
    }
  }
}
</script>

<style lang="scss">
.modal-card {
  border-radius: 25px;
  > .modal-card-head {
    box-shadow: 3px 3px 18px #696969;
    border-bottom: none;
    background-color: #fff;
    .modal-card-title {
      text-transform: uppercase;
      text-align: center;
      color: #696969;
      font: Bold 18px avenir-next-lt-pro-bold;
    }
  }
  .modal-horizontal-line {
    width: 50px;
  }
  .modal-card-foot {
    background-color: #fff;
    border: none;
    &-actions {
      margin: auto;
      &-next {
        width: 48px;
        height: 48px;
      }
      .button {
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
}
</style>
