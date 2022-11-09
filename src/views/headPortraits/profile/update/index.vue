<template>
   <div style="margin-left:16px; margin-top:16px">
        <el-button type="primary"  @click="is_display = true">
          修改信息
        </el-button>
        
        <el-drawer
          ref="drawerRef"
          v-model="is_display" 
          title="修改信息"
          direction="ltr"
          custom-class="demo-drawer"
          append-to-body="true"
        >
          <portraits class="portraits"></portraits>
          <div class="content">
            <el-form 
            :model="form"
            ref='ruleFormRef'
            status-icon
            :rules="rules"
            label-width="150px"
            label-position="top"
            >  
            <el-form-item label="*eamil:" prop="email">
            <el-input v-model="form.email" autocomplete="off"/>
            </el-form-item>
    
            <el-form-item label="*nick_name:" prop="nick_name">
            <el-input v-model="form.nick_name" autocomplete="off" />
            </el-form-item>

            <el-form-item label="*oldPassword:" prop="password">
            <el-input type="password" v-model="form.password" autocomplete="off" />
            </el-form-item>
            
            <el-form-item label="*newPassword:" prop="new_password">
            <el-input type="password" v-model="form.new_password" autocomplete="off" />
            </el-form-item>
  
            <el-form-item label="*Repeat Password:" prop="repeat_password">
            <el-input type="password" v-model="form.repeat_password" autocomplete="off" />
            </el-form-item>
            </el-form>
            <div class="footer">
              <el-button  type="primary" @click="cancelForm">退 出</el-button>
              <el-button type="primary" :loading="loading" @click="submit">
                {{loading ? 'Submitting ...' : '提 交'}}
              </el-button>
            </div>
          </div>
        </el-drawer>
   </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { ElDrawer, ElMessageBox } from 'element-plus'
  import type { FormInstance } from 'element-plus'
  import portraits from '../../../../components/Portraits/index.vue'
  import {setSelfInfo,updatePassword} from '../../../../request/admin'

  const ruleFormRef = ref<FormInstance>()
  const is_display = ref(false)   
  const loading = ref(false)

  const form = reactive({
    new_password:"",
    password:"",
    email:"",
    nick_name:"",
    repeat_password:"",
  })

  const validateEmail = (rule: any, value: any, callback: any) => {  //对邮箱验证
    if (value === '') {
      callback(new Error('Please input the eamail'))
    } else {
      if (form.email !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('email', () => null)
      }
      callback()
    }
  }

  const validateNickName = (rule: any, value: any, callback: any) => { //对nick_name验证
    if (value === '') {
      callback(new Error('Please input the nickName'))
    } else {
      if (form.nick_name !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('nick_name', () => null)
      }
      callback()
    }
  }

  const validatePaw = (rule: any, value: any, callback: any) => {   //对密码验证
    if (value === '') {
      callback(new Error('Please input the password'))
    } else {
      if (form.new_password !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('checkPass', () => null)
      }
      callback()
    }
  }

  const passIsSame = (rule: any, value: any, callback: any) => {  //比较两次密码是否一致
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== form.new_password) {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  }

  const rules = reactive({   //规则验证
    new_password: [{ validator: validatePaw, trigger: 'blur' }],
    password: [{ validator: validatePaw, trigger: 'blur' }],
    repeat_password: [{ validator: passIsSame, trigger: 'blur' }],
    email: [{ validator: validateEmail, trigger: 'blur' }],
    nick_name: [{ validator: validateNickName, trigger: 'blur' }],
  })
  
  let timer
  const submit = () => {
      if (loading.value) {
        return 
      }
      ElMessageBox.confirm('Do you want to submit?')
        .then(() => {
          updatePassword(
            {
              new_password:form.new_password,
              password:form.password
            }
          ).then((res) => {

          })
          setSelfInfo(
            {
              email:form.email,
              nick_name:form.nick_name
            }
          ).then((res) => {
            
          })

          loading.value = true
            // 动画关闭需要一定的时间
              timer = setTimeout(() =>{
              loading.value = false
              form.new_password = ''
              form.password = ''
              form.email = ''
              form.nick_name = ''
              cancelForm()
          },2000)
        })
        .catch(() => {
          // catch error
        })
  } 
    
  const cancelForm = () => {  //点击取消按钮,页面消失
      loading.value = false
      is_display.value = false
      clearTimeout(timer)
  }
  </script>

<style scoped>
.footer{
    margin-top: 15px;
    margin-left: 100px;
}

</style>