import {post, get, put} from './request'

function login (data) {
    return post('/admin/login', data)
}

function get_userInfo(data){
    return post('/user/list',data) 
}

function get_selfInfo(data){
    return get('/admin/getInformation',data)
}

function updatePassword(data){
    return put('/admin/changeSelfPassword', data)
}

function setSelfInfo(data){
    return put('/admin/setSelfInfo', data)
}
export {
    login,
    get_userInfo,
    get_selfInfo,
    updatePassword,
    setSelfInfo
}