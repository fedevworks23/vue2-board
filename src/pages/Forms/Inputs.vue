<template>
  <div class="inputs-overview">
    <h1 class="page-title">Inputs</h1>
    <div>
      <b-row>
        <b-col xs="12" lg="6">
          <Widget title="<h5>Inputs</h5>" close collapse customHeader>
            <fieldset class="form-group" id="__BVID__1088">
              <!---->
              <div>
                <form class="">
                  <legend><strong>Horizontal</strong> form</legend>
                  <div
                    role="group"
                    class="form-row form-group"
                    horizontal=""
                    breakpoint="md"
                    id="__BVID__1089"
                  >
                    <label
                      for="normal-field"
                      class="col-4 col-form-label text-md-right"
                      id="__BVID__1089__BV_label_"
                      >Normal field</label
                    >
                    <div class="col">
                      <input
                        id="normal-field"
                        type="text"
                        placeholder="May have placeholder"
                        class="form-control"
                      /><!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-row form-group"
                    horizontal=""
                    breakpoint="md"
                    id="__BVID__1091"
                  >
                    <label
                      for="normal-field"
                      class="col-4 col-form-label text-md-right"
                      id="__BVID__1091__BV_label_"
                      ><div>
                        Label hint
                        <span class="help-block">Some help text</span>
                      </div></label
                    >
                    <div class="col">
                      <input
                        id="label-hint"
                        type="text"
                        class="form-control"
                      /><!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-row form-group"
                    horizontal=""
                    breakpoint="md"
                    id="__BVID__1093"
                  >
                    <label
                      for="tooltip-field"
                      class="col-4 col-form-label text-md-right"
                      id="__BVID__1093__BV_label_"
                      >Tooltip enabled</label
                    >
                    <div class="col">
                      <input
                        id="tooltip-field"
                        type="text"
                        class="form-control"
                        title="Some explanation text here"
                      /><!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-row form-group"
                    horizontal=""
                    breakpoint="md"
                    id="__BVID__1096"
                  >
                    <label
                      for="disabled-field"
                      class="col-4 col-form-label text-md-right"
                      id="__BVID__1096__BV_label_"
                      >Disabled input</label
                    >
                    <div class="col">
                      <input
                        id="disabled-field"
                        type="text"
                        disabled="disabled"
                        class="form-control"
                      /><!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-row form-group"
                    horizontal=""
                    breakpoint="md"
                    id="__BVID__1098"
                  >
                    <label
                      for="length-field"
                      class="col-4 col-form-label text-md-right"
                      id="__BVID__1098__BV_label_"
                      >Max length</label
                    >
                    <div class="col">
                      <input
                        id="length-field"
                        type="text"
                        placeholder="Max length 3 characters"
                        class="form-control"
                      /><!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-row form-group"
                    horizontal=""
                    breakpoint="md"
                    id="__BVID__1100"
                  >
                    <label
                      for="prepended-field"
                      class="col-4 col-form-label text-md-right"
                      id="__BVID__1100__BV_label_"
                      >Prepended input</label
                    >
                    <div class="col">
                      <div
                        id="prepended-field"
                        role="group"
                        class="input-group"
                      >
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="fa fa-user"></i>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          id="__BVID__1101"
                        /><!---->
                      </div>
                      <!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-row form-group"
                    horizontal=""
                    breakpoint="md"
                    id="__BVID__1102"
                  >
                    <label
                      for="password-field"
                      class="col-4 col-form-label text-md-right"
                      id="__BVID__1102__BV_label_"
                      >Password</label
                    >
                    <div class="col">
                      <div id="password-field" role="group" class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="fa fa-lock"></i>
                          </div>
                        </div>
                        <input
                          type="password"
                          class="form-control"
                          id="__BVID__1103"
                        /><!---->
                      </div>
                      <!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-row form-group"
                    horizontal=""
                    breakpoint="md"
                    id="__BVID__1104"
                  >
                    <label
                      for="append-field"
                      class="col-4 col-form-label text-md-right"
                      id="__BVID__1104__BV_label_"
                      >Appended input</label
                    >
                    <div class="col">
                      <div id="append-field" role="group" class="input-group">
                        <!----><input
                          type="text"
                          class="form-control"
                          id="__BVID__1105"
                        />
                        <div class="input-group-append">
                          <div class="input-group-text">.00</div>
                        </div>
                      </div>
                      <!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-row form-group"
                    horizontal=""
                    breakpoint="md"
                    id="__BVID__1106"
                  >
                    <label
                      for="combined-field"
                      class="col-4 col-form-label text-md-right"
                      id="__BVID__1106__BV_label_"
                      >Combined input</label
                    >
                    <div class="col">
                      <div id="combined-field" role="group" class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">$</div>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          id="__BVID__1107"
                        />
                        <div class="input-group-append">
                          <div class="input-group-text">.00</div>
                        </div>
                      </div>
                      <!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-row form-group"
                    horizontal=""
                    breakpoint="md"
                    id="__BVID__1108"
                  >
                    <label
                      for="transparent-field"
                      class="col-4 col-form-label text-md-right"
                      id="__BVID__1108__BV_label_"
                      >Append Transparent</label
                    >
                    <div class="col">
                      <div
                        id="transparent-field"
                        role="group"
                        class="input-group input-group-transparent"
                      >
                        <!----><input
                          type="text"
                          class="form-control"
                          id="__BVID__1109"
                        />
                        <div class="input-group-append">
                          <div class="input-group-text bg-transparent">
                            <i class="fa fa-camera"></i>
                          </div>
                        </div>
                      </div>
                      <!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-row form-group form-action bg-transparent pl-1"
                    horizontal=""
                    breakpoint="md"
                    id="__BVID__1110"
                  >
                    <label
                      for="transparent-field"
                      class="col-4 col-form-label"
                    ></label>
                    <div class="col">
                      <button type="submit" class="btn ml-0 mr-3 btn-primary">
                        Save Changes</button
                      ><button type="button" class="btn btn-inverse">
                        Cancel</button
                      ><!----><!----><!---->
                    </div>
                  </div>
                </form>
                <!----><!----><!---->
              </div>
            </fieldset>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Prepended and appended inputs</h5>"
            close
            collapse
            customHeader
          >
            <fieldset class="form-group" id="__BVID__1112">
              <!---->
              <div>
                <form class="">
                  <legend><strong>Default</strong> form</legend>
                  <div
                    role="group"
                    class="form-group"
                    breakpoint="md"
                    id="__BVID__1113"
                  >
                    <label
                      for="search-field"
                      class="d-block"
                      id="__BVID__1113__BV_label_"
                      >Search type input</label
                    >
                    <div>
                      <div class="row">
                        <div class="col-md-8">
                          <div role="group" class="input-group">
                            <!----><input
                              id="search-field"
                              type="text"
                              class="form-control"
                            />
                            <div class="input-group-append">
                              <button type="button" class="btn btn-default">
                                Search
                              </button>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-group"
                    breakpoint="md"
                    id="__BVID__1115"
                  >
                    <label
                      for="bar-field"
                      class="d-block"
                      id="__BVID__1115__BV_label_"
                      >Whole bar appended</label
                    >
                    <div>
                      <div class="row">
                        <div class="col-md-8">
                          <div role="group" class="input-group">
                            <!----><input
                              id="bar-field"
                              type="text"
                              class="form-control"
                            />
                            <div class="input-group-append">
                              <button type="button" class="btn btn-danger">
                                <i class="la la-pencil"></i></button
                              ><button type="button" class="btn btn-warning">
                                <i class="la la-plus"></i></button
                              ><button type="button" class="btn btn-success">
                                <i class="la la-refresh"></i>
                              </button>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-group"
                    breakpoint="md"
                    id="__BVID__1117"
                  >
                    <label
                      for="actions-field"
                      class="d-block"
                      id="__BVID__1117__BV_label_"
                      >Actions dropdown</label
                    >
                    <div>
                      <div class="row">
                        <div class="col-md-8">
                          <div role="group" class="input-group">
                            <!----><input
                              id="actions-field"
                              type="text"
                              class="form-control"
                            />
                            <div class="input-group-append">
                              <div
                                class="dropdown b-dropdown btn-group"
                                id="__BVID__1119"
                              >
                                <!----><button
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  type="button"
                                  class="btn dropdown-toggle btn-success"
                                  id="__BVID__1119__BV_toggle_"
                                >
                                  Action
                                </button>
                                <ul
                                  role="menu"
                                  tabindex="-1"
                                  class="dropdown-menu"
                                  aria-labelledby="__BVID__1119__BV_toggle_"
                                  style=""
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
                            <!---->
                          </div>
                        </div>
                      </div>
                      <!----><!----><!---->
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-group"
                    breakpoint="md"
                    id="__BVID__1128"
                  >
                    <label
                      for="segmented-field"
                      class="d-block"
                      id="__BVID__1128__BV_label_"
                      >Segmented dropdown</label
                    >
                    <div>
                      <div class="row">
                        <div class="col-md-8">
                          <div role="group" class="input-group">
                            <!----><input
                              id="segmented-field"
                              type="text"
                              class="form-control"
                              aria-describedby="__BVID__1128__BV_description_"
                            />
                            <div class="input-group-append">
                              <button type="button" class="btn btn-warning">
                                Action
                              </button>
                              <div
                                class="dropdown b-dropdown btn-group"
                                id="__BVID__1130"
                              >
                                <!----><button
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  type="button"
                                  class="btn dropdown-toggle btn-warning"
                                  id="__BVID__1130__BV_toggle_"
                                ></button>
                                <ul
                                  role="menu"
                                  tabindex="-1"
                                  class="dropdown-menu"
                                  aria-labelledby="__BVID__1130__BV_toggle_"
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
                            <!---->
                          </div>
                        </div>
                      </div>
                      <!----><!----><small
                        tabindex="-1"
                        class="form-text text-muted"
                        id="__BVID__1128__BV_description_"
                        >Anything can be appended to the right</small
                      >
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-group"
                    breakpoint="md"
                    id="__BVID__1139"
                  >
                    <label
                      for="types-field"
                      class="d-block"
                      id="__BVID__1139__BV_label_"
                      >Types dropdown</label
                    >
                    <div>
                      <div class="row">
                        <div class="col-md-8">
                          <div role="group" class="input-group">
                            <!----><input
                              id="types-field"
                              type="text"
                              class="form-control"
                              aria-describedby="__BVID__1139__BV_description_"
                            />
                            <div class="input-group-append">
                              <div
                                class="dropdown b-dropdown btn-group"
                                id="__BVID__1141"
                              >
                                <!----><button
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  type="button"
                                  class="btn dropdown-toggle btn-primary"
                                  id="__BVID__1141__BV_toggle_"
                                >
                                  Type one
                                </button>
                                <ul
                                  role="menu"
                                  tabindex="-1"
                                  class="dropdown-menu"
                                  aria-labelledby="__BVID__1141__BV_toggle_"
                                  style=""
                                >
                                  <li role="presentation">
                                    <button
                                      role="menuitem"
                                      type="button"
                                      class="dropdown-item"
                                    >
                                      Another type
                                    </button>
                                  </li>
                                  <li role="presentation">
                                    <button
                                      role="menuitem"
                                      type="button"
                                      class="dropdown-item"
                                    >
                                      Type one
                                    </button>
                                  </li>
                                  <li role="presentation">
                                    <button
                                      role="menuitem"
                                      type="button"
                                      class="dropdown-item"
                                    >
                                      Next type
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <!----><!----><small
                        tabindex="-1"
                        class="form-text text-muted"
                        id="__BVID__1139__BV_description_"
                        >You can select some type of a field just right in the
                        place.</small
                      >
                    </div>
                  </div>
                  <div
                    role="group"
                    class="form-group"
                    breakpoint="md"
                    id="__BVID__1145"
                  >
                    <label
                      for="transparent-field"
                      class="d-block"
                      id="__BVID__1145__BV_label_"
                      >Transparent input</label
                    >
                    <div>
                      <div class="row">
                        <div class="col-md-8">
                          <input
                            id="tranparent-field"
                            type="text"
                            placeholder="Search Dashboard"
                            class="input-no-border bg-gray-lighter form-control"
                          />
                        </div>
                      </div>
                      <!----><!----><small
                        tabindex="-1"
                        class="form-text text-muted"
                        id="__BVID__1145__BV_description_"
                        >With gray-light background. White by default.</small
                      >
                    </div>
                  </div>
                  <fieldset
                    class="form-group form-action bg-transparent pl-1"
                    id="__BVID__1147"
                  >
                    <!---->
                    <div>
                      <button type="submit" class="btn mr-xs btn-inverse">
                        Save Changes</button
                      ><button type="button" class="btn btn-default">
                        Cancel</button
                      ><!----><!----><!---->
                    </div>
                  </fieldset>
                </form>
                <!----><!----><!---->
              </div>
            </fieldset>
          </Widget>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Form <span class='fw-semi-bold'>Options</span></h5>"
            close
            collapse
            customHeader
          >
            <form class="">
              <legend>Control sizing</legend>
              <p class="mb-0">
                Set input heights using parameters like
                <code>size='lg'</code> and <code>size='sm'</code>. Also works
                with <code>type='search'</code> inputs, input groups and
                selects.
              </p>
              <br />
              <fieldset class="form-group" id="__BVID__1149">
                <!---->
                <div>
                  <input
                    type="text"
                    placeholder='size="lg"'
                    class="form-control form-control-lg"
                    id="__BVID__1150"
                  /><!----><!----><!---->
                </div>
              </fieldset>
              <fieldset class="form-group" id="__BVID__1151">
                <!---->
                <div>
                  <input
                    type="text"
                    placeholder="default input"
                    class="form-control"
                    id="__BVID__1152"
                  /><!----><!----><!---->
                </div>
              </fieldset>
              <fieldset class="form-group" id="__BVID__1153">
                <!---->
                <div>
                  <input
                    type="text"
                    placeholder='size="sm"'
                    class="form-control form-control-sm"
                    id="__BVID__1154"
                  /><!----><!----><!---->
                </div>
              </fieldset>
            </form>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Form <span class='fw-semi-bold'>Options</span></h5>"
            close
            collapse
            customHeader
          >
            <form class="">
              <legend>Input Groups</legend>
              <p class="mb-0">
                Different colors &amp; sizes for any elements including input
                groups. Elements may be easily styled with classes like
                <code>.bg-primary</code> or <code>.bg-transparent</code>
              </p>
              <br />
              <fieldset class="form-group" id="__BVID__1156">
                <!---->
                <div>
                  <div role="group" class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text bg-transparent">
                        <i class="la la-github-alt"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="First Name"
                      class="form-control form-control-16"
                      id="__BVID__1157"
                    /><!---->
                  </div>
                  <!----><!----><!---->
                </div>
              </fieldset>
              <fieldset class="form-group" id="__BVID__1158">
                <!---->
                <div>
                  <div role="group" class="input-group input-group-lg">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="la la-bars"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Username"
                      class="form-control form-control-16"
                      id="__BVID__1159"
                    /><!---->
                  </div>
                  <!----><!----><!---->
                </div>
              </fieldset>
              <fieldset class="form-group" id="__BVID__1160">
                <!---->
                <div>
                  <div role="group" class="input-group input-group-sm">
                    <!----><input
                      type="text"
                      placeholder="City"
                      class="form-control"
                      id="__BVID__1161"
                    />
                    <div class="input-group-append">
                      <div class="input-group-text bg-danger text-white">
                        <i class="la la-code-fork"></i>
                      </div>
                    </div>
                  </div>
                  <!----><!----><!---->
                </div>
              </fieldset>
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
