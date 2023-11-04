import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email"),
  password: Yup.string().min(2).required("Please enter your password"),
  rememberPassword: Yup.boolean(),
});
