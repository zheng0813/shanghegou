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
import storeAll from '@/components/storeAll'
import storeActive from '@/components/storeActive'
import storeNew from '@/components/storeNew'
import storeShow from '@/components/storeShow'

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
          component: index,
           meta:{
            title:"尚赫购-首页"
          },
        },
        {
          path: '/kind',
          name: 'kind',
          component: kind,
          meta:{
            title:"尚赫购-商品分类"
          },
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
          component: bus,
          meta:{
            title:"尚赫购-购物车"
          },
        },
        {
          path: '/mine',
          name: 'mine',
          component: mine,
          meta:{
            title:"尚赫购-我的商城"
          },
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta:{
        title:"尚赫购-商品搜索"
      },
    },
    {
      path: '/into',
      name: 'into',
      component: into,
      meta:{
        title:"登录"
      },
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      meta:{
        title:"尚赫购-商品详情"
      },
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
      component: list,
      meta:{
        title:"尚赫购-商品列表"
      },
    },
    {
      path: '/storeShow',
      name: 'storeShow',
      component: storeShow,
      meta:{
        title:"尚赫GO-店铺介绍"
      },
    },
    {
      path: '/store',
      name: 'store',
      component: store,
      redirect: "storeIndex",
      meta:{
            title:"尚赫GO-店铺首页"
          },
      children:[
        {
          path: '/storeIndex',
          name: 'storeIndex',
          component: storeIndex,
        },
        {
          path: '/storeAll',
          name: 'storeAll',
          component: storeAll
        },
        {
          path: '/storeActive',
          name: 'storeActive',
          component: storeActive
        },
        {
          path: '/storeNew',
          name: 'storeNew',
          component: storeNew
        }
      ]
    }
  ]
})
