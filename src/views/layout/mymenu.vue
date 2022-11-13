<template>
  <div class="box">
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
      @open="handleOpen"
      @close="handleClose"
      unique-opened="true"
    >
      <el-sub-menu index="1">
        <template #title>
          <i class="iconfont icon-jurassic_user"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/backpage/user">
          <i class="iconfont icon-chakan"></i>
          <span>信息查看</span>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="/backpage/competition">
        <i class="iconfont icon-menu_jsdt"></i>
        <template #title>竞赛管理</template>
      </el-menu-item>

      <el-sub-menu index="3">
        <template #title>
          <i class="iconfont icon-guanliyuan"></i>
          <span>管理员管理</span>
        </template>
        <el-menu-item index="/backpage/admin">
          <i class="iconfont icon-chakan"></i>
          <span>信息查看</span>
        </el-menu-item>
        <el-menu-item index="/backpage/admin/addAdminInfo">
          <i class="iconfont icon-zengjia"></i>
          <span>增加管理员</span>
        </el-menu-item>
      </el-sub-menu>

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
<script lang="ts" setup>
import { defineProps, watch, ref, computed } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const props = defineProps(["isCollapse"]);
const isCollapse = computed(() => props.isCollapse); //添加计算属性才是响应式
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scoped>
.box {
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 500px;
}
</style>>
