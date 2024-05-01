import { Drawer, Link, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import site_logo from "@PublicImages/rcg-logo.svg";
import "@Styles/Navbar.scss";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQueryWrapper from "../hooks/useMediaQueryWrapper";

const Navbar = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  const handleToggleSidebarMenu = () => {
    setIsSideBarOpen(!isSidebarOpen);
  };

  // const isSmallMedia = useMediaQuery("(max-width:768px)");

  const { isTabletSize } = useMediaQueryWrapper();

  return (
    <header>
      <div className="top-block">
        <div className="top-block-contact">
          <a href="mailto: {CONTACT_INFO.emailAddress}">
            <MailOutlineOutlinedIcon />
            &nbsp; &nbsp;
            <span> rcgprinting@gmail.com</span>
          </a>
        </div>
        <div className="top-block-caption">
          {isTabletSize ? (
            <MenuIcon
              sx={{ "&:hover": "cursor:pointer" }}
              onClick={handleToggleSidebarMenu}
            />
          ) : (
            <span>
              Discover{" "}
              <Link href="#">
                <u>Quality and Affordability.</u>
              </Link>{" "}
            </span>
          )}
        </div>
      </div>
      <nav>
        <div className="nav-brand">
          <Link href="/">
            <img width="50px" height="50px" src={site_logo} />{" "}
            <span>RCG ENGRAVING SERVICES AND TRADING</span>
          </Link>
        </div>
        {!isTabletSize && (
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/#products">Products and Services</Link>
            <Link href="/#our-company">Our Company</Link>
            <Link href="/#inquire-section">Contact Us</Link>
          </div>
        )}
        {isTabletSize && (
          <SidebarMenu
            isOpen={isSidebarOpen}
            closeMenu={handleToggleSidebarMenu}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
