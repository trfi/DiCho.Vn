<template>
  <div>
    {{ $config.S3AccessKey }}
    <div v-if="isLoading">
      <p>Uploading your file, please wait...</p>
    </div>
    <div v-else>
      <input
        v-bind="uploadObject"
        type="file"
        accept=".jpeg,.jpg,.png,image/jpeg,image/png"
        aria-label="upload image button"
        multiple
        @change="uploadFile"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fieldName: {
      type: String,
      required: true,
      default: 'field',
    },
    obj: {
      type: Object,
      required: true,
    },
    directory: {
      type: String,
      required: true,
      default: 'pi',
    },
    label: {
      type: String,
      required: true,
      default: 'label',
    },
  },
  data() {
    return {
      isLoading: false,
      uploadObject: { name: this.obj[this.fieldName] || '' },
    }
  },
  computed: {
    s3Keys() {
      return this.$config.S3AccessKey
    },
    config() {
      return {
        bucketName: 'dicho',
        dirName: 'pi',
        region: 'ap-southeast-1',
        accessKeyId: this.s3Keys,
        secretAccessKey: this.$config.S3SecretKey,
        s3Url: this.$config.AWSUrl,
      }
    },
    baseURL() {
      return this.$config.AWSUrl
    },
    S3Client() {
      return new S3(this.config)
    },
    newFileName() {
      return `${Math.random().toString().slice(2, 5)}-${this.uploadObject.name}`
    },
    url() {
      return `${this.baseURL}/${this.directory}/${this.newFileName}`
    },
  },
  mounted() {
    console.log(this.$config)
  },
  methods: {
    uploadFile(e) {
      const files = e.target.files
      if (!files.length) return
      const file = files[0]
      this.isLoading = true
      this.S3Client.uploadFile(file, this.newFileName).finally(() => {
        this.isLoading = false
        const fileExtension = file.type.split('/')[1]
        // eslint-disable-next-line vue/no-mutating-props
        this.obj[this.fieldName] = `${this.url}.${fileExtension}`
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
