<template>
   <div style="margin-left:16px; margin-top:16px">
        <el-button type="primary"  @click="dialog = true"
          >修改信息</el-button
        >
        <el-drawer
          ref="drawerRef"
          v-model="dialog"
          title="Update"
          :before-close="handleClose"
          direction="ltr"
          custom-class="demo-drawer"
          append-to-body="true"
        >
          <div class="demo-drawer__content">
            <el-form :model="form">
              <el-form-item label="*admin_name:" :label-width="formLabelWidth">
            </el-form-item>
            <el-input v-model="form.admin_name" autocomplete="off" disabled/>
    
            <el-form-item label="*eamil:" :label-width="formLabelWidth">
            </el-form-item>
            <el-input v-model="form.admin_name" autocomplete="off" disabled/>
    
              <el-form-item label="nick_name:" :label-width="formLabelWidth">
              </el-form-item>
    
              <el-input v-model="form.admin_name" autocomplete="off" />
              <el-form-item label="password:" :label-width="formLabelWidth">
              </el-form-item>
              <el-input type="password" v-model="form.admin_name" autocomplete="off" />
    
              <el-form-item label="Repeat Password:" :label-width="formLabelWidth">
            </el-form-item>
            <el-input type="password" v-model="form.admin_name" autocomplete="off" />
            </el-form>
            <div class="demo-drawer__footer">
              <el-button  type="primary" @click="cancelForm">Cancel</el-button>
              <el-button type="primary" :loading="loading" @click="onClick">{{
                loading ? 'Submitting ...' : 'Submit'
              }}</el-button>
            </div>
          </div>
        </el-drawer>
   </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  import { ElDrawer, ElMessageBox } from 'element-plus'
  
  
  const table = ref(false)
  const dialog = ref(false)
  const loading = ref(false)
  
  const form = reactive({

  })
  
/*   const handleClose = (done) => {
    if (loading.value) {
      return
    }
     ElMessageBox.confirm('Do you want to submit?')
      .then(() => {
        loading.value = true
        timer = setTimeout(() => {
          done()
          // 动画关闭需要一定的时间
          setTimeout(() => {
            loading.value = false
          }, 400)
        }, 2000)
      })
      .catch(() => {
        // catch error
      })
  }  */
  
  const cancelForm = () => {  //点击取消按钮,页面消失
    loading.value = false
    dialog.value = false
    clearTimeout(timer)
  }
  </script>

<style scoped>
.demo-drawer__footer{
    margin-top: 5px;
    margin-left: 60px;
}
</style>