export default function ({ app, error }) {
  console.log(app.$apolloHelpers.getToken())
  const hasToken = !!app.$apolloHelpers.getToken()
  if (!hasToken) {
    error({ errorCode: 403, message: 'Bạn không được phép xem trang này!' })
  }
}
