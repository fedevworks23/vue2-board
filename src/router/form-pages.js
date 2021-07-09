const components = [
  {
    path: "form-pages/login",
    name: "LoginPage",
    component: () => import("@/pages/FormPages/Login"),
  },
  {
    path: "form-pages/register",
    name: "RegisterPage",
    component: () => import("@/pages/FormPages/Register"),
  },
];

export default components;
