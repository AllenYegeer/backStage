import {post} from './request'

function getCode(data){
    return post('/user/register/send-code',data)
}

function register_info(data) {
    return post('/user/register',data)
}
export{
    getCode,
    register_info,
}