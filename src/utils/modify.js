import { updateAdminInfo } from '@/request/admin'

const modifyAdmin = (data, idx) => {
    return updateAdminInfo(data,idx)
}

export {
    modifyAdmin
}