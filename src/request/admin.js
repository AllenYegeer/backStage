import {post, get, put,deleteAdminAccount_} from './request'

function login (data) {   //管理员登陆
    return post('/admin/login', data)
}

function get_userInfo(data){   //获取到用户信息
    return post('/user/list', data) 
}

function get_adminInfo(data){  //获取管理员信息
    return post('/admin/getAdminInfoList', data)
}

function getInfo(url,data){    //统一获取
    return post(url, data)
}

function get_selfInfo(data){  //获取自身信息
    return get('/admin/getInformation', data)
}

function updateSelfPassword(data){    //修改密码
    return put('/admin/changeSelfPassword', data)
}

function updateAdminInfo(data,idx){    //修改管理员信息,包括密码和信息
    if (idx == 1) return put('/admin/setAdminInfo', data)
    else return put('/admin/changePassword',data)
}

function setSelfInfo(data){   //修改信息
    return put('/admin/setSelfInfo', data)
}

function getAdminAccount(data){   //生成管理员账号
    return post('/admin/generateAdminAccount', data)
}

function setAdminAutorities(data){    //设置管理员权限
    return put('/admin/setAdminAuthorities',data)
}

function deleteAdminAccount(data){     //删除管理员账号
    return deleteAdminAccount_('/admin/deleteAdminAccount',{data})
}
export {
    login,
    get_userInfo,
    get_selfInfo,
    updateSelfPassword,
    setSelfInfo,
    get_adminInfo,
    getAdminAccount,
    setAdminAutorities,
    deleteAdminAccount,
    getInfo,
    updateAdminInfo
}