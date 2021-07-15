<template>
  <div>
    <h1 class="page-title">
      Custom - <span class="fw-semi-bold">Components</span>
    </h1>
    <b-row>
      <b-col lg="12" xs="12">
        <FileUpload />
      </b-col>
      <b-col lg="8" xs="4">
        <PasswordGenerator />
      </b-col>
      <b-col lg="4" xs="4">
        <Watch />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FileUpload from "@/pages/CustomComponents/FileUpload.vue";
import Watch from "@/pages/CustomComponents/Watch.vue";
import PasswordGenerator from "@/pages/CustomComponents/PasswordGenerator.vue";

export default {
  name: "CustomComponents",
  components: {
    FileUpload,
    Watch,
    PasswordGenerator,
  },
};
</script>

<style lang="scss" scoped>
</style>