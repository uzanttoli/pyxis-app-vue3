export default function setupRequestInterceptors(http: any) {
  http.interceptors.request.use(
    (config: any) => {
      const token =
        localStorage.getItem('token') ||
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NjAyNTk3IiwianRpIjoiODQ2NDFhOTItYTZkNC00MmIyLWJiZTctOTRlYjEyZmMzMGM3IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkFETUlOSVNUUkFET1IiLCJORVQiLCJBRE1JTklTVFJBRE9SIiwiTkVUIENPTUJPIl0sImFsbW9wZSI6IjQ2MDI1OTciLCJleHAiOjE3NjM3ODA5NDEsImlzcyI6Imh0dHA6Ly9weXhpcy5hdXRoIiwiYXVkIjoiaHR0cDovL3B5eGlzLmFwaSJ9.-2_RUTWRFZX6_Z8fJp5JnH9fz7VGvs5tKu00AUtxgN0'

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
