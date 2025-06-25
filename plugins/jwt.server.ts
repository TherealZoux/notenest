import jwt from 'jsonwebtoken'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      verifyJwtToken: (token, secret) => {
        return jwt.verify(token, secret)
      },
    },
  }
})
