import axios from 'axios'
const instance = axios.create({
    baseURL: "http://qiaohuhu.xyz:9200/api",
    timeout: 3000,
    headers: {
        'accept': "application/json",
        'Content-Type': 'application/json',
    }
})

instance.interceptors.request.use(config =>{
    const token = sessionStorage.getItem('adminToken')   //请求拦截token值
    if (token){
        config.headers.Authorization = token
    }
    return config
},err => {
    return Promise.reject(err)
})

function post(url, data = "") {
    return instance.post(url, data)
}

function get(url,data = ""){
    return instance.get(url, data)
}

function put(url,data = ""){
    return instance.put(url, data)
}
function deleteAdminAccount_(url,data_){
    return instance.delete(url,data_ )
}
export {
    post, get, put,deleteAdminAccount_
}