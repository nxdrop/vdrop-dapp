<template>
  <div>
    <v-btn
      v-if="!walletConnected"
      key="connectedWalletBtn"
      :loading="envChecking"
      color="primary"
      rounded
      width="180"
      :class="className"
      @click="unConnectHandler"
      >{{ metamaskInjected ? 'Connect Wallet' : 'Download MetaMask' }}</v-btn
    >
    <v-menu
      v-if="walletConnected"
      key="metaUserMenuBtn"
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
          'LOgin'
        }}</v-btn>
      </template>
      <v-sheet class="muser-menu-popover"> hshd </v-sheet>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { connectMetamask } from '@lib/web3/metamask'

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
    ...mapGetters('web3', ['metamaskInjected', 'envChecking']),
    ...mapGetters('wal', ['walletConnected']),
    ...mapGetters(['getConnectBtn']),
  },
  methods: {
    async unConnectHandler() {
      if (!this.metamaskInjected) {
        //TODO
        return
      } else {
        const vm = this
        connectMetamask()
          .then((resp) => {
            console.log(resp)
            vm.$store.dispatch('wal/setWalletState', resp)
            // this.metamaskBtnText = resp.selectedAddress
            // if (SIGNUP_ROUTES.find((v) => v === vm.$route.path)) {
            //   vm.$store.dispatch('wal/setWalletState', resp)
            //   vm.opened = false
            // } else {
            //   vm.$router.push(SIGNUP_ROUTES[0], () => {
            //     vm.opened = false
            //   })
            // }
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.muser {
  &-popover {
  }
}
</style>
