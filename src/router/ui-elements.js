const uiElements = [
    {
      path: "ui/alerts",
      name: "AlertsPage",
      component: () => import("@/pages/Ui/Alerts"),
    },
    {
      path: "ui/badge",
      name: "BadgePage",
      component: () => import("@/pages/Ui/Badge"),
    },
    {
      path: "ui/buttons",
      name: "ButtonsPage",
      component: () => import("@/pages/Ui/Buttons"),
    },
    {
      path: "ui/cards",
      name: "CardsPage",
      component: () => import("@/pages/Ui/Cards"),
    },
    {
      path: "ui/carousel",
      name: "CarouselPage",
      component: () => import("@/pages/Ui/Carousel"),
    },
    {
      path: "ui/jumbotron",
      name: "JumbotronPage",
      component: () => import("@/pages/Ui/Jumbotron"),
    },
    {
      path: "ui/list-groups",
      name: "ListsGroupPage",
      component: () => import("@/pages/Ui/Lists"),
    },
    {
      path: "ui/nav",
      name: "NavPage",
      component: () => import("@/pages/Ui/Nav"),
    },
    {
      path: "ui/navbar",
      name: "NavbarPage",
      component: () => import("@/pages/Ui/Navbar"),
    },
    {
      path: "ui/progress",
      name: "ProgressPage",
      component: () => import("@/pages/Ui/Progress"),
    },
    {
      path: "ui/accordian",
      name: "AccordianPage",
      component: () => import("@/pages/Ui/Accordian"),
    },
  ]
export default uiElements;