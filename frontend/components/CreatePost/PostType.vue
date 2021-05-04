<template>
  <div class="w-full">
    <div class="bg-gray-100 border-b border-gray-300 border-solid">
      <div class="mx-auto">
        <div>
          <div class="text-center py-5" @click="test">
            <p class="text-base" style="font-weight: 700">Bạn muốn</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="mx-auto w-full">
        <form class="p-8">
          <div class="mb-6">
            <div
              v-if="
                categories[postDraft.cateParent].subCategories[
                  postDraft.categoryId
                ]
              "
            >
              <a
                v-for="(type, index) in categories[postDraft.cateParent]
                  .subCategories[postDraft.categoryId].types"
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
      types: {
        S: 'Cần bán',
        T: 'Cho thuê',
        B: 'Cần mua',
        R: 'Cần thuê',
      },
    }
  },
  mounted() {},
  methods: {
    test() {
      console.log(
        this.categories[this.postDraft.cateParent].subCategories[
          this.postDraft.categoryId
        ].types
      )
    },
    chooseCate(id) {
      // eslint-disable-next-line vue/no-mutating-props
      this.postDraft.type = id
      this.$emit('update:postDraft', this.postDraft)
    },
  },
}
</script>

<style></style>
