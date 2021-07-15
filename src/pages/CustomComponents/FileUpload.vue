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
    upload() {
      const reader = new FileReader();
      if (this.imageFile) {
        reader.readAsDataURL(this.imageFile);
        reader.addEventListener(
          "load",
          () => {
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