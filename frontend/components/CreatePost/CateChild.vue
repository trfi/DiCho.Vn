<template>
  <div class="w-full">
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
        <form class="p-8">
          <div class="mb-6">
            <div @click="userClick = true">
              <a
                v-for="cate in categories[postDraft.cateParent].subCategories"
                :key="cate.id"
                href="#slide-3"
                class="hover:bg-gray-100 -mt-1 flex relative items-center rounded-sm px-4 py-4 border border-solid border-gray-300 bg-white"
                @click="chooseCate(cate.id)"
              >
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
    }
  },
  methods: {
    chooseCate(id) {
      // eslint-disable-next-line vue/no-mutating-props
      this.postDraft.categoryId = id
      this.$emit('update:postDraft', this.postDraft)
    },
  },
}
</script>

<style></style>
