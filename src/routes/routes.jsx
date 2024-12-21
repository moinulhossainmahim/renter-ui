import { createBrowserRouter } from "react-router-dom";
import Registration from "../pages/Registration/Registration";
import AddPropertyModal from "../components/AddPropertyModal/AddPropertyModal";
import Properties from "../pages/Properties/Properties";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Layout from "../components/Layout/Layout";
import Contact from "../components/Contact/Contact";

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
    ],
  },
]);

export default router;
