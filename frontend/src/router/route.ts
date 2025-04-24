import  Home  from "../pages/Home";
import { Register } from "../pages/Register";
import Login from "../pages/login";

type Routers = {
  path: string;
  element: React.FC;
};

export const routers: Routers[] = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register
  }
];
