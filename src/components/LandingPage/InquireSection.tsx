// import { products as _products } from "../constants/productlist";
import { useContext, useEffect, useState } from "react";
import "@Styles/ProductPage.scss";
import {
  Button,
  Divider,
  FormLabel,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";

import { simpleDateFormat } from "../../utils/dateUtil";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Textarea } from "@mui/joy";
import { productReqValidation } from "../../validation/validation";
import ErrorText from "../ErrorText";
import Image from "@Components/library/Image";
import { Quote } from "../../services/api";
import { Bounce, toast } from "react-toastify";
import AppContext from "../../context/AppContext";
import { toastSuccess, toastFailed } from "../../utils/toast";

const InquireSection = (props: any) => {
  const { setLoading } = useContext(AppContext);
  const [initialValues, setInitialValues] = useState({
    // customerName: "Winson",
    // contactNumber: "09665828870",
    // emailAddress: "rei.gasis@gmail.com",
    // dueDate: simpleDateFormat(dayjs()),
    // description: "desc",
    // attachment: "",

    customerName: "",
    contactNumber: "",
    emailAddress: "",
    dueDate: simpleDateFormat(dayjs()),
    description: "",
    attachment: "",
  });
  return (
    <div className="section" id="inquire-section">
      <Grid container spacing={3} className="inquire-section-container">
        <Grid item lg={5} md={6} xs={12} sm={6} className="image">
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
        <Grid item lg={7} md={6} xs={12} sm={6} className="form">
          <h1 className="header-bg">INQUIRY</h1>
          <h1>Contact Us for any printing services you need!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
            voluptatum. Obcaecati ipsam
            {/* {ctx.toastString} */}
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={productReqValidation}
            enableReinitialize
            onSubmit={async (data, actions) => {
              console.log(data);

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

                    {(!touched.customerName || errors.customerName) && (
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
                    {(!touched.contactNumber || errors.contactNumber) && (
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
                    {(!touched.emailAddress || errors.emailAddress) && (
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
                        name="attachment"
                        hidden
                        id="attachment"
                        onChange={(event) => {
                          console.log(event.currentTarget.files![0]);

                          setFieldValue(
                            "attachment",
                            event.currentTarget.files![0]
                          );
                        }}
                      />
                    </Button>
                    <br />
                    <span>
                      <p>(attach file maximum of 5MB only)</p>
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
                      // sx={{ //TODO: apply font placeholder textarea
                      //   "::placeholder": {
                      //     fontFamily: "Lato",
                      //   },
                      // }}
                    />

                    {(!touched.description || errors.description) && (
                      <ErrorText text={errors.description} color="white" />
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        className="inquiry-datepicker"
                        label="Due Date"
                        value={dayjs(values.dueDate)}
                        onChange={(val: any) => {
                          setFieldValue("dueDate", simpleDateFormat(val));
                        }}
                        slotProps={{
                          layout: {
                            sx: {
                              backgroundColor: "black",
                            },
                          },
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
