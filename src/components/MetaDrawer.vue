<template>
  <v-navigation-drawer
    :value="rightDrawer"
    app
    right="right"
    clipped
    fixed
    disable-resize-watcher
    disable-route-watcher
    hide-overlay
    @input="drawerInputChanged"
  >
    <v-container>
      <v-list-item key="metaMobileHead">
        {{ selectedAdddress || 'Open DApp in MetaMask' }}
      </v-list-item>
      <v-list>
        <v-list-item>hhhh</v-list-item>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'MetaDrawer',
  components: {},
  data: () => ({
    right: true,
  }),
  computed: {
    ...mapState('wal', ['selectedAdddress']),
    ...mapState('ui', ['drawer']),
    ...mapGetters('ui', ['rightDrawer']),
  },
  methods: {
    drawerInputChanged(v) {
      this.$store.dispatch('ui/toggleDrawer', v)
    },
  },
}
</script>
<style lang="scss" scoped></style>
