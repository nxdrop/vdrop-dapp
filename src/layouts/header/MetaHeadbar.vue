<template>
  <v-app-bar :clipped-left="clipped" fixed app elevation="0" class="meta-topbar" :height="height">
    <v-container class="meta-headbar d-md-inline-flex align-md-center d-sm-flex">
      <MetaLogo />
      <MetaNavMenus />
      <v-spacer />

      <MetamaskDropdown v-if="!selectedAddress" key="connectBtn" />
      <AccountDropdown v-if="!!selectedAddress" key="accountBtn" />

      <NotificationBell />
    </v-container>
  </v-app-bar>
</template>

<script>
import MetaLogo from '@comp/MetaLogo.vue'
import MetaNavMenus from '@/layouts/header/NavMenus.vue'
import MetamaskDropdown from '@comp/MetamaskDropdown.vue'
import NotificationBell from '@comp/NotificationBell.vue'
import AccountDropdown from '@comp/AccountDropdown.vue'

import { mapState, mapGetters } from 'vuex'
export default {
  name: 'MetaHeadbar',
  components: { MetaLogo, MetaNavMenus, MetamaskDropdown, NotificationBell, AccountDropdown },
  data() {
    return {
      height: 135,
      clipped: false,
      drawer: false,
      fixed: false,
    }
  },
  computed: {
    ...mapState('wal', ['selectedAddress']),
    ...mapGetters('web3', ['hasConnected']),
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.meta-topbar {
  &.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: transparent;
    // border-bottom: 1px solid #ccc;
  }
}
</style>
