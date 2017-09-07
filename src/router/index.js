import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Userlist from '@/pages/userlist'
import Userdetaile from '@/pages/userdetail'
import Home from '@/pages/home'
import Leavemsg from '@/pages/leavemsg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Main,
      iconCls: 'fa fa-tachometer',
      leaf: true,//没有下级
      children: [
        {path: '/home',name: '系统总览',component: Home},
      ]
    },
    {
      path: '/',
      name: '患者管理',
      component: Main,
      iconCls: 'fa fa-user-o',
      children: [
        {path: '/today',name: '今日到诊患者',component: Userlist},
        {path: '/yesterday',name: '昨日到诊患者',component: Userlist},
        {path: '/registion',name: '签约患者',component: Userlist},
      ]
    },
    {
      path: '/',
      component: Main,
      iconCls: 'fa fa-phone',
      leaf: true,//没有下级
      children: [
        {path: '/leavemsg',name: '语音留言',component: Leavemsg},
      ]
    },
    {
      path: '/',
      component: Main,
      each:true,
      children: [
        {path: '/userdetail',name: '患者详情',component: Userdetaile},
      ]
    }
  ]
})
