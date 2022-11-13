<template>
  <el-table v-loading="loading" :data="user_info" style="width: 100vw;" max-height="900">
    <el-table-column  header-align='center' type="selection" width="55" align="center" />
    <el-table-column fixed prop="id" label="ID" width="60" align="center"/>
    <el-table-column prop="user_name" label="User_name" width="150" align="center"/>
    <el-table-column prop="nick_name" label="Nick_name" width="105" align="center"/>
    <el-table-column prop="password" label="Password" width="105" align="center"/>
    <el-table-column prop="email" label="Email" width="180" align="center"/>
    <el-table-column prop="major" label="Major" width="150" align="center"/>
    <el-table-column prop="class" label="Class" width="105" align="center"/>
    <el-table-column prop="sno" label="Student_id" width="120" align="center"/>
    <el-table-column fixed="right" label="Operations" width="160" align="center"  > 
      <!-- <template #default="scope">
        <el-button
          link
          type="primary"
          size="default"
          @click.prevent="deleteRow(scope.$index)">
          Remove
        </el-button>
        <el-button
          link
          type="primary"
          size="default"
          @click.prevent="update(scope.$index)">
          Modify
        </el-button>
      </template> -->
    </el-table-column>
  </el-table>

  <pageination :total="total" :pageSize="page.page_size" @changePage="changePage"></pageination>
</template>
<style scoped>
  .box {
    overflow: hidden,!important;
  }
</style>
<script setup>
import { update } from 'lodash';
import { onBeforeMount, reactive, ref } from 'vue'
import pageination from '../../components/Pageination/index.vue'
import { get_info } from '../../utils/getInfo';
const now = new Date()
let user_info = ref([])
const total = ref(10)
onBeforeMount(() => { 
  get_info_()
})
const loading = ref(true)
const deleteRow = (index) => {   //删除用户
    user_infor.value.splice(index, 1)
}
const changePage = (page_) => {  //点击页码修改界面
  page.page = page_
  loading.value = true
  get_info_()
} 
const page = reactive({ //要修改
      page: 1,
      page_size: 13
})
const get_info_ = () =>{   //获取用户信息
  setTimeout(() => {
    loading.value = false
  },2000)
  get_info('/user/list',page,user_info,total)
}
</script>