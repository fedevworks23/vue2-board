<template>
  <div class="Navbar-overview">
    <h1 class="page-title">Navbar</h1>
    <div>
      <b-row>
        <b-col xs="12" lg="8">
          <Widget
            title="<h5>Navbar <span class='fw-semi-bold'>Example</span></h5>"
            close
            collapse
            customHeader
          >
            <p>
              Here’s what you need to know before getting started with the
              navbar:
            </p>
            <ul>
              <li>
                Navbars require a wrapping <code>&lt;b-navbar&gt;</code> with
                <code>toggleable="*"</code> for responsive collapsing and color
                scheme classes.
              </li>
              <li>
                Navbars and their contents are fluid by default. Use optional
                containers to limit their horizontal width.
              </li>
              <li>
                Use our spacing and flex utility classes for controlling spacing
                and alignment within navbars.
              </li>
              <li>
                Navbars are responsive by default, but you can easily modify
                them to change that. Responsive behavior depends on our Collapse
                JavaScript plugin.
              </li>
              <li>
                Navbars are hidden by default when printing. Force them to be
                printed by adding <code>.d-print</code> to the
                <code>.navbar</code>. See the display utility class.
              </li>
            </ul>
            <nav
              class="navbar mt px-3 navbar-light bg-light navbar-expand-md"
              style="height: 60px"
            >
              <a href="#" target="_self" class="navbar-brand">Navbar</a
              ><button
                type="button"
                aria-label="Toggle navigation"
                class="navbar-toggler ml-auto collapsed"
                aria-expanded="false"
                aria-controls="nav_collapse1"
                style="overflow-anchor: none"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                id="nav_collapse1"
                class="navbar-collapse collapse"
                style="display: none"
              >
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Features</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      target="_self"
                      tabindex="-1"
                      aria-disabled="true"
                      class="nav-link disabled"
                      >Disabled</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </Widget>
        </b-col>
        <b-col xs="12" lg="8">
          <Widget
            title="<h5>Navbar <span class='fw-semi-bold'>Example</span></h5>"
            close
            collapse
            customHeader
            ><p>
              Theming the navbar has never been easier thanks to the combination
              of theming classes and background-color utilities. Choose from
              <code>color="light"</code>
              for use with light background colors, or
              <code>color="dark"</code> for dark background colors. Then,
              customize with <code>.bg-*</code> utilities.
            </p>
            <nav
              class="navbar mt px-3 navbar-dark bg-inverse navbar-expand-md"
              style="height: 60px"
            >
              <a href="#" target="_self" class="navbar-brand">Navbar</a
              ><button
                type="button"
                aria-label="Toggle navigation"
                class="navbar-toggler ml-auto collapsed"
                aria-expanded="false"
                aria-controls="nav_collapse2"
                style="overflow-anchor: none"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                id="nav_collapse2"
                class="navbar-collapse collapse"
                style="display: none"
              >
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Features</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      target="_self"
                      tabindex="-1"
                      aria-disabled="true"
                      class="nav-link disabled"
                      >Disabled</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
            <nav
              class="navbar mt px-3 navbar-dark bg-primary navbar-expand-md"
              style="height: 60px"
            >
              <a href="#" target="_self" class="navbar-brand">Navbar</a
              ><button
                type="button"
                aria-label="Toggle navigation"
                class="navbar-toggler ml-auto collapsed"
                aria-expanded="false"
                aria-controls="nav_collapse3"
                style="overflow-anchor: none"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                id="nav_collapse3"
                class="navbar-collapse collapse"
                style="display: none"
              >
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Features</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      target="_self"
                      tabindex="-1"
                      aria-disabled="true"
                      class="nav-link disabled"
                      >Disabled</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
            <nav
              class="navbar mt px-3 navbar-light bg-light navbar-expand-md"
              style="height: 60px"
            >
              <a href="#" target="_self" class="navbar-brand">Navbar</a
              ><button
                type="button"
                aria-label="Toggle navigation"
                class="navbar-toggler ml-auto collapsed"
                aria-expanded="false"
                aria-controls="nav_collapse4"
                style="overflow-anchor: none"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                id="nav_collapse4"
                class="navbar-collapse collapse"
                style="display: none"
              >
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Features</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" target="_self" class="nav-link">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      target="_self"
                      tabindex="-1"
                      aria-disabled="true"
                      class="nav-link disabled"
                      >Disabled</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
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
