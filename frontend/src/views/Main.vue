<template>
  <main id="main">
    <div class="max-w-screen-xl px-10 mx-auto flex w-full mt-12">
      <SideBar></SideBar>
      <section class="relative ml-8" style="width: 100%">
        <div class="w-full flex justify-between">
          <div class="w-3/5 h-32 relative" style="max-width: 600px">
            <div class="w-full rounded-md bg-gray-50 mb-4">
              <div class="py-6">
                <div class="w-full flex items-center px-5">
                  <a href="" class="relative rounded-3xl bg-gray-900">
                    <img
                      src="@/assets/img/user.png"
                      alt=""
                      class="w-10 h-10 object-cover rounded-3xl"
                    />
                  </a>
                  <div class="flex flex-grow justify-center items-center">
                    <button
                      class="inline-block w-full py-4 mx-4 rounded-sm bg-gray-200 text-sm hover:bg-gray-300"
                    >
                      Add a Post
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

            <div class="w-full rounded-md bg-white mb-8">
              <div class="relative">
                <div class="p-4 flex items-center justify-between">
                  <div class="flex">
                    <a href="" class="relative w-10 h-10 rounded-xl mr-2">
                      <img
                        src="@/assets/img/content/tuoitre-main.png"
                        alt=""
                        class="w-full h-full object-cover rounded-3xl"
                      />
                    </a>
                    <div class="flex flex-col">
                      <a href="" class="text-sm text-black">Tuổi Trẻ</a>
                      <div class="relative">
                        <a href="" class="text-gray-500 text-xs hover:underline"
                          ><span
                            >18 phút trước - Có thể bạn muốn tương tác</span
                          ></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="break-words text-left text-base pb-2 pl-4">
                  <div class="text-start text-sm">
                    ĐỂ CÓ LÀN DA ĐẸP - Chỉ với 1 BỘ SIÊU TR.Ị MỤN SỦI BỌT CÔNG
                    NGHỆ MỚI
                    <span><a href="" class="text-blue-600">#NAOMI</a></span>
                  </div>
                </div>
              </div>
              <div class="relative"></div>
              <div class="relative">
                <a href="" class="">
                  <img
                    src="@/assets/img/content/1.jpg"
                    class="object-cover w-full h-full rounded-3xl"
                    style="min-height: 250px; height: 250px"
                    alt=""
                  />
                  <div
                    class="absolute bottom-4 left-0 px-4 w-full flex items-center"
                  >
                    <div
                      class="w-1/4 flex items-center px-2 py-1 bg-gray-700 opacity-70 rounded-2xl mr-1"
                    >
                      <div>
                        <span
                          class="iconify text-white"
                          data-icon="akar-icons:comment"
                          data-inline="false"
                        ></span>
                      </div>
                      <div class="flex items-center justify-center">
                        <span class="mx-auto ml-8 pr-8 text-gray-50">122</span>
                      </div>
                    </div>
                    <div
                      class="w-1/4 flex items-center px-2 py-1 bg-gray-700 opacity-70 rounded-2xl mr-1"
                    >
                      <div>
                        <span
                          class="iconify"
                          data-icon="akar-icons:comment"
                          data-inline="false"
                        ></span>
                      </div>
                      <div class="flex items-center justify-center">
                        <span class="mx-auto ml-8 pr-8 text-white">122</span>
                      </div>
                    </div>
                    <div
                      class="w-1/4 flex items-center px-2 py-1 bg-gray-700 opacity-70 rounded-2xl"
                    >
                      <div>
                        <span
                          class="iconify"
                          data-icon="akar-icons:comment"
                          data-inline="false"
                        ></span>
                      </div>
                      <div class="flex items-center justify-center">
                        <span class="mx-auto ml-8 pr-8 text-white">122</span>
                      </div>
                    </div>
                    <div class="w-full flex flex-row-reverse">
                      <span
                        class="iconify text-xl"
                        data-icon="bx:bx-share"
                        data-inline="false"
                      ></span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            class="flex flex-row flex-wrap justify-between w-2/5 h-36 relative float-right"
            style="max-width: 330px"
          >
            <div class="flex w-36 bg-gray-50 rounded-lg mb-4">
              <div class="w-full p-2">
                <a href="" class="w-full">
                  <img
                    src="@/assets/img/advertise/1.jpg"
                    alt=""
                    class="object-cover w-full rounded-md"
                  />
                </a>
                <h5 class="text-black text-sm mt-2" style="font-weight: 600">
                  Cập nhật số liệu - Virus nCov
                </h5>
                <p class="text-red-500 text-xs mt-2">Cập nhật trực tiếp</p>
              </div>
            </div>
            <div class="flex w-36 bg-gray-50 rounded-lg mb-4">
              <div class="w-full p-2">
                <a href="" class="w-full">
                  <img
                    src="@/assets/img/advertise/1.jpg"
                    alt=""
                    class="object-cover w-full rounded-md"
                  />
                </a>
                <h5 class="text-black text-sm mt-2" style="font-weight: 600">
                  Cập nhật số liệu - Virus nCov
                </h5>
                <p class="text-red-500 text-xs mt-2">Cập nhật trực tiếp</p>
              </div>
            </div>
            <div class="flex w-36 bg-gray-50 rounded-lg mb-4">
              <div class="w-full p-2">
                <a href="" class="w-full">
                  <img
                    src="@/assets/img/advertise/1.jpg"
                    alt=""
                    class="object-cover w-full rounded-md"
                  />
                </a>
                <h5 class="text-black text-sm mt-2" style="font-weight: 600">
                  Cập nhật số liệu - Virus nCov
                </h5>
                <p class="text-red-500 text-xs mt-2">Cập nhật trực tiếp</p>
              </div>
            </div>
            <div class="flex w-36 bg-gray-50 rounded-lg mb-4">
              <div class="w-full p-2">
                <a href="" class="w-full">
                  <img
                    src="@/assets/img/advertise/1.jpg"
                    alt=""
                    class="object-cover w-full rounded-md"
                  />
                </a>
                <h5 class="text-black text-sm mt-2" style="font-weight: 600">
                  Cập nhật số liệu - Virus nCov
                </h5>
                <p class="text-red-500 text-xs mt-2">Cập nhật trực tiếp</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  components: {
    SideBar: () => import("@/components/SideBar.vue"),
  },
};
</script>

<style>
</style>