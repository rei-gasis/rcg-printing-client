import "@Styles/LandingPage.scss";
import CompanySection from "./CompanySection";
import HeroSection from "./HeroSection";
import ProductsAndServicesSection from "./ProductsAndServicesSection";
import InquireSection from "./LandingPage/InquireSection";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { useInView, InView } from "react-intersection-observer";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const LandingPage = () => {
  const location = window.location.href;
  const baseUrl = window.location.origin;

  useEffect(() => {
    const locId = location.substring(baseUrl.length + 1);
    if (locId && locId != "#") {
      const divRef = document.querySelector(locId);
      divRef?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  const returnToTopDiv = document.querySelector(".return-to-top");
  const { ref, inView: _inview } = useInView({ threshold: 0 });

  const [showReturnToTop, setShowReturnToTop] = useState<boolean>(false);

  const PRODUCT_VIEW = "PRODUCT_VIEW";
  const HERO_VIEW = "HERO_VIEW";

  const setInView = (viewSection: string) => {
    if (viewSection === PRODUCT_VIEW) setShowReturnToTop(true);
    else setShowReturnToTop(false);
  };

  return (
    <div className="landing-page" ref={ref}>
      <InView
        onChange={(e) => {
          setInView(HERO_VIEW);
        }}
        threshold={0}
      >
        <HeroSection />
      </InView>
      <InView
        onChange={(e) => {
          setInView(PRODUCT_VIEW);
        }}
        threshold={0}
      >
        <ProductsAndServicesSection />
      </InView>

      <CompanySection />
      <InquireSection />

      {showReturnToTop && (
        <a href="#" className="return-to-top">
          <ArrowCircleUpIcon
            sx={{ width: "2rem", height: "2rem", fill: "white" }}
          />
        </a>
      )}
    </div>
  );
};

export default LandingPage;
