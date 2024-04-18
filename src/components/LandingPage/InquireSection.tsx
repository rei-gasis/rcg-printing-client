// import { products as _products } from "../constants/productlist";
import { useEffect, useState } from "react";
import "@Styles/ProductPage.scss";
import {
  Box,
  Button,
  Divider,
  FormLabel,
  Grid,
  Link,
  Rating,
  Slider,
  Stack,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";

import { simpleDateFormat } from "../../utils/dateUtil";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { Textarea } from "@mui/joy";
import { productReqValidation } from "../../validation/validation";
import ErrorText from "../ErrorText";
import Image from "@Components/library/Image";

const InquireSection = () => {
  const [initialValues, setInitialValues] = useState({
    customerName: "",
    contactNumber: "",
    emailAddress: "",
    dueDate: dayjs.Dayjs,
    description: "",
    attachment: "",
  });
  return (
    <div className="section" id="inquire-section">
      <Grid container spacing={3} className="inquire-section-container">
        <Grid item xs={5} className="image">
          <Image
            fileName="customer-quotation.jpg"
            style={{
              width: "100%",
              borderRadius: "20px",
              objectFit: "cover",
              height: "100%",
            }}
            className="main"
          />

          <Stack
            spacing={4}
            direction="row"
            alignItems="center"
            className="caption"
          >
            <Image className="message-icon" fileName="message-icon.svg" />
            <Stack direction="column">
              <h4>Contact Our Sales</h4>
              <p>
                <b>we'll connect to you shortly</b>
              </p>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={7} className="form">
          <h1 className="header-bg">INQUIRY</h1>
          <h1>Contact Us for any printing services you need!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
            voluptatum. Obcaecati ipsam
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={productReqValidation}
            enableReinitialize
            onSubmit={async (data) => {
              alert(data);
            }}
          >
            {({ values, touched, errors, setFieldValue, handleChange }) => (
              <Form>
                <Grid container rowGap={1} spacing={2}>
                  <Divider sx={{ marginBottom: "1rem" }} />
                  <Grid item xs={6}>
                    <TextField
                      id="customerName"
                      name="customerName"
                      type="text"
                      value={values.customerName}
                      onChange={handleChange}
                      label="Your Name (FB Name)"
                      placeholder="ex. Juan Dela Cruz"
                      fullWidth
                      variant="filled"
                      sx={{
                        width: "100%",
                        "& .MuiFilledInput-root, .MuiFilledInput-root:focus, .MuiFilledInput-root:not(:focus), .MuiFilledInput-root:hover":
                          {
                            backgroundColor: "white",
                          },
                      }}
                    />

                    {!touched.customerName && (
                      <ErrorText text={errors.customerName} color="white" />
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="contactNumber"
                      name="contactNumber"
                      type="text"
                      value={values.contactNumber}
                      onChange={handleChange}
                      label="Contact Number"
                      placeholder="ex. 09161234567"
                      variant="filled"
                      fullWidth
                      sx={{
                        width: "100%",
                        "& .MuiFilledInput-root, .MuiFilledInput-root:focus, .MuiFilledInput-root:not(:focus), .MuiFilledInput-root:hover":
                          {
                            backgroundColor: "white",
                          },
                      }}
                    />
                    {!touched.contactNumber && (
                      <ErrorText text={errors.contactNumber} color="white" />
                    )}
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      id="emailAddress"
                      name="emailAddress"
                      type="text"
                      value={values.emailAddress}
                      onChange={handleChange}
                      label="Email Address"
                      placeholder="ex. youremail@gmail.com"
                      fullWidth
                      variant="filled"
                      sx={{
                        width: "100%",
                        "& .MuiFilledInput-root, .MuiFilledInput-root:focus, .MuiFilledInput-root:not(:focus), .MuiFilledInput-root:hover":
                          {
                            backgroundColor: "white",
                          },
                      }}
                    />
                    {!touched.emailAddress && (
                      <ErrorText text={errors.emailAddress} color="white" />
                    )}
                  </Grid>
                  <Grid item xs={6}>
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
                      placeholder="Describe your request/customization"
                      value={values.description}
                      onChange={handleChange}
                      // sx={{ //TODO: apply font placeholder textarea
                      //   "::placeholder": {
                      //     fontFamily: "Lato",
                      //   },
                      // }}
                    />
                    {!touched.description && (
                      <ErrorText text={errors.description} color="white" />
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Due Date"
                        value={dayjs(values.dueDate)}
                        onChange={(val: any) => {
                          setFieldValue("dueDate", simpleDateFormat(val));
                        }}
                        slotProps={{
                          textField: {
                            sx: {
                              color: "#ad1457",
                              borderRadius: "2px",
                              borderWidth: "1px",
                              borderColor: "#e91e63",
                              border: "1px solid",
                              backgroundColor: "#FFFFFF",
                            },
                          },
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

                {/* <pre>{JSON.stringify(errors, null, 1)}</pre>
                <pre>{JSON.stringify(values, null, 1)}</pre> */}
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
};

export default InquireSection;
