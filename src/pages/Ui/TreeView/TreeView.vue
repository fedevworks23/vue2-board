<template>
  <div class="tree-view-overview">
    <h1 class="page-title">
      List - <span class="fw-semi-bold">Tree View</span>
    </h1>
    <b-row>
      <b-col xs="12" lg="12">
        <Widget
          title="<h5>Nestable <span class='fw-semi-bold'>List</span></h5>"
          close
          collapse
          customHeader
        >
          <!-- the demo root element -->
          <ul>
            <tree-item
              class="item"
              :item="treeData"
              @add-item="addItem"
            ></tree-item>
          </ul>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TreeItem from "@/pages/Ui/TreeView/TreeItem.vue";
export default {
  name: "TreeView",
  components: {
    TreeItem,
  },
  data() {
    return {
      treeData: {
        name: "Root",
        children: [
          { name: "Children Name-1" },
          { name: "Children Name-2" },
          {
            name: "Children Name-3 with Folder",
            children: [
              {
                name: "Children Name-4 with Folder",
                children: [
                  { name: "Children Name-5" },
                  { name: "Children Name-6" },
                ],
              },
              { name: "Children Name-7" },
              { name: "Children Name-8" },
              {
                name: "Children Name-9 with Folder",
                children: [
                  { name: "Children Name-10" },
                  { name: "Children Name-11" },
                ],
              },
            ],
          },
        ],
      },
      item: {
        children: [],
      },
    };
  },
  methods: {
    addItem: function (item) {
      item.children.push({
        name: "new stuff",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding-left: 1em;
  line-height: 1.5em;
  display: inline-block;
  user-select: none;

  .item {
    cursor: pointer;
  }
}
</style>