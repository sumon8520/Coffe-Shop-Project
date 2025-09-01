import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Coffes from "../Pages/Coffes";
import Dashborad from "../Pages/Dashborad";
import CoffeCard from "../Components/CoffeCard";
import CoffeDetails from "../Pages/CoffeDetails";




const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('../categories.json'),
        children : [
          {
          path : '/',
          element : <CoffeCard></CoffeCard>,
          loader : () => fetch('../coffees.json')
        },
          {
          path : '/category/:category',
          element : <CoffeCard></CoffeCard>,
          loader : () => fetch('../coffees.json')
        }
      ]
      },
      {
        path:'/coffes',
        element:<Coffes></Coffes>,
        loader : () => fetch('../coffees.json')
      },
      {
        path:'/dashborad',
        element:<Dashborad></Dashborad>
      },
      {
        path :'/card/:id',
        element : <CoffeDetails></CoffeDetails>,
        loader : () => fetch('../coffees.json')
      }
    ]
  },
]);

export default routes