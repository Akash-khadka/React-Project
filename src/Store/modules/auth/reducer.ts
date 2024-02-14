import { LOGOUT_USER, SET_TOKEN, SET_USER } from "./actionTypes"

interface IAuthenticationState {
    user: any,
    accessToken: string
}

const initialState: IAuthenticationState = {
    user: {},
    accessToken: ''
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
