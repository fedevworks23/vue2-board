const core = [
  {
    path: "core/grid",
    name: "GridPage",
    component: () => import("@/pages/Grid/Grid"),
  },
  {
    path: "core/colors",
    name: "ColorsPage",
    component: () => import("@/pages/Colors/Colors"),
  },
  {
    path: "core/typography",
    name: "TypographyPage",
    component: () => import("@/pages/Typography/Typography"),
  },
];

export default core;
