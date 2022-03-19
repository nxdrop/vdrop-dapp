<template>
  <v-menu
    ref="metaTopMenu"
    content-class="muser-popover"
    v-bind="{ loading: true }"
    offset-y
    width="260"
    rounded="30px"
    open-delay="200"
    right
    absoluteorigin="center center"
    transition="scale-transition"
    :close-on-content-click="false"
    nudge-bottom="20"
    nudge-right="-90"
    :eager="true"
  >
    <template #activator="{ on, attrs }">
      <v-btn :loading="envChecking" color="primary" rounded width="180" v-bind="attrs" :class="className" v-on="on">{{
        btnText
      }}</v-btn>
    </template>
    <v-sheet class="muser-menu-popover"> hshd </v-sheet>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'
const DEF_CONNECT_BTN_TEXT = 'Connect Wallet'
export default {
  name: 'MetaUserMenu',
  components: {},
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      btnText: DEF_CONNECT_BTN_TEXT,
    }
  },
  computed: {
    ...mapGetters('web3', ['envChecking']),
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.muser {
  &-dot {
    &-loader {
    }
  }
}
</style>
