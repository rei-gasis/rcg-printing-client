import * as Yup from "yup";

const contactNumberRegex = /^(09|\+639)\d{9}$/;
const dueDateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
/YYYY-MM-DD/;
// /^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20)dd$/;

export const productReqValidation = Yup.object({
  // productName: Yup.string().required(),
  qty: Yup.number().required().moreThan(0),
  customerName: Yup.string().required("Required field"),
  contactNumber: Yup.string()
    .required("Required field")
    .matches(contactNumberRegex, "Should enter valid contact number"),
  dueDate: Yup.string().matches(dueDateRegex, "Invalid date format"),
  description: Yup.string()
    .required("Required field")
    .max(300, "Input 300 characters only."),
  // attachment: Yup.object().shape({
  //   attachment: Yup.mixed()
  //     .test("fileSize", "The file is too large", (value: any) => {
  //       return value && value[0] >= 2000000;
  //     })
  //     .test(
  //       "type",
  //       "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc",
  //       (value: any) => {
  //         return (
  //           value &&
  //           (value[0].type === "image/jpeg" ||
  //             value[0].type === "image/bmp" ||
  //             value[0].type === "image/png" ||
  //             value[0].type === "application/pdf" ||
  //             value[0].type === "application/msword")
  //         );
  //       }
  //     ),
  // }),
});
