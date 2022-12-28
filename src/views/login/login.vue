<template>
  <div class="login_bk">
    <div class="login_window" @keyup.enter="clickLogin">
      <div class="login_logo">
        <svg t="1672233959678" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11196" width="16" height="16"><path d="M309.461333 205.994667a68.778667 68.778667 0 0 1 34.965334 18.837333l153.813333 153.813333 0.042667-0.085333 252.074666 252.096-168.490666 168.533333c-48.597333 48.576-129.792 46.208-181.333334-5.333333L88.021333 481.28c-25.792-25.770667-26.986667-66.346667-2.688-90.666667a59.818667 59.818667 0 0 1 33.92-16.810666l102.912-14.805334 14.784-102.912c4.992-34.709333 37.461333-57.130667 72.533334-50.090666z m513.728 58.88l101.226667 101.226666a64 64 0 0 1 0 90.517334l-143.872 143.872-252.096-252.096 83.562667-83.52a149.333333 149.333333 0 0 1 211.2 0z" fill="#007FFC" p-id="11197"></path></svg>
      </div>
      <el-form
        status-icon
        label-width="120px"
        :model="login_info"
        class="demo-ruleForm"
      >
        <el-form-item>
          <el-input
            :prefix-icon="UserFilled"
            type="text"
            v-model="login_info.admin_name"
            autocomplete="off"
            placeholder="用户名"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-input
            :prefix-icon="Key"
            type="password"
            v-model="login_info.password"
            autocomplete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            class="loginBtn"
            :plain="true"
            @click.stop="clickLogin"
            type="primary"
            round
            >登 陆</el-button
          >
          <el-button
            class="loginBtn"
            :plain="true"
            @click.stop="reset"
            type="primary"
            round
            >重 置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
/* import { loginIn_ } from "@/utils/Login/login"; */
import { Iphone, Lock, User, Key, UserFilled } from "@element-plus/icons-vue";
import { loginIn_ } from "@/utils/Login/login";
const login_info = ref({
  admin_name: "",
  password: "",
});
const reset = () => {
  //重置
  login_info.value.admin_name = "";
  login_info.value.password = "";
};

const clickLogin = () => {
  //点击登录
  loginIn_(login_info.value);
};
</script>


<style scoped lang="scss">
.login_bk {
  height: 100vh;
  position: relative;
  background-image: url(https://yiming_chang.gitee.io/vue-pure-admin/static/png/bg-7b14eacd.png);
  background-size: cover;

}
.login_logo{
  svg {
    width: 150px;
    height: 150px;
    transform: translate(90%,-50%);
  }
}

.login_window {
  position: absolute;
  top: 30%;
  left: 60%;
  .el-form {
    transform: translate(-10%,-60%);
    .el-input {
      height: 40px;
      width: 294px;
      border: 1px solid #e7e7e7;
      border-radius: 5px;
    }
    .el-button {
      width: 70px;
      margin-left: 50px;
      border-radius: 2px;
      font-size: 18px;
    }
  }
}
</style>