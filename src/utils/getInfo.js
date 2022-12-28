import { getInfo } from '@/request/admin'

const get_info = (url,data,infos,total) => {
    getInfo(url,data).then((res) => {
        infos.value = res.data.data.list //获取到用户信息
        total.value = res.data.data.total // 总的页数大小
    })
}

export {
    get_info
}