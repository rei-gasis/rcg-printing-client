import { Grid, Paper, styled } from "@mui/material";
import { PUBLIC_IMAGES } from "../constants/constants";
import Flickity from "react-flickity-component";

const ProductsAndServicesSection = () => {
  const flickityOptions = {
    watchCSS: true,
    initialIndex: 2,
    pageDots: false,
    adaptiveHeight: true,
    contain: true,
  };

  return (
    <div className="section" id="prod-serv-section">
      <div className="prod-serv-section-container">
        <h1>Discover our Services</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex illum
          non, eius quis eligendi repellendus nam obcaecati error sunt{" "}
        </p>
        <Flickity
          elementType={"div"} // default 'div'
          options={flickityOptions}
          className="carousel"
          static
          disableImagesLoaded={false}
          reloadOnUpdate
        >
          <div className="carousel-cell">
            <img
              width="100px"
              height="100px"
              alt=""
              src={`${PUBLIC_IMAGES}printer.svg`}
            />
            <h2>Digital Printing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              dolor, explicabo natus, distinctio corporis mollitia unde Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolor,
              explicabo natus, distinctio corporis mollitia undeLorem ipsum
              dolor sit amet consectetur, adipisicing elit. Maxime dolor,
              explicabo natus, distinctio corporis mollitia undeLorem ipsum
              dolor sit amet consectetur
            </p>
          </div>

          <div className="carousel-cell">
            <img
              width="100px"
              height="100px"
              alt=""
              src={`${PUBLIC_IMAGES}offset.svg`}
            />
            <h2>Offset Printing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              dolor, explicabo natus, distinctio corporis mollitia unde Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolor,
              explicabo natus, distinctio corpo
            </p>
          </div>
          <div className="carousel-cell">
            <img
              width="100px"
              height="100px"
              alt=""
              src={`${PUBLIC_IMAGES}custom_print.svg`}
            />
            <h2>Personalized Souvenirs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              dolor, explicabo natus, distinctio corporis mollitia unde{" "}
            </p>
          </div>
        </Flickity>
      </div>
    </div>
  );
};

export default ProductsAndServicesSection;
