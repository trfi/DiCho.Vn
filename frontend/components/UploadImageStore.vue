<template>
  <div>
    <input
      type="file"
      accept=".jpeg,.jpg,.png,image/jpeg,image/png"
      aria-label="upload image button"
      :class="folder"
      multiple
      @change="selectFile"
    />
    <slot></slot>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    folder: String,
  },
  mounted() {
    console.log(this.$eventBus)
  },
  methods: {
    async selectFile(e) {
      const files = e.target.files
      const instances = []
      /* Make sure file exists */
      if (!files) return
      for (const file of files) {
        /* create a reader */
        const readData = (f) =>
          new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.readAsDataURL(f)
          })

        /* Read data */
        const data = await readData(file)

        /* upload the converted data */
        const instance = this.$cloudinary.upload(data, {
          folder: this.folder,
          uploadPreset: 'utr6ybml',
        })
        instances.push(instance)
      }
      for (const instance of instances) {
        const res = await instance
        this.addImage(res.public_id)
      }
    },
    addImage(publicId) {
      this.$store.commit('images/add', publicId)
    },
    ...mapMutations({
      clear: 'images',
    }),
  },
}
</script>

<style></style>
