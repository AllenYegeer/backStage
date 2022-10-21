<template>
    <div>
        <div class="header">
            <div>
                <i v-if="!props.isCollapse" @click.stop="changeMenu" class="iconfont icon-zhedie1"></i>
                <i v-else @click.stop="changeMenu" class="iconfont icon-zhedie2"></i>
                首页/</div>
            <div class="self">
                <headPortraits></headPortraits>
            </div>
           
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
 import {toRefs,defineEmits, defineProps, computed} from 'vue'
 import headPortraits from '../headPortraits/index.vue'
    const props = defineProps(['isCollapse'])
    //给父组件传递事件
    const emit = defineEmits(['on-save-ok'])
    const changeMenu = () =>{
        console.log(props.isCollapse);
        emit('changeCollapse')
    }
</script>
<style scoped>
.header{
    display: flex;
    height: 30px;
    background: #F4F4F4;
    color: black;
    border-bottom: 1px solid #b5b5b5;
    font-size: 13px;
    line-height: 30px;
    justify-content: space-between;
}
 i:hover {
    color: #ffd04b;
 }
.iconfont {
    font-size:20px;
}
.self {
    margin-right: 20px;
}
.self img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
</style>
