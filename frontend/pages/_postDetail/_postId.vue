<template>
  <div v-if="post" class="xl:mx-10 w-full h-full mb-10">
    <div class="w-full flex items-center justify-between pt-4">
      <ol class="text-left whitespace-nowrap flex">
        <li class="mr-2 inline-flex items-center text-blue-400 md:text-base text-xs">
          <a href="">
            <span class="mr-2">Chợ tốt </span>
          </a>
          <span
            class="iconify text-xs"
            data-icon="si-glyph:two-arrow-right"
            data-inline="false"
          ></span>
        </li>
        <li class="mr-2 inline-flex items-center text-blue-400 md:text-base text-xs">
          <a href="">
            <span class="mr-2">Toàn quốc </span>
          </a>
          <span
            class="iconify text-xs"
            data-icon="si-glyph:two-arrow-right"
            data-inline="false"
          ></span>
        </li>
        <li class="inline-flex items-center md:text-base text-xs">
          <a href="">
            <span>{{ post.category.title }}</span>
          </a>
        </li>
      </ol>
    </div>
    <div class="w-full flex flex-row flex-nowrap pt-4">
      <div class="w-2/3">
        <div class="w-full h-96 bg-yellow-200">
          <img
            :src="`https://dicho.s3-ap-southeast-1.amazonaws.com/pi/${post.thumbnail}.jpg`"
            class="object-cover w-full h-full"
            style="min-height: 250px; height: 384px"
            alt=""
          />
        </div>
        <div class="">
          <h1 class="my-4 text-xl" style="font-weight: 700">
            {{ post.title }}
          </h1>
          <div class="flex items-center justify-between">
            <span class="text-red-700 text-lg" style="font-weight: 600"
              >{{ post.price }} $
            </span>
            <!-- Nut tim -->
            <div
              :class="[
                post.userLiked
                  ? 'bg-red-600 opacity-80 text-white'
                  : 'bg-white text-red-600 border border-red-600',
              ]"
              class="
                flex
                items-center
                px-3
                py-1
                border border-solid
                rounded-2xl
                cursor-pointer
              "
              @click.prevent="like(post.id, post.userLiked)"
            >
              <p class="mr-1.5 text-base">Yêu thích</p>
              <span
                :class="post.userLiked ? 'text-white' : 'text-red-600'"
                class="iconify"
                data-icon="akar-icons:heart"
                data-inline="false"
              ></span>
            </div>
          </div>
          <div class="block">
            <p class="whitespace-pre-line pt-3 text-justify text-gray-900 text-base">
              {{ post.content }}
            </p>
          </div>
          <div class="block mt-2">
            <div class="flex items-center">
              <span
                class="iconify mr-1"
                data-icon="akar-icons:phone"
                data-inline="false"
              ></span>
              Số điện thoại:
              <span class="text-black ml-1" style="font-weight: 600">{{
                post.postedBy.phone
              }}</span>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center mt-4">
          <div class="w-2/4 flex items-center mr-2">
            <span
              class="iconify mr-2 text-3xl"
              data-icon="emojione-monotone:money-bag"
              data-inline="false"
            ></span>
            <span class="text-sm">Hình thức trả lương: </span>
            <span class="ml-1 text-sm">Theo tháng </span>
          </div>
          <div class="w-2/4 flex items-center">
            <span
              class="iconify mr-2 text-3xl"
              data-icon="vs:clock"
              data-inline="false"
            ></span>
            <span class="text-sm"> Loại công việc: </span>
            <span class="ml-1 text-sm">Toàn thời gian </span>
          </div>
        </div>
        <div class="w-full flex items-center mt-4">
          <div class="w-2/4 flex items-center mr-2">
            <span
              class="iconify mr-2 text-3xl"
              data-icon="bytesize:work"
              data-inline="false"
            ></span>
            <span class="text-sm">Ngành nghề: </span>
            <span class="ml-1 text-sm">Nhân viên kinh doanh </span>
          </div>
          <div class="w-2/4 flex items-center">
            <span
              class="iconify mr-2 text-3xl"
              data-icon="ph:anchor-simple-thin"
              data-inline="false"
            ></span>
            <span class="text-sm"> Kinhn ghiệm: </span>
            <span class="ml-1 text-sm">Không yêu cầu </span>
          </div>
        </div>
        <div class="w-full flex items-center mt-4">
          <div class="w-2/4 flex items-center mr-2">
            <span
              class="iconify mr-2 text-3xl"
              data-icon="ion:transgender-outline"
              data-inline="false"
            ></span>
            <span class="text-sm">Giới tính: </span>
            <span class="ml-1 text-sm">Không yêu cầu </span>
          </div>
          <div class="w-2/4 flex items-center">
            <span
              class="iconify mr-2 text-3xl"
              data-icon="fluent:star-28-regular"
              data-inline="false"
            ></span>
            <span class="text-sm"> Các quyền lời khác: </span>
            <span class="ml-1 text-sm">Thưởng thêm </span>
          </div>
        </div>
        <div class="w-full flex items-center mt-4">
          <div class="w-2/4 flex items-center mr-2">
            <span
              class="iconify mr-2 text-3xl"
              data-icon="cli:education"
              data-inline="false"
            ></span>
            <span class="text-sm">Học vấn tối thiểu: </span>
            <span class="ml-1 text-sm">Không yêu cầu </span>
          </div>
          <div class="w-2/4 flex items-center">
            <span
              class="iconify mr-2 text-3xl"
              data-icon="carbon:certificate-check"
              data-inline="false"
            ></span>
            <span class="text-sm"> Chứng chỉ/ kỹ năng: </span>
            <span class="ml-1 text-sm">Thưởng thêm </span>
          </div>
        </div>
        <div class="w-full flex items-center mt-4">
          <div class="w-2/4 flex items-center mr-2">
            <span
              class="iconify mr-2 text-3xl"
              data-icon="ic:sharp-first-page"
              data-inline="false"
            ></span>
            <span class="text-sm">Tuổi tối thiểu: </span>
            <span class="ml-1 text-sm">18 </span>
          </div>
          <div class="w-2/4 flex items-center">
            <span
              class="iconify mr-2 text-3xl"
              data-icon="ic:sharp-last-page"
              data-inline="false"
            ></span>
            <span class="text-sm"> Tuổi tối đa: </span>
            <span class="ml-1 text-sm">40 </span>
          </div>
        </div>
        <div class="block mt-4">
          <div class="p-2 border-b border-solid border-gray-400">
            <h3 class="text-base text-gray-700" style="font-weight: 600">Nơi làm việc</h3>
          </div>
          <div class="flex items-center mt-2">
            <span
              class="iconify mr-2 text-xl"
              data-icon="bx:bx-map"
              data-inline="false"
            ></span>
            <span class="text-base"> Phường Hòa Khê, Quận Thanh Khê, Đà Nẵng</span>
          </div>
        </div>
      </div>
      <!-- O ben -->
      <div class="flex flex-col ml-8 pl-3 w-1/3 relative">
        <div class="">
          <a
            class="
              flex
              hover:no-underline
              py-2
              border-t border-b border-solid border-gray-400
            "
          >
            <div class="w-12 h-12">
              <img
                src="https://cdn.chotot.com/uac2/4545832"
                alt=""
                class="
                  object-cover
                  w-full
                  rounded-3xl
                  block
                  border-2 border-gray-400 border-solid
                "
              />
            </div>
            <div class="pl-2 w-full">
              <div class="flex items-center justify-between">
                <span class="text-sm text-black" style="font-weight: 600">{{
                  post.postedBy.name
                }}</span>
                <button
                  class="
                    py-1
                    px-2
                    border border-solid border-yellow-400
                    rounded-xl
                    text-xs text-yellow-400
                  "
                >
                  Xem trang
                </button>
              </div>
              <div>
                <p class="text-xs text-gray-400">Hoạt động 4 phút trước</p>
              </div>
            </div>
          </a>
          <div>
            <div class="my-4 text-center">
              <span class="text-black" style="font-weight: 600">{{
                post.postedBy.phone
              }}</span>
            </div>
            <div
              class="
                my-4
                p-2
                border-solid border border-gray-400
                rounded-md
                hover:bg-gray-200
              "
            >
              <a
                href
                class="
                  flex
                  items-center
                  justify-between
                  text-green-700
                  hover:no-underline
                "
              >
                <span
                  class="iconify text-2xl"
                  data-icon="icomoon-free:profile"
                  data-inline="false"
                ></span>
                <span class="capitalize" style="font-weight: 600">LIÊN HỆ</span>
              </a>
            </div>
            <div
              class="p-2 border-solid border border-gray-400 rounded-md hover:bg-gray-200"
            >
              <a
                href
                class="
                  flex
                  items-center
                  justify-between
                  text-green-700
                  hover:no-underline
                "
              >
                <span
                  class="iconify text-2xl"
                  data-icon="ph:chats-bold"
                  data-inline="false"
                ></span>
                <span class="capitalize" style="font-weight: 600"
                  >CHAT VỚI NGƯỜI ĐĂNG</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postQuery from '~/apollo/queries/post'
import like from '~/apollo/mutations/like'
import unlike from '~/apollo/mutations/unlike'

export default {
  name: 'DetailPost',
  layout: 'client-sidebar',
  apollo: {
    post: {
      prefetch: true,
      query: postQuery,
      variables() {
        return { id: this.$route.params.postId }
      },
    },
    // update: (data) => data.post,
  },
  asyncData({ params, _redirect }) {
    console.log(params)
    return params
  },
  methods: {
    async like(postId, userLiked) {
      const mutation = userLiked ? unlike : like
      try {
        const res = await this.$apollo
          .mutate({
            mutation,
            variables: { postId },
          })
          .then(({ data }) => data)
        const likeCount = userLiked ? res.unlike.post.likeCount : res.like.post.likeCount
        this.post.likeCount = likeCount
        this.post.userLiked = !userLiked
      } catch (e) {
        console.error(e)
        this.error = e
      }
    },
  },
}
</script>
