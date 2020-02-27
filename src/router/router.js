import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Product from '@/views/Product.vue'

import Jindong from '@/views/Jindong.vue'
import Taobao from '@/views/Taobao.vue'
import Tianmao from '@/views/Tianmao.vue'
Vue.use(VueRouter)
// 2,创建路由对象，新建路由构造函数，用new
var router = new VueRouter({
// 3,配置路由
  routes: [
    {
      nema: 'index',
      path: '/index',
      component: Index
    },
    {
      nema: 'product',
      path: '/product/:id', // 配置路由的参数  ，定义
      component: Product,
      children: [
        {
          name: 'jindong',
          path: 'jindong',
          component: Jindong
        },
        {
          name: 'taobao',
          path: 'taobao',
          component: Taobao
        },
        {
          name: 'tianmao',
          path: 'tianmao',
          component: Tianmao
        }
      ]

    }
  ]
})

export default router
