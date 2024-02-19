import baseAxios from "./axios"

export const PostRequest = (url:string, data:any, params:any={})=>{
    return baseAxios.post(url, data, params);
}