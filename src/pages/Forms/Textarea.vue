<template>
  <div class="Textarea-overview">
    <h1 class="page-title">Textarea</h1>
    <div>
      <b-row>
        <b-col xs="12" lg="12">
          <Widget title="<h5>Textarea</h5>" close collapse customHeader>
            <form class="">
              <legend>Small form</legend>
              <div
                role="group"
                class="form-row form-group"
                horizontal=""
                breakpoint="md"
                id="__BVID__1163"
              >
                <label
                  for="default-textarea"
                  class="col-3 col-form-label text-md-right"
                  id="__BVID__1163__BV_label_"
                  >Default textarea</label
                >
                <div class="col">
                  <textarea
                    id="default-textarea"
                    rows="3"
                    wrap="soft"
                    class="form-control"
                  ></textarea
                  ><!----><!----><!---->
                </div>
              </div>
              <div
                role="group"
                class="form-row form-group"
                horizontal=""
                breakpoint="md"
                id="__BVID__1165"
              >
                <label
                  for="autosize-textarea"
                  class="col-3 col-form-label text-md-right"
                  id="__BVID__1165__BV_label_"
                  >Auto-growing textarea</label
                >
                <div class="col">
                  <textarea
                    placeholder="Try to add few new lines..."
                    id="autosize-textarea"
                    class="form-control"
                    style="resize: none; height: 75px; overflow: hidden"
                  ></textarea
                  ><!----><!----><!---->
                </div>
              </div>
            </form>
          </Widget>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

export default {
  name: "Inputs",
  components: { Widget },
  data() {
    return {};
  },
  computed: {},
};
</script>
