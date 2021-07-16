<template>
  <div class="Lists-overview">
    <h1 class="page-title">
      Lists - <span class="fw-semi-bold">Sortable Groups</span>
    </h1>
    <b-row>
      <b-col xs="12" lg="12">
        <Widget
          title="<h5>Grouped <span class='fw-semi-bold'>Lists</span></h5>"
          close
          collapse
          customHeader
        >
          <h5>Closest <span class="fw-semi-bold">Stars</span></h5>
          <p>
            Try to play around with this list. Are you ready to pass an exam on
            astronomy?
          </p>
          <div>
            <div
              class="
                px-4
                py-3
                border
                mb-sm
                list-element
                d-flex
                justify-content-between
                align-items-center
              "
              draggable="false"
              style=""
            >
              <div>
                <i class="fa fa-sort mr-sm"></i><span class="mr-sm">01</span>The
                Sun
              </div>
              <i class="fa fa-times text-muted"></i>
            </div>
            <div
              class="
                px-4
                py-3
                border
                mb-sm
                list-element
                d-flex
                justify-content-between
                align-items-center
              "
              draggable="false"
              style=""
            >
              <div>
                <i class="fa fa-sort mr-sm"></i
                ><span class="mr-sm">02</span>Proxima Centauri
              </div>
              <i class="fa fa-times text-muted"></i>
            </div>
            <div
              class="
                px-4
                py-3
                border
                mb-sm
                list-element
                d-flex
                justify-content-between
                align-items-center
              "
              draggable="false"
              style=""
            >
              <div>
                <i class="fa fa-sort mr-sm"></i
                ><span class="mr-sm">03</span> Barnard's Star
              </div>
              <i class="fa fa-times text-muted"></i>
            </div>
            <div
              class="
                px-4
                py-3
                border
                mb-sm
                list-element
                d-flex
                justify-content-between
                align-items-center
              "
              draggable="false"
            >
              <div>
                <i class="fa fa-sort mr-sm"></i
                ><span class="mr-sm">04</span>Wolf 359
              </div>
              <i class="fa fa-times text-muted"></i>
            </div>
            <div
              class="
                px-4
                py-3
                border
                mb-sm
                list-element
                d-flex
                justify-content-between
                align-items-center
              "
              draggable="false"
            >
              <div>
                <i class="fa fa-sort mr-sm"></i
                ><span class="mr-sm">05</span>Lalande 21185
              </div>
              <i class="fa fa-times text-muted"></i>
            </div>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

export default {
  name: "Carousel",
  components: { Widget },
  data() {
    return {};
  },
  methods: {
    addItem: function (item) {
      item.children.push({
        name: "new stuff",
      });
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>
