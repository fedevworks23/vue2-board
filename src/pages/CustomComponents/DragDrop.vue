<template>
  <div>
    <h2 class="page-title">
      Drag and Drop - <span class="fw-semi-bold">Files</span>
    </h2>
    <Widget title="<h6> Drag and Drop Widget</h6>" close collapse customHeader>
      <legend><strong>Upload</strong> files :</legend>
      <input type="file" multiple @change="uploadFile" />
      <div class="mt-3" @dragover.prevent @drop.prevent>
        <legend><strong>Drop</strong> files :</legend>
        <div @drop="dragFile" class="dropBox">
          <strong>Drop files here...</strong>
          <div class="mt-2" v-if="File.length">
            <ul v-for="file in File" :key="file">
              <li>{{ file.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </Widget>
  </div>
</template>

<script>
export default {
  name: "DragDrop",
  data() {
    return {
      File: [],
    };
  },
  methods: {
    uploadFile(e) {
      this.File = e.target.files;
    },
    dragFile(e) {
      this.File = e.dataTransfer.files;
      console.log(this.File);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropBox {
  background-color: #dadada;
  color: var(--sidebar-bg-color);
  font-size: 15px;
  border: 2px solid var(--sidebar-bg-color);
  padding: 20px;
}
</style>