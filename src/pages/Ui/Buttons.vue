<template>
  <div class="buttons-overview">
    <h1 class="page-title">
      Buttons - <span class="fw-semi-bold">Styles</span>
    </h1>
    <div>
      <b-row>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Color <span class='fw-semi-bold'>Options</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <p class="fs-mini text-muted">
                Use any of the available button classes to quickly create a
                styled button. Semantically distinguishable beauty.
              </p>
              <p class="text-left">
                <button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-default"
                >
                  Default</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-primary"
                >
                  Primary</button
                ><button type="button" class="btn width-100 mb-3 mr-3 btn-info">
                  Info</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-success"
                >
                  Success</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-warning"
                >
                  Warning</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-danger"
                >
                  Danger</button
                ><button type="button" class="btn width-100 mb-3 mr-3 btn-gray">
                  Gray</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-inverse"
                >
                  Inverse
                </button>
              </p>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Size <span class='fw-semi-bold'>Variants</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <p class="fs-mini text-muted">
                Fancy larger or smaller buttons? Four separate sizes available
                for all use cases: from tiny 10px button to large one.
              </p>
              <p>
                <button type="button" class="btn mr-3 btn-default btn-lg">
                  Large button</button
                ><button type="button" class="btn mr-3 btn-primary">
                  Default button</button
                ><button type="button" class="btn mr-3 btn-info btn-sm">
                  Small button</button
                ><button type="button" class="btn mr-3 btn-success btn-xs">
                  Tiny button
                </button>
              </p>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5><span class='fw-semi-bold'>Buttons</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <p class="fs-mini">
                In need of a button, but not the hefty background colors they
                bring? Use <code></code> property to remove all background
                images and colors on any button.
              </p>
              <p>
                <button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-outline-default"
                >
                  Default</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-outline-primary"
                >
                  Primary</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-outline-info"
                >
                  Info</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-outline-success"
                >
                  Success</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-outline-warning"
                >
                  Warning</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-outline-danger"
                >
                  Danger</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-outline-gray"
                >
                  Gray</button
                ><button
                  type="button"
                  class="btn width-100 mb-3 mr-3 btn-outline-inverse"
                >
                  Inverse
                </button>
              </p>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Rounded <span class='fw-semi-bold'>Buttons</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <p class="fs-mini">
                Use any of the available button properties to quickly create a
                styled button. Semantically distinguishable beauty. Use
                <code>.btn-rounded</code> or <code>.btn-rounded-f</code>.
              </p>
              <p>
                <button
                  type="button"
                  class="btn btn-rounded-f width-100 mb-3 mr-3 btn-default"
                >
                  Default</button
                ><button
                  type="button"
                  class="btn btn-rounded-f width-100 mb-3 mr-3 btn-primary"
                >
                  Primary</button
                ><button
                  type="button"
                  class="btn btn-rounded-f width-100 mb-3 mr-3 btn-info"
                >
                  Info</button
                ><button
                  type="button"
                  class="btn btn-rounded-f width-100 mb-3 mr-3 btn-success"
                >
                  Success</button
                ><button
                  type="button"
                  class="btn btn-rounded width-100 mb-3 mr-3 btn-outline-warning"
                >
                  Warning</button
                ><button
                  type="button"
                  class="btn btn-rounded width-100 mb-3 mr-3 btn-outline-danger"
                >
                  Danger</button
                ><button
                  type="button"
                  class="btn btn-rounded width-100 mb-3 mr-3 btn-outline-gray"
                >
                  Gray</button
                ><button
                  type="button"
                  class="btn btn-rounded width-100 mb-3 mr-3 btn-outline-inverse"
                >
                  Inverse
                </button>
              </p>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Block <span class='fw-semi-bold'>Buttons</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <p class="fs-mini text-muted">
                Create block level buttons - those that span the full width of a
                parent— by adding <code>block</code> to
                <code>&lt;Button&gt;</code> component. Great for menu &amp;
                social buttons.
              </p>
              <button type="button" class="btn mb-3 btn-info btn-block">
                Block Button</button
              ><button type="button" class="btn mb-3 btn-default btn-block">
                Show Menu &nbsp;&nbsp;&nbsp;<i class="fa fa-bars"></i></button
              ><button type="button" class="btn mb-3 btn-primary btn-block">
                <i class="fa fa-facebook"></i>&nbsp;&nbsp;Login mit Facebook</button
              ><button type="button" class="btn btn-warning btn-block">
                Are you sure?
              </button>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Disabled <span class='fw-semi-bold'>Buttons</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <p class="fs-mini text-muted">
                Make buttons look unclickable by fading them back 50%. Add the
                <code>disabled</code> to <code>&lt;Button&gt;</code> component.
              </p>
              <p>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn mr-3 btn-primary disabled"
                >
                  Primary button</button
                ><button
                  type="button"
                  disabled="disabled"
                  class="btn mr-xs btn-default disabled"
                >
                  Button
                </button>
              </p>
              <p>
                <button
                  type="button"
                  disabled="disabled"
                  class="btn mr-3 btn-success btn-sm disabled"
                >
                  Primary Link</button
                ><button
                  type="button"
                  disabled="disabled"
                  class="btn mr-xs btn-default btn-sm disabled"
                >
                  Link
                </button>
              </p>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Button <span class='fw-semi-bold'>Groups</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <p class="fs-mini text-muted">
                Group a series of buttons together on a single line with the
                button group. Add on optional JavaScript radio and checkbox
                style behavior with Bootstrap buttons plugin.
              </p>
              <div role="group" class="mb-3 btn-group">
                <button type="button" class="btn btn-default">Left</button
                ><button type="button" class="btn btn-default">Middle</button
                ><button type="button" class="btn btn-default">Right</button>
              </div>
              <div role="toolbar" class="btn-toolbar mb-xs">
                <div role="group" class="mr-3 btn-group">
                  <button type="button" class="btn ml-0 btn-default">1</button
                  ><button type="button" class="btn btn-default">2</button
                  ><button type="button" class="btn btn-default">3</button
                  ><button type="button" class="btn btn-default">4</button>
                </div>
                <div role="group" class="mr-3 btn-group">
                  <button type="button" class="btn btn-default">5</button
                  ><button type="button" class="btn btn-default">6</button
                  ><button type="button" class="btn btn-default">7</button>
                </div>
                <div role="group" class="mr-2 btn-group">
                  <button type="button" class="btn btn-default">8</button>
                </div>
              </div>
            </div>
          </Widget>
        </b-col>

        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Button <span class='fw-semi-bold'>Dropdowns</span></h5>"
            close
            collapse
            customHeader
          >
            <div>
              <p class="fs-mini text-muted">
                Add dropdown menus to nearly anything with this simple plugin,
                including the buttons, navbar, tabs, and pills. Both solid &amp;
                segmented dropdown options available.
              </p>
              <div class="mb-3">
                <div
                  class="dropdown b-dropdown mr-3 btn-group"
                  id="__BVID__519"
                >
                  <!----><button
                    aria-haspopup="true"
                    aria-expanded="false"
                    type="button"
                    class="btn dropdown-toggle btn-danger"
                    id="__BVID__519__BV_toggle_"
                  >
                    One
                  </button>
                  <ul
                    role="menu"
                    tabindex="-1"
                    class="dropdown-menu"
                    aria-labelledby="__BVID__519__BV_toggle_"
                  >
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Action</a
                      >
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Another action</a
                      >
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Something else here</a
                      >
                    </li>
                    <li role="presentation">
                      <hr
                        role="separator"
                        aria-orientation="horizontal"
                        class="dropdown-divider"
                      />
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Separated link</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown b-dropdown btn-group" id="__BVID__528">
                  <!----><button
                    aria-haspopup="true"
                    aria-expanded="false"
                    type="button"
                    class="btn dropdown-toggle btn-gray"
                    id="__BVID__528__BV_toggle_"
                  >
                    One
                  </button>
                  <ul
                    role="menu"
                    tabindex="-1"
                    class="dropdown-menu"
                    aria-labelledby="__BVID__528__BV_toggle_"
                  >
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Action</a
                      >
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Another action</a
                      >
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Something else here</a
                      >
                    </li>
                    <li role="presentation">
                      <hr
                        role="separator"
                        aria-orientation="horizontal"
                        class="dropdown-divider"
                      />
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Separated link</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mb-xs">
                <div
                  class="dropdown b-dropdown mr-3 btn-group"
                  id="__BVID__537"
                >
                  <button
                    type="button"
                    class="btn btn-primary"
                    id="__BVID__537__BV_button_"
                  >
                    Primary</button
                  ><button
                    aria-haspopup="true"
                    aria-expanded="false"
                    type="button"
                    class="btn dropdown-toggle btn-primary dropdown-toggle-split"
                    id="__BVID__537__BV_toggle_"
                  >
                    <span class="sr-only">Toggle dropdown</span>
                  </button>
                  <ul
                    role="menu"
                    tabindex="-1"
                    class="dropdown-menu"
                    aria-labelledby="__BVID__537__BV_button_"
                  >
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Action</a
                      >
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Another action</a
                      >
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Something else here</a
                      >
                    </li>
                    <li role="presentation">
                      <hr
                        role="separator"
                        aria-orientation="horizontal"
                        class="dropdown-divider"
                      />
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Separated link</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown b-dropdown btn-group" id="__BVID__546">
                  <button
                    type="button"
                    class="btn btn-gray"
                    id="__BVID__546__BV_button_"
                  >
                    Gray</button
                  ><button
                    aria-haspopup="true"
                    aria-expanded="false"
                    type="button"
                    class="btn dropdown-toggle btn-gray dropdown-toggle-split"
                    id="__BVID__546__BV_toggle_"
                  >
                    <span class="sr-only">Toggle dropdown</span>
                  </button>
                  <ul
                    role="menu"
                    tabindex="-1"
                    class="dropdown-menu"
                    aria-labelledby="__BVID__546__BV_button_"
                  >
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Action</a
                      >
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Another action</a
                      >
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Something else here</a
                      >
                    </li>
                    <li role="presentation">
                      <hr
                        role="separator"
                        aria-orientation="horizontal"
                        class="dropdown-divider"
                      />
                    </li>
                    <li role="presentation">
                      <a
                        role="menuitem"
                        href="#"
                        target="_self"
                        class="dropdown-item"
                        >Separated link</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Widget>
        </b-col>
        <b-col xs="12" lg="12">
          <Widget
            title="<h5>Button <span class='fw-semi-bold'>Options</span></h5>"
            close
            collapse
            customHeader
          >
            <div class="row">
              <div xs="12" class="col-sm-6 col-md-4">
                <h4>Button <span class="fw-semi-bold">Checkboxes</span></h4>
                <p class="fs-mini text-muted">
                  Do more with buttons. Control button states or create groups
                  of buttons for more components like toolbars. Use
                  <code>ButtonGroup</code> to a group of checkboxes for checkbox
                  style toggling on btn-group.
                </p>
                <div class="mb-xs">
                  <div role="group" class="mb-3 btn-group">
                    <button type="button" class="btn btn-default">
                      Left way</button
                    ><button type="button" class="btn btn-default active">
                      Middle way</button
                    ><button type="button" class="btn btn-default">
                      Right way
                    </button>
                  </div>
                </div>
                <div class="mb-xs">
                  <div role="group" class="btn-group">
                    <button type="button" class="btn btn-default btn-sm active">
                      Left way</button
                    ><button type="button" class="btn btn-default btn-sm">
                      Middle way</button
                    ><button
                      type="button"
                      class="btn btn-default btn-sm active"
                    >
                      Right way
                    </button>
                  </div>
                </div>
              </div>
              <div xs="12" class="col-sm-12 col-md-4">
                <h4>Button <span class="fw-semi-bold">Radios</span></h4>
                <p class="fs-mini text-muted">
                  Do more with buttons. Control button states or create groups
                  of buttons for more components like toolbars. Use
                  <code>ButtonGroup</code> to a group of radio inputs for radio
                  style toggling on btn-group.
                </p>
                <div class="mb-3">
                  <div role="group" class="btn-group">
                    <button type="button" class="btn btn-default">
                      Left way</button
                    ><button type="button" class="btn btn-default">
                      Middle way</button
                    ><button type="button" class="btn btn-default">
                      Right way
                    </button>
                  </div>
                </div>
                <div class="mb-xs">
                  <div role="group" class="btn-group">
                    <button type="button" class="btn btn-default btn-sm">
                      Left way</button
                    ><button
                      type="button"
                      class="btn btn-default btn-sm active"
                    >
                      Middle way</button
                    ><button type="button" class="btn btn-default btn-sm">
                      Right way
                    </button>
                  </div>
                </div>
              </div>
              <div xs="12" class="col-sm-12 col-md-4">
                <h4>Use with <span class="fw-semi-bold">Icons</span></h4>
                <p class="fs-mini text-muted">
                  Fontawesome and Glyph- icons may be used in buttons, button
                  groups for a toolbar, navigation, or prepended form inputs.
                  Let your buttons shine!
                </p>
                <div class="text-center mb-sm">
                  <button type="button" class="btn width-100 mr-3 btn-default">
                    <i
                      class="glyphicon glyphicon-tree-conifer text-success mr-xs mb-xs"
                    ></i>
                    Forest</button
                  ><button type="button" class="btn width-100 mr-3 btn-default">
                    <i class="fa fa-check text-danger mr-0 mb-xs"></i>
                    Submit</button
                  ><button
                    type="button"
                    class="btn width-100 mr-xs btn-default"
                  >
                    <i class="fa fa-facebook text-primary mr-xs mb-xs"></i>
                    Login
                  </button>
                </div>
                <div class="text-center">
                  <button type="button" class="btn width-100 mr-3 btn-inverse">
                    <i class="fa fa-exclamation text-warning mr-xs mb-xs"></i>
                    Error</button
                  ><button type="button" class="btn width-100 mr-3 btn-inverse">
                    <i
                      class="glyphicon glyphicon-globe text-info mr-xs mb-xs"
                    ></i
                    ><span class="text-info">Globe</span></button
                  ><button
                    type="button"
                    class="btn width-100 mr-xs btn-inverse"
                  >
                    <span class="circle bg-white mr-xs"
                      ><i class="fa fa-map-marker text-gray"></i
                    ></span>
                    Map
                  </button>
                </div>
              </div>
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
  name: "Buttons",
  components: { Widget },
  data() {
    return {};
  },
  computed: {},
};
</script>
