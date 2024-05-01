import { useMediaQuery } from "@mui/material";

const PHONE_SIZE = 480;
const TABLET_SIZE = 758;
const LAPTOP_SIZE = 1024;
const DESKTOP_SIZE = 1200;

const useMediaQueryWrapper = () => {
  const isPhoneSize = useMediaQuery("(max-width:" + PHONE_SIZE + "px)");
  const isTabletSize = useMediaQuery("(max-width:" + TABLET_SIZE + "px)");
  const isLaptopSize = useMediaQuery("(max-width:" + LAPTOP_SIZE + "px)");
  const isDesktopSize = useMediaQuery("(max-width:" + DESKTOP_SIZE + "px)");
  return {
    isPhoneSize,
    isTabletSize,
    isLaptopSize,
    isDesktopSize,
  };
};

export default useMediaQueryWrapper;
