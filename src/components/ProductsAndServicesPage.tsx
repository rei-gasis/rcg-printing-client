import { categories } from "@Const/categorylist";
import { PUBLIC_IMAGES_PRODUCT } from "@Const/constants";
import AppContext from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import PageBanner from "./PageBanner";
import "@Styles/ProductsAndServicesPage.scss";
import { Divider, Grid } from "@mui/material";
import SearchInputProduct from "./LandingPage/SearchInputProduct";
import Image from "./library/Image";
import { useNavigate } from "react-router-dom";

const ProductAndServicesPage = () => {
  const { setShowMenuLinks } = useContext(AppContext);
  const [hoveredItem, setHoveredItem] = useState(-1);
  const nav = useNavigate();

  useEffect(() => {
    setShowMenuLinks(false);
  }, []);

  return (
    <div className="section" id="product-page">
      <PageBanner
        title="Products and Services"
        breadCrumbList={[
          { title: "Home", url: "/" },
          { title: "Products and Services", url: "/products-services" },
        ]}
      />
      <div className="product-page-container">
        <Grid container spacing={2}>
          {categories.map((cat, idx) => {
            return (
              <>
                <Grid item xs={6} className="product-item" key={cat.name}>
                  <Grid
                    container
                    key={cat.name}
                    onClick={() => {
                      nav(`/product${cat.url}`);
                    }}
                  >
                    <Grid item xs={6}>
                      <div className="img-container">
                        <Image
                          filePath={`${PUBLIC_IMAGES_PRODUCT}${cat.image}`}
                          className={`${idx === hoveredItem ? "hovered" : ""}`}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <h3
                        onMouseEnter={(e) => {
                          setHoveredItem(idx);
                        }}
                        onMouseLeave={(e) => setHoveredItem(-1)}
                        className="product-name"
                      >
                        <a href="#">{cat.name}</a>
                      </h3>
                    </Grid>
                  </Grid>
                  <Divider variant="fullWidth" sx={{ margin: "2rem 0" }} />
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default ProductAndServicesPage;
