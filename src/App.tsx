import "./App.css";

import { useRoutes } from "react-router-dom";
import LandingPage from "@Components/LandingPage";
import ProductPage from "@Components/ProductPage";
import NotFound from "@Components/NotFound";
import Wrapper from "@Components/Wrapper";

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
