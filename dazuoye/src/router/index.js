import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import index from '@/components/index'
import kind from '@/components/kind'
import bus from '@/components/bus'
import mine from '@/components/mine'
import life from '@/components/life'
import push from '@/components/push'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect:'index',
      children:[
        {
          path: '/index',
          name: 'index',
          component: index 
        },
        {
          path: '/kind',
          name: 'kind',
          component: kind,
          children:[
            {
              path: '/life',
              name: 'life',
              component: life
            },
            {
              path: '/push',
              name: 'push',
              component: push
            }
          ]
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
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
