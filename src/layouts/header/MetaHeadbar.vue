<template>
  <v-app-bar :clipped-left="clipped" fixed app elevation="0" class="meta-topbar" :class="metaHeadOver" :height="height">
    <v-container class="meta-headbar d-md-inline-flex align-md-center d-sm-flex">
      <MetaLogo />
      <MetaNavMenus />
      <v-spacer class="d-none d-md-flex" />

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
    ...mapGetters(['metaHeadOver', 'getVxsCls']),
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroller)
  },
  methods: {
    handleScroller() {
      let h = this.height || 135
      let vm = this

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop <= 20) {
        vm.$store.dispatch('setOverCls', '')
      } else if (scrollTop > 20 && scrollTop <= h) {
        vm.$store.dispatch('setOverCls', 'meta-h-over35')
      } else {
        vm.$store.dispatch('setOverCls', 'meta-h-over')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.meta-topbar {
  &.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: transparent;
    &.meta-h-over35 {
      background-color: rgba(#f5f5f5, 0.35);
      border-bottom: 1px solid #f5f5f5;
    }
    &.meta-h-over {
      background-color: rgba(#f5f5f5, 0.95);
      border-bottom: 1px solid #f5f5f5;
    }
  }
}
</style>
