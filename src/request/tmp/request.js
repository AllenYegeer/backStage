import axios  from "axios";

const instance = axios.create({
    baseURL:"http://47.109.58.84:9090",
    timeout: 3000
})

function post(url,data = ""){
    return instance.post(url,data)
}

export {
    post
}