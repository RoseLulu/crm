<template>
  <el-row class="wrapper">

    <el-col :span="24" class="header">
      <div class="logo">
        <span>亭林社卫HCRM</span>
        <div class="tools" @click.prevent="collapse"><i class="fa fa-align-justify"></i></div>
      </div>
      <div class="user-info">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <img class="user-logo" src="../../static/img/avatar.jpg">
            {{username}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="fa fa-user-circle"></i><span>个人信息</span></el-dropdown-item>
            <el-dropdown-item command="loginout"><i class="fa fa-sign-out"></i><span>退出登录</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>

    <el-col :span="24" class="content">
      <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" theme="dark" unique-opened router>
          <template v-for="item in items">
            <template v-if="item.subs">
              <el-submenu :index="item.index">
                <template slot="title"><i :class="item.icon"></i><span slot="title">{{ item.title }}</span></template>
                <el-menu-item v-for="(subItem,index) in item.subs" :key="index" :index="subItem.index">
                  <span slot="title">{{ subItem.title }}</span>
                </el-menu-item>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="item.index">
                <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </div>
      <div class="contentItem">
        <el-col :span="24" class="breadcrumb-container">
          <strong class="title">{{$route.name}}</strong>
          <el-breadcrumb separator="/" class="breadcrumb-inner">
            <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-if="$route.path==='/today'||$route.path==='/yesterday'||$route.path==='/registion'"
            > 患者管理 </el-breadcrumb-item>
            <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
          </el-breadcrumb>          
        </el-col>
        <el-col :span="24" class="content-container">
          <transition name="move" mode="out-in"><router-view></router-view></transition>
        </el-col>
      </div>
    </el-col>

  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        name: 'name',
        isCollapse: true,
        items: [
          {
            icon: 'fa fa-eye',
            index: 'main',
            title: '系统总览'
          },
          {
            icon: 'fa fa-user-plus',
            index: '2',
            title: '患者管理',
            subs: [
              {
                index: 'today',
                title: '今日到诊患者'
              },
              {
                index: 'yesterday',
                title: '昨日到诊患者'
              },
              {
                index: 'registion',
                title: '签约患者'
              }
            ]
          },
          {
            icon: 'fa fa-comments',
            index: 'leavemsg',
            title: '留言'
          }
        ]
      }
    },
    computed:{
      username(){
        let username = localStorage.getItem('userName');
        return username ? username : this.name;
      },
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    },
    methods:{
      handleCommand(command) {
        if(command == 'loginout'){
            localStorage.removeItem('userLevel');
            localStorage.removeItem('userNo');
            localStorage.removeItem('userID');
            localStorage.removeItem('userName');
            localStorage.removeItem('userTel');
            this.$router.push('/login');
        }
      },
      handleOpen() {
     
      },
      handleClose() {
        //console.log('handleclose');
      },
      collapse: function(){
        this.isCollapse = !this.isCollapse
      },
    }
  }
</script>

<style scoped lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
  }
  .el-dropdown-menu__item .fa {
    margin-right: 5px;
  }
  .wrapper {
    .header {
      display:flex;
      position:relative;
      padding:0 50px;
      height: 70px;
      line-height: 70px;
      color: #fff;
      .logo {
        flex: 1;
        font-size: 18px;
        width:250px;
        .tools {
          display: inline-block;
          vertical-align: middle;
          margin-left: 10px;
          width: 24px;
          height: 22px;
          cursor: pointer;
          border:1px solid rgba(0,0,0,0.25);
          &:hover {
            background-color: #20a0ff;
          }
          .fa {
            vertical-align: top;       
            font-size: 12px;
            padding: 5px 6px;  
          }
        }
      }
      .user-info {
        flex: 0 0 80px;
        font-size: 16px;
        color: #fff;
        .el-dropdown-link{
          position: relative;
          display: inline-block;
          padding-left: 50px;
          color: #fff;
          cursor: pointer;
          vertical-align: middle;
          .user-logo{
            position: absolute;
            left:0;
            top:18px;
            width:34px;
            height:34px;
            border-radius: 50%;
          }
        }
      }
    }
    .content {
      display:flex;
      height: 100%;
      overflow: hidden;
      background: #fff;
      .sidebar {
        top: 70px;
        bottom: 0px;
        background: #2E363F;
        ul {
          height: 100%;
        }
      }
      .contentItem {
        flex:1;
        overflow: hidden;
        .breadcrumb-container {
          padding: 17px 20px;
          border-bottom:1px solid #eef1f6;
          .title {
            width: 200px;
            font-size:22px;
            float: left;
            color: #475669;
          }
          .el-breadcrumb {
            font-size:14px;
          }
          .breadcrumb-inner {
            float: right;
          }
        }
        .content-container {
          overflow-y: scroll;
          height:100%;
          background-color: #fff;
          box-sizing: border-box;
          padding:20px;
        }
      }
    }
  }
  // .wrapper {
  //   position: absolute;
  //   top: 0px;
  //   bottom: 0px;
  //   width: 100%;
  // }
  // .header {
  //   height: 70px;
  //   font-size: 22px;
  //   line-height: 70px;
  //   color: #fff;
  // }
  // .header .logo{
  //   float: left;
  //   width:250px;
  //   text-align: center;
  // }
  // .header .tools {
  //   display: inline-block;
  //   vertical-align: middle;
  //   margin-left: 10px;
  //   width: 24px;
  //   height: 22px;
  //   cursor: pointer;
  //   border:1px solid rgba(0,0,0,0.25);
  // } 
  // .header .tools::hover {
  //   background-color: #f01611;
  // }
  // .header .fa {   
  //   vertical-align: top;       
  //   font-size: 12px;
  //   padding: 5px 6px;         
  // } 
  // .user-info {
  //   float: right;
  //   padding-right: 50px;
  //   font-size: 16px;
  //   color: #fff;
  // }
  // .user-info .el-dropdown-link{
  //   position: relative;
  //   display: inline-block;
  //   padding-left: 50px;
  //   color: #fff;
  //   cursor: pointer;
  //   vertical-align: middle;
  // }
  // .user-info .user-logo{
  //   position: absolute;
  //   left:0;
  //   top:15px;
  //   width:40px;
  //   height:40px;
  //   border-radius: 50%;
  // }
  // .el-dropdown-menu__item{
  //   text-align: center;
  // }
  // .sidebar{
  //   display:flex;
  //   position: absolute;
  //   top: 70px;
  //   bottom: 0px;
  //   overflow: hidden;
  //   background: #2E363F;
  // }
  // .sidebar > ul {
  //   height:100% !important;
  // }
  // .content  {
  //   flex:1;
  //   overflow: hidden;
  // }
</style>
