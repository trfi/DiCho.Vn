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
export default {
  props: {
    folder: String,
    images: Array,
    uploadSuccess: Boolean,
  },
  methods: {
    async selectFile(e) {
      const files = e.target.files
      const instances = []
      /* Make sure file exists */
      if (!files) return
      for (const file of files) {
        const readData = (f) =>
          new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.readAsDataURL(f)
          })
        const data = await readData(file)

        const instance = this.$cloudinary.upload(data, {
          folder: this.folder,
          uploadPreset: 'utr6ybml',
        })
        instances.push(instance)
      }
      const imagesResult = []
      for (const instance of instances) {
        const result = await instance
        imagesResult.push(await result.public_id)
      }
      this.$emit('update:images', imagesResult)
      this.$emit('update:uploadSuccess', true)
    },
  },
}
</script>

<style></style>
