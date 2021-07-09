<template>
  <div class="grid-overview">
    <h1 class="page-title">
      Grid
      <span class="fw-semi-bold">System</span>
    </h1>
    <div>
      <b-row>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5><span class='fw-semi-bold'>How</span> it works</h5>"
            close
            collapse
            customHeader
          >
            <p>
              Bootstrap’s grid system uses a series of containers, b-rows, and
              columns to layout and align content. It’s built with flexbox and
              is fully responsive. Below is an example and an in-depth look at
              how the grid comes together.
            </p>
            <div class="bg-light p-3">
              <div class="row mb-lg">
                <div xs="4" class="col">
                  <div class="py-4 bg-primary text-center text-white">
                    One of three b-columns
                  </div>
                </div>
                <div xs="4" class="col">
                  <div class="py-4 bg-primary text-center text-white">
                    One of three b-columns
                  </div>
                </div>
                <div xs="4" class="col">
                  <div class="py-4 bg-primary text-center text-white">
                    One of three b-columns
                  </div>
                </div>
              </div>
              <pre
                class="bg-light border-0 w-100 h-100"
              >            <code class="text-danger">&lt;b-container&gt;</code>
            <code class="text-success">  &lt;b-row&gt;</code>
            <code class="text-info">    &lt;b-col xs="4"&gt;</code>
            <code>      One of three b-columns</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-info">    &lt;b-col xs="4"&gt;</code>
            <code>      One of three b-columns</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-info">    &lt;b-col xs="4"&gt;</code>
            <code>      One of three b-columns</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-success">  &lt;/b-row&gt;</code>
            <code class="text-danger">&lt;/b-container&gt;</code>
          </pre>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5><span class='fw-semi-bold'>Equal</span> width</h5>"
            close
            collapse
            customHeader
          >
            <p>
              For example, here are two grid layouts that apply to every device
              and viewport, from xs to xl. Add any number of unit-less classes
              for each breakpoint you need and every column will be the same
              width.
            </p>
            <div class="bg-light p-3">
              <div class="row mb-lg">
                <div class="col">
                  <div class="py-4 bg-primary text-center text-white">
                    1 of 2
                  </div>
                </div>
                <div class="col">
                  <div class="py-4 bg-primary text-center text-white">
                    2 of 2
                  </div>
                </div>
              </div>
              <pre
                class="bg-light border-0 w-100 h-100"
              >            <code class="text-danger">&lt;b-container&gt;</code>
            <code class="text-success">  &lt;b-row&gt;</code>
            <code class="text-info">    &lt;b-col&gt;</code>
            <code>      1 of 2</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-info">    &lt;b-col&gt;</code>
            <code>      1 of 2</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-success">  &lt;/b-row&gt;</code>
            <code class="text-danger">&lt;/b-container&gt;</code>
          </pre>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="12">
          <Widget
            title="<h5><span class='fw-semi-bold'>Grid </span> options</h5>"
            close
            collapse
            customHeader
          >
            <p>
              While Bootstrap uses <code>em</code>s or <code>rem</code>s for
              defining most sizes, <code>px</code>s are used for grid
              breakpoints and container widths. This is because the viewport
              width is in pixels and does not change with the font size. See how
              aspects of the Bootstrap grid system work across multiple devices
              with a handy table.
            </p>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center">
                      Extra small<br /><small>&lt;576px</small>
                    </th>
                    <th class="text-center">
                      Small<br /><small>≥576px</small>
                    </th>
                    <th class="text-center">
                      Medium<br /><small>≥768px</small>
                    </th>
                    <th class="text-center">
                      Large<br /><small>≥992px</small>
                    </th>
                    <th class="text-center">
                      Extra large<br /><small>≥1200px</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="b-row" class="text-nowrap">
                      Max container width
                    </th>
                    <td>None (auto)</td>
                    <td>540px</td>
                    <td>720px</td>
                    <td>960px</td>
                    <td>1140px</td>
                  </tr>
                  <tr>
                    <th scope="b-row" class="text-nowrap">
                      Component property
                    </th>
                    <td><code>&lt;b-col xs=""&gt;</code></td>
                    <td><code>&lt;b-col sm=""&gt;</code></td>
                    <td><code>&lt;b-col md=""&gt;</code></td>
                    <td><code>&lt;b-col lg=""&gt;</code></td>
                    <td><code>&lt;b-col xl=""&gt;</code></td>
                  </tr>
                  <tr>
                    <th scope="b-row" class="text-nowrap"># of columns</th>
                    <td colspan="5">12</td>
                  </tr>
                  <tr>
                    <th scope="b-row" class="text-nowrap">Gutter width</th>
                    <td colspan="5">30px (15px on each side of a column)</td>
                  </tr>
                  <tr>
                    <th scope="b-row" class="text-nowrap">Nestable</th>
                    <td colspan="5">Yes</td>
                  </tr>
                  <tr>
                    <th scope="b-row" class="text-nowrap">column ordering</th>
                    <td colspan="5">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Widget>
        </b-col>

        <b-col xs="12" lg="6">
          <Widget
            title="<h5><span class='fw-semi-bold'>Vertical </span> Alignment</h5>"
            close
            collapse
            customHeader
          >
            <p>
              Use flexbox alignment utilities to vertically and horizontally
              align columns.
            </p>
            <div class="bg-light p-3">
              <div class="row mb-lg" style="height: 150px">
                <div class="align-self-start col">
                  <div class="py-4 bg-primary text-center text-white">
                    Start
                  </div>
                </div>
                <div class="align-self-center col">
                  <div class="py-4 bg-primary text-center text-white">
                    Center
                  </div>
                </div>
                <div class="align-self-end col">
                  <div class="py-4 bg-primary text-center text-white">End</div>
                </div>
              </div>
              <pre
                class="bg-light border-0 w-100 h-100"
              >            <code class="text-danger">&lt;b-container&gt;</code>
            <code class="text-success">  &lt;b-row&gt;</code>
            <code class="text-info">    &lt;b-col class="align-self-start"&gt;</code>
            <code>      Start</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-info">    &lt;b-col class="align-self-center"&gt;</code>
            <code>      Center</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-info">    &lt;b-col class="align-self-end"&gt;</code>
            <code>      End</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-success">  &lt;/b-row&gt;</code>
            <code class="text-danger">&lt;/b-container&gt;</code>
          </pre>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5><span class='fw-semi-bold'>Vertical </span> Alignment</h5>"
            close
            collapse
            customHeader
          >
            <p>
              Use flexbox alignment utilities to vertically and horizontally
              align columns.
            </p>
            <div class="bg-light p-3">
              <div class="row mb-lg justify-content-end">
                <div class="col-3">
                  <div class="py-4 bg-primary text-center text-white">1</div>
                </div>
                <div class="col-3">
                  <div class="py-4 bg-primary text-center text-white">2</div>
                </div>
              </div>
              <div class="row mb-lg justify-content-around">
                <div class="col-3">
                  <div class="py-4 bg-primary text-center text-white">1</div>
                </div>
                <div class="col-3">
                  <div class="py-4 bg-primary text-center text-white">2</div>
                </div>
              </div>
              <div class="row mb-lg justify-content-between">
                <div class="col-3">
                  <div class="py-4 bg-primary text-center text-white">1</div>
                </div>
                <div class="col-3">
                  <div class="py-4 bg-primary text-center text-white">2</div>
                </div>
                <div class="col-3">
                  <div class="py-4 bg-primary text-center text-white">3</div>
                </div>
              </div>
              <pre
                class="bg-light border-0 w-100 h-100"
              >            <code class="text-danger">&lt;b-container&gt;</code>
            <code class="text-success">  &lt;b-row class="justify-content-end"&gt;</code>
            <code class="text-info">    &lt;b-col&gt;</code>
            <code>      1</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-info">    &lt;b-col&gt;</code>
            <code>      2</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-success">  &lt;/b-row&gt;</code>
            <code class="text-success">  &lt;b-row class="justify-content-around"&gt;</code>
            <code class="text-info">    &lt;b-col&gt;</code>
            <code>      1</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-info">    &lt;b-col&gt;</code>
            <code>      2</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-success">  &lt;/b-row&gt;</code>
            <code class="text-success">  &lt;b-row class="justify-content-between"&gt;</code>
            <code class="text-info">    &lt;b-col&gt;</code>
            <code>      1</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-info">    &lt;b-col&gt;</code>
            <code>      2</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-info">    &lt;b-col&gt;</code>
            <code>      3</code>
            <code class="text-info">    &lt;/b-col&gt;</code>
            <code class="text-success">  &lt;/b-row&gt;</code>
            <code class="text-danger">&lt;/b-container&gt;</code>
          </pre>
            </div>
          </Widget>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

export default {
  name: "Grid",
  components: { Widget },
  data() {
    return {};
  },
  computed: {},
};
</script>
