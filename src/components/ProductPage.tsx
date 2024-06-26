import { useParams } from "react-router-dom";
import { categories as _products } from "@Const/categorylist";
import { Category, Variant } from "../models/Category";
import PageBanner from "./PageBanner";
import React, { useContext, useEffect, useState } from "react";
import "@Styles/ProductPage.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  FormLabel,
  Grid,
  Link,
  Popover,
  Rating,
  Slider,
  Stack,
  TextField,
} from "@mui/material";

import { PUBLIC_IMAGES_PRODUCT } from "../constants/constants";
import { Form, Formik } from "formik";

import { simpleDateFormat } from "../utils/dateUtil";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Textarea } from "@mui/joy";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs } from "../constants/faqs";
import { productReqValidation } from "../validation/validation";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

import ErrorText from "./ErrorText";
import AppContext from "../context/AppContext";
import { Quote } from "../services/api";
import { toastFailed, toastSuccess } from "../utils/toast";

const ProductPage2 = () => {
  const { productUrl } = useParams();
  const { setLoading, setShowMenuLinks } = useContext(AppContext);

  const [currentProduct, setCurrentProduct] = useState<Category>({
    id: "",
    name: "",
    image: "",
  });

  const [price, setPrice] = useState<number | undefined>(0);
  const [plusVal, setPlusVal] = useState("");

  const handleQtyChange = (event: Event, newValue: number | number[]) => {
    let filteredPriceMatrix;

    if (typeof newValue === "number") {
      if (currentProduct.priceMatrix)
        filteredPriceMatrix = currentProduct?.priceMatrix.filter(
          (item) => item.qty >= newValue
        )[0];

      setInitialValues({ ...initialValues, qty: newValue });
      setPrice(filteredPriceMatrix?.price);

      if (newValue === max) setPlusVal("+");
      else setPlusVal("");
    }
  };

  const priceSliderValues = (): any => {
    let maxQty;

    if (currentProduct.priceMatrix)
      maxQty =
        currentProduct?.priceMatrix[currentProduct?.priceMatrix?.length - 1]
          .qty;

    return {
      min: currentProduct.minOrder,
      step: 1,
      max: maxQty,
    };
  };

  const [initialValues, setInitialValues] = useState({
    productName: currentProduct.name,
    qty: 1,
    customerName: "",
    fbName: "",
    contactNumber: "",
    emailAddress: "",
    dueDate: simpleDateFormat(dayjs()),
    description: "",
    attachment: "",
  });

  useEffect(() => {
    setShowMenuLinks(false);

    const selectedProduct = _products.filter((item) => {
      return item.url?.substring(1) === productUrl;
    })[0];

    if (selectedProduct) {
      setCurrentProduct(selectedProduct);
      setInitialValues({ ...initialValues, productName: selectedProduct.name });
      setVariants(selectedProduct?.variants);

      if (selectedProduct.variants)
        setSelectedVariant({
          image: selectedProduct.variants[0].image,
          type: selectedProduct.variants[0].type,
        });

      if (selectedProduct.priceMatrix)
        setPrice(selectedProduct.priceMatrix[0].price);
    } else console.log("no selected"); //TODO:forward to not found page
  }, [productUrl]);

  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>({
    image: "",
    type: "",
  });
  const [variants, setVariants] = useState<Variant[] | undefined>([]);
  const [fadeIn, setFadeIn] = useState(false);

  const { min, step, max } = priceSliderValues();

  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const handlePopOverHover = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopOverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popOverId = open ? "simple-popover" : undefined;

  return (
    <div className="product-page">
      <PageBanner
        title="Shop"
        breadCrumbList={[
          { title: "Home", url: "/" },
          { title: "Product", url: "/products-services" },
          { title: currentProduct.name, url: `/product${currentProduct.url}` },
        ]}
      />
      <Grid className="product-container" container padding={3}>
        <Grid className="product-container-image" item xs={12} md={6} lg={6}>
          <Grid className="image-viewer" container spacing={1}>
            <Grid
              className={`image-viewer-current ${fadeIn ? "fadeIn" : ""}`}
              item
              xs={12}
            >
              {currentProduct?.image && (
                <img
                  src={`${PUBLIC_IMAGES_PRODUCT}/${selectedVariant?.image}`}
                  alt={selectedVariant?.type}
                />
              )}
            </Grid>
            {variants?.map((img) => {
              return (
                <Grid item xs={3}>
                  <div
                    key={img.type}
                    className={`image-viewer-item-container ${
                      img.image === selectedVariant?.image ? "selected" : ""
                    }`}
                  >
                    {currentProduct?.image && (
                      <img
                        className="image-viewer-item  "
                        src={`${PUBLIC_IMAGES_PRODUCT}/${img.image}`}
                        alt={img.type}
                        onClick={(e) => {
                          setSelectedVariant(img);
                          setFadeIn(true);

                          setTimeout(() => setFadeIn(false), 900);
                        }}
                      />
                    )}
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid className="product-container-form" item xs={12} md={6} lg={6}>
          <Formik
            initialValues={initialValues}
            validationSchema={productReqValidation}
            enableReinitialize
            onSubmit={async (data, actions) => {
              setLoading(true);

              await Quote.create({
                contactNo: data.contactNumber,
                customerName: data.customerName,
                description: data.description,
                dueDate: data.dueDate,
                emailAddress: data.emailAddress,
                attachment: data.attachment,
              })
                .then((response) => {
                  console.log(response);

                  toastSuccess("Successfully submitted!");
                })
                .catch((err) => {
                  toastFailed("Failed Submission!");
                  console.log(err);
                })
                .finally(() => {
                  setLoading(false);
                  actions.resetForm();
                });
            }}
          >
            {({ values, touched, errors, setFieldValue, handleChange }) => (
              <Form>
                <h1 style={{ margin: 0 }}>{currentProduct.name}</h1>
                <Stack direction={"row"} alignItems={"center"}>
                  <Rating
                    name="read-only"
                    readOnly
                    value={5}
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "#FF0000",
                      },
                    }}
                  />
                  <p className="customer-review">
                    <Link href="#customer-reviews">(1 customer review)</Link>
                  </p>
                </Stack>
                <p className="description">{currentProduct.description}</p>
                <p className="minOrder">
                  <b>Minimum Order</b>: {currentProduct.minOrder}
                </p>
                {currentProduct.priceSizeRef && (
                  <p>
                    <b>Price Ref:</b> {currentProduct.priceSizeRef}
                  </p>
                )}
                <p className="variants">
                  <b>Variants</b>:
                </p>
                <Stack direction="row" spacing={1}>
                  {currentProduct.variants?.map((variant) => {
                    return (
                      <Button
                        key={variant.type}
                        type="button"
                        color="warning"
                        variant={`${
                          selectedVariant?.type === variant.type
                            ? "contained"
                            : "outlined"
                        }`}
                        onClick={(e) => {
                          setSelectedVariant(variant);
                          setFadeIn(true);

                          setTimeout(() => setFadeIn(false), 900);
                        }}
                      >
                        {variant.type}
                      </Button>
                    );
                  })}
                </Stack>

                <Divider variant="fullWidth" sx={{ margin: "1rem 0" }} />
                <Box sx={{ width: 250 }}>
                  <div className="price-qty-container">
                    <p>
                      <b>Quantity:</b> {values.qty}
                      {plusVal}
                    </p>
                    <p>
                      Php {price}/pc
                      <InfoRoundedIcon onMouseEnter={handlePopOverHover} />
                    </p>
                  </div>
                  <Popover
                    id={popOverId}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopOverClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    Price based on reference size
                  </Popover>

                  <Slider
                    id="qty"
                    name="qty"
                    value={values.qty}
                    min={min}
                    step={step}
                    max={max}
                    // scale={calculateValue}
                    // getAriaValueText={valueLabelFormat}
                    // valueLabelFormat={valueLabelFormat}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                    color={"error"}
                    onChange={handleQtyChange}
                  />
                </Box>

                <Grid container rowGap={1} spacing={2}>
                  <Divider sx={{ marginBottom: "1rem" }} />
                  <Grid item xs={12} md={6} lg={6}>
                    <TextField
                      id="customerName"
                      name="customerName"
                      type="text"
                      value={values.customerName}
                      onChange={handleChange}
                      label="Your Name (FB Name)"
                      placeholder="ex. Juan Dela Cruz"
                      fullWidth
                    />

                    {!touched.customerName && (
                      <ErrorText text={errors.customerName} />
                    )}
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <TextField
                      id="contactNumber"
                      name="contactNumber"
                      type="text"
                      value={values.contactNumber}
                      onChange={handleChange}
                      label="Contact Number"
                      placeholder="ex. 09161234567"
                      fullWidth
                    />
                    {!touched.contactNumber && (
                      <ErrorText text={errors.contactNumber} />
                    )}
                  </Grid>

                  <Grid item xs={12} md={6} lg={6}>
                    <TextField
                      id="emailAddress"
                      name="emailAddress"
                      type="text"
                      value={values.emailAddress}
                      onChange={handleChange}
                      label="Email Address"
                      placeholder="ex. youremail@gmail.com"
                      fullWidth
                    />
                    {!touched.emailAddress && (
                      <ErrorText text={errors.emailAddress} />
                    )}
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Button
                      color="warning"
                      variant="contained"
                      component="label"
                    >
                      Upload File
                      <input
                        type="file"
                        hidden
                        name="attachment"
                        onChange={(event) => {
                          setFieldValue(
                            "attachment",
                            event.currentTarget.files![0].name
                          );
                        }}
                      />
                    </Button>
                    <br />
                    <span>
                      {" "}
                      <FormLabel>
                        {values.attachment ||
                          "(attach file maximum of 5MB only) "}
                      </FormLabel>
                    </span>
                  </Grid>
                  <Grid item xs={12}>
                    <Textarea
                      id="description"
                      name="description"
                      minRows={3}
                      size="md"
                      variant="outlined"
                      placeholder="Enter desired size (ex. 5x11 in) and additional requests"
                      value={values.description}
                      onChange={handleChange}
                    />
                    {!touched.description && (
                      <ErrorText text={errors.description} />
                    )}
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Due Date"
                        value={dayjs(values.dueDate)}
                        onChange={(val: any) => {
                          setFieldValue("dueDate", simpleDateFormat(val));
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <Button color="success" variant="contained" type="submit">
                      Request Quotation
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
      <Grid className="other-info-container" spacing={1} container padding={3}>
        <Grid item xs={6}>
          <Box className="box">
            <h1>FAQs</h1>
            {faqs?.map((f, idx) => {
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    id={`panel${idx}-header`}
                  >
                    {f.summary}
                  </AccordionSummary>
                  <AccordionDetails>{f.details}</AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            className="box"
            sx={{
              width: "90%",
              height: "100%",
              padding: 2,
              display: "block",
              borderRadius: 1,
              backgroundColor: "#f4f4f4",
            }}
          >
            <h1>How it was made</h1>
            <img style={{ width: "100%" }} alt="" src="/images/how_1.jpg"></img>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              asperiores, quod quia commodi modi odit sint aspernatur possimus?
              Nobis vero impedit harum rem deserunt veritatis voluptatibus
              mollitia nesciunt incidunt eum.
            </p>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage2;
