<template>
  <div class="progress-overview">
    <h1 class="page-title">Progress</h1>
    <div>
      <b-row>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Progress <span class='fw-semi-bold'>Example</span></h5>"
            close
            collapse
            customHeader
          >
            <p>
              Badges scale to match the size of the immediate parent element by
              using relative font sizing and em units.
            </p>
            <div class="progress mb-sm">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="25"
                class="progress-bar"
                style="width: 25%"
              ></div>
            </div>
            <div class="progress mb-sm">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="50"
                class="progress-bar"
                style="width: 50%"
              ></div>
            </div>
            <div class="progress mb-sm">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="75"
                class="progress-bar"
                style="width: 75%"
              ></div>
            </div>
            <div class="progress">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="100"
                class="progress-bar"
                style="width: 100%"
              ></div>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget title="<h5>Backgrounds</h5>" close collapse customHeader
            ><p>
              Use background utility classes to change the appearance of
              individual progress bars.
            </p>
            <div class="progress mb-sm">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="25"
                class="progress-bar bg-info"
                style="width: 25%"
              ></div>
            </div>
            <div class="progress mb-sm">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="50"
                class="progress-bar bg-warning"
                style="width: 50%"
              ></div>
            </div>
            <div class="progress mb-sm">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="75"
                class="progress-bar bg-danger"
                style="width: 75%"
              ></div>
            </div>
            <div class="progress">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="100"
                class="progress-bar bg-success"
                style="width: 100%"
              ></div>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget title="<h5>Labels</h5>" close collapse customHeader
            ><p>
              Add labels to your progress bars by placing text within the
              <code>&lt;b-progress&gt;</code>
            </p>
            <div class="progress mb-sm">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="25"
                class="progress-bar"
                style="width: 25%"
              >
                25%
              </div>
            </div>
            <div class="progress mb-sm">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="100"
                class="progress-bar bg-danger"
                style="width: 100%"
              >
                Something was wrong!
              </div>
            </div>
            <div class="progress">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="100"
                class="progress-bar bg-success"
                style="width: 100%"
              >
                Complited!
              </div>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget title="<h5>Size</h5>" close collapse customHeader
            ><p>
              We only set a height value on the <code>&lt;b-progress&gt;</code>,
              so if you change that value the inner bar will automatically
              resize accordingly. Also <code>.progress-sm</code> is available.
            </p>
            <div class="progress progress-sm mb-sm">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="25"
                class="progress-bar bg-inverse"
                style="width: 25%"
              >
                25%
              </div>
            </div>
            <div class="progress mb-sm">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="50"
                class="progress-bar bg-inverse"
                style="width: 50%"
              >
                50%
              </div>
            </div>
            <div class="progress" style="height: 30px">
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="75"
                class="progress-bar bg-inverse"
                style="width: 75%"
              >
                75%
              </div>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="12">
          <Widget
            title="<h5><span class='fw-semi-bold'>Striped</span> Progress</h5>"
            close
            collapse
            customHeader
          >
            <b-row>
              <b-col xs="12" lg="6">
                <p>
                  Add <code>striped</code> property to any
                  <code>&lt;Progress&gt;</code> to apply a stripe via CSS
                  gradient over the progress bar’s background color.
                </p>
                <div class="progress mb-sm">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="10"
                    class="progress-bar progress-bar-striped"
                    style="width: 10%"
                  ></div>
                </div>
                <div class="progress mb-sm">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="25"
                    class="progress-bar bg-success progress-bar-striped"
                    style="width: 25%"
                  ></div>
                </div>
                <div class="progress mb-sm">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="50"
                    class="progress-bar bg-info progress-bar-striped"
                    style="width: 50%"
                  ></div>
                </div>
                <div class="progress mb-sm">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="75"
                    class="progress-bar bg-warning progress-bar-striped"
                    style="width: 75%"
                  ></div>
                </div>
                <div class="progress">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="100"
                    class="progress-bar bg-danger progress-bar-striped"
                    style="width: 100%"
                  ></div>
                </div>
              </b-col>
              <b-col xs="12" lg="6">
                <p>
                  The striped gradient can also be animated. Add
                  <code>animated</code> property to
                  <code>&lt;b-progress&gt;</code> to animate the stripes right
                  to left via CSS3 animations.
                </p>
                <div class="progress mb-sm">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="10"
                    class="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    style="width: 10%"
                  ></div>
                </div>
                <div class="progress mb-sm">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="25"
                    class="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                    style="width: 25%"
                  ></div>
                </div>
                <div class="progress mb-sm">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="50"
                    class="progress-bar bg-info progress-bar-striped progress-bar-animated"
                    style="width: 50%"
                  ></div>
                </div>
                <div class="progress mb-sm">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="75"
                    class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                    style="width: 75%"
                  ></div>
                </div>
                <div class="progress">
                  <div
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="100"
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    style="width: 100%"
                  ></div>
                </div>
              </b-col>
            </b-row>
          </Widget>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

export default {
  name: "Progress",
  components: { Widget },
  data() {
    return {};
  },
  computed: {},
};
</script>
