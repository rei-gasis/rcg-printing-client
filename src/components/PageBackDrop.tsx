import { Backdrop, CircularProgress } from "@mui/material";
import AppContext from "../context/AppContext";
import { useContext } from "react";

const PageBackDrop = () => {
  const { loading } = useContext(AppContext);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default PageBackDrop;
