import "./App.css";

import { useRoutes } from "react-router-dom";
import LandingPage from "@Components/LandingPage";
import ProductPage from "@Components/ProductPage";
import Wrapper from "@Components/Wrapper";
import ProductAndServicesPage from "@Components/ProductsAndServicesPage";
import PageNotFound from "@Components/PageNotFound";

function App() {
  const Routes = useRoutes([
    {
      path: "/",
      element: (
        <Wrapper>
          <LandingPage />
        </Wrapper>
      ),
    },
    {
      path: "/product/:productUrl",
      element: (
        <Wrapper>
          <ProductPage />
        </Wrapper>
      ),
    },
    {
      path: "/products-services",
      element: (
        <Wrapper>
          <ProductAndServicesPage />
        </Wrapper>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return Routes;
}

export default App;
