import axios from "axios";//创建一个axios的对象

axios.defaults.baseURL = "http://localhost:3000"
//生成一个axios的实例
 
export const ApiGet = (path,params,config,) => {
    return axios.get(path,{
        params,
        ...config,
    })
}

export const ApiPost = (path,data,config,) => {
    return axios.post(path,data,config,)
}