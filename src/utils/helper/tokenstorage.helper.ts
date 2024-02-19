
export const saveToken = (val: string | null) => {
    if (val) {
        localStorage.setItem('accessToken', val)
    }
}
export const getToken = () =>
    localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null
export const clearStorage = () => localStorage.clear()
export const removeToken = () => localStorage.removeItem('accessToken')

export const saveUser = (val: string) =>
    localStorage.setItem('user', JSON.stringify(val))

export const getUser = () =>
    localStorage.getItem('user') && localStorage.getItem('user') !== 'undefined'
        ? JSON.parse(localStorage.getItem('user') ?? '')
        : null
