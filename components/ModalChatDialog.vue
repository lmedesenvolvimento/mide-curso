<template>
  <b-modal
    ref="modal"
    :active.sync="visible"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-modal
  >
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Boas Vindas!</p>
      </header>
      <section class="modal-card-body">
        <mide-chat-dialog v-model="dialogIndex" :dialogs="dialogs">
          <template v-slot:header>
            Marcos e Carla <br />
            <small>Professores do curso</small>
          </template>
        </mide-chat-dialog>
      </section>
      <footer class="modal-card-foot">
        <div class="modal-card-foot-actions">
          <span v-if="dialogIndex === 3">
            <b-button type="is-primary" @click="yesFluxDialog">Sim</b-button>
            <b-button type="is-primary" @click="noFluxDialog">Não</b-button>
          </span>
          <b-button
            v-else
            type="is-primary"
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
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogIndex: 0,
      yesFlux: [
        {
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        },
        {
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        },
        {
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        },
        {
          right: true,
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        }
      ],
      noFlux: [
        {
          right: true,
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        },
        {
          right: true,
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        },
        {
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        },
        {
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        }
      ],
      dialogs: [
        {
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        },
        {
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        },
        {
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        },
        {
          right: true,
          avatar:
            'https://64.media.tumblr.com/4b28d2f57b17cfab9b61375993079d94/1b723c96385f867e-93/s500x750/595359073bd03b058856ad2309f91bba6772b8e8.png',
          text:
            'Fugiat consequat duis dolor et et elit in veniam consequat do nostrud minim.'
        }
      ]
    }
  },
  methods: {
    nextDialog() {
      if (this.dialogIndex < this.dialogs.length - 1) this.dialogIndex++
    },
    yesFluxDialog() {
      this.dialogs = [...this.dialogs, ...this.yesFlux]

      this.$nextTick(() => {
        this.nextDialog()
      })
    },
    noFluxDialog() {
      this.dialogs = [...this.dialogs, ...this.noFlux]

      this.$nextTick(() => {
        this.nextDialog()
      })
    }
  }
}
</script>

<style></style>
