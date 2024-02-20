import { getToken } from "../../../utils/helper/tokenstorage.helper"
import { LOGOUT_USER, SET_TOKEN, SET_USER } from "./actionTypes"

interface IAuthenticationState {
    user: any,
    accessToken: string | null
}

const initialState: IAuthenticationState = {
    user: {},
    accessToken: getToken()
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            }
        case LOGOUT_USER:
            return {
                user: null,
                accessToken: ''
            }
        default:
            return {
                ...state,
            }
    }
}
