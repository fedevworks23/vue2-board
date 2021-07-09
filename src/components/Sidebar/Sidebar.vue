<template>
  <div class="sidebar-wrapper">
    <nav
      :class="{ sidebar: true, sidebarStatic, sidebarOpened }"
      @mouseenter="sidebarMouseEnter"
      @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
        <router-link to="/app/dashboard">
          <span class="primary-word" v-if="sidebarStatic">Vue</span>
          <span class="primary-word" v-else>V</span>
        </router-link>
      </header>
      <h5 class="navTitle first">Navigations</h5>
      <ul class="nav">
        <NavLink
          :activeItem="activeItem"
          header="Dashboard"
          link="/app/dashboard"
          iconName="flaticon-home"
          index="dashboard"
          isHeader
        />
        <NavLink
          :activeItem="activeItem"
          header="Notifications"
          link="/app/notifications"
          iconName="flaticon-bell"
          index="notifications"
          isHeader
        />
        <NavLink
          :activeItem="activeItem"
          header="Custom Components"
          link="/app/custom-components"
          iconName=""
          index="customComponents"
          isHeader
        />
        <NavLink
          :activeItem="activeItem"
          header="UI Elements"
          link="/app/ui"
          iconName="flaticon-ui"
          index="ui"
          :childrenLinks="[
            { header: 'Alerts', link: '/app/ui/alerts' },
            { header: 'Badge', link: '/app/ui/badge' },
            { header: 'Buttons', link: '/app/ui/buttons' },
            { header: 'Cards', link: '/app/ui/cards' },
            { header: 'Carousel', link: '/app/ui/carousel' },
            { header: 'Jumbotron', link: '/app/ui/jumbotron' },
            { header: 'Lists', link: '/app/ui/list-groups' },
            { header: 'Nav', link: '/app/ui/nav' },
            { header: 'Navbar', link: '/app/ui/navbar' },
            { header: 'Progress', link: '/app/ui/progress' },
            { header: 'Accordian', link: '/app/ui/accordian' },
          ]"
        />
        <NavLink
          :activeItem="activeItem"
          header="Forms"
          link="/app/forms"
          iconName="flaticon-ui"
          index="forms"
          :childrenLinks="[
            { header: 'Inputs', link: '/app/forms/inputs' },
            { header: 'Textarea', link: '/app/forms/textarea' },
            { header: 'Buttons', link: '/app/ui/buttons' },
            { header: 'Cards', link: '/app/ui/cards' },
            { header: 'Carousel', link: '/app/ui/carousel' },
            { header: 'Jumbotron', link: '/app/ui/jumbotron' },
            { header: 'Lists', link: '/app/ui/list-groups' },
            { header: 'Nav', link: '/app/ui/nav' },
            { header: 'Navbar', link: '/app/ui/navbar' },
            { header: 'Progress', link: '/app/ui/progress' },
            { header: 'Accordian', link: '/app/ui/accordian' },
          ]"
        />
        <NavLink
          :activeItem="activeItem"
          header="Components"
          link="/app/components"
          iconName="flaticon-network"
          index="components"
          :childrenLinks="[
            { header: 'Charts', link: '/app/components/charts' },
            { header: 'Icons', link: '/app/components/icons' },
            { header: 'Maps', link: '/app/components/maps' },
          ]"
        />
        <NavLink
          :activeItem="activeItem"
          header="Tables"
          link="/app/tables"
          iconName="flaticon-equal-1"
          index="tables"
          :childrenLinks="[
            { header: 'Basic', link: '/app/tables/basic' },
            { header: 'Dynamic', link: '/app/tables/dynamic' },
          ]"
        />
        <NavLink
          :activeItem="activeItem"
          header="Core"
          link="/app/core"
          iconName="flaticon-core"
          index="core"
          :childrenLinks="[
            { header: 'Typography', link: '/app/core/typography' },
            { header: 'Colors', link: '/app/core/colors' },
            { header: 'Grid', link: '/app/core/grid' },
          ]"
        />
        <NavLink
          :activeItem="activeItem"
          header="Pages"
          link="/app/form-pages"
          iconName=""
          index="pages"
          :childrenLinks="[
            { header: 'Login', link: '/app/form-pages/login' },
            { header: 'Register', link: '/app/form-pages/register' },
          ]"
        />
      </ul>
      <h5 class="navTitle">LABELS</h5>
      <ul class="sidebarLabels">
        <li>
          <a href="#">
            <i class="fa fa-circle text-primary" />
            <span class="labelName">UI Elements</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-danger" />
            <span class="labelName">Forms</span>
          </a>
        </li>
      </ul>
      <h5 class="navTitle">PROJECTS</h5>
      <div class="sidebarAlerts">
        <b-alert
          v-for="alert in alerts"
          :key="alert.id"
          class="sidebarAlert"
          variant="transparent"
          show
          dismissible
        >
          <span>{{ alert.title }}</span
          ><br />
          <b-progress
            class="sidebarProgress progress-xs mt-1"
            :variant="alert.color"
            :value="alert.value"
            :max="100"
          />
          <small>{{ alert.footer }}</small>
        </b-alert>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import isScreen from "@/core/screenHelper";
import NavLink from "./NavLink/NavLink";

export default {
  name: "Sidebar",
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: "Title",
          value: 45,
          footer: "Calculating x-axis bias... 65%",
          color: "danger",
        },
      ],
    };
  },
  methods: {
    ...mapActions("layout", ["changeSidebarActive", "switchSidebar"]),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split("/");
      paths.pop();
      this.changeSidebarActive(paths.join("/"));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen("lg") || isScreen("xl"))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen("lg") || isScreen("xl"))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState("layout", {
      sidebarStatic: (state) => state.sidebarStatic,
      sidebarOpened: (state) => !state.sidebarClose,
      activeItem: (state) => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
