<template>
<el-table v-loading="loading" :data="admin_info" style="width: 100vw;" max-height="900">
    <el-table-column  header-align='center' type="selection" width="55" align="center" />
    <el-table-column fixed prop="id" label="ID" width="60" align="center"/>
    <el-table-column prop="admin_name" label="User_name" width="150" align="center"/>
    <el-table-column prop="nick_name" label="Authority" width="105" align="center"/>
    <el-table-column prop="password" label="Password" width="105" align="center"/>
    <el-table-column prop="email" label="Email" width="105" align="center"/>
    <el-table-column fixed="right" label="Operations" width="300" align="center"  > 
      <template #default="scope">
        <el-button
            link
            type="primary"
            size="default"
            @click.prevent="remove_(scope.$index)">
            Remove
        </el-button>
        <el-button
            link
            type="primary"
            size="default"
            @click.prevent="update(scope.$index)">
            Modify
        </el-button>
        <el-button
            link
            type="primary"
            size="default"
            @click.prevent="setAuthority(scope.$index)">
            setAuthority
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <authority :adminInfo="admin_info[index]" :visible="visible" :index="index" @changeVisible="changeVisible"></authority>
  <pageination :total="total" :pageSize="page.page_size" @changePage="changePage"></pageination>
</template>
<script setup>
    import { reactive, ref } from '@vue/reactivity'
    import { onBeforeMount } from '@vue/runtime-core'
    import pageination from '../../../components/Pageination/index.vue'
    import { deleteAdminAccount_ } from '../../../request/request';
    import {remove} from '../../../utils/deleteInfo'
    import { setAdminAuthority } from '../../../utils/setAdminAutority';
    import authority from '../../../components/setAuthority/index.vue'
    import { deleteAdminAccount } from '../../../request/admin'
    import { ElMessage, ElMessageBox } from 'element-plus'
    import {get_info} from '../../../utils/getInfo'
    const total = ref(10)
    const page = reactive({
        page: 1,
        page_size: 10
    })
    const loading = ref(true)
    const visible = ref(false)
    let admin_info = ref([])
    let index = ref(1)

    const remove_ = (index) => {
        remove(admin_info.value,index)
    }

    const setAuthority = (index_) => { 
        visible.value = true
        index.value = index_
    }
    const changeVisible = () => {
        visible.value = !visible.value
    }
    
    onBeforeMount(() => {
        get_info_()
    })

    const get_info_ = () => {
        setTimeout(() => {
            loading.value = false
        },2000)
        get_info('/admin/getAdminInfoList',page,admin_info,total)
    }

    const changePage = (page_) => {
        page.page = page_
        loading.value = true
        get_info_()
    }
</script>