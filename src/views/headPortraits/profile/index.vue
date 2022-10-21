<template>
  <div>
        <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
            个人中心
        </el-button>
        <update></update>
        <el-button type="primary" style="margin-left:16px; margin-top:16px">
            退出登录
        </el-button>
        <el-drawer v-model="drawer" :with-header="false" append-to-body="true">
            
        </el-drawer>
  </div>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  import update from '../../update/index.vue'
  const drawer = ref(false)
  </script>