const components = [
  {
    path: "components/icons",
    name: "IconsPage",
    component: () => import("@/pages/Icons/Icons"),
  },
  {
    path: "components/charts",
    name: "ChartsPage",
    component: () => import("@/pages/Charts/Charts"),
  },
  {
    path: "components/maps",
    name: "GoogleMapPage",
    component: () => import("@/pages/Maps/Google"),
  },
];

export default components;
