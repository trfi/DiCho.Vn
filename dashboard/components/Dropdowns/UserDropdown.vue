<template>
  <div>
    <a
      ref="btnDropdownRef"
      class="text-blueGray-500 py-1 px-3"
      href="#pablo"
      @click="toggleDropdown($event)"
    >
      <span
        class="iconify text-3xl"
        data-icon="la:ellipsis-v"
        data-inline="false"
      ></span>
    </a>
    <div
      ref="popoverDropdownRef"
      class="flex items-center bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-24"
      :class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-purple-500 hover:scale-110"
      >
        <span class="iconify" data-icon="carbon:add" data-inline="false"></span>
      </a>
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-purple-500 hover:scale-110"
      >
        <span
          class="iconify"
          data-icon="clarity:edit-line"
          data-inline="false"
        ></span>
      </a>
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-purple-500 hover:scale-110"
        @click="editUser()"
      >
        <span
          class="iconify"
          data-icon="feather:trash-2"
          data-inline="false"
        ></span>
      </a>
    </div>
  </div>
</template>
<script>
import { createPopper } from '@popperjs/core'

export default {
  components: {},

  data() {
    return {
      dropdownPopoverShow: false,
    }
  },
  mounted() {
    console.log(this.user)
  },
  methods: {
    toggleDropdown(event) {
      event.preventDefault()
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false
      } else {
        this.dropdownPopoverShow = true
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: 'bottom-start',
        })
      }
    },
  },
}
</script>
