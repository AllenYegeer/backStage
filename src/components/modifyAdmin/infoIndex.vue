<template>
  <div class="modify">
      <el-dialog
        v-model="visible"
        title="修改信息"
        width="30%"
        :before-close="changeVisible_"
      >
        <el-form
        :model="modiyInfo"
        status-icon
        label-width="100px"
        >
        <el-form-item label="nick_name：">
            <el-input v-model="modiyInfo.nick_name" placeholder="please input"></el-input>
        </el-form-item>
        
        <el-form-item label="email：">
            <el-input v-model="modiyInfo.email"></el-input>
        </el-form-item>
        </el-form>
        <template #footer>
          <span class="footer">
            <el-button @click="changeVisible_">取 消</el-button>
            <el-button type="primary" @click="changeVisible_();submit()">
              确 认
            </el-button>
          </span>
        </template>
      </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {computed, defineProps,defineEmits} from 'vue'
import { ElMessageBox , ElMessage,} from 'element-plus';
import {modifyAdmin} from '@/utils/modify'

const props = defineProps(['visible','index','adminInfo'])
const emit = defineEmits(['changeVisible'])
const visible = ref(computed (() => props.visible))
const modiyInfo = ref({
    email:'',
    nick_name:''
})
const changeVisible_ = () => {
    emit('changeVisible',1)
}
const submit = () => {
  ElMessageBox.confirm('确认修改?')
    .then(() => {   //点击ok做什么  
        modifyAdmin(
    {
      UUID:props.adminInfo.uuid,
      email:modiyInfo.value.email,
      nick_name:modiyInfo.value.nick_name
    },
    1
   ).then((res) => {
        if (res.data.code === 0){
              ElMessage({
                type: 'success',
                message: '修改成功'
              })
              props.adminInfo.email = modiyInfo.value.email
              props.adminInfo.nick_name = modiyInfo.value.nick_name
        }else {
            ElMessage.error('修改失败')
        }
        Object.keys(modiyInfo.value).forEach(key => {
          modiyInfo.value[key] = ''
        }) 
   })
    })
    .catch(() => {   //点击cancel做什么
      
    })
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

</style>