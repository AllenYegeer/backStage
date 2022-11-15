<template>
  <div>
        <el-button type="primary" style="margin-left: 5px" @click="drawer = true">
            个人信息
        </el-button>
        <update></update>
        <el-button type="primary" @click="loginOut" style="margin-left: 5px; margin-top:16px">
            退出登录
        </el-button>
        <el-drawer v-model="drawer" title="个人信息:" append-to-body="true">
          <viewInfo></viewInfo>
        </el-drawer>
  </div>
  </template>
  
  <script setup>
    import {ref} from 'vue'
    import update from './update/index.vue'
    import viewInfo from './viewInfo/index.vue'
    import router from "@/router";
    import portraits from '@/components/Portraits/index.vue'
    import { replace } from 'lodash'
    const drawer = ref(false)

    const close = () => {
      drawer.value = false
    }
    
    const loginOut = () => {
        router.push({path: '/login',replace:true})
    }
  </script>