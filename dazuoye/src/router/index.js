import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import index from '@/components/index'
import kind from '@/components/kind'
import bus from '@/components/bus'
import mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path: '/index',
          name: 'index',
          component: index 
        },
        {
          path: '/kind',
          name: 'kind',
          component: kind
        },
        {
          path: '/bus',
          name: 'bus',
          component: bus
        },
        {
          path: '/mine',
          name: 'mine',
          component: mine
        }
      ]
    }
  ]
})
