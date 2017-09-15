import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home'
// import Userlist from '@/components/userlist'
// import Login from '@/pages/login'
// import Main from '@/pages/main'
// import Userdetaile from '@/pages/userdetail'
// import Leavemsg from '@/pages/leavemsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: resolve => require(['../pages/login.vue'], resolve)
    },
    {
      path: '/main',
      component: resolve => require(['../components/home.vue'], resolve),
      children: [
        {
          path: '/',
          name: '系统总览',
          component: resolve => require(['../pages/main.vue'], resolve)
        },{
          path: '/today',
          name: '今日到诊患者',
          component: resolve => require(['../pages/userlist.vue'], resolve)
        },{
          path: '/yesterday',
          name: '昨日到诊患者',
          component: resolve => require(['../pages/userlist.vue'], resolve)
        },{
          path: '/registion',
          name: '签约患者',
          component: resolve => require(['../pages/userlist.vue'], resolve)
        },{
          path: '/leavemsg',
          name: '患者留言',
          component: resolve => require(['../pages/leavemsg.vue'], resolve)
        },{
          path: '/detail',
          name: '患者详情',
          component: resolve => require(['../pages/userdetail.vue'], resolve)
        }
      ]
    }
  ]
})
