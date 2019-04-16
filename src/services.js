import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://localhost:3000/api',
})

const PREFIX = 'artisanry'
const TYPE = 'ISARTISAN'

const storeToken = (token) => localStorage.setItem(PREFIX, token)
const getToken = () => localStorage.getItem(PREFIX)
const storeType = (type) => localStorage.setItem(TYPE, type)
const getType = () => localStorage.getItem(TYPE)

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
const nearestArtisan = ()=> {
    return Axios.get(`/artisans/fakeClosest`)
}
export {
    register,
    storeToken,
    getToken,
    signIn,
    artisansByCategory,
    artisan,
    storeType,
    getType,
    nearestArtisan
}