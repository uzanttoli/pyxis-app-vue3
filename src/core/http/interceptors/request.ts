export default function setupRequestInterceptors(http: any) {
  http.interceptors.request.use(
    (config: any) => {
      const token =
        localStorage.getItem('token') ||
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NjAyNTk3IiwianRpIjoiY2I2OTdhYzktMDljYi00MGM0LTgyMmYtZjA0Mjc4ZWI1YjNlIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkFETUlOSVNUUkFET1IiLCJORVQiLCJBRE1JTklTVFJBRE9SIiwiTkVUIENPTUJPIl0sImFsbW9wZSI6IjQ2MDI1OTciLCJleHAiOjE3NjM2MDk3MDUsImlzcyI6Imh0dHA6Ly9weXhpcy5hdXRoIiwiYXVkIjoiaHR0cDovL3B5eGlzLmFwaSJ9.6o9C-tpu_ZhpSsYDY_DBGSKJ-rvGASZNtXmCDWluiRw'

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
