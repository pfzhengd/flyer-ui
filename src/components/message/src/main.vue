<template>
  <transition name='fly-message-fade'>
    <div class='fly-message__notice' v-if='value'>
        <div class='fly-message__content'>
          <i :class='["fly-icon fly-message__icon",iconName,`is-${type}`]'></i>{{content}}
          <i v-if='closable || duration===0' @click='handleClose' class='fly-icon fly-message__close fly-icon-close'></i>
        </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'FlyMessage',
  props: {
    value: Boolean,
    content: String,
    icon: String,
    duration: {
      type: Number,
      default: 3
    },
    closable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator (value) {
        return ['success', 'info', 'warning', 'error', 'loading'].indexOf(value) > -1
      },
      default: 'info'
    }
  },
  data () {
    return {
      selfModel: undefined
    }
  },
  created () {
    if (this.duration >= 0) {
      this.startTimer()
    }
  },
  computed: {
    iconName () {
      switch (this.type) {
        case 'info':
        case 'warning':
          return 'fly-icon-info'
        case 'success':
          return 'fly-icon-success'
        case 'error':
          return 'fly-icon-error'
        case 'loading':
          return 'fly-icon-loading'
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('closed')
    },
    startTimer () {
      let timer = setTimeout(() => {
        this.$emit('closed')
        clearTimeout(timer)
      }, this.duration * 1000)
    }
  }
}
</script>
