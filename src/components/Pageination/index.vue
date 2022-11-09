<template>
    <div class="page">
        <el-pagination background layout="total,, prev, pager, next, jumper" :total="totalSize" :page-size="pageSize" 
        @current-change='changePage_'/>
    </div>
</template>
<script setup>
import { ref} from "@vue/reactivity";
import {computed, defineProps} from 'vue'
    const props = defineProps(['total','pageSize'])
    const emit = defineEmits(['changePage'])
    const totalSize = ref(computed(() => props.total))   //总的条数
    const pageSize = ref(computed(() => props.pageSize)) //每页显示的条数

    const changePage_ = (page) =>{
        emit('changePage',page)
    }
</script>
<style scoped>
.page {
    text-align:center;
    display:flex;
    justify-content: center;
    margin-top: 20px;
}
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>