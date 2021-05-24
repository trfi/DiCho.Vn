<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div
          class="relative w-full px-4 max-w-full flex-grow flex justify-between"
        >
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            Danh sách Bài viết
          </h3>
          <select v-model="statusFilter" class="text-gray-600">
            <option value="Trạng thái" selected disabled>Trạng thái</option>
            <option value="P">Chờ duyệt</option>
            <option value="A">Đã duyệt</option>
            <option value="R">Bị từ chối</option>
          </select>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <head-th>#</head-th>
            <head-th>Ảnh bìa</head-th>
            <head-th>Tiêu đề</head-th>
            <head-th>Giá</head-th>
            <head-th>Người đăng</head-th>
            <head-th>Lượt thích</head-th>
            <head-th>Số comment</head-th>
            <head-th>Môi giới</head-th>
            <head-th>Region</head-th>
            <head-th>Thời gian đăng</head-th>
            <head-th>Trạng thái</head-th>
            <head-th>Duyệt</head-th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in posts" :key="post.id">
            <td
              class="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ index + 1 }}
            </td>
            <td
              class="border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2 text-left flex items-center"
            >
              <img
                :src="`https://dicho.s3-ap-southeast-1.amazonaws.com/pi/${post.thumbnail}.jpg`"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
            </td>
            <td
              class="border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ post.title }}
            </td>
            <td
              class="border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ post.price }}
            </td>
            <td
              class="border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ post.postedBy.name }}
            </td>
            <td
              class="border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ post.likeCount }}
            </td>
            <td
              class="border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ post.commentCount }}
            </td>
            <td
              class="border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ post.broker }}
            </td>
            <td
              class="border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ post.region }}
            </td>
            <td
              class="border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              {{ new Date(post.created).toLocaleString() }}
            </td>
            <td
              class="border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              <span
                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
              >
                <span
                  aria-hidden
                  :class="postStatusColor[post.status]"
                  class="absolute inset-0 rounded-full"
                ></span>
                <span class="relative text-white">{{
                  postStatus[post.status]
                }}</span>
              </span>
            </td>
            <td
              class="border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-2"
            >
              <div class="flex">
                <div class="bg-green-400 w-8 rounded-full hover:bg-green-500">
                  <button @click="approve(post.id)">
                    <span
                      uk-tooltip="Duyệt"
                      class="iconify text-3xl cursor-pointer p-1"
                      data-icon="mdi:check"
                      data-inline="false"
                    ></span>
                  </button>
                </div>
                <div class="bg-red-400 w-8 rounded-full ml-3 hover:bg-red-500">
                  <button @click="approve(post.id, false)">
                    <span
                      uk-tooltip="Từ chối"
                      class="iconify text-3xl cursor-pointer p-1"
                      data-icon="mdi:close"
                      data-inline="false"
                    ></span>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import queryPost from '@/apollo/queries/posts'
import approvePost from '@/apollo/mutations/approvePost'
import HeadTh from '../Tables/HeadTh.vue'
import newPostSubcribe from '~/apollo/subscriptions/newPost'

export default {
  apollo: {
    posts: {
      query: queryPost,
      variables() {
        return {
          status: this.statusFilter,
        }
      },
      subscribeToMore: {
        document: newPostSubcribe,
        // Mutate the previous result
        updateQuery: (previousResult, { subscriptionData }) => {
          // Here, return the new result from the previous with the new data
          // if (!subscriptionData?.data?.newPost) return previousResult
          return {
            posts: [subscriptionData.data.newPost, ...previousResult.posts],
          }
        },
      },
    },
  },
  components: {
    HeadTh,
  },
  props: {
    color: {
      default: 'light',
      validator(value) {
        // The value must match one of these strings
        return ['light', 'dark'].includes(value)
      },
    },
  },
  data() {
    return {
      modal: false,
      dropdown: false,
      statusFilter: 'P',
      postStatus: {
        P: 'Chờ duyệt',
        A: 'Đã duyệt',
        H: 'Đã ẩn',
        R: 'Bị từ chối',
      },
      postStatusColor: {
        P: 'bg-yellow-600',
        A: 'bg-green-500',
        R: 'bg-red-500',
      },
    }
  },
  mounted() {},
  methods: {
    approve(postId, isApprove = true) {
      const status = isApprove ? 'A' : 'R'
      this.$apollo
        .mutate({
          mutation: approvePost,
          variables: { id: postId, status },
        })
        .then(() => {
          this.posts = this.posts.filter((post) => post.id !== postId)
        })
        .catch((err) => alert(err))
    },
    statusFilterChange() {
      console.log('statusFilterChange')
    },
  },
}
</script>
