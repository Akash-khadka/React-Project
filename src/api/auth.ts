import { PostRequest } from "../plugins/http"

export const APIAuthenticateUser = (data:any)=>{
    return PostRequest('/authentication', data);
}