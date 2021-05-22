<template>
  <div class="max-w-2xl w-full mx-auto flex">
    <div class="w-full">
      <div class="w-full rounded-md bg-gray-50 mb-4">
        <div class="py-6">
          <div class="w-full flex items-center px-5">
            <a href="" class="relative rounded-3xl bg-gray-900">
              <img
                src="~/assets/images/user.png"
                alt=""
                class="w-10 h-10 object-cover rounded-3xl"
              />
            </a>
            <div class="flex flex-grow justify-center items-center">
              <button
                class="inline-block w-full py-4 mx-4 rounded-sm bg-gray-200 text-sm hover:bg-gray-300"
                @click="toggleModal"
              >
                Đăng bài
              </button>
            </div>
            <div
              class="rounded-3xl w-8 h-8 bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer"
            >
              <span
                class="iconify"
                data-icon="bi:file-earmark-image"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>
        <div
          class="flex flex-row-reverse items-center border-t border-gray-300 border-solid bg-gray-100 px-3"
        ></div>
      </div>

      <!-- Start post -->
      <div
        v-for="(post, index) in posts"
        :key="post.id"
        class="w-full rounded-md bg-white mb-7"
      >
        <div class="relative">
          <div class="p-4 flex items-center justify-between">
            <div class="flex">
              <a href="" class="relative w-10 h-10 rounded-xl mr-2">
                <img
                  src="~/assets/images/content/tuoitre-main.png"
                  alt=""
                  class="w-full h-full object-cover rounded-3xl"
                />
              </a>
              <div class="flex flex-col">
                <a href="" class="text-sm text-black">{{
                  post.postedBy.name
                }}</a>
                <div class="relative">
                  <a href="" class="text-gray-500 text-xs hover:underline"
                    ><span>18 phút trước</span></a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="break-words text-left text-base pb-2 pl-4">
            <div class="text-start text-xl mb-2">
              {{ post.title }}
            </div>
          </div>
        </div>
        <div class="relative"></div>
        <div class="relative">
          <NuxtLink
            :to="`${post.title
              .toLowerCase()
              .replace(/ /g, '-')
              .replace(/[^\w-]+/g, '')}/${post.id}`"
          >
            <img
              :src="`https://dicho.s3-ap-southeast-1.amazonaws.com/pi/${post.thumbnail}.jpg`"
              class="object-cover w-full h-full rounded-3xl"
              style="min-height: 250px; height: 320px"
              alt=""
            />
          </NuxtLink>
          <div
            class="absolute bottom-4 left-0 px-4 w-full flex items-center cursor-pointer"
          >
            <!-- Tim -->
            <div
              :class="[
                post.userLiked
                  ? 'bg-red-600 opacity-85'
                  : 'bg-gray-700 opacity-85',
              ]"
              class="w-28 flex items-center px-2 py-1 rounded-2xl mr-2"
              @click.prevent="like(post.id, post.userLiked, index)"
            >
              <span
                class="iconify text-white pl-2 absolute"
                data-icon="mdi:cards-heart"
                data-inline="false"
                data-width="27"
              ></span>
              <div>
                <span class="mx-auto pl-9 pr-5 text-white">{{
                  post.likeCount
                }}</span>
              </div>
            </div>
            <!-- Tim end -->
            <!-- Comment -->
            <div
              class="w-28 flex items-center px-2 py-1 bg-gray-700 opacity-85 rounded-2xl mr-2 cursor-pointer"
              :uk-toggle="`target: #post-comment-${post.id}; animation: uk-animation-slide-bottom-medium`"
            >
              <span
                class="iconify text-white pl-2 absolute"
                data-icon="bx:bxs-comment-detail"
                data-inline="false"
                data-width="27"
              ></span>
              <div>
                <span class="mx-auto pl-9 pr-5 text-white">{{
                  post.commentCount
                }}</span>
              </div>
            </div>
            <!-- Comment End -->
            <!-- Price -->
            <div
              class="w-28 flex items-center px-2 py-1 bg-gray-700 opacity-85 rounded-2xl mr-2"
            >
              <span
                class="iconify text-white pl-2 absolute"
                data-icon="ri-money-dollar-circle-fill"
                data-inline="false"
                data-width="27"
              ></span>
              <div>
                <span class="mx-auto pl-9 pr-5 text-white">{{
                  post.price
                }}</span>
              </div>
            </div>
            <!-- Price End -->
            <div class="w-full flex flex-row-reverse">
              <span
                class="iconify text-white"
                data-icon="bx:bx-share"
                data-inline="false"
              ></span>
            </div>
          </div>
        </div>

        <!-- Comment Post -->
        <div :id="`post-comment-${post.id}`" class="py-3 px-4 space-y-3" hidden>
          <div
            v-if="Object.keys(posts[index].comments).length !== 0"
            class="border-t pt-4 dark:border-gray-600"
          >
            <div
              v-for="comment in posts[index].comments"
              :key="comment.id"
              class="flex mb-4"
            >
              <div class="w-10 h-10 rounded-full relative flex-shrink-0">
                <img
                  src="~/assets/images/avatars/avatar-1.jpg"
                  alt=""
                  class="absolute h-full rounded-full w-full"
                />
              </div>
              <div
                class="text-gray-700 py-2 px-3 rounded-md bg-gray-100 h-full relative lg:ml-5 ml-2 lg:mr-20 dark:bg-gray-800 dark:text-gray-100"
              >
                <p class="leading-6">
                  {{ comment.content }}
                  <i class="uil-grin-tongue-wink"> </i>
                </p>
                <div
                  class="absolute w-3 h-3 top-3 -left-1 bg-gray-100 transform rotate-45 dark:bg-gray-800"
                ></div>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 rounded-full mt-3 relative dark:bg-gray-800">
            <input
              type="text"
              placeholder="Add your Comment.."
              class="bg-transparent w-full px-5 py-6 max-h-10 shadow-none focus:outline-none"
              @keyup.enter="addComment(post.id, $event.target, index)"
            />
            <div
              class="absolute bottom-0 flex h-full items-center right-0 text-xl space-x-2"
            >
              <a href="#"
                ><span
                  class="iconify"
                  data-icon="bx:bxs-image-add"
                  data-inline="false"
                ></span
              ></a>
              <a href="#"
                ><span
                  class="iconify"
                  data-icon="bx:bxs-video-plus"
                  data-inline="false"
                ></span
              ></a>
            </div>
          </div>
        </div>
        <!-- Comment End -->
      </div>
      <!-- Post end -->
    </div>
  </div>
</template>

<script>
import feedQuery from '~/apollo/queries/feed'
import like from '~/apollo/mutations/like'
import unlike from '~/apollo/mutations/unlike'
import commentMutaion from '~/apollo/mutations/comment'
import newPostSubcribe from '~/apollo/subscriptions/newPost'

export default {
  layout: 'client',
  middleware: ['isAuth'],
  data() {
    return {
      postDraft: {},
      posts: [],
    }
  },
  created() {
    this.$eventBus.$on('addNewPost', (data) => {
      console.log(data)
      console.log(data.addPost)
      console.log(this.posts)
      this.posts.unshift(data.addPost)
    })
  },
  apollo: {
    posts: {
      prefetch: true,
      query: feedQuery,
      update: (data) => data.posts.posts,
      subscribeToMore: {
        document: newPostSubcribe,
        // Mutate the previous result
        updateQuery: (previousResult, { subscriptionData }) => {
          // Here, return the new result from the previous with the new data
          console.log(previousResult)
          console.log(subscriptionData)
          return {
            posts: [
              ...previousResult.posts.posts,
              subscriptionData.data.newPost,
            ],
          }
        },
      },
    },
  },
  methods: {
    async like(postId, userLiked, index) {
      const mutation = userLiked ? unlike : like
      try {
        const res = await this.$apollo
          .mutate({
            mutation,
            variables: { postId },
          })
          .then(({ data }) => data)
        console.log(res)
        const likeCount = userLiked
          ? res.unlike.post.likeCount
          : res.like.post.likeCount
        this.posts[index].likeCount = likeCount
        this.posts[index].userLiked = !userLiked
      } catch (e) {
        console.error(e)
        this.error = e
      }
    },
    async addComment(postId, element, index) {
      try {
        const content = element.value
        const res = await this.$apollo
          .mutate({
            mutation: commentMutaion,
            variables: { postId, content },
          })
          .then(({ data }) => data)
        console.log(res)
        this.posts[index].comments.push(res.addComment.comment)
        this.posts[index].commentCount = res.addComment.post.commentCount
        element.value = ''
      } catch (e) {
        console.error(e)
        this.error = e
      }
    },
    toggleModal() {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    },
  },
}
</script>

<style></style>
