import { Button, Grid, Stack } from "@mui/material";
import Image from "./library/Image";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { CONTACT_INFO } from "../constants/constants";
import useMediaQueryWrapper from "../hooks/useMediaQueryWrapper";

const CompanySection = () => {
  const { isPhoneSize } = useMediaQueryWrapper();

  return (
    <div id="our-company" className="section">
      <div className="our-company-container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} lg={7} className="left-pane">
            <h1>Our Company</h1>
            <p>
              RCG is a family-owned printing shop that started as a single stall
              in the late 80’s. The owners, Rey and Winnie Gasis, were able to
              expand the products and services offered over the years. From
              nameplates to corporate giveaways, to different kinds of printing
              services and customized items, the business grew into what it is
              today.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus, eaque magni minima quia ipsum rem quas temporibus
              expedita ut a corrupti obcaecati explicabo cupiditate molestiae
              deleniti eligendi error debitis asperiores!
            </p>
            <Button variant="contained" type="button" color="success">
              Get in Touch{" "}
              <KeyboardArrowRightRoundedIcon sx={{ translateX: "20px" }} />
            </Button>
            <Stack
              spacing={5}
              direction={isPhoneSize ? "column" : "row"}
              alignItems={isPhoneSize ? "flex-start" : "center"}
              justifyContent="flex-start"
            >
              <Stack
                spacing={3}
                direction="row"
                alignItems="center"
                className="contact-info"
              >
                <ContactPhoneRoundedIcon />
                <Stack direction="column">
                  <p>Call Us Anytime</p>
                  <p>
                    <b>{CONTACT_INFO.phoneNumber}</b>
                  </p>
                </Stack>
              </Stack>
              <Stack
                spacing={3}
                direction="row"
                alignItems="center"
                className="contact-info"
              >
                <EmailRoundedIcon />
                <Stack direction="column">
                  <p>Email Us Anytime</p>
                  <p>
                    <b>{CONTACT_INFO.emailAddress}</b>
                  </p>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <div className="image-container">
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
                fileName="our_company.jpg"
              />
              <div className="years-of-service">
                <p>
                  30+ <br /> years
                </p>
                <p>
                  of Experience in
                  <br /> Printing Services
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CompanySection;
