export default function ({ app, error }) {
  console.log(app.$apolloHelpers.getToken())
  const hasToken = !!app.$apolloHelpers.getToken()
  if (!hasToken) {
    error({ errorCode: 403, message: 'Vui lòng đăng nhập để xem trang này!' })
  }
}
