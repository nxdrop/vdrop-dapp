<template>
  <v-container>
    <v-toolbar dense elevation="0">
      <v-toolbar-title>Credentails</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container fluid>
      <v-row>
        <v-col v-for="(card, idx) in cards" :key="idx + '_' + card.title" :cols="cardCols">
          <v-card outlined class="meta-credentail" elevation="0">
            <v-card-title class="d-flex">
              <v-avatar v-if="card.avatarUrl || card.icon" size="24">
                <v-icon v-if="card.icon">{{ card.icon }}</v-icon>
                <img v-else :src="card.avatarUrl" alt="avatar" />
              </v-avatar>
              <div>
                <span :class="card.avatarUrl || card.icon ? 'ps-2' : ''">{{ card.title }}</span>
              </div>
            </v-card-title>
            <v-img class="align-start px-4" height="150px">
              <p class="meta-credentail-desc">
                {{ card.desc }}
              </p>
            </v-img>

            <v-card-actions>
              <span>{{ card.createdBy }}</span>
              <v-spacer></v-spacer>
              <v-btn v-if="card.githubLink" key="githubBtn" icon @click="openLink(card.githubLink, 'github')">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn v-if="card.graphLink" key="subgraph" icon @click="openLink(card.graphLink, 'Thegraph')">
                <v-icon size="20">mdi-graph-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { dropSvg } from '@assets/drop.svg'
export default {
  name: 'UserNftList',
  components: {},
  data: () => ({
    cards: [
      {
        title: 'Whitelist',
        avatarImg: dropSvg,
        icon: 'mdi-water-outline',
        desc: 'MetaDrop registed Addresses Valueful',
        createdBy: '0x9d6...F36',
        type: 'metadrop',
        chainInfo: 'Polygon',
      },
      {
        title: 'Uniswap V2 Liquidity Provider ',
        avatarUrl: 'https://s1.ax1x.com/2022/03/25/qNfJyQ.png',
        desc: 'Any address that provided liquidity to a pool on Uniswap V2 on Ethereum mainnet',
        createdBy: '0xcFc...fC8',
        type: 'subgraph',
        chainInfo: 'Ethereum',
        graphLink: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
      },
      {
        title: 'Uniswap V2 Trader',
        avatarUrl: 'https://s1.ax1x.com/2022/03/25/qNfJyQ.png',
        desc: 'Any address that traded on Uniswap V2 on the Ethereum Mainnet',
        createdBy: '0xc...D655',
        type: 'subgraph',
        chainInfo: 'Ethereum',
        githubLink: 'https://github.com/Uniswap/v2-subgraph',
        graphLink: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
      },
      {
        title: 'OpenSea Legend Buyer',
        avatarUrl: 'https://opensea.io/static/images/logos/opensea.svg',
        desc: 'Addresses successfully bought NFT 10 times on Opensea via Matic Chain are eligible to claim for 3 mystery boxes between 2022/01/05 08:00 - 2022/01/26 08:00 GMT+08:00',
        createdBy: '0xD88F...9bAc',
        type: 'subgraph',
        chainInfo: 'MATIC',
        githubLink: 'https://github.com/Uniswap/v3-subgraph',
        graphLink: 'https://api.thegraph.com/subgraphs/name/nftgalaxy/opensea-polygon-jan',
      },
      {
        title: 'Uniswap V3 Trader',
        avatarUrl: 'https://s1.ax1x.com/2022/03/25/qNfJyQ.png',
        desc: 'Any address that traded on Uniswap V3 on the Ethereum Mainnet',
        createdBy: '0xcFc9B...5655',
        type: 'subgraph',
        chainInfo: 'Ethereum',
        githubLink: 'https://github.com/Uniswap/v3-subgraph',
        graphLink: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3/graphql',
      },
      {
        title: 'DyDx Trader',
        avatarUrl: 'https://s1.ax1x.com/2022/03/25/qNIc36.png',
        desc: 'Any address that traded on DyDx on the Binance',
        createdBy: '0xcFc9...a573',
        type: 'subgraph',
        chainInfo: 'Binance',
        githubLink: 'https://github.com/Uniswap/v3-subgraph',
        graphLink: 'https://trade.dydx.exchange/',
      },
      {
        title: 'Opensea Transaction Maker',
        avatarUrl: 'https://opensea.io/static/images/logos/opensea.svg',
        desc: 'Users who listed and sucessfuly sold at least one NFT or offered and succesfully bought at least one NFT',
        createdBy: '0xcFc9...5655',
        type: 'subgraph',
        chainInfo: 'MATIC',
        githubLink: 'https://github.com/itsjerryokolo/OpenSea',
        graphLink: 'https://api.thegraph.com/subgraphs/name/itsjerryokolo/opensea',
      },
      {
        title: 'Learn Web3 skill',
        avatarUrl: 'https://s1.ax1x.com/2022/03/25/qNoyZQ.png',
        desc: 'Users who learn web3 skills or write articles on CSDN community',
        createdBy: '0xcFc9...7355',
        type: 'subgraph',
        chainInfo: 'MATIC',
        githubLink: 'https://gitcode.net/explore',
      },
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
          return 3
        default:
          return cols
      }
    },
  },
  methods: {
    openLink(url, target = '_blank') {
      window.open(url, target)
    },
  },
}
</script>
<style lang="scss" scoped>
.meta {
  &-credentail {
    background: linear-gradient(26deg, #ffffff 0%, #f9faff 100%);

    p {
      font-size: 14px;
      font-weight: normal;
      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    }
  }
}
</style>
