<template>
  <td
    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
  >
    <div
      class="cursor-pointer"
      :class="[category.childrenCate ? 'bg-red-600 opacity-85' : '']"
      @click.prevent="showIndex()"
    >
      {{ category.title }}
    </div>
    <ul v-if="show && category.children" class="border border-top border-solid">
      <li
        v-for="(ca, j) in category.children"
        :key="'A' + j"
        class="p-2 text-red-900"
      >
        {{ ca }}
      </li>
    </ul>
  </td>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      show: false,
      cate: {},
    }
  },
  mounted() {
    console.log(this.category)
  },
  methods: {
    showIndex() {
      this.show = !this.show
    },
  },
}
</script>

<style></style>
