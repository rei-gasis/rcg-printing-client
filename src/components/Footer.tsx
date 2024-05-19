import "@Styles/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import tiktok_logo from "../../public/images/tiktok-circle.svg";
import { Divider, Link, Stack } from "@mui/material";
import TikTokIcon from "@Components/TiktokIcon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="branches">
          <div className="branch">
            <h4>Manila</h4>
            <p>1985 UCBR Bldg., C.M. Recto Ave., Sampaloc, Manila</p>
            <p>028-7350236 | 028-7335723</p>
          </div>
          <div className="branch">
            <h4>Caloocan</h4>
            <p>55 Sabalo St., Brgy 12, Caloocan</p>
            <p>09981234567</p>
          </div>
        </div>

        <div className="bottom-block">
          <Divider
            variant="fullWidth"
            sx={{ margin: "2rem 0", borderColor: "grey.800" }}
          />
          <Stack direction="row" className="social-links" spacing={1}>
            <h4>Follow us here</h4>
            <Link href="https://facebook.com">
              <FacebookIcon
                sx={{
                  fill: "white",
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
                <TikTokIcon color="white" />
              </div>
            </Link>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Footer;
