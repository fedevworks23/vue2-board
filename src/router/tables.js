const tables = [
  {
    path: "tables/basic",
    name: "TablesBasicPage",
    component: () => import("@/pages/Tables/Basic"),
  },
  {
    path: "tables/dynamic",
    name: "TablesDynamicPage",
    component: () => import("@/pages/Tables/Dynamic"),
  },
];

export default tables;
