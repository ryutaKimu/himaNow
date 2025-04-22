import  Home  from "../pages/Home";
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
];
