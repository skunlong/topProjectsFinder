import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'

Vue.use(Router)
Vue.use(require('vue-moment'))

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search/:org',
      name: 'Search',
      props: true,
      component: Search
    }
  ]
})
