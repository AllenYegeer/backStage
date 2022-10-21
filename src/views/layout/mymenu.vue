<template>
   <div class="box">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
    >
      <el-menu-item index="/backpage/user">
        <i class="iconfont icon-jurassic_user"></i>
        <template #title>用户管理</template>
      </el-menu-item>

      <el-menu-item index="/backpage/competition">
        <i class="iconfont icon-menu_jsdt"></i>
        <template #title>竞赛管理</template>
      </el-menu-item>

      <el-menu-item index="/backpage/admin">
        <i class="iconfont icon-guanliyuan"></i>
        <template #title>管理员管理</template>
      </el-menu-item>

      <el-menu-item index="/backpage/question">
        <i class="iconfont icon-wenti"></i>
        <template #title>问题管理</template>
      </el-menu-item>

      <el-menu-item index="/backpage/announcements">
        <i class="iconfont icon-gonggao"></i>
        <template #title>公告管理</template>
      </el-menu-item>
    </el-menu>
   </div>
</template>
<script setup>
import { defineProps, watch, ref, computed } from "vue";
const props = defineProps(['isCollapse'])
const isCollapse = computed(() => props.isCollapse)  //添加计算属性才是响应式
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {  
  width: 200px;
  min-height: 500px;
}
</style>>
