import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'
import personal from '@/views/personal.vue'

Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/index',
      component: Index
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'personal',
      path: '/personal/:id',
      component: personal
    }

  ]
})

// 导航守卫，在配置路由添加
router.beforeEach((to, from, next) => {
  // 只有访问那些需要授权的api的时候，才需要进行守卫
  if (to.path.indexOf('/personal/') === 0) {
    // 判断当前用户是否登陆过
    let token = localStorage.getItem('mytoken')
    if (token) { // 如果有token数据，说明登陆过了
      next()
    } else { // 否则，没有登陆则重新云登陆--重定向
      next({ name: 'login' })
    }
  } else { // 如果访问不需要授权的页面，则自由访问
    next()
  }
})

export default router
