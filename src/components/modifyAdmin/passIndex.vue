<template>
    <el-dialog
        v-model="visible"
        title="修改密码"
        width="30%"
        :before-close="changeVisible_"
    >
        <el-form
        :model="modifyPassInfo"
        status-icon
        label-width="140px"
        >
            <el-form-item label="new_password：">
                <el-input v-model="modifyPassInfo.new_password" placeholder="please inpout newPassword"></el-input>
            </el-form-item>
        </el-form>
            <template #footer>
                <span class="footer">
                    <el-button type="primary" @click="changeVisible_">取 消</el-button>
                    <el-button type="primary" @click="changeVisible_();submit()">确 定</el-button>
                </span>
            </template>
    </el-dialog>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { defineProps,defineEmits,computed} from "vue";
import { ElMessageBox,ElMessage } from 'element-plus'
import {modifyAdmin} from '@/utils/modify'   
    const emit = defineEmits(['changeVisible'])
    const props = defineProps(['visible','index','adminInfo'])
    const visible = ref(computed(() => props.visible))
    const modifyPassInfo = ref({
        new_password: ''
    })
    const changeVisible_ = ()  =>{
        emit('changeVisible',3)
    }

    const submit = () => {
    ElMessageBox.confirm('确认修改?')
    .then(() => {   //点击ok做什么  
        modifyAdmin({
            new_password:modifyPassInfo.value.new_password,
            uuid:props.adminInfo.uuid
        },
        2
        ).then((res) => {
            if (res.data.code === 0){
                ElMessage({
                    type: 'sucess',
                    message: '修改成功'
                })
            }else {
                ElMessage.error('修改失败')
            }
            Object.keys(modifyPassInfo.value).forEach(key =>{
                modifyPassInfo.value[key] = ''
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