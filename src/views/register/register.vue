<template>
  <div class="register">
    <el-form
      status-icon
      label-width="120px"
      class="demo-ruleForm">

      <el-form-item label="邮箱">
        <el-input
          type="text"
          v-model="user_info.user_email">
        </el-input>
      </el-form-item>

      <el-form-item label="验证码">
        <div>
            <el-input
              type="text"
              v-model="user_info.user_email_code"
            ></el-input>
            <el-button @click="clickGetCode" type="success" round>获取验证码</el-button>
        </div>
      </el-form-item>

      <el-form-item label="用户名">
        <el-input
          type="text"
          v-model="user_info.user_name"

        ></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="user_info.user_password"

        ></el-input>
      </el-form-item>

      <el-form-item label="确认密码">
        <el-input
          type="password"
          v-model="sure_password"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="upLoadInfo" type="primary" round>注册</el-button>
        <el-button  type="primary" round>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref } from "@vue/reactivity";
import {getCode,register_info} from "../../request/user_register"
const user_info = ref({
  user_email:"",
  user_email_code: "",
  user_name: "",
  user_password: "",
});

const sure_password = ref();   //确认密码

const clickGetCode = () => { //获取验证码
    getCode({email : user_info.value.user_email}).then(res =>{
        console.log(res)
    })
}

const upLoadInfo = () => {
    console.log(user_info.value);
    register_info(user_info.value).then(res => {
        console.log(res)
    })
}
</script>

<style scoped>
.register{
    height: 300px;
    width: 400px;
    margin: 200px auto;
    background-color: aqua;
    padding: 30px 30px;
    border-radius: 50px;
}
</style>