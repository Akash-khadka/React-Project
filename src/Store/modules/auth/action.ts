import { APIAuthenticateUser } from "../../../api/auth"
import baseAxios from "../../../plugins/axios"
import { SET_TOKEN, SET_USER } from "./actionTypes"

export const setUser = (data: any) => {
    return {
        type: SET_USER,
        payload: data
    }
}

export const setAccessToken = (data: string) => {
    return {
        type: SET_TOKEN,
        payload: data
    }
}

const setAuthorizationToken = (token:string)=> {
    baseAxios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const deleteAuthorizationToken = ()=> {
   delete baseAxios.defaults.headers.common.Authorization;
}


export const authenticateUser = (data: { email: string, password: string }) => async (dispatch: any) => {

    const setAuthorizationHeader = (token: string) => {
        baseAxios.defaults.headers.common = {
            ...baseAxios.defaults.headers.common,
            Authorization: 'Bearer ' + token,
        }
    }
    const res: any = await APIAuthenticateUser({
        username: data.email,
        password: data.password,
    });
    if (res.statusCode === 201) {
        dispatch(setUser(res.data.user));
        dispatch(setAccessToken(res.data.accessToken));
        localStorage.setItem('accessToken', res.data.accessToken);
        setAuthorizationToken(res.data.accessToken);
        localStorage.setItem('user', JSON.stringify(res.data.user[0]));
        setAuthorizationHeader(res?.data.accessToken || '')
    }

}