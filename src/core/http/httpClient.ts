import axios from 'axios'
import setupRequestInterceptor from './interceptors/request'
import setupResponseInterceptor from './interceptors/response'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

setupRequestInterceptor(http)
setupResponseInterceptor(http)

export default http
