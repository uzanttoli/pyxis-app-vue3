export default function setupRequestInterceptors(http: any) {
  http.interceptors.request.use(
    (config: any) => {
      const token = localStorage.getItem('token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error: any) => {
      return Promise.reject(error)
    },
  )
}
