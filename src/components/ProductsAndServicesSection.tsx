import { Box, Grid, Paper, styled } from "@mui/material";
import { PUBLIC_IMAGES } from "../constants/constants";

const ProductsAndServicesSection = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,
    padding: "2rem",
    textAlign: "center",
    // color: theme.palette.text.secondary,
  }));

  return (
    <div className="section" id="prod-serv-section">
      <div className="prod-serv-section-container">
        <h1>Discover our Services</h1>
        {/* <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex illum
          non, eius quis eligendi repellendus nam obcaecati error sunt{" "}
        </p> */}
        <Grid container spacing={1} alignItems="stretch">
          <Grid className="service" item xs={4}>
            <Item>
              <img width="100px" alt="" src={`${PUBLIC_IMAGES}printer.svg`} />
              <h2>Digital Printing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                dolor, explicabo natus, distinctio corporis mollitia unde{" "}
              </p>
            </Item>
          </Grid>
          <Grid className="service" item xs={4}>
            <Item>
              <img width="100px" alt="" src={`${PUBLIC_IMAGES}offset.svg`} />
              <h2>Offset Printing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                dolor, explicabo natus, distinctio corporis mollitia unde Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                dolor, explicabo natus, distinctio corpo
              </p>
            </Item>
          </Grid>
          <Grid className="service" item xs={4}>
            <Item>
              <img
                width="100px"
                alt=""
                src={`${PUBLIC_IMAGES}custom_print.svg`}
              />
              <h2>Personalized Souvenirs</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                dolor, explicabo natus, distinctio corporis mollitia unde{" "}
              </p>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProductsAndServicesSection;
