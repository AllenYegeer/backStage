<template>
  <div>
        <el-drawer v-model="drawer" title="个人信息:" append-to-body="true">
          <viewInfo></viewInfo>
        </el-drawer>
          <el-drawer
          ref="drawerRef"
          v-model="updateWindow_vis" 
          title="修改信息"
          direction="ltr"
          custom-class="demo-drawer"
          append-to-body="true"
        >
            <update />
        </el-drawer>
        <el-menu
        text-color="#409EFF"
        >
          <el-menu-item @click="drawer = true">
            <i class="iconfont icon-gerenziliao"></i>
            个人信息
          </el-menu-item>
          <el-menu-item @click="updateWindow_vis = true">
            <i class="iconfont icon-xiugai"></i>
            修改信息
          </el-menu-item>
          <el-menu-item @click="loginOut">
            <i class="iconfont icon-dingbudaohang-zhangh"></i>
            退出登陆
          </el-menu-item>
        </el-menu>
  </div>
  </template>
  
  <script setup>
    import {ref} from 'vue'
    import update from './update/index.vue'
    import viewInfo from './viewInfo/index.vue'
    import router from "@/router";
    import portraits from '@/components/Portraits/index.vue'
    import { replace } from 'lodash'
    import { loginOut_ } from '@/utils/Login/login';
    const drawer = ref(false)
    const updateWindow_vis = ref(false)
    const close = () => {
      drawer.value = false
    }
    
    const loginOut = () => {
        loginOut_()
    }
  </script>

 <style lang="scss" scoped>
    .el-menu {
      i {
        margin-right:5px;
      }
    .el-menu-item {
      height: 34px;
    }
    }
  </style>