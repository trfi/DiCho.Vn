/* eslint-disable vue/no-mutating-props */
<template>
  <div class="w-full h-auto px-12">
    <div class="mx-auto w-full px-6 sm:rounded-3xl">
      <h1 class="text-2xl font-bold mb-8">Thông tin chi tiết</h1>
      <form id="form" novalidate>
        <div class="relative z-0 w-full mb-5">
          <input
            v-model="title"
            type="text"
            name="name"
            placeholder=" "
            required
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label
            for="name"
            class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >Tiêu đề</label
          >
          <span id="error" class="text-sm text-red-600 hidden"
            >Title is required</span
          >
        </div>

        <div class="relative z-0 w-full mb-5">
          <input
            v-model="price"
            type="number"
            name="price"
            placeholder=" "
            class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <div class="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
          <label
            for="price"
            class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"
            >Giá</label
          >
          <span id="error" class="text-sm text-red-600 hidden"
            >Amount is required</span
          >
        </div>

        <div class="relative z-0 w-full mb-5">
          <textarea
            v-model="content"
            type="text"
            name="content"
            placeholder=" "
            class="pt-3 h-64 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label
            for="content"
            class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >Nội dung</label
          >
          <span id="error" class="text-sm text-red-600 hidden"
            >Password is required</span
          >
        </div>

        <fieldset class="relative z-0 w-full p-px mb-5">
          <legend
            class="absolute text-gray-500 transform scale-75 -top-3 origin-0"
          >
            Bạn là
          </legend>
          <div class="block pt-3 pb-2 space-x-4">
            <label>
              <input
                v-model="broker"
                type="radio"
                name="radio"
                value="0"
                class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
              />
              Cá nhân
            </label>
            <label>
              <input
                v-model="broker"
                type="radio"
                name="radio"
                value="1"
                class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
              />
              Môi giới
            </label>
          </div>
          <span id="error" class="text-sm text-red-600 hidden"
            >Option has to be selected</span
          >
        </fieldset>

        <div class="relative z-0 w-full mb-5">
          <h1 class="text-lg mb-3">Hình ảnh</h1>
          <UploadImage
            :upload-success.sync="uploadSuccess"
            :images.sync="images"
            folder="pi"
          />
          <p v-if="uploadSuccess">Tải ảnh thành công</p>
        </div>

        <button
          id="button"
          type="button"
          class="w-full uppercase px-6 py-3 mt-8 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
          @click="addInfo"
        >
          Đăng bài
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import addPost from '~/apollo/mutations/addPost'

export default {
  name: 'PostInfo',
  model: {
    prop: 'postDraft',
    event: 'update',
  },
  props: {
    postDraft: Object,
  },
  data() {
    return {
      userClick: false,
      title: '',
      content: '',
      price: 0,
      broker: false,
      images: [],
      uploadSuccess: false,
      postDraftLocal: this.postDraft,
    }
  },
  watch: {
    broker(val) {
      this.broker = Boolean(Number(val))
    },
  },
  methods: {
    addInfo() {
      const data = {
        ...this.postDraft,
        title: this.title,
        content: this.content,
        price: Number(this.price),
        broker: this.broker,
        images: this.images,
      }
      console.log(data)
      this.postDraftLocal = data
      // this.$emit('update:postDraft', this.postDraftLocal)
      this.addPost(data)
    },
    toggleError() {
      const errMessages = document.querySelectorAll('#error')
      // Show error message
      errMessages.forEach((el) => {
        el.classList.toggle('hidden')
      })

      // Highlight input and label with red
      const allBorders = document.querySelectorAll('.border-gray-200')
      const allTexts = document.querySelectorAll('.text-gray-500')
      allBorders.forEach((el) => {
        el.classList.toggle('border-red-600')
      })
      allTexts.forEach((el) => {
        el.classList.toggle('text-red-600')
      })
    },
    async addPost(data) {
      try {
        const res = await this.$apollo
          .mutate({
            mutation: addPost,
            variables: data,
          })
          .then(({ data }) => data)
        console.log(res)
        this.$uikit.notification({
          message: 'Đăng thành công',
          status: 'success',
        })
        this.$uikit.modal('#post-modal').hide()
        this.$eventBus.$emit('addNewPost', res)
      } catch (e) {
        console.error(e)
        this.error = e
      }
    },
  },
}
</script>

<style>
.-z-1 {
  z-index: -1;
}

.origin-0 {
  transform-origin: 0%;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label,
textarea:focus ~ label,
textarea:not(:placeholder-shown) ~ label,
select:focus ~ label,
select:not([value='']):valid ~ label {
  /* @apply transform; scale-75; -translate-y-6; */
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.5rem;
}

input:focus ~ label,
select:focus ~ label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity));
  left: 0px;
}
</style>
