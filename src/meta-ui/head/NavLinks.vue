<template>
  <nav class="meta-links px-2 ms-4" :class="ui.xsHideCls">
    <ul>
      <li>
        <a href="#" class="nav-link"><span>Home</span></a>
      </li>
      <li>
        <a href="#" class="nav-link" @click="navLinkHandler('/drop/nft')"><span>Create Drop</span></a>
      </li>
      <li>
        <a href="#" class="nav-link"><span>NFT</span></a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MetaNavLinks',
  components: {},
  data: () => ({}),
  computed: { ...mapState(['ui']) },
  methods: {
    navLinkHandler(pathname) {
      this.$router.push(pathname)
    },
  },
}
</script>
<style lang="scss" scoped>
nav.meta {
  &-links {
    vertical-align: middle;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & > ul {
      list-style-type: none;
      overflow: hidden;
      padding: 0;
      margin: 0;

      & > li {
        display: inline;
        text-decoration: none;
        list-style: none;
      }
    }

    a.nav-link {
      text-decoration: none;

      color: #5c5c5c;
      & > span {
        padding: 0 8px;
      }
    }
  }
}
</style>
