<template>
  <Widget title="<h6> File Upload </h6>" close collapse settings customHeader>
    <div>
      <b-form-file
        v-model="imageFile"
        :state="Boolean(imageFile)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <div class="mt-3">
        <button class="btn btn-primary" @click="upload">upload</button>Selected
        file: {{ imageFile ? imageFile.name : "" }}
      </div>
    </div>
  </Widget>
</template>

<script>
export default {
  name: "FileUpload",
  data() {
    return {
      imageFile: null,
      file2: null,
    };
  },
  methods: {
    getImgFileSize(size) {
      if (size >= 4096) {
        return "File too Big, please select a file less than 4mb";
      } else if (size < 2048) {
        return "File too small, please select a file greater than 2mb";
      } else {
        return size + " KB";
      }
    },
    getImgUploadTime() {
      const date1 = new Date();
      let hour = date1.getHours();
      hour = hour > 12 ? hour - 12 : hour;
      return `${hour}:${date1.getMinutes()}:${date1.getSeconds()}`;
    },
    upload() {
      const reader = new FileReader();
      if (this.imageFile) {
        reader.readAsDataURL(this.imageFile);
        reader.addEventListener(
          "load",
          () => {
            const imageInfo = {
              uploadedTime: this.getImgUploadTime(),
              type: this.imageFile.type,
              size: this.getImgFileSize(this.imageFile.size),
              src: reader.result,
            };
            console.log(imageInfo);
            this.$emit("fileSource", reader.result);
          },
          false
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>