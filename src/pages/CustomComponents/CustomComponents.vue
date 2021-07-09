<template>
  <div>
    <h1 class="page-title">
      Custom - <span class="fw-semi-bold">Components</span>
    </h1>
    <b-row>
      <b-col lg="4" xs="4">
        <Widget title="<h6> Watch </h6>" close collapse settings customHeader>
          <Watch />
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import Watch from "@/pages/CustomComponents/Watch.vue";
export default {
  name: "CustomComponents",
  components: {
    Widget,
    Watch,
  },
};
</script>

<style lang="scss" scoped>
</style>