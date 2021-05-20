<template>
  <div v-if="delShowModal" class="fixed w-full h-full top-0 left-0 z-50">
    <main
      class="antialiased bg-gray-200 text-gray-900 font-sans overflow-x-hidden"
      style="background-color: rgba(0, 0, 0, 0.3)"
    >
      <div
        class="relative px-4 min-h-screen md:flex md:items-center md:justify-center"
      >
        <div
          class="bg-black opacity-25 w-full h-full absolute z-10 inset-0"
        ></div>
        <div
          class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative"
        >
          <div class="md:flex items-center">
            <div
              class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto"
            >
              <span
                class="iconify text-3xl"
                data-icon="carbon:warning-alt"
                data-inline="false"
              ></span>
            </div>
            <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p class="font-bold">Xóa tài khoản của bạn?</p>
              <p class="text-sm text-gray-700 mt-1">
                Bạn sẽ mất tất cả dữ liệu khi xóa tài khoản của mình. Hành động
                này không thể được hoàn tác.
              </p>
            </div>
          </div>
          <div class="text-center md:text-right mt-4 md:flex md:justify-end">
            <button
              class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
              @click="deleteUser(user.id)"
            >
              Xóa tài khoản
            </button>
            <button
              class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1"
              @click="delShowModal = !delShowModal"
            >
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import deleteUser from '@/apollo/mutations/deleteUser'

export default {
  props: {
    users: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      delShowModal: false,
      user: '',
      indexUser: 0,
    }
  },
  created() {
    this.$eventBus.$on('delUser', (modal, user, index) => {
      this.delShowModal = !modal
      this.user = user
      this.indexUser = index
      console.log(this.users)
    })
  },
  mounted() {},
  methods: {
    async deleteUser(id) {
      try {
        const res = await this.$apollo
          .mutate({
            mutation: deleteUser,
            variables: { id },
          })
          .then(({ data }) => console.log(data))
        // eslint-disable-next-line vue/no-mutating-props
        this.users.users.splice(this.indexUser, 1)
        this.delShowModal = !this.delShowModal
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style></style>
