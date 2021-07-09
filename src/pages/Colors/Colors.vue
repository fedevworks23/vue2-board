<template>
  <div class="colors-overview">
    <h1 class="page-title">Colors</h1>
    <div>
      <b-row>
        <b-col xs="12" lg="12">
          <Widget
            title="<h5><span class='fw-semi-bold'>States </span> Colors</h5>"
            close
            collapse
            customHeader
          >
            <p>
              Sing comes with a number of state colors that can be applied to
              the most of elements and components. It reuses Bootstrap's
              original 6 states:
            </p>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>STATE</th>
                    <th>PREVIEW</th>
                    <th>CLASS POSTFIX</th>
                    <th>USAGE EXAMPLE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" class="fw-thin">Success</th>
                    <td><span class="circle bg-success">&nbsp;</span></td>
                    <td><code>*-success</code></td>
                    <td>
                      <code class="mr-xs">text-success</code
                      ><code class="mr-xs">btn-success</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="fw-thin">Warning</th>
                    <td><span class="circle bg-warning">&nbsp;</span></td>
                    <td><code>*-warning</code></td>
                    <td>
                      <code class="mr-xs">badge-warning</code
                      ><code class="mr-xs">bg-warning</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="fw-thin">Danger</th>
                    <td><span class="circle bg-danger">&nbsp;</span></td>
                    <td><code>*-danger</code></td>
                    <td>
                      <code class="mr-xs">btn-danger</code
                      ><code class="mr-xs">text-danger</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="fw-thin">Info</th>
                    <td><span class="circle bg-info">&nbsp;</span></td>
                    <td><code>*-info</code></td>
                    <td>
                      <code class="mr-xs">alert-info</code
                      ><code class="mr-xs">badge-info</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="fw-thin">Primary</th>
                    <td><span class="circle bg-primary">&nbsp;</span></td>
                    <td><code>*-primary</code></td>
                    <td>
                      <code class="mr-xs">bg-primary</code
                      ><code class="mr-xs">text-primary</code>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="fw-thin">Secondary</th>
                    <td><span class="circle bg-secondary">&nbsp;</span></td>
                    <td><code>*-secondary</code></td>
                    <td><code class="mr-xs">bg-secondary</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Widget>
        </b-col>

        <b-col xs="12" lg="6">
          <Widget
            title="<h5><span class='fw-semi-bold'>Text </span> Colors</h5>"
            close
            collapse
            customHeader
          >
            <p>
              Convey meaning through color with a handful of color utility
              classes. Includes support for styling links with hover states,
              too. Use text-* class to fill text.
            </p>
            <div class="widget-padding-md w-100 h-100 text-left border rounded">
              <div class="row">
                <div class="col-sm-12">
                  <h1 class="text-danger">h1. Heading</h1>
                  <h2 class="text-warning">h2. Heading</h2>
                  <h3 class="text-success">h3. Heading</h3>
                  <h4 class="text-primary">h4. Heading</h4>
                  <h5 class="text-info">h5. Heading</h5>
                  <h6 class="text-inverse">h6. Heading</h6>
                </div>
              </div>
            </div>
          </Widget>
        </b-col>

        <b-col xs="12" lg="6">
          <Widget
            title="<h5><span class='fw-semi-bold'>Example </span> buttons</h5>"
            close
            collapse
            customHeader
          >
            <p>
              Use any of the available button classes to quickly create a styled
              button. Semantically distinguishable beauty.
            </p>
            <button type="button" class="btn width-100 mb-3 mr-3 btn-default">
              Default</button
            ><button type="button" class="btn width-100 mb-3 mr-3 btn-primary">
              Primary</button
            ><button type="button" class="btn width-100 mb-3 mr-3 btn-info">
              Info</button
            ><button type="button" class="btn width-100 mb-3 mr-3 btn-success">
              Success</button
            ><button type="button" class="btn width-100 mb-3 mr-3 btn-warning">
              Warning</button
            ><button type="button" class="btn width-100 mb-3 mr-3 btn-danger">
              Danger</button
            ><button type="button" class="btn width-100 mb-3 mr-3 btn-gray">
              Gray</button
            ><button type="button" class="btn width-100 mb-3 mr-3 btn-inverse">
              Inverse
            </button>
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
