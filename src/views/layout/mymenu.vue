<template>
    <el-menu
      :collapse="isCollapse"
      router
      @open="handleOpen"
      @close="handleClose"
      unique-opened="true"
      background-color='#002140'
      default-active="/backpage/user"
      active-text-color="#fff"
      text-color="#1890FF"
    >
      <el-menu-item>
         <svg style="width:40px;height:90px"  t="1672233959678" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11196" width="16" height="16"><path d="M309.461333 205.994667a68.778667 68.778667 0 0 1 34.965334 18.837333l153.813333 153.813333 0.042667-0.085333 252.074666 252.096-168.490666 168.533333c-48.597333 48.576-129.792 46.208-181.333334-5.333333L88.021333 481.28c-25.792-25.770667-26.986667-66.346667-2.688-90.666667a59.818667 59.818667 0 0 1 33.92-16.810666l102.912-14.805334 14.784-102.912c4.992-34.709333 37.461333-57.130667 72.533334-50.090666z m513.728 58.88l101.226667 101.226666a64 64 0 0 1 0 90.517334l-143.872 143.872-252.096-252.096 83.562667-83.52a149.333333 149.333333 0 0 1 211.2 0z" fill="#007FFC" p-id="11197"></path></svg>
         <span class="title">SuseAdmin</span>
      </el-menu-item>

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
</template>
<script lang="ts" setup>
import { defineProps, watch, ref, computed } from "vue";

const props = defineProps(["isCollapse"]);
const isCollapse = computed(() => props.isCollapse); //添加计算属性才是响应式
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scoped lang="scss">

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 800px;
}
.title {
    color: #1890ff;
    display: block;
    font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.el-menu {
}
</style>>
