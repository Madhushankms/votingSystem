import React from "react";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import ClearAllIcon from "@mui/icons-material/ClearAll";
//import BImage from "../Img/3979.jpg";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";

import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

function NewStudent() {
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
      <NavBar />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "#e7e5e4",
          }}
        >
          <Toolbar />
          <Box>
            <Typography variant="h5" gutterBottom>
              <ClearAllIcon sx={{ mr: 1 }} />
              Student Registration
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2} mt={2}>
                <Grid item sm={3}>
                  <TextField
                    fullWidth
                    id="fname"
                    name="fname"
                    label="First Name"
                    size="small"
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.fname && Boolean(formik.errors.fname)}
                    helperText={formik.touched.fname && formik.errors.fname}
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    fullWidth
                    id="lname"
                    name="lname"
                    label="Last Name"
                    size="small"
                    value={formik.values.lname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lname && Boolean(formik.errors.lname)}
                    helperText={formik.touched.lname && formik.errors.lname}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} mt={0}>
                <Grid item sm={3}>
                  <TextField
                    fullWidth
                    id="add1"
                    name="add1"
                    label="Address"
                    size="small"
                    placeholder="first line"
                    value={formik.values.add1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.add1 && Boolean(formik.errors.add1)}
                    helperText={formik.touched.add1 && formik.errors.add1}
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    fullWidth
                    id="add2"
                    name="add2"
                    placeholder="second line"
                    label="Address"
                    size="small"
                    value={formik.values.add2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.add2 && Boolean(formik.errors.add2)}
                    helperText={formik.touched.add2 && formik.errors.add2}
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    fullWidth
                    id="add3"
                    name="add3"
                    placeholder="Third line"
                    label="Address"
                    size="small"
                    value={formik.values.add3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.add3 && Boolean(formik.errors.add3)}
                    helperText={formik.touched.add3 && formik.errors.add3}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={0}>
                <Grid item sm={3}>
                  <TextField
                    fullWidth
                    id="bod"
                    name="bod"
                    label="BirthDay"
                    size="small"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    fullWidth
                    id="contact"
                    name="contact"
                    label="Contact number"
                    size="small"
                    value={formik.values.contact}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.contact && Boolean(formik.errors.contact)
                    }
                    helperText={formik.touched.contact && formik.errors.contact}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} mt={0}>
                <Grid item size={4}>
                  <Button color="primary" variant="contained" type="submit">
                    Clear
                  </Button>
                </Grid>
                <Grid item size={4}>
                  <Button color="primary" variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default NewStudent;
