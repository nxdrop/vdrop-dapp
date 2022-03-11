import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@views/Home.vue'
import HomePage from '@pages/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   redirect: { path: '/signup/player' },
  //   component: () => import(/*webpackChunkName: "signup" */ '@pages/signup/player.vue'),
  //   children: [
  //     {
  //       path: 'player',
  //       name: 'signupAsPlayer',
  //       component: () => import(/*webpackChunkName: "player" */ '@pages/signup/player.vue'),
  //     },
  //   ],
  // },
]

const router = new VueRouter({
  routes,
})

export default router
