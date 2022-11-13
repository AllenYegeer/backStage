<template>
    <div class="set">
      <el-dialog
      v-model="Visible"
      title="权限选择"
      width="50%"
      :before-close="changeVisible_"
      >
        <el-form>
        <el-form-item label="权限：">
         <el-checkbox-group v-model="Authorities.type">
            <el-checkbox label="最高管理员" name="type" />
            <el-checkbox label="用户管理员" name="type" />
            <el-checkbox label="后台管理员" name="type" />
            <el-checkbox label="竞赛管理员" name="type" />
            <el-checkbox label="问题管理员" name="type" />
          </el-checkbox-group>
        </el-form-item>
        </el-form>
        <template #footer>
          <span class="footer">
            <el-button type="primary" @click="changeVisible_">取消</el-button>
            <el-button type="primary" @click="changeVisible_();submit()">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import {computed, defineProps,defineEmits} from 'vue'
import { setAdminAutorities } from "../../request/admin";
import { ElMessage } from 'element-plus'
    const props = defineProps(['visible','index','adminInfo'])
    const emit = defineEmits(['changeVisible'])
    
    const Visible = ref(computed(() => props.visible))
    const index = ref(computed(() => props.index))
    const mp = new Map([['最高管理员',1],['用户管理员',2],['后台管理员',3],['竞赛管理员',4],['问题管理员',5]])
    const Authorities = ref({
        type:[]
    })

    let id = ref([])
    const changeVisible_ = () =>{
        emit('changeVisible')
    }

    const submit = () => {
        Authorities.value.type.forEach(item => {
          id.value.push(mp.get(item))   
        })
        Authorities.value.type = []
        console.log(id.value)
        setAdminAutorities(
        {
          authority_id:id.value,
          uuid:props.adminInfo.uuid
        }
        ).then((res) => {
          console.log(res);
          if (res.data.code === 0){
             ElMessage({
                message: '设置成功',
                type: 'success',
             })
          }else{
            ElMessage.error('设置失败')
          }
        })
        id.value = []
    }

</script>

<style scoped>

</style>