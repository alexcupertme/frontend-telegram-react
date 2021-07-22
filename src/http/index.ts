import axios from 'axios'

let ver = 'v1'
let namespace = 'auth'

let accessToken = localStorage.getItem('token')

export const API_URL = `https://api.botsfactory.ru/api/${ver}/${namespace}/`

const $api = axios.create({
  baseURL: API_URL
})

$api.interceptors.request.use(config => {
  config.headers.Authorization = `${accessToken}`
  return config
})

export default $api;