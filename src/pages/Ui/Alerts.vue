<template>
  <div class="alerts-overview">
    <h1 class="page-title">Alerts</h1>
    <div>
      <b-row>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Alert <span class='fw-semi-bold'>Messages</span></h5>"
            close
            collapse
            customHeader
          >
            <p>
              Alerts are available for any length of text, as well as an
              optional dismiss button.
            </p>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-dismissible alert-success"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold">Success:</span> You successfully
                read this important alert message.</span
              >
            </div>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-dismissible alert-info"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold">Info:</span> This alert needs your
                attention, but it's not super important.</span
              >
            </div>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-dismissible alert-warning"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold"><strong>Warning:</strong></span>
                Best check yo self, you're not looking too good.</span
              >
            </div>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-dismissible alert-danger"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold">Danger:</span> Change this and that
                and try again.
                <a class="btn btn-default btn-xs float-right mr" href="#"
                  >Ignore</a
                >
                <a class="btn btn-danger btn-xs float-right mr-xs" href="#"
                  >Take this action</a
                ></span
              >
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Transparent <span class='fw-semi-bold'>Alerts</span></h5>"
            close
            collapse
            customHeader
          >
            <p>
              Transparent alerts are available by adding
              <code>.alert-transparent</code> class.
            </p>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-transparent alert-dismissible alert-success"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold">Success:</span> You successfully
                read this important alert message.</span
              >
            </div>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-transparent alert-dismissible alert-info"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold">Info:</span> This alert needs your
                attention, but it's not super important.</span
              >
            </div>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-transparent alert-dismissible alert-warning"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold"><strong>Warning:</strong></span>
                Best check yo self, you're not looking too good.</span
              >
            </div>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-transparent alert-dismissible alert-danger"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold">Danger:</span> Change this and that
                and try again.
                <a class="btn btn-default btn-xs float-right mr" href="#"
                  >Ignore</a
                >
                <a class="btn btn-danger btn-xs float-right mr-xs" href="#"
                  >Take this action</a
                ></span
              >
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Rounded <span class='fw-semi-bold'>Alerts</span></h5>"
            close
            collapse
            customHeader
          >
            <p>
              Rounded alerts are available by adding
              <code>.alert-rounded</code> class.
            </p>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-dismissible alert-success alert-rounded alert-transparent"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold">Success:</span> You successfully
                read this important alert message.</span
              >
            </div>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-dismissible alert-info alert-rounded"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold">Info:</span> This alert needs your
                attention, but it's not super important.</span
              >
            </div>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-dismissible alert-warning alert-rounded alert-transparent"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold"><strong>Warning:</strong></span>
                Best check yo self, you're not looking too good.</span
              >
            </div>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-dismissible alert-danger alert-rounded"
            >
              <button type="button" aria-label="Close" class="close">×</button
              ><span
                ><span class="fw-semi-bold">Danger:</span> Change this and that
                and try again.
                <a class="btn btn-default btn-xs float-right mr" href="#"
                  >Ignore</a
                >
                <a class="btn btn-danger btn-xs float-right mr-xs" href="#"
                  >Take this action</a
                ></span
              >
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Additional <span class='fw-semi-bold'>Content</span></h5>"
            close
            collapse
            customHeader
            ><p>
              Alerts can also contain additional HTML elements like headings,
              paragraphs and dividers.
            </p>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-success"
            >
              <!---->
              <h4 class="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p class="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </div>
            <div
              role="alert"
              aria-live="polite"
              aria-atomic="true"
              class="alert alert-danger"
            >
              <!---->
              <h4 class="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
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
  name: "Alerts",
  components: { Widget },
  data() {
    return {};
  },
  computed: {},
};
</script>
