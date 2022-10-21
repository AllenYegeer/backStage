<template>
   <div class="layout">
   <!-- 左侧导航栏 -->
    <mymenu class="menu" :isCollapse="isCollapse"/>
    <!-- 右侧导航栏 -->
    <content class="content" :class={isActive:isCollapse} @changeCollapse="changeCollapse" :isCollapse="isCollapse"/>
   </div>
</template>

<script setup>
    import mymenu from './mymenu.vue';
    import content from './content.vue';
    import {ref,toRefs} from "@vue/reactivity";
    const isCollapse = ref(false)
    const changeCollapse = () => {
        isCollapse.value = !isCollapse.value
    }
</script>
<style scoped>
    .menu{
        position:fixed;
        top: 0;
        bottom: 0;
        left: 0;
        height: 1000px;
    }
    .content{
        margin-left: 200px;
        transition: all 0.2s linear;
    }
    
    .isActive{
        margin-left: 64px;
    }
</style>