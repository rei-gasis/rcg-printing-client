import "@Styles/LandingPage.scss";
import CompanySection from "./CompanySection";
import HeroSection from "./HeroSection";
import ProductsAndServicesSection from "./ProductsAndServicesSection";
import InquireSection from "./LandingPage/InquireSection";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";

const LandingPage = () => {
  const location = window.location.href;
  const baseUrl = window.location.origin;
  const sectionRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const locId = location.substring(baseUrl.length + 1);
    if (locId) {
      const divRef = document.querySelector(locId);
      divRef?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <ProductsAndServicesSection />
      <CompanySection />
      <InquireSection />
      <div className="return-to-hero">Up</div>
    </>
  );
};

export default LandingPage;
