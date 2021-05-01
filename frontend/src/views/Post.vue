<template>
  <div>
    <div class="bg-gray-100 border-b border-gray-300 border-solid">
      <div class="max-w-screen-xl mx-auto">
        <div>
          <div class="text-center py-5">
            <p class="text-base" style="font-weight: 700">
              Chọn danh mục đăng tin
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-screen-xl mx-auto">
        <form class="p-8">
          <div class="mb-6">
            <div v-if="userClick">
              <h4 class="text-black text-lg pb-2" style="font-weight: 700">
                Đã chọn`
              </h4>
              <a
                href=""
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
              >
                <span
                  class="iconify text-3xl"
                  data-icon="ic:baseline-location-city"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500"
                  >Bất động sản</span
                >
                <div class="absolute top-5 right-3">
                  <span
                    class="iconify text-2xl text-blue-400"
                    data-icon="el:ok"
                    data-inline="false"
                  ></span>
                </div>
              </a>
            </div>
            <div @click="userClick = true">
              <h4
                v-if="userClick"
                class="text-black text-lg pb-2 pt-8"
                style="font-weight: 700"
              >
                Lựa chọn khác
              </h4>
              <a
                href=""
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
              >
                <span
                  class="iconify text-3xl"
                  data-icon="ic:baseline-location-city"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500"
                  >Bất động sản</span
                >
                <div class="absolute top-5 right-3">
                  <span
                    class="iconify text-2xl"
                    data-icon="bx:bxs-chevron-right"
                    data-inline="false"
                  ></span>
                </div>
              </a>
              <a
                href=""
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
              >
                <span
                  class="iconify text-3xl"
                  data-icon="fa-solid:motorcycle"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500">Xe cộ</span>
                <div class="absolute top-5 right-3">
                  <span
                    class="iconify text-2xl"
                    data-icon="bx:bxs-chevron-right"
                    data-inline="false"
                  ></span>
                </div>
              </a>
              <a
                href=""
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
              >
                <span
                  class="iconify text-3xl text-black"
                  data-icon="ic:baseline-important-devices"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500"
                  >Đồ điện tử</span
                >
                <div class="absolute top-5 right-3">
                  <span
                    class="iconify text-2xl"
                    data-icon="bx:bxs-chevron-right"
                    data-inline="false"
                  ></span>
                </div>
              </a>
              <a
                href=""
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
              >
                <span
                  class="iconify text-3xl"
                  data-icon="ic:round-work"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500"
                  >Việc làm</span
                >
                <span
                  class="inline-block ml-2 mt-1 bg-yellow-400 p-1 text-white text-xs rounded-sm"
                  >Mới</span
                >
                <div class="absolute top-5 right-3">
                  <span
                    class="iconify text-2xl"
                    data-icon="bx:bxs-chevron-right"
                    data-inline="false"
                  ></span>
                </div>
              </a>
              <a
                href=""
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
              >
                <span
                  class="iconify text-3xl"
                  data-icon="emojione-monotone:dog-face"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500"
                  >Thú cưng</span
                >
                <div class="absolute top-5 right-3">
                  <span
                    class="iconify text-2xl"
                    data-icon="bx:bxs-chevron-right"
                    data-inline="false"
                  ></span>
                </div>
              </a>
              <a
                href=""
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
              >
                <span
                  class="iconify text-3xl"
                  data-icon="emojione-monotone:fork-and-knife-with-plate"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500"
                  >Đồ ăn thực phẩm và các loại khác</span
                >
                <span
                  class="inline-block ml-2 mt-1 bg-yellow-400 p-1 text-white text-xs rounded-sm"
                  >Mới</span
                >
                <div class="absolute top-5 right-3">
                  <span
                    class="iconify text-2xl"
                    data-icon="bx:bxs-chevron-right"
                    data-inline="false"
                  ></span>
                </div>
              </a>
              <a
                href=""
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
              >
                <span
                  class="iconify text-3xl"
                  data-icon="mdi:fridge"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500"
                  >Tủ lạnh, máy lạnh, máy giặt</span
                >
                <div class="absolute top-5 right-3">
                  <span
                    class="iconify text-2xl"
                    data-icon="bx:bxs-chevron-right"
                    data-inline="false"
                  ></span>
                </div>
              </a>
              <a
                href=""
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
              >
                <span
                  class="iconify text-3xl"
                  data-icon="mdi:sofa"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500"
                  >Đồ gia dụng, nội thất, cây cảnh</span
                >
                <span
                  class="inline-block ml-2 mt-1 bg-yellow-400 p-1 text-white text-xs rounded-sm"
                  >Mới</span
                >
                <div class="absolute top-5 right-3">
                  <span
                    class="iconify text-2xl"
                    data-icon="bx:bxs-chevron-right"
                    data-inline="false"
                  ></span>
                </div>
              </a>
              <a
                href=""
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
              >
                <span
                  class="iconify text-3xl"
                  data-icon="bx:bxs-baby-carriage"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500"
                  >Mẹ và bé</span
                >
                <div class="absolute top-5 right-3">
                  <span
                    class="iconify text-2xl"
                    data-icon="bx:bxs-chevron-right"
                    data-inline="false"
                  ></span>
                </div>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userClick: false,
    };
  },
};
</script>

<style>
</style>