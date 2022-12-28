<template>
  <div>
  <el-descriptions :column="1" border direction="vertical" size="large">
    <el-descriptions-item
      align="center">
       <template #label>
        <div class="uer_name">
          <i class="iconfont icon-zhanghao"></i>
          账号:
        </div>
      </template>
      <el-tag size="small" type="success">{{selfInfo.admin_name}}</el-tag>
    </el-descriptions-item>

    <el-descriptions-item label="邮箱:" align="center">
       <template #label>
        <div class="uer_name">
          <i class="iconfont icon-youxiang"></i>
          邮箱:
        </div>
      </template>
      <el-tag size="small" type="success">{{selfInfo.eamail}}</el-tag>
    </el-descriptions-item>

    <el-descriptions-item align="center">
      <template #label>
        <div class="id">
          <i class="iconfont icon-nicheng"></i>
          昵称:
        </div>
      </template>
      <el-tag size="small" type="success">{{selfInfo.nick_name}}</el-tag>
    </el-descriptions-item>

    <el-descriptions-item  align="center">
      <template #label>
        <div class="authority">
          <i class="iconfont icon-quanxian"></i>
          权限:
        </div>
      </template>
      <el-tag size="small" type="success">{{selfInfo.authority_name}}</el-tag>
    </el-descriptions-item>

    <el-descriptions-item label="权限描述:" label-align="center" align="center">
      <el-tag size="small" type="success">{{selfInfo.description}}</el-tag>
      </el-descriptions-item>
    </el-descriptions>
    </div>
</template>

<style scoped>

</style>

<script setup>
    import { ElButton, ElDrawer } from 'element-plus'
    import { CircleCloseFilled } from '@element-plus/icons-vue'
    import {defineEmits, onBeforeMount, reactive, ref} from "vue"
    import { get_selfInfo } from '../../../../request/admin'
import { get } from '../../../../request/request'
    const selfInfo = reactive({
      admin_name:'',
      eamail:'',
      nick_name:'',
      authority_name:'',
      description:''
    })

    onBeforeMount(() => {   //获取个人信息
      get_selfInfo().then((res) => {
        selfInfo.admin_name = res.data.data.admin_name
        selfInfo.eamail = res.data.data.email
        selfInfo.nick_name = res.data.data.nick_name
        selfInfo.authority_name = res.data.data.authorities[0].authority_name
        selfInfo.description =  res.data.data.authorities[0].description
        console.log(selfInfo);
      })
    })
</script>
