import Navbar from "./Navbar";
import sample_vid from "@PublicImages/sample_vid_hero.mp4";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import TocIcon from "@mui/icons-material/Toc";
import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import { products as _products } from "../constants/productlist";
import { uniqBy } from "lodash";
import { Product } from "models/Product";
import SearchInputProduct from "./LandingPage/SearchInputProduct";
import SearchInputProductList from "./LandingPage/SearchInputProductList";
import HeroSectionProductCarousel from "./HeroSectionProductCarousel";
import { Category } from "models/Category";
import tiktok_logo from "../../public/images/tiktok-circle.svg";
import IconTextStack from "./library/IconTextStack";
import TikTokIcon from "@Components/TiktokIcon";
import ScrollAnimationWrapper from "./library/ScrollAnimationWrapper";

const HeroSection = () => {
  const [searchProduct, setSearchProduct] = useState<Product>({
    id: "",
    category: "",
    name: "",
  });
  const [products, setProducts] = useState<Product[]>([]);
  // const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    setProducts(_products);

    // setCategories(
    //   uniqBy(
    //     _products.map((item) => {
    //       return { name: item.category, image: item.images[0] };
    //     }),
    //     "category"
    //   )
    // );
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
      <div className="hero-section" id="hero">
        <div className="hero-section-bg">
          <video width="100%" loop={true} height="100%" autoPlay muted>
            <source src={sample_vid} type="video/mp4" />
          </video>
        </div>
        <div className="hero-section-container">
          <div className="hero-section-container-social-links animated fadeInLeft">
            <Link href="https://facebook.com">
              <FacebookIcon
                sx={{
                  fill: "black",
                  fontSize: "2rem",
                }}
              />
            </Link>
            <Link href="https://tiktok.com">
              <div
                style={{
                  width: "33px",
                  height: "33px",
                }}
              >
                <TikTokIcon color="black" />
              </div>
            </Link>
          </div>

          <div className="hero-section-container-title  animated fadeInUp ">
            <h4 className="caption-1">DIGITAL PRINTING SERVICE</h4>
            <h1 className="caption-main">Your One-Stop Printing Shop</h1>
            <h6 className="caption-2">
              Direct Manufacturer of High Quality Awards
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
              <IconTextStack icon={<TocIcon />} text="Over 100+ Products" />
              <IconTextStack
                icon={<AssuredWorkloadIcon />}
                text="Industry Pioneer with 40+ years experience"
              />
            </p>
          </div>
          <div className="hero-section-container-product-carousel animated fadeInRight">
            <HeroSectionProductCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
