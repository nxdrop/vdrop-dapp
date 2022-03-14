<template>
  <v-app-bar :clipped-left="clipped" fixed app elevation="0" class="meta-topbar" :height="height">
    <v-container class="meta-headbar d-md-inline-flex align-md-center d-sm-flex">
      <MetaLogo />
      <MetaNavMenus />
      <v-spacer />
      <MetamaskDropdown />
      <NotificationBell />
    </v-container>
  </v-app-bar>
</template>

<script>
import MetaLogo from '@comp/MetaLogo.vue'
import MetaNavMenus from '@/layouts/header/NavMenus.vue'
import MetamaskDropdown from '@comp/MetamaskDropdown.vue'
import NotificationBell from '@comp/NotificationBell.vue'
export default {
  name: 'MetaHeadbar',
  components: { MetaLogo, MetaNavMenus, MetamaskDropdown, NotificationBell },
  data() {
    return {
      height: 135,
      clipped: false,
      drawer: false,
      fixed: false,
    }
  },
  computed: {},
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
