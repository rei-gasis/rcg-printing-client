import { Breadcrumbs, Link, Typography } from "@mui/material";
import "@Styles/PageBanner.scss";
import Navbar from "./Navbar";

type BreadCrumbType = {
  title: string;
  url: string;
};

type Props = {
  title: string;
  breadCrumbList: BreadCrumbType[];
};

const PageBanner = ({ breadCrumbList, title }: Props) => {
  return (
    <div className="banner">
      <div className="banner-container">
        <h1 className="banner-container-title">{title}</h1>
        <Breadcrumbs>
          {breadCrumbList?.map((bc, idx) => {
            const last: boolean = idx === breadCrumbList.length - 1;
            const prodName: string =
              breadCrumbList[breadCrumbList.length - 1].title;
            return last ? (
              <Typography key={bc.url}>{prodName}</Typography>
            ) : (
              <Link key={bc.url} underline="none" color="inherit" href={bc.url}>
                {bc.title}
              </Link>
            );
          })}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default PageBanner;
