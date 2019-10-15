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
import into from '@/components/into'
import shop from '@/components/shop'
import shangpin from '@/components/shangpin'
import detial from '@/components/detial'
import recommend from '@/components/recommend'
import list from '@/components/list'
import store from '@/components/store'
import storeIndex from '@/components/storeIndex'

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
    },
    {
      path: '/into',
      name: 'into',
      component: into
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      redirect:'shangpin',
      children:[
        {
          path: '/shangpin',
          name: 'shangpin',
          component: shangpin
        },
        {
          path: '/detial',
          name: 'detial',
          component: detial
        },
        {
          path: '/recommend',
          name: 'recommend',
          component: recommend
        }
      ]
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/store',
      name: 'store',
      component: store,
      children:[
        {
          path: '/storeIndex',
          name: 'storeIndex',
          component: storeIndex
        }
      ]
    }
  ]
})
