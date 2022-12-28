import { ElMessage, ElMessageBox } from 'element-plus'
import { deleteAdminAccount } from '@/request/admin'
import Qs from 'qs'
const remove = (adminInfo,index) => {
    let flag;
    ElMessageBox.confirm(
        '确认删除?',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(() => {
        ElMessage({
            type: 'success',
            message: '删除成功',
        })
        deleteAdminAccount(
            {delete_id:adminInfo[index].id}
        ).then((res) => {
        })
        adminInfo.splice(index, 1)
    }).catch(() => {
            ElMessage({
                type: 'info',
                message: '取消删除',
            })
    })
}

export {
    remove
}