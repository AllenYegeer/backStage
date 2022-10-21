import axios from 'axios'
const instance = axios.create({
    baseURL: "http://qiaohuhu.xyz:9200/api",
    timeout: 3000,
    headers: {
        'accept': "application/json",
        'Content-Type': 'application/json',
    }
})

function post(url, data = "") {
    return instance.post(url, data)
}

export {
    post,
}