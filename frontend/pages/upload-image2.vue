<template>
  <div id="upload">
    <img alt="Vue logo" src="~/assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js File Upload App" />

    <div>
      <button @click="openUploadModal">Upload files</button>
    </div>

    <div>
      <cld-context cloud-name="<your-cloud-name>">
        <div style="display: flex; justify-content: center">
          <cld-image :public-id="publicId" width="250" crop="scale" />
          <cld-image :public-id="publicId" width="300" crop="scale" />
          <cld-image :public-id="publicId" width="350" crop="scale" />
          <cld-image :public-id="publicId" width="400" crop="scale" />
          <cld-image :public-id="publicId" width="450" crop="scale" />
        </div>
      </cld-context>
    </div>
  </div>
</template>

<script>
import { CldContext, CldImage } from 'cloudinary-vue'

export default {
  name: 'App',
  components: {
    CldContext,
    CldImage,
  },
  data() {
    return {
      url: '',
      publicId: '',
    }
  },
  methods: {
    openUploadModal() {
      window.cloudinary
        .openUploadWidget(
          {
            cloud_name: '<your-cloud-name>',
            upload_preset: '<your-upload-preset>',
          },
          (error, result) => {
            if (!error && result && result.event === 'success') {
              console.log('Done uploading..: ', result.info)
              this.url = result.info.url
              this.publicId = result.info.public_id
            }
          }
        )
        .open()
    },
  },
}
</script>

<style>
#upload {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
