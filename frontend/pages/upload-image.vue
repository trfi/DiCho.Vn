<template>
  <div>
    <div>
      <span>Upload to Cloudinary</span>
      <UploadImage folder="pi" />
    </div>
    <div>
      <cld-image
        public-id="post-images/fzculvb6uvixhintp3kh"
        width="200"
        height="200"
        crop="fill"
        gravity="auto:subject"
        radius="max"
        fetch-format="auto"
        quality="auto"
        alt="An image example with Cloudinary"
      >
        <cld-placeholder type="pixelate" />
      </cld-image>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post_image_public_id: '',
    }
  },
}
</script>
