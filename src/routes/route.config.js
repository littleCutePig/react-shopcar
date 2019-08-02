import Home from "../pages/Home";
import List from "../pages/List";
import Shop from "../pages/Shop";

const route = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/list",
        component: List
      },
      {
        path: "/shop",
        component: Shop
      },
      {
        from: "/",
        to: "/list"
      }
    ]
  }
];
export default route;
