<template>
  <!--Modal-->
  <div
    class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      @click="toggleModal"
    ></div>

    <div
      class="modal-container bg-white w-full max-w-3xl mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div
        class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
      >
        <svg
          class="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          ></path>
        </svg>
        <span class="text-sm">(Esc)</span>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content py-4 text-left px-6">
        <!--Title-->
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold">Đăng bài</p>
          <div class="modal-close cursor-pointer z-50" @click="toggleModal">
            <svg
              class="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              ></path>
            </svg>
          </div>
        </div>

        <!--Body-->
        <div class="flex flex-col items-center m-8">
          <div
            class="w-full bg-white rounded overflow-x-hidden flex snap-x"
            style="height: 40vh"
          >
            <div
              id="slide-1"
              class="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0"
            >
              <cate-parent></cate-parent>
            </div>
            <div
              id="slide-2"
              class="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-green-600"
            >
              Slide 2
            </div>
            <div
              id="slide-3"
              class="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-red-600"
            >
              Slide 3
            </div>
            <div
              id="slide-4"
              class="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-yellow-600"
            >
              Slide 4
            </div>
            <div
              id="slide-5"
              class="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-purple-600"
            >
              Slide 5
            </div>
            <div
              id="slide-6"
              class="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                class="h-full w-full object-cover absolute inset-0 z-10 opacity-25"
              />
              <h1 class="z-20 text-center">
                Any kind of content here, images too!
              </h1>
            </div>
          </div>

          <div class="flex mt-8">
            <a
              class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-1"
              >1</a
            >
            <a
              class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-2"
              >2</a
            >
            <a
              class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-3"
              >3</a
            >
            <a
              class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-4"
              >4</a
            >
            <a
              class="w-8 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-5"
              >5</a
            >
            <a
              class="w-8 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-6"
              >6</a
            >
          </div>
        </div>
        <!-- End body content -->

        <!--Footer-->
        <div class="flex justify-end pt-2">
          <button
            class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
          >
            Đăng
          </button>
          <button
            class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
            @click="toggleModal"
          >
            Đóng
          </button>
        </div>
        <!-- End footer -->
      </div>
    </div>
  </div>
</template>

<script>
import CateParent from './CreatePost/CateParent.vue'
export default {
  components: { CateParent },
  data() {
    return {}
  },
  methods: {
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

<style>
.snap-x {
  scroll-snap-type: x mandatory;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.snap-start {
  scroll-snap-align: start;
}
</style>
