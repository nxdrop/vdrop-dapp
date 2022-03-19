<template>
  <v-navigation-drawer
    v-model="rightDrawer"
    app
    right="right"
    clipped
    fixed
    disable-resize-watcher
    disable-route-watcher
  >
    <v-container>
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
    ...mapState(['ui']),
    ...mapGetters('ui', ['rightDrawer']),
  },
  methods: {},
}
</script>
<style lang="scss" scoped></style>
