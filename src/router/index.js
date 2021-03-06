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
  {
    path: '/signup',
    name: 'signup',
    redirect: { path: '/signup/index' },
    component: () => import(/*webpackChunkName: "signup" */ '@pages/signup/index.vue'),
    children: [
      {
        path: 'index',
        name: 'signupIndex',
        component: () => import(/*webpackChunkName: "player" */ '@pages/signup/index.vue'),
      },
    ],
  },
  {
    path: '/drop',
    name: 'drop',
    redirect: { path: '/drop/nft' },
    component: () => import(/*webpackChunkName: "signup" */ '@pages/drop/AddNFT.vue'),
    children: [
      {
        path: 'nft',
        name: 'addNFT',
        component: () => import(/*webpackChunkName: "player" */ '@pages/drop/AddNFT.vue'),
      },
    ],
  },
  {
    path: '/drop_detail/:id',
    name: 'dropDetail',
    component: () => import(/*webpackChunkName: "player" */ '@pages/drop/DropDetail.vue'),
  },
  {
    path: '/nfts',
    name: 'nfts',
    component: () => import(/*webpackChunkName: "signup" */ '@pages/nft/MyNfts.vue'),
    children: [
      {
        path: 'mine',
        name: 'myNft',
        component: () => import(/*webpackChunkName: "player" */ '@pages/nft/MyNfts.vue'),
      },
    ],
  },
]

;['push', 'replace'].forEach((method) => {
  const originalMethod = VueRouter.prototype[method]
  VueRouter.prototype[method] = function m(location) {
    return originalMethod.call(this, location).catch((error) => {
      if (error.name !== 'NavigationDuplicated') {
        // capture exception
      }
    })
  }
})

const router = new VueRouter({
  routes,
})

export default router
