import {post} from './request'

function login (data) {
    return post('/admin/login', data)
}

export {
    login
}