import React, { useState, createContext, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import AppContext, { AppProvider } from "../context/AppContext";
import PageBackDrop from "./PageBackDrop";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  // const [openBackDrop, setOpenBackDrop] = useState(false);

  // const handleCloseBackDrop = () => {
  //   setOpenBackDrop(false);
  // };
  // const handleOpenBackDrop = () => {
  //   setOpenBackDrop(true);
  // };

  return (
    <AppProvider>
      <Navbar />
      {children}
      <Footer />
      <ToastContainer />
      <PageBackDrop />
    </AppProvider>
  );
};

export default Wrapper;
