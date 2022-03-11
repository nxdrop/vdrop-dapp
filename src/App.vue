<template>
  <v-app>
    <MetaHeadbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MetaHeadbar from '@/layouts/header/MetaHeadbar.vue'
export default {
  name: 'App',
  components: { MetaHeadbar },
  data: () => ({
    //
  }),
}
</script>
