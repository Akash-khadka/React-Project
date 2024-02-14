import baseAxios from "../../../plugins/axios"
import { SET_TOKEN, SET_USER } from "./actionTypes"

export const setUser = (data:any)=>{
    return {
        type: SET_USER,
        payload: data
    }
}

export const setAccessToken = (data:string)=>{
    return {
        type: SET_TOKEN,
        payload: data
    }
}

export const authenticateUser =  (data: {email:string, password:string})=>async (dispatch:any)=>{
    console.log("authenticateuserCalled");
    const res= await baseAxios.post('/authentication',{
        username: data.email,
        password: data.password,
    });
    dispatch(setUser(res.data.user[0]));
    dispatch(setAccessToken(res.data.accessToken));
    localStorage.setItem('accessToken', res.data.accessToken);
    localStorage.setItem('user', JSON.stringify(res.data.user[0]));
}