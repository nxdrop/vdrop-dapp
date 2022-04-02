<template>
  <v-container>
    <v-toolbar dense elevation="0">
      <v-toolbar-title>My NFTs</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container fluid>
      <v-row>
        <v-col v-for="(card, idx) in cards" :key="idx + '_' + card.title" :cols="cardCols">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'UserNftList',
  components: {},
  data: () => ({
    cards: [
      // { title: 'HongKondg', src: 'https://s1.ax1x.com/2022/03/22/qKTyB8.png', flex: 4 },
      // {
      //   title: 'TEst Deops',
      //   src: 'https://gateway.pinata.cloud/ipfs/QmPTq4aSfUpogxfipi1w5s8ekVT6EqwmPL3KpAu5p42g9t/1.png',
      //   flex: 4,
      // },
      // { title: 'HongKondgGGG', src: 'https://s1.ax1x.com/2022/03/22/qKTyB8.png', flex: 4 },
      // { title: 'Best airlines', src: 'https://s1.ax1x.com/2022/03/22/qKTRhj.png', flex: 4 },
      // { title: 'MobkeyTest', src: 'https://s4.ax1x.com/2022/02/22/bpVpGQ.png' },
    ],
    nfts: [],
  }),
  computed: {
    cardCols() {
      let cols = 4
      const bke = this.$vuetify.breakpoint.name
      switch (bke) {
        case 'xs':
          return 12
        case 'sm':
          return 6
        case 'md':
        case 'lg':
        case 'xl':
          return 2
        default:
          return cols
      }
    },
    ...mapGetters('wal', ['currentAddress']),
  },
  mounted() {
    console.log('-----------------------')
  },
  methods: {
    async nftlist() {
      if (this.currentAddress) {
        try {
          await this.$store.dispatch('biz/loadDropList')
        } catch (ex) {
          this.$toast(ex.message, 'fail', 6000)
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
