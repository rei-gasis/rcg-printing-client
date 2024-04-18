import "@Styles/LandingPage.scss";
import CompanySection from "./CompanySection";
import HeroSection from "./HeroSection";
import ProductsAndServicesSection from "./ProductsAndServicesSection";
import InquireSection from "./LandingPage/InquireSection";

const LandingPage = () => {
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
