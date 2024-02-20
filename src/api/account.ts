import { GetRequest, PostRequest } from "../plugins/http"

export const APILoadMyAccounts = ()=>{
    return GetRequest('/account');
}
export const APIAddMyAccounts = (data:any)=>{
    return PostRequest('/account',data);
}