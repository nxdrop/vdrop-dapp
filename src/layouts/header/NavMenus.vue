<template>
  <div class="meta-navmenus" :class="vxsCls">
    <v-btn plain>Home</v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MetaNavMenus',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState(['vxsCls']),
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.meta {
  &-navmenus {
    flex: 0 0 auto;
    height: 100%;
    border: 1px solid #ee8;
  }
}
</style>
