<template>
    <el-popover
    placement="bottom"
    trigger="click"
    active-text-color="#ffd04b">
    <div>
        <profile></profile>
    </div>
    <template #reference>
      <img src="../../assets/img/admin.jpg" alt="">
    </template>
  </el-popover>
</template>

<style scoped>
    img {
        height: 100%;
        border-radius: 50%;
    }

    .el-poper{
        left:0;
        right: 0;
        border: 1px solid red;
    }
</style>
<script setup>
    import profile from './profile/index.vue'
</script>