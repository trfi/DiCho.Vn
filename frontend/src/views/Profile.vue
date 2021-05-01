<template>
  <div class="container mx-auto my-5 p-0">
      <div class="md:flex no-wrap md:-mx-2">
        <div class="w-full md:w-3/12 md:mx-2">
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img
                class="h-auto w-full mx-auto"
                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                alt=""
              />
            </div>
            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              Jane Doe
            </h1>

            <div
              class="flex items-center text-gray-600 font-lg tex  t-semibold leading-6"
            >
              <div class="flex items-center flex-grow">
                <span>0</span>
                <span class="ml-1 xt-gray-400 text-base">Người theo dõi</span>
              </div>
              <div class="flex items-center flex-grow">
                <span class="">1</span>
                <span class="ml-1 text-gray-400">Đang theo dõi</span>
              </div>
            </div>
            <ul
              class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
            >
              <li class="flex items-center py-3">
                <span>Status</span>
                <span class="ml-auto"
                  ><span
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >Active</span
                  ></span
                >
              </li>
              <li class="flex items-center py-3">
                <span>Member since</span>
                <span class="ml-auto">Nov 07, 2016</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-7/12 mx-2 h-64">
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
            >
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">First Name</div>
                  <div class="px-4 py-2">Jane</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <div class="px-4 py-2">Doe</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Gender</div>
                  <div class="px-4 py-2">Female</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2">+11 998001001</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Current Address</div>
                  <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Permanant Address</div>
                  <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email.</div>
                  <div class="px-4 py-2">
                    <a class="text-blue-800" href="mailto:jane@example.com"
                      >jane@example.com</a
                    >
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Birthday</div>
                  <div class="px-4 py-2">Feb 06, 1998</div>
                </div>
              </div>
            </div>
            <button
              class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
              Show Full Information
            </button>
          </div>

          <div class="my-4"></div>

          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div>
              <div class="mt-4">
                <div class="flex items-center">
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
                              <a
                                href=""
                                class="text-gray-500 text-xs hover:underline"
                                ><span
                                  >18 phút trước - Có thể bạn muốn tương
                                  tác</span
                                ></a
                              >
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    <div class="relative"></div>
                    <div class="relative">
                      <a href="" class="" style="width: 556px; height: 300px">
                        <img
                          src="@/assets/img/content/1.jpg"
                          class="object-cover w-full h-full"
                          style="min-height: 300px; height: 300px"
                          alt=""
                        />
                        <div
                          class="absolute bottom-4 left-0 px-4 w-full flex items-center"
                        >
                          <div
                            class="flex items-center px-2 py-1 bg-gray-700 opacity-70 rounded-2xl mr-1"
                          >
                            <div>
                              <span
                                class="iconify text-white"
                                data-icon="akar-icons:comment"
                                data-inline="false"
                              ></span>
                            </div>
                            <div class="flex items-center justify-center">
                              <span class="mx-auto ml-8 pr-8 text-gray-50"
                                >122</span
                              >
                            </div>
                          </div>
                          <div
                            class="flex items-center px-2 py-1 bg-gray-700 opacity-70 rounded-2xl mr-1"
                          >
                            <div>
                              <span
                                class="iconify"
                                data-icon="akar-icons:comment"
                                data-inline="false"
                              ></span>
                            </div>
                            <div class="flex items-center justify-center">
                              <span class="mx-auto ml-8 pr-8 text-white"
                                >122</span
                              >
                            </div>
                          </div>
                          <div
                            class="flex items-center px-2 py-1 bg-gray-700 opacity-70 rounded-2xl"
                          >
                            <div>
                              <span
                                class="iconify"
                                data-icon="akar-icons:comment"
                                data-inline="false"
                              ></span>
                            </div>
                            <div class="flex items-center justify-center">
                              <span class="mx-auto ml-8 pr-8 text-white"
                                >122</span
                              >
                            </div>
                          </div>
                          <div class="float-right">
                            <span
                              class="iconify"
                              data-icon="bx:bx-share"
                              data-inline="false"
                            ></span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      class="flex items-center relative p-2 border-gray-400 border-b mx-3 border-solid"
                    >
                      <div class="cursor-pointer">
                        <span
                          class="iconify text-xl text-blue-400"
                          data-icon="ant-design:like-twotone"
                          data-inline="false"
                        ></span>
                      </div>
                      <div class="cursor-pointer">
                        <span class="ml-2">3</span>
                      </div>
                    </div>

                    <div class="mx-3">
                      <div
                        class="flex items-stretch justify-between flex-row border-solid border-b border-gray-400"
                      >
                        <div
                          class="flex items-center py-2 cursor-pointer rounded-md my-1 flex-grow px-2 justify-center hover:bg-gray-200"
                        >
                          <span
                            class="iconify"
                            data-icon="ant-design:like-outlined"
                            data-inline="false"
                          ></span>
                          <span class="ml-1 text-sm">Thích</span>
                        </div>
                        <div
                          class="flex items-center py-2 cursor-pointer rounded-md my-1 hover:bg-gray-200 flex-grow px-2 justify-center"
                        >
                          <span
                            class="iconify"
                            data-icon="akar-icons:comment"
                            data-inline="false"
                          ></span>
                          <span class="ml-1 text-sm">Bình luận</span>
                        </div>
                        <div
                          class="flex items-center py-2 cursor-pointer rounded-md my-1 hover:bg-gray-200 flex-grow px-2 justify-center"
                        >
                          <span
                            class="iconify"
                            data-icon="cil:share"
                            data-inline="false"
                          ></span>
                          <span class="ml-1 text-sm">Chia sẻ</span>
                        </div>
                      </div>
                    </div>

                    <div class="mx-3">
                      <div class="flex items-center py-2">
                        <div class="w-8 h-8 mr-2">
                          <img
                            src="@/assets/img/content/2.jpg"
                            class="rounded-2xl"
                            alt=""
                          />
                        </div>
                        <div class="flex items-center w-full">
                          <input
                            type="text"
                            placeholder="Viết bình luận..."
                            class="rounded-xl px-2 w-full outline-none text-base bg-gray-100 py-1.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mx-3">
                      <div class="flex py-2">
                        <a class="w-8 h-8 mr-2">
                          <img
                            src="@/assets/img/content/2.jpg"
                            class="rounded-2xl"
                            alt=""
                          />
                        </a>
                        <div class="flex items-center w-full">
                          <div
                            class="rounded-xl px-2 w-full outline-none text-base bg-gray-100 py-1.5"
                          >
                            <a
                              href=""
                              class="text-black text-sm hover:underline"
                            >
                              <span>San San</span>
                            </a>
                            <div>
                              <span class="text-sm text-gray-600"
                                >Giang hồ đi làm ca sĩ , Ca sĩ diễn viên thì
                                muốn làm giang hồ
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>