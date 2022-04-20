<template>
  <v-app>
    <!-- <v-app-bar class="meta-header" light :dense="ui.dense" fixed app clipped-right elevation="0" absolute>
      <MetaHeader />
    </v-app-bar> -->
    <Header />

    <MetaDrawer />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <!-- <v-footer>
      <v-container>MetaDrop Labs</v-container>
    </v-footer> -->
    <Footer />
  </v-app>
</template>

<script>
// import MetaDrawer from '@comp/MetaDrawer.vue'
// import MetaHeader from '@ui/head/MetaHead.vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: { Header, Footer },
  data: () => ({
    dense: false,
    drawer: false,
  }),
  computed: {
    ...mapState(['ui']),
  },
  methods: {
    toggler() {
      this.drawer = !this.drawer
    },
  },
}
</script>
<style lang="scss" scoped>
.meta {
  &-header {
    position: fixed;
    background: transparent;
  }
}
</style>
