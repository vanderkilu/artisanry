import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://localhost:3000/api',
})

const PREFIX = 'artisanry'

const storeToken = (token) => localStorage.setItem(PREFIX, token)
const getToken = () => localStorage.getItem(PREFIX)

const register = (data)=> {
    if (data.isArtisan === 'Yes')
        return Axios.post(`/artisans`, data)
    return Axios.post(`/users`, data)
}
const signIn = (data)=> {
    return Axios.post(`/users/login`, data)
}
const artisansByCategory = (category) => {
    return Axios.get(`/artisans/category/${category}`)
}
const artisan = (id) => {
    return Axios.get(`/artisans/${id}`)
}
export {
    register,
    storeToken,
    getToken,
    signIn,
    artisansByCategory,
    artisan
}