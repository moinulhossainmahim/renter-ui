import { createBrowserRouter } from "react-router-dom";
import Registration from "../pages/Registration/Registration";
import AddPropertyModal from "../components/AddPropertyModal/AddPropertyModal";
import Properties from "../pages/Properties/Properties";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Layout from "../components/Layout/Layout";
import Contact from "../components/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";
import Wishlist from "../pages/Wishlist/Wishlist";
import Property from "../pages/Property/Property";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/properties/:id",
        element: (
          <PrivateRoute>
            <Property />
          </PrivateRoute>
        ),
        // loader: async ({ params }) => {
        //   const response = await fetch(
        //     `https://localhost:5173/properties/${params.id}`
        //   );
        //   if (!response.ok) {
        //     throw new Response("Property not found", { status: 404 });
        //   }
        //   return response.json();
        // },
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
