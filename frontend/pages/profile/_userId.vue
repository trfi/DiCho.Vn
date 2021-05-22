<template>
  <div class="mx-auto">
    <!-- profile-cover-->
    <div class="flex max-w-6xl lg:flex-row flex-col items-center lg:py-8 lg:space-x-8">
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
            src="~/assets/images/avatars/avatar-7.jpg"
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

      <div class="lg:w/8/12 flex-1 flex flex-col lg:items-start items-center">
        <h2 class="font-semibold lg:text-2xl text-lg mb-2">{{ user.name }}</h2>
        <p class="lg:text-left mb-2 text-center dark:text-gray-100">
          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming
          id quod mazim placerat facer possim assum
        </p>

        <div class="flex font-semibold mb-3 space-x-2 dark:text-gray-10">
          <a href="#">Travailing</a> , <a href="#">Sports</a> , <a href="#">Movies</a>
        </div>

        <div class="capitalize flex font-semibold space-x-3 text-center text-sm my-2">
          <a href="#" class="bg-gray-300 shadow-sm p-2 px-6 rounded-md dark:bg-gray-700">
            Theo dõi</a
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
                    <i class="uil-user-minus mr-2"></i>Unfriend
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
                    <i class="uil-eye-slash mr-2"></i>Hide Your Story
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
                    <i class="uil-share-alt mr-2"></i> Share This Profile
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
                    <i class="uil-stop-circle mr-2"></i> Block
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="
            divide-gray-300 divide-transparent divide-x
            grid grid-cols-3
            lg:text-left lg:text-lg
            mt-3
            text-center
            w-full
            dark:text-gray-100
          "
        >
          <div class="lg:pl-4 flex lg:flex-row flex-col">
            {{ user.followerCount }} <strong class="lg:pl-2">người theo dõi</strong>
          </div>
          <div class="lg:pl-4 flex lg:flex-row flex-col">
            {{ user.followingCount }} <strong class="lg:pl-2">đang theo dõi</strong>
          </div>
        </div>
      </div>

      <div class="w-20"></div>
    </div>
    <div class="py-8 max-w-5xl flex flex-col p-0">
      <Post v-if="user.posts && user.posts.length > 0" :posts.sync="user.posts" />
    </div>
  </div>
</template>

<script>
import userProfile from '~/apollo/queries/userProfile'

export default {
  name: 'DetailPost',
  layout: 'client-sidebar',
  data() {
    return {
      user: {},
    }
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
}
</script>

<style></style>
