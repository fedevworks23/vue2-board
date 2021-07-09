<template>
  <div class="Nav-overview">
    <h1 class="page-title">Nav</h1>
    <div>
      <b-row>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Base <span class='fw-semi-bold'>Nav</span></h5>"
            close
            collapse
            customHeader
            ><p>
              Navigation available in Bootstrap share general markup and styles,
              from the base .nav class to the active and disabled states. Swap
              modifier classes to switch between each style.
            </p>
            <div class="bg-light p-3">
              <ul class="nav">
                <li class="nav-item">
                  <a href="#" target="_self" class="nav-link"> Link </a>
                </li>
                <li class="nav-item">
                  <a href="#" target="_self" class="nav-link"> Link </a>
                </li>
                <li class="nav-item">
                  <a href="#" target="_self" class="nav-link"> Another Link </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    target="_self"
                    tabindex="-1"
                    aria-disabled="true"
                    class="nav-link disabled"
                  >
                    Disabled Link
                  </a>
                </li>
              </ul>
              <pre
                class="bg-light border-0 w-100 h-100"
              >            <code class="text-danger">&lt;b-nav&gt;</code>
            <code class="text-info">  &lt;b-nav-item href="#"&gt;</code>
            <code>    Link</code>
            <code class="text-info">  &lt;/b-nav-item&gt;</code>
            <code class="text-info">  &lt;b-nav-item href="#"&gt;</code>
            <code>    Link</code>
            <code class="text-info">  &lt;/b-nav-item&gt;</code>
            <code class="text-info">  &lt;b-nav-item href="#"&gt;</code>
            <code>    Another Link</code>
            <code class="text-info">  &lt;/b-nav-item&gt;</code>
            <code class="text-info">  &lt;b-nav-item isabled href="#"&gt;</code>
            <code>    Disabled Link</code>
            <code class="text-info">  &lt;/b-nav-item&gt;</code>
            <code class="text-danger">&lt;/b-nav&gt;</code>
          </pre>
            </div>
            <h5 class="mt">With dropdown</h5>
            <ul class="nav bg-light p-2">
              <li class="nav-item">
                <a href="#" target="_self" class="nav-link"> Link </a>
              </li>
              <li class="nav-item b-nav-dropdown dropdown" id="__BVID__1065">
                <a
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                  target="_self"
                  class="nav-link dropdown-toggle"
                  id="__BVID__1065__BV_toggle_"
                  ><span>Dropdown</span></a
                >
                <ul
                  tabindex="-1"
                  class="dropdown-menu"
                  aria-labelledby="__BVID__1065__BV_toggle_"
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
              </li>
              <li class="nav-item">
                <a href="#" target="_self" class="nav-link"> Another Link </a>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  target="_self"
                  tabindex="-1"
                  aria-disabled="true"
                  class="nav-link disabled"
                >
                  Disabled Link
                </a>
              </li>
            </ul>
          </Widget>
        </b-col>
        <b-col xs="12" lg="6">
          <Widget
            title="<h5>Tabs & Pills<span class='fw-semi-bold'>Example</span></h5>"
            close
            collapse
            customHeader
            ><p>
          Takes the basic <code>&lt;b-nav&gt;</code> from above
          and adds the <code>tabs</code> property to generate a
          tabbed interface. Use them to create tabbable regions with our tab
          JavaScript plugin.
        </p><div class="bg-light p-3"><ul class="nav nav-tabs"><li class="nav-item"><a href="#" target="_self" class="nav-link active">
              Link
            </a></li><li class="nav-item"><a href="#" target="_self" class="nav-link">
              Link
            </a></li><li class="nav-item"><a href="#" target="_self" class="nav-link">
              Another Link
            </a></li><li class="nav-item"><a href="#" target="_self" tabindex="-1" aria-disabled="true" class="nav-link disabled">
              Disabled Link
            </a></li></ul><pre class="bg-light border-0 w-100 h-100">            <code class="text-danger">&lt;b-nav tabs&gt;</code>
            <code class="text-info">  &lt;b-nav-item href="#"&gt;</code>
            <code>    Link</code>
            <code class="text-info">  &lt;/b-nav-item&gt;</code>
            <code class="text-info">  &lt;b-nav-item href="#"&gt;</code>
            <code>    Link</code>
            <code class="text-info">  &lt;/b-nav-item&gt;</code>
            <code class="text-info">  &lt;b-nav-item href="#"&gt;</code>
            <code>    Another Link</code>
            <code class="text-info">  &lt;/b-nav-item&gt;</code>
            <code class="text-info">  &lt;b-nav-item isabled href="#"&gt;</code>
            <code>    Disabled Link</code>
            <code class="text-info">  &lt;/b-nav-item&gt;</code>
            <code class="text-danger">&lt;/b-nav&gt;</code>
          </pre></div><p class="mt">Do the same thing with the <code>pills</code> property.</p><div class="bg-light p-3"><ul class="nav nav-pills"><li class="nav-item"><a href="#" target="_self" class="nav-link active">
              Link
            </a></li><li class="nav-item"><a href="#" target="_self" class="nav-link">
              Link
            </a></li><li class="nav-item"><a href="#" target="_self" class="nav-link">
              Another Link
            </a></li><li class="nav-item"><a href="#" target="_self" tabindex="-1" aria-disabled="true" class="nav-link disabled">
              Disabled Link
            </a></li></ul></div>
          </Widget>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";

export default {
  name: "Navbar",
  components: { Widget },
  data() {
    return {};
  },
  computed: {},
};
</script>
