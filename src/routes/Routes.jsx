import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Coffes from "../Pages/Coffes";
import Dashborad from "../Pages/Dashborad";




const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/coffes',
        element:<Coffes></Coffes>
      },
      {
        path:'/dashborad',
        element:<Dashborad></Dashborad>
      }
    ]
  },
]);

export default routes