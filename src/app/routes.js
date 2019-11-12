import App from "./app";
import Login from "./pages/Login"
import Registeration from "./pages/Registration"
import MainComponent from "./dashboard"

// just a example you import all component and assined to each routes
export const DefaultRoutes = [
  {
    path: "/",
    component: Login,
    authRequire: false,
    exact: "true"
  },
  {
    path: "/login",
    authRequire: false,
    component: Login,
    exact: "true"
  },
  {
    path: "/register",
    authRequire: false,
    component: Registeration,
    exact: "true"
  },
  {
    path: "/",
    component: MainComponent,
    authRequire: true,
    exact: "true"
  },

];
// export default {
//   DefaultRoutes
// }