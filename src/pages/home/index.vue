<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, idx) in activedDrops" :key="idx" class="m-col">
        <v-card class="meta-drop-card" elevation="0" outlined>
          <v-list-item three-line>
            <v-list-item-content>{{ item.name }}</v-list-item-content>
            <v-list-item-avatar size="60" tile color="grey"></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
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
          unitPrice: 12.5,
        },
        {
          name: 'DeDrop',
          symbol: 'DDT',
          total: 200,
          iconImg: '',
          unitPrice: 12.5,
        },
        {
          name: 'NFT Drop',
          symbol: '',
          total: 200,
          iconImg: '',
          unitPrice: 312.5,
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
    height: 225px;
  }
}
</style>
