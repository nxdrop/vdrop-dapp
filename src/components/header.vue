<template>
  <div class="header meta-head">
    <div class="container flex-center">
      <div class="logo"><img src="@/assets/logo.png" /></div>
      <div class="lang-box">
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn class="lang-button" v-bind="attrs" v-on="on">
              {{ langtext }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in langitems" :key="index" @click="swLang(item.title)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="v-navbar flex-center">
        <div v-for="(item, index) in navs" :key="index" class="v-nav-item">{{ item.navitem }}</div>
      </div>
      <div class="v-nav-right flex-center">
        <div class="v-search">
          <input id="" class="ui-input" type="text" placeholder="Search Address or NFT" name="" value="" />
          <button type="button" class="btn v-btn-so"></button>
        </div>
        <div class="drop-menu">
          <!-- <v-btn color="btn-primary" rounded elevation="0">Wallet / Email Sign in</v-btn> -->
          <button type="button" class="btn btn-sign"></button>
        </div>
        <div class="v-info"><img src="@/assets/images/bell.svg" /><span class="badge"></span></div>
      </div>
      <div class="v-btn-menu" @click="drawer = true">
        <v-icon aria-hidden="false">mdi-menu</v-icon>
      </div>
    </div>
    <!-- 手机弹窗 -->
    <v-navigation-drawer v-model="drawer" fixed left temporary>
      <div class="m-top-cell">
        <div class="v-search">
          <input id="" class="ui-input" type="text" placeholder="Search Address or NFT" name="" value="" />
          <button type="button" class="btn v-btn-so"></button>
        </div>
        <div class="flex-center">
          <div class="drop-menu">
            <!-- <v-btn color="btn-primary" rounded elevation="0">Wallet / Email Sign in</v-btn> -->
            <button type="button" class="btn btn-sign"></button>
          </div>
          <div class="v-info"><img src="@/assets/images/bell.svg" /><span class="badge"></span></div>
        </div>
      </div>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in navs" :key="index">
            <v-list-item-title>{{ item.navitem }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      langtext: 'English',
      langitems: [
        {
          title: 'English',
        },
        {
          title: '中文',
        },
      ],
    }
  },
  computed: {
    navs() {
      var navlist = [
        {
          navitem: 'Claim',
        },
        {
          navitem: 'Evolve',
        },
        {
          navitem: 'AriDrop Tool',
        },
      ]
      return [...navlist]
    },
  },
  methods: {
    swLang(e) {
      this.langtext = e
      if (e == 'English') {
        // this.$i18n.locale = 'en'
      } else {
        // this.$i18n.locale = 'cn'
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.meta-head {
  &.header {
    margin-bottom: 20px;
  }
}
</style>
