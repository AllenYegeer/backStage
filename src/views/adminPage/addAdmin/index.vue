<template>
    <div class="add">
        <div  class="header">
            Generating an Administrator Account
        </div>

       <div>
           <el-form 
            ref="ruleFormRef"
            :model="info"
            status-icon
            label-width="110px"
            label-position="left"
            class="demo-ruleForm">
            <el-form-item label="Admin_name:" prop="admin_name">
                <el-input v-model="info.admin_name"></el-input>
            </el-form-item>
            <el-form-item label="Email:" prop="email">
                <el-input type="email" v-model="info.email"></el-input>
            </el-form-item>
            <el-form-item label="Nick_name:" prop="nick_name">
                <el-input v-model="info.nick_name"></el-input>
            </el-form-item>
            <el-form-item label="Password:" prop="password">
                <el-input type="password" v-model="info.password" show-password></el-input>
            </el-form-item>
        <!-- <el-form-item label="Authority:">
        <el-checkbox-group v-model="info.authority">
            <el-checkbox label="最高管理员" name="type"/>
            <el-checkbox label="用户管理员" name="type"/>
            <el-checkbox label="后台管理员" name="type"/>
            <el-checkbox label="竞赛管理员" name="type"/>
            <el-checkbox label="问题管理员" name="type"/>
        </el-checkbox-group>
        </el-form-item> -->
        </el-form>
       </div>

       <div class="nav">
        <el-button type="primary" @click="submit">提 交</el-button>
       </div>

       <div class="footer"></div>
    </div>
</template>

<style scoped>
    .add{
        text-indent: 1em;
        font-weight: 700px;
        width: 400px;
        height: 400px;
        margin: 100px auto;
        border: 3px solid #B9B9B9;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .header{
        margin-bottom: 10px;
        padding: 5px 0;
        border-bottom: 2px solid #B9B9B9;
        color: #3B5998;
    }
    .nav{
        margin-left: 170px;
    }

    .footer{
        width: 100%;
        height: 25px;
        background: #F5F5F5;
    }
</style>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { map } from 'lodash'
import {getAdminAccount, setAdminAutorities} from '../../../request/admin'
import axios from 'axios'
import { ElMessage } from 'element-plus'
let info = ref({
    admin_name: '',
    email: '',
    nick_name: '',
    password: '',
})

const submit = () => {  //提交生成管理员账号
    getAdminAccount(info.value).then((res) => {
        console.log(res);
        if (res.data.code === 0){
            ElMessage({
              message: '生成成功.',
              type: 'success',
          })
          Object.keys(info.value).forEach(key => {
            info.value[key] = ''
          })
        }else{
            ElMessage.error(res.data.msg)
        }
    })
}
const ruleFormRef = ref<FormInstance>()
</script>