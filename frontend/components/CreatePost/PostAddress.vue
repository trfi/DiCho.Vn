<template>
  <div class="w-full">
    <div class="bg-gray-100 border-b border-gray-300 border-solid">
      <div class="mx-auto">
        <div>
          <div class="text-center py-5">
            <p class="text-base" style="font-weight: 700">Chọn địa chỉ</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="mx-auto w-full">
        <form class="p-8">
          <div class="mb-6">
            <div>
              <!-- Option -->
              <div class="relative mx-auto w-full inline-flex">
                <svg
                  class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fill-rule="nonzero"
                  />
                </svg>
                <select
                  class="border w-full px-7 border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  @input="pickRegion"
                >
                  <option v-for="r in regions" :key="r.id" :region_id="r.id">
                    {{ r.name }}
                  </option>
                </select>
              </div>
              <!-- Option end -->
              <!-- Option area -->
              <div
                v-if="Object.keys(areas).length !== 0"
                class="relative mx-auto w-full inline-flex mt-10"
              >
                <svg
                  class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fill-rule="nonzero"
                  />
                </svg>
                <select
                  class="border w-full px-7 border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  @input="pickArea"
                >
                  <option v-for="a in areas" :key="a.id" :area_id="a.id">
                    {{ a.name }}
                  </option>
                </select>
              </div>
              <!-- Option end -->
              <!-- Option wards -->
              <div
                v-if="Object.keys(wards).length !== 0"
                class="relative mx-auto w-full inline-flex mt-10"
              >
                <svg
                  class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fill-rule="nonzero"
                  />
                </svg>
                <select
                  class="border w-full px-7 border-gray-300 rounded-md text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  @input="pickWard"
                >
                  <option v-for="w in wards" :key="w.id" :ward_id="w.id">
                    {{ w.name }}
                  </option>
                </select>
              </div>
              <!-- Option end -->
              <button-next>
                <a href="#slide-5" class="p-2" @click="addAddress">
                  Tiếp tục
                </a>
              </button-next>
              <!-- <a
                v-for="(type, index) in categories[postDraft.cateParent]
                  .subCategories[postDraft.cateChild].types"
                :key="index"
                href="#slide-4"
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
                @click="chooseCate(type)"
              >
                <span class="inline-block ml-3 mt-1 text-gray-500">{{
                  types[type]
                }}</span>
                <div class="absolute top-5 right-3">
                  <span
                    class="iconify text-2xl"
                    data-icon="bx:bxs-chevron-right"
                    data-inline="false"
                  ></span>
                </div>
              </a> -->
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonNext from './ButtonNext.vue'
import regionData from './region.json'

export default {
  components: { ButtonNext },
  props: {
    postDraft: Object,
  },
  data() {
    return {
      userClick: false,
      regions: regionData.regionFollowId.entities.regions,
      areas: {},
      wards: {},
      region: '',
      area: '',
      ward: '',
    }
  },
  methods: {
    addAddress() {
      const address = {
        ...this.postDraft,
        region: Number(this.region),
        area: Number(this.area),
        ward: Number(this.ward),
      }
      // eslint-disable-next-line vue/no-mutating-props
      this.postDraft = address
      this.$emit('update:postDraft', this.postDraft)
    },
    pickRegion(event) {
      this.region = event.target.selectedOptions[0].attributes.region_id.value
      this.areas = this.regions[this.region].area
    },
    async pickArea(event) {
      this.area = event.target.selectedOptions[0].attributes.area_id.value
      const result = await fetch(
        `https://gateway.chotot.com/v2/public/chapy-pro/wards?area=${this.area}`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err))
      this.wards = result.wards
    },
    pickWard(event) {
      this.ward = event.target.selectedOptions[0].attributes.ward_id.value
      console.log(this.ward)
    },
  },
}
</script>

<style></style>
