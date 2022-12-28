import { login } from "@/request/admin";
import router from "@/router";
import { success ,warn , error} from "@/utils/Dialog/index"

const loginIn_ = (data) => {
        login(data).then((res) => {
            if (res.data.code === 0){
                sessionStorage.setItem('adminToken', res.data.data.token)  //设置token
                success('登陆成功')
                location.replace('/backpage')
            }else{
                error(res.data.msg)
            }
        })
}

const loginOut_ = () => {
    sessionStorage.clear();
    location.replace('/login')
}

export {
    loginIn_,
    loginOut_
}