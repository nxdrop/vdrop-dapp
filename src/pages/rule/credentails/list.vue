<template>
  <v-container>
    <v-toolbar dense elevation="0">
      <v-toolbar-title>Credentails</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container fluid>
      <v-row>
        <v-col v-for="(card, idx) in cards" :key="idx + '_' + card.title" :cols="cardCols">
          <v-card outlined>
            <v-img
              class="white--text align-center"
              gradient="to bottom, rgba(0,0,0,.41), rgba(0,0,0,.85)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-subtitle v-text="card.desc || ''"></v-card-subtitle>
            </v-img>

            <v-card-actions>
              <span>0x9d6...F36</span>
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
export default {
  name: 'UserNftList',
  components: {},
  data: () => ({
    cards: [
      { title: 'Whitelist', desc: 'MetaDrop registed Addresses Valueful', flex: 4 },
      {
        title: 'Susiswap ',
        desc: 'MetaDrop registed Addresses Valueful',
        flex: 4,
      },
      { title: 'MetaDrop Token for Heco', desc: 'MetaDrop With Heco validation balance over 5000HT ', flex: 4 },
    ],
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
  },
  methods: {},
}
</script>
<style lang="scss" scoped></style>
