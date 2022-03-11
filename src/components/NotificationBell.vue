<template>
  <v-menu
    ref="metaNotificationDrop"
    v-model="opened"
    content-class="meta-belldrop"
    :close-on-content-click="false"
    width="70"
    open-delay="200"
    offset-y
    bottom
    right
    absoluteorigin="center center"
    transition="scale-transition"
    nudge-bottom="20"
    nudge-right="-280"
  >
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" plain :ripple="false" v-on="on">
        <v-badge color="green" overlap dot>
          <v-img :src="bellSvg" :width="bellSize" :height="bellSize"></v-img>
        </v-badge>
      </v-btn>
    </template>
    <v-card class="mx-auto" width="350">
      <v-list class="my-6">
        <v-list-item>
          <v-list-item-title>HHHH</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>HHHH</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import bellSvg from '@assets/bell.svg'
export default {
  name: 'NotificationBell',
  components: {},
  data() {
    return {
      opened: false,
      bellSize: 28,
      bellSvg,
      unreadMessages: [{ message: 'hi' }],
    }
  },
  computed: {
    unreadNum: () => (this.unreadMessages ? this.unreadMessages.length : 0),
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.meta {
  &-belldrop {
    border-radius: 26px;
    background: #fff;
  }
  &-bell {
    &-container {
      padding: 0 12px;

      & > div.inner-box {
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        width: 48px;
        height: 48px;
        border: 1px solid #fce088;

        & > div.notification-dot {
          width: 16px;
          height: 16px;
          border-radius: 16px;
          background: green;
          float: right;
          top: 2px;
        }
      }
    }
  }
}
</style>
