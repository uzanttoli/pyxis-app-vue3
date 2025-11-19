export default function setupResponseInterceptor(http: any) {
  http.interceptors.response.use(
    (response: any) => {
      return response
    },
    (error: any) => {
      const status = error.response?.status

      if (status === 401) {
        console.warn('Token expirado, redirecionando para login!')
        window.location.href = '/login'
      }

      if (status === 500) {
        console.error('Erro interno no servidor')
      }

      return Promise.reject(error)
    },
  )
}
