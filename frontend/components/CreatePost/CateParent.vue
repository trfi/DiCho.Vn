<template>
  <div class="w-full h-full">
    <div class="bg-gray-100 border-b border-gray-300 border-solid">
      <div class="mx-auto">
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
      <div class="mx-auto w-full">
        <form class="px-8 mt-6 pb-2">
          <div class="mb-6">
            <div v-if="userClick">
              <h4 class="text-black text-lg pb-2" style="font-weight: 700">
                Đã chọn`
              </h4>
              <a
                href="#slide-2"
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
              >
                <span
                  class="iconify text-3xl"
                  data-icon="ic:baseline-location-city"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500"
                  >XXXXXXXX</span
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
                v-for="cate in categories"
                :key="cate.id"
                href="#slide-2"
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
                @click="chooseCate(cate.id)"
              >
                <span
                  class="iconify text-3xl"
                  :data-icon="cateIcon[cate.id]"
                  data-inline="false"
                ></span>
                <span class="inline-block ml-3 mt-1 text-gray-500">{{
                  cate.title
                }}</span>
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
  props: {
    categories: Object,
    postDraft: Object,
  },
  data() {
    return {
      userClick: false,
      cateIcon: {
        '01': 'ic:baseline-location-city',
        '02': 'mdi-car-side',
        '03': 'mdi-tshirt-crew',
        '04': 'mdi-gamepad-variant',
        '05': 'ic:baseline-important-devices',
        '06': 'simple-icons:yourtravel-dot-tv',
        '07': 'emojione-monotone:fork-and-knife-with-plate',
        '08': 'whh-officechair',
        '09': 'mdi:fridge',
        11: 'bx:bxs-baby-carriage',
        12: 'emojione-monotone:dog-face',
        13: 'ic:round-work',
        14: 'mdi:sofa',
      },
    }
  },
  methods: {
    chooseCate(id) {
      // eslint-disable-next-line vue/no-mutating-props
      this.postDraft.cateParent = id
      this.$emit('update:postDraft', this.postDraft)
    },
  },
}
</script>

<style></style>
