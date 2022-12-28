import {post} from './request'

function getCode(data){ //得到验证码
    return post('/user/register/send-code',data)
}

function register_info(data) {   //注册信息
    return post('/user/register',data)
}
export{
    getCode,
    register_info,
}