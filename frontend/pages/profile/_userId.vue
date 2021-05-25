<template>
  <div class="mx-auto w-full max-w-5xl">
    <!-- profile-cover-->
    <div
      class="flex lg:flex-row justify-between flex-col items-center lg:py-8 lg:space-x-8"
    >
      <div>
        <div
          class="
            bg-gradient-to-tr
            from-yellow-600
            to-pink-600
            p-1
            rounded-full
            m-0.5
            mr-2
            w-56
            h-56
            relative
            overflow-hidden
            uk-transition-toggle
          "
        >
          <img
            :src="user.avatar"
            class="
              bg-gray-200
              border-4 border-white
              rounded-full
              w-full
              h-full
              dark:border-gray-900
            "
          />

          <div
            class="
              absolute
              -bottom-3
              custom-overly1
              flex
              justify-center
              pt-4
              pb-7
              space-x-3
              text-2xl text-white
              uk-transition-slide-bottom-medium
              w-full
            "
          >
            <a href="#" class="hover:text-white">
              <i class="uil-camera"></i>
            </a>
            <a href="#" class="hover:text-white">
              <i class="uil-crop-alt"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="lg:w/8/12 flex-1 flex flex-col lg:items-end items-center">
        <h2 class="font-semibold lg:text-2xl text-lg mb-2">{{ user.name }}</h2>
        <p class="lg:text-left mb-2 text-center dark:text-gray-100">
          <b>Địa chỉ: </b>{{ user.address }}
        </p>

        <div
          class="
            capitalize
            flex flex-row
            justify-center
            items-center
            font-semibold
            space-x-3
            text-center text-sm
            my-2
          "
        >
          <div v-if="currentUser == user.id">
            <a
              href="#"
              class="
                bg-pink-500
                shadow-sm
                p-2
                pink-500
                px-6
                rounded-md
                text-white
                hover:text-white
                hover:bg-pink-600
              "
            >
              Chỉnh sửa trang cá nhân</a
            >
          </div>
          <div v-else>
            <a
              :class="[user.isFollowed ? 'bg-blue-400' : 'bg-gray-300 text-gray-700']"
              class="
                text-white
                shadow-sm
                p-2
                px-6
                rounded-md
                dark:bg-gray-700
                hover:no-underline
              "
              @click="follow(user.id)"
            >
              {{ user.isFollowed ? 'Đang theo dõi' : 'Theo dõi' }}</a
            >
            <a
              href="#"
              class="
                bg-pink-500
                shadow-sm
                p-2
                pink-500
                px-6
                rounded-md
                text-white
                hover:text-white
                hover:bg-pink-600
              "
            >
              Gửi tin nhắn</a
            >
          </div>

          <div>
            <a
              href="#"
              class="
                bg-gray-300
                flex
                h-8
                items-center
                justify-center
                rounded-full
                text-xl
                w-9
                dark:bg-gray-700
              "
            >
              <span
                class="iconify"
                data-icon="mdi:chevron-down"
                data-inline="false"
              ></span>
            </a>

            <div
              class="
                bg-white
                w-56
                shadow-md
                mx-auto
                p-2
                mt-12
                rounded-md
                text-gray-500
                hidden
                text-base
                dark:bg-gray-900
              "
              uk-drop="mode: click"
            >
              <ul class="space-y-1">
                <li>
                  <a
                    href="#"
                    class="
                      flex
                      items-center
                      px-3
                      py-2
                      hover:bg-gray-200
                      hover:text-gray-800
                      rounded-md
                      dark:hover:bg-gray-700
                    "
                  >
                    <i class="uil-user-minus mr-2"></i>Theo dõi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      flex
                      items-center
                      px-3
                      py-2
                      hover:bg-gray-200
                      hover:text-gray-800
                      rounded-md
                      dark:hover:bg-gray-700
                    "
                  >
                    <i class="uil-eye-slash mr-2"></i>Báo cáo
                  </a>
                </li>
                <li>
                  <hr class="-mx-2 my-2 dark:border-gray-700" />
                </li>
                <li>
                  <a
                    href="#"
                    class="
                      flex
                      items-center
                      px-3
                      py-2
                      text-red-500
                      hover:bg-red-100
                      hover:text-red-500
                      rounded-md
                      dark:hover:bg-red-600
                    "
                  >
                    <i class="uil-stop-circle mr-2"></i> Chặn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="
            divide-gray-300 divide-transparent divide-x
            lg:text-left lg:text-lg
            mt-3
            text-center
            flex flex-row
            items-end
            justify-end
            dark:text-gray-100
          "
        >
          <div class="lg:px-4 flex lg:flex-row flex-col">
            {{ user.followerCount }} <strong class="lg:pl-2">người theo dõi</strong>
          </div>
          <div class="lg:pl-4 flex lg:flex-row flex-col">
            {{ user.followingCount }} <strong class="lg:pl-2">đang theo dõi</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 w-full flex flex-col p-0">
      <h1 class="font-bold text-2xl ml-5 mb-5">Bài viết</h1>
      <Posts v-if="user.posts && user.posts.length > 0" :posts.sync="user.posts" />
    </div>
  </div>
</template>

<script>
import userProfile from '~/apollo/queries/userProfile'
import followMutation from '~/apollo/mutations/follow'
import unfollowMutation from '~/apollo/mutations/unfollow'

export default {
  name: 'DetailPost',
  layout: 'client-sidebar',
  data() {
    return {
      notification: false,
      caret: false,
      currentUser: '',
      user: {},
    }
  },
  created() {
    this.currentUser = localStorage.getItem('userId')
  },
  apollo: {
    user: {
      prefetch: true,
      query: userProfile,
      variables() {
        return { where: { id: this.$route.params.userId } }
      },
    },
  },
  methods: {
    async follow(userId) {
      let mutation, followerCount, isFollowed
      if (this.user.isFollowed) {
        isFollowed = false
        mutation = unfollowMutation
        followerCount = this.user.followerCount - 1
      } else {
        isFollowed = true
        mutation = followMutation
        followerCount = this.user.followerCount + 1
      }
      try {
        const res = await this.$apollo
          .mutate({
            mutation,
            variables: { id: userId },
          })
          .then(({ data }) => data)
        console.log(res)
        this.user.followerCount = followerCount
        this.user.isFollowed = isFollowed
      } catch (e) {
        console.error(e)
        this.error = e
      }
    },
  },
}
</script>

<style></style>
