import { Link } from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import site_logo from "@PublicImages/rcg-logo.svg";
import "@Styles/Navbar.scss";

const Navbar = () => {
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
          Discover{" "}
          <Link href="#">
            <u>Quality and Affordability.</u>
          </Link>
        </div>
        <div className="blk-3">
          <span>Discover Quality Product and Services.</span>
        </div>
      </div>
      <nav>
        <div className="nav-brand">
          <Link href="/">
            <img width="50px" height="50px" src={site_logo} />{" "}
            <span>RCG Printing and Engraving Services</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="products">Products and Services</Link>
          <Link href="#our-company">Our Company</Link>
          <Link href="#inquire-section">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
