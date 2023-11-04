import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email"),
  name: Yup.string().required("Please enter your name"),
  password: Yup.string().min(2).required("Please enter your password"),
  termsOfService: Yup.boolean()
    .required("You must accept the Terms and Conditions to proceed")
    .oneOf([true], "You must accept the Terms and Conditions to proceed"),
});
