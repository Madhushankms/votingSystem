import React from "react";
import Box from "@mui/material/Box";
import BMI from "../Img/vote1.jpg";
//import BMI from "../Img/login.png";
import BMI2 from "../Img/vote3.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NoEncryptionGmailerrorredIcon from "@mui/icons-material/NoEncryptionGmailerrorred";

import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${BMI2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            opacity: 0.09,
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "70%",
            display: "flex",
            boxShadow: 15,
          }}
        >
          <Box
            sx={{
              width: "60%",
              height: "100%",

              backgroundImage: `url(${BMI})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              minWidth: "280px",
            }}
          ></Box>
          <Box
            sx={{
              width: "40%",
              height: "100%",
              backgroundColor: "#f4f4f5",
              textAlign: "center",
              minWidth: "280px",
            }}
          >
            <NoEncryptionGmailerrorredIcon fontSize="large" sx={{ mt: 3 }} />
            <Typography variant="h4" gutterBottom>
              Sign Up !
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
              Enter your credentials to access your account.
            </Typography>
            <Box sx={{ mx: 6 }}>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  sx={{ mt: 3 }}
                  id="email"
                  size="small"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  fullWidth
                  sx={{ my: 2 }}
                  id="password"
                  size="small"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{ mt: 1 }}
                >
                  Submit
                </Button>
                <Typography variant="subtitle2" gutterBottom sx={{ my: 2 }}>
                  Not registered yet? <a href="##">Create an Account</a>
                </Typography>
              </form>
            </Box>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ my: 2, color: "#a3a3a3" }}
            >
              &copy; Copyright 2024 Abilipitiya President Collage
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
