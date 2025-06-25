export default defineNuxtRouteMiddleware(async (event) => {
  if (process.client) return

  const { $verifyJwtToken } = useNuxtApp()
  const jwt = useCookie('nestnoteJWT')

  if (!jwt.value) {
    return navigateTo('/register')
  }

  try {
    await $verifyJwtToken(jwt.value, process.env.JWT_SECRET)
  } catch (error) {
    return navigateTo('/register')
  }
})





