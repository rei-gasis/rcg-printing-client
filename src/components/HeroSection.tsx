import Navbar from "./Navbar";
import sample_vid from "@PublicImages/sample_vid_hero.mp4";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import TocIcon from "@mui/icons-material/Toc";
import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import { products as _products } from "../constants/productlist";
import { uniqBy } from "lodash";
import { Product } from "models/Product";
import SearchInputProduct from "./SearchInputProduct";
import SearchInputProductList from "./SearchInputProductList";
import HeroSectionProductCarousel from "./HeroSectionProductCarousel";
import { Category } from "models/Category";
import tiktok_logo from "../../public/images/tiktok-circle.svg";

const HeroSection = () => {
  const [searchProduct, setSearchProduct] = useState<Product>({
    id: "",
    category: "",
    name: "",
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    setProducts(_products);

    setCategories(
      uniqBy(
        _products.map((item) => {
          return { name: item.category, image: item.images[0] };
        }),
        "category"
      )
    );
  }, [_products]);

  useEffect(() => {
    if (searchProduct?.name != "") {
      setProducts(
        _products.filter((item) => {
          return (
            item.name.toLowerCase().indexOf(searchProduct?.name.toLowerCase()) >
            -1
          );
        })
      );
    } else setProducts([]);
  }, [searchProduct?.name]);

  const searchBarOut = () => {
    setProducts([]);
  };

  return (
    <div className="section">
      <Navbar />
      <div className="hero-section">
        <div className="hero-section-bg">
          <video width="100%" loop={true} height="100%" autoPlay muted>
            <source src={sample_vid} type="video/mp4" />
          </video>
        </div>
        <div className="hero-section-container">
          <div className="hero-section-container-social-links">
            <Link href="https://facebook.com">
              <FacebookOutlinedIcon
                sx={{
                  fill: "black",
                  fontSize: "2rem",
                  "&:hover": { fill: "white" },
                }}
              />
            </Link>
            <Link href="https://tiktok.com">
              <img
                style={{ width: "2rem" }}
                alt="tiktok_logo"
                src={tiktok_logo}
              />
            </Link>
          </div>

          <div className="hero-section-container-title">
            <h4 className="caption-1">DIGITAL PRINTING SERVICE</h4>
            <h1 className="caption-main">Your One-Stop Printing Shop</h1>
            <h6 className="caption-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem nihil similique possimus nisi illo voluptatem eos
            </h6>
            <div className="searchbar">
              <SearchInputProduct
                searchVal={(val) => {
                  setSearchProduct({
                    id: "",
                    category: "",
                    name: val,
                  });
                }}
                onLostFocus={searchBarOut}
              />
              <button type="button">SEARCH</button>
            </div>
            <SearchInputProductList
              products={products!}
              showList={products?.length > 0}
            />
            <p className="short-company-info">
              <p>
                <TocIcon />

                <span>&nbsp; Over 40+ Products</span>
              </p>
              <p>
                <AssuredWorkloadIcon />
                <span>&nbsp;30+ Years in Service</span>
              </p>
            </p>
          </div>
          <div className="hero-section-container-product-carousel">
            <HeroSectionProductCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
