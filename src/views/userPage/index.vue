<template>
  <el-table :data="user_infor" style="width: 100vw" max-height="1000" border>
    <el-table-column  header-align='center' type="selection" width="55" align="center" />
    <el-table-column fixed prop="id" label="ID" width="60" align="center"/>
    <el-table-column prop="user_name" label="user_name" width="150" align="center"/>
    <el-table-column prop="nick_name" label="nick_name" width="105" align="center"/>
    <el-table-column prop="password" label="password" width="105" align="center"/>
    <el-table-column prop="email" label="email" width="180" align="center"/>
    <el-table-column prop="major" label="major" width="150" align="center"/>
    <el-table-column prop="class" label="class" width="105" align="center"/>
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

<script setup>
import { update } from 'lodash';
import { onBeforeMount, ref } from 'vue'
import { get_userInfo } from "../../request/admin";
import pageination from '../../components/Pageination/index.vue'
const now = new Date()
let user_infor = ref([])
const total = ref(10)
onBeforeMount(() => { 
  get_Info()
})

const deleteRow = (index) => {   //删除用户
    user_infor.value.splice(index, 1)
}
const changePage = (page_) => {  //点击页码修改界面
  page.value.page = page_
  get_Info()
} 
const onAddItem = () => {   //添加用户
}
const page = ref({ //要修改
      page: 1,
      page_size: 13
})
const get_Info = () =>{   //获取用户信息
  get_userInfo(page.value).then((res) => {
    const info = res.data.data.List;  //获取到用户信息
    total.value = res.data.data.total // 总的页数大小
    user_infor.value = info
  })
}
</script>