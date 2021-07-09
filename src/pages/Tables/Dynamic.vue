<template>
  <div class="dynamic-overview">
    <h2 class="page-title">
      Tables - <span class="fw-semi-bold">Dynamic</span>
    </h2>
    <div>
      <b-row>
        <b-col xs="12" lg="12">
          <Widget
            title="<h4>The <span class='fw-semi-bold'>Vue</span> Way</h4>"
            close
            collapse
            customHeader
          >
            <p>
              Fully customizable Table. Built with
              <a
                href="https://www.npmjs.com/package/vue-tables-2"
                target="_blank"
                rel="noopener noreferrer"
                >vue-tables-2</a
              >
            </p>
          </Widget>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

export default {
  name: "Dynamic",
  components: { Widget },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
