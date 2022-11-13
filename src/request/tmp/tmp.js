import {post} from "./request"

function postInfo(data){
    return post('/user/login',data)
}

export {
    postInfo
}