import "./App.css";

import { useRoutes } from "react-router-dom";
import LandingPage from "@Components/LandingPage";
import ProductPage from "@Components/ProductPage";
import NotFound from "@Components/NotFound";

function App() {
  const Routes = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/product/:productUrl",
      element: <ProductPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return Routes;
}

export default App;
