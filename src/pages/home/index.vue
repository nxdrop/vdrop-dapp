<template>
  <v-container>
    <v-col class="meta-cards-wrap" md="10" xs="12">
      <v-row>
        <v-col v-for="(item, idx) in activedDrops" :key="idx" class="m-col">
          <v-card class="meta-drop-card" elevation="0" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline">
                  <span>{{ item.name }}</span>
                </div>
                <v-list-item-title> </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.desc || '' }}
                </v-list-item-subtitle>
                <div class="token-wrap">
                  <span class="m-drop-total">{{ item.total }}</span
                  ><span class="m-symbol">{{ item.symbol }}</span>
                </div>
              </v-list-item-content>
              <v-list-item-avatar size="80" tile color="grey"></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn rounded outlined small text class="px-6">Claim</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: 'HomeIndex',
  components: {},
  data() {
    return {
      activedDrops: [
        {
          name: 'Next Drop',
          symbol: 'NDT',
          total: 200,
          iconImg: '',
          desc: 'Drop descriptions aaaa',
          unitPrice: 12.5,
        },
        {
          name: 'DeDrop',
          symbol: 'DDT',
          total: 200,
          iconImg: '',
          desc: 'Drop descriptions aaaa',

          unitPrice: 12.5,
        },
        {
          name: 'NFT Drop',
          symbol: '',
          total: 200,
          iconImg: '',
          desc: 'Drop descriptions aaaa',
          unitPrice: 312.5,
        },
        {
          name: '',
          symbol: '',
          total: 200,
          iconImg: '',
          desc: 'Drop descriptions aaaa',
          unitPrice: 12.5,
        },
        {
          name: '',
          symbol: '',
          total: 200,
          iconImg: '',
          unitPrice: 12.5,
        },
        {
          name: '',
          symbol: '',
          total: 200,
          iconImg: '',
          unitPrice: 12.5,
        },
        {
          name: '',
          symbol: '',
          total: 200,
          iconImg: '',
          unitPrice: 12.5,
        },
      ],
    }
  },
  computed: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.m-col {
  flex: 0 0 25%;
  div.meta-drop-card {
    height: 175px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }

  span.m-symbol {
    margin-left: 0.25em;
    font-size: 0.85em;
  }
}
</style>
