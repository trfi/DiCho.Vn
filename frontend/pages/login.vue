<template>
  <div>
    This is the landing page. Please log in to get credentials to visit secret
    page "Page A"

    <form v-if="!isAuthenticated" @submit.prevent="onSubmit">
      <table>
        <tbody>
          <tr>
            <td>
              <label>Phone</label>
            </td>
            <td>
              <input v-model="credentials.phone" type="text" required />
            </td>
          </tr>
          <tr>
            <td>
              <label>Password</label>
            </td>
            <td>
              <input v-model="credentials.password" type="password" required />
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="submitting">Submitting ....</div>
      <button type="submit">Submit</button>
    </form>
    <div v-else>
      You are logged in!
      <button type="button" @click="onLogout">Logout</button>
    </div>
    <div v-if="error" style="color: red">{{ error }}</div>
    <div v-if="successfulData">{{ successfulData }}</div>
  </div>
</template>

<script>
import authenticateUserGql from '~/apollo/authenticateUser'

export default {
  data() {
    return {
      isAuthenticated: false,
      submitting: false,
      error: null,
      credentials: {
        phone: '',
        password: '',
      },
      successfulData: null,
    }
  },
  head() {
    return {
      title: 'Startpage',
    }
  },
  mounted() {
    this.isAuthenticated = !!this.$apolloHelpers.getToken()
  },
  methods: {
    async onSubmit() {
      this.submitting = true
      const credentials = this.credentials
      try {
        const res = await this.$apollo
          .mutate({
            mutation: authenticateUserGql,
            variables: credentials,
          })
          .then(({ data }) => data && data.login)
        await this.$apolloHelpers.onLogin(res.token, undefined, { expires: 7 })
        this.successfulData = res
        this.isAuthenticated = true
      } catch (e) {
        console.error(e)
        this.error = e
      }
    },
    async onLogout() {
      await this.$apolloHelpers.onLogout()
      this.isAuthenticated = false
    },
  },
}
</script>
