<template>
  <el-dropdown>
        <span class="el-dropdown-link">
            <img src="@/assets/img/admin.jpg" alt="">
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <profile></profile>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
</template>

<style scoped>
    img {
        height: 30px;
        border-radius: 50%;
        cursor:pointer;
        margin:5px;
    }
    .el-dropdown-link{
        margin-right: 20px;
    }
</style>
<script setup>
    import profile from './profile/index.vue'
</script>