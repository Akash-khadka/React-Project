import baseAxios from "./axios"

export const PostRequest = (url:string, data:any, params:any={})=>{
    return baseAxios.post(url, data, params);
}

export const GetRequest = (url:string, params:any={})=>{
    return baseAxios.get(url, params);
}