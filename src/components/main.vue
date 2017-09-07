<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo">
        <span class="title">亭林社卫HCRM</span>       
        <div class="tools" @click.prevent="collapse">
          <i class="fa fa-align-justify"></i>
        </div>          
      </el-col>      
      <el-col :span="14" class="userInfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner">
            朱露<img src="../assets/images/avatar.jpg" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="fa fa-user-circle"></i><span style="margin-left:6px">个人信息</span></el-dropdown-item>
            <el-dropdown-item divided><i class="fa fa-sign-out"></i><span style="margin-left:6px">退出登录</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> 
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <div class="menu" :class="collapsed?'menu-collapsed':'menu-expanded'">

        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" v-if="!collapsed" @open="handleOpen" @close="handleClose" @select="handleSelect" unique-opened router>
          <template v-for="(item,index) in $router.options.routes" >
            <!-- 有分支 -->
            <el-submenu :index="index+''" v-if="!item.each&&!item.leaf">
              <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{child.name}}</el-menu-item>
            </el-submenu>
            <!-- 没有分支 -->
            <el-menu-item v-if="!item.each&&item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
          </template>
        </el-menu>

        <!-- 折叠 -->
        <ul class="el-menu el-menu-vertical-demo collapsed" v-if="collapsed" ref="menuCollapsed">
          <li class="el-submenu item" v-for="(item,index) in $router.options.routes">
            <template v-if="!item.each">
              <div class="el-submenu__title" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i>
              </div>
              <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"> 
                <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
              </ul>
            </template>
          </li>
        </ul>

      </div>
      <div class="content-container">

          <el-col :span="24" class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner" v-if="$route.matched[0].name!=undefined">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
            <el-breadcrumb separator="/" class="breadcrumb-inner" v-else>
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{ $route.matched[1].name }}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col> 
      
      </div>
    </el-col> 
  </el-row>
</template>

<script>
  export default {
    name: 'main',
    data () {
      return {
        collapsed:false,
      }
    },
    methods: {
      handleOpen() {
     
      },
      handleClose() {
        //console.log('handleclose');
      },
      handleSelect: function (a, b) {
      },
      collapse: function(){
        this.collapsed = !this.collapsed
      },
      showMenu: function(i,status){
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
      color: #fff;
      background-color: #ff6b00;
      height: 60px;
      line-height: 60px;
      .logo {
        width: 230px;
        height: 60px;
        line-height: 60px;
        font-size: 0px;
        padding-left: 20px;
        padding-right: 20px; 
        .title {
          display: inline-block;
          vertical-align: middle;
          font-size: 18px;
          height: 20px;
          line-height: 20px;
        } 
        .tools {
          display: inline-block;
          vertical-align: middle;
          margin-left: 10px;
          width: 24px;
          height: 22px;
          cursor: pointer;
          border:1px solid rgba(0,0,0,0.25);
          &:hover {
            background-color: #f01611;
          }
        } 
        .fa {   
          vertical-align: top;       
          font-size: 12px;
          padding: 5px 6px;         
        }        
      }
      .userInfo {
        text-align: right;
        padding-right: 35px;
        float: right;
        .userinfo-inner {
          cursor: pointer;
          color:#fff;
          img {
            width: 30px;
            height: 30px;
            border-radius: 15px;
            margin: 15px 0px 15px 10px;
            float: right;
          }
        }
      }
    }
    .main {
      display:flex;
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
      .menu {
        flex:0 0 230px;
        width: 230px;
        font-size: 16px;
        .el-menu{
          height: 100%;
          .fa {
            margin-right:10px;
          }
          .el-menu-item,.el-submenu__title {
            font-size:16px;
          }
          .el-menu-item.is-active {
            color: #ff6b00;
          }
        }
        .collapsed{
          width:60px;
          .item{
            position: relative;
            .el-submenu__title {
              padding-left:20px;
            }
          }
          .submenu{
            position:absolute;
            top:0px;
            left:60px;
            z-index:99999;
            height:auto;
            display:none;
            .el-menu-item {
              height: 56px;
              line-height: 56px;
              padding: 0 20px;
              min-width: 160px;
            }
          }
        }
      }
      .menu-collapsed{
        flex:0 0 60px;
        width: 60px;
      }
      .menu-expanded{
        flex:0 0 230px;
        width: 230px;
      }
      .content-container {
        flex:1;
        overflow: hidden;
        .breadcrumb-container {
          padding: 17px 20px;
          border-bottom:1px solid #eef1f6;
          .title {
            width: 200px;
            font-size:21px;
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
        .content-wrapper {
          overflow-y: scroll;
          height:100%;
          background-color: #fff;
          box-sizing: border-box;
          padding:20px;
        }
      }
    }
  }
</style>
