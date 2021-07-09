<template>
  <div class="badge-overview">
    <h1 class="page-title">Badge</h1>
    <div>
      <b-row>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Badge <span class='fw-semi-bold'>Example</span></h5>"
            close
            collapse
            customHeader
            ><p>
              Badges scale to match the size of the immediate parent element by
              using relative font sizing and em units.
            </p>
            <h1>
              Example heading <span class="badge badge-primary">Primary</span>
            </h1>
            <h2>Example heading <span class="badge badge-info">Info</span></h2>
            <h3>
              Example heading <span class="badge badge-warning">Warning</span>
            </h3>
            <h4>
              Example heading <span class="badge badge-success">Success</span>
            </h4>
            <h5>
              Example heading <span class="badge badge-danger">Danger</span>
            </h5>
            <h6>
              Example heading
              <span class="badge badge-secondary">Secondary</span>
            </h6>
            <p>
              Badges can be used as part of links or buttons to provide a
              counter.
            </p>
            <button type="button" class="btn btn-primary">
              Notifications <span class="badge badge-danger">4</span>
            </button>
          </Widget>
        </b-col>
        <b-col xs="12" class="px-0 col-md-6">
          <div xs="12" class="col">
            <Widget
              title="<h5>Pill <span class='fw-semi-bold'>Badges</span></h5>"
              close
              collapse
              customHeader
            >
              <p>
                Use the <code>pill</code> property to make badges more rounded
                (with a larger border-radius and additional horizontal padding).
              </p>
              <span class="badge mr-3 mb-3 badge-primary badge-pill"
                >Primary</span
              ><span class="badge mr-3 mb-3 badge-info badge-pill">Info</span
              ><span class="badge mr-3 mb-3 badge-warning badge-pill"
                >Warning</span
              ><span class="badge mr-3 mb-3 badge-success badge-pill"
                >Success</span
              ><span class="badge mr-3 mb-3 badge-danger badge-pill"
                >Danger</span
              ><span class="badge mr-3 mb-3 badge-secondary badge-pill"
                >Secondary</span
              ><span class="badge mr-3 mb-3 badge-light badge-pill">Light</span
              ><span class="badge mr-3 mb-3 badge-dark badge-pill">Dark</span>
            </Widget>
          </div>
          <div xs="12" class="col">
            <Widget
              title="<h5>Pill <span class='fw-semi-bold'>Badges</span></h5>"
              close
              collapse
              customHeader
            >
              <p>
                Use the <code>pill</code> property to make badges more rounded
                (with a larger border-radius and additional horizontal padding).
              </p>
              <span class="badge mr-3 mb-3 badge-primary badge-pill"
                >Primary</span
              ><span class="badge mr-3 mb-3 badge-info badge-pill">Info</span
              ><span class="badge mr-3 mb-3 badge-warning badge-pill"
                >Warning</span
              ><span class="badge mr-3 mb-3 badge-success badge-pill"
                >Success</span
              ><span class="badge mr-3 mb-3 badge-danger badge-pill"
                >Danger</span
              ><span class="badge mr-3 mb-3 badge-secondary badge-pill"
                >Secondary</span
              ><span class="badge mr-3 mb-3 badge-light badge-pill">Light</span
              ><span class="badge mr-3 mb-3 badge-dark badge-pill">Dark</span>
            </Widget>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

export default {
  name: "Badge",
  components: { Widget },
  data() {
    return {};
  },
  computed: {},
};
</script>
