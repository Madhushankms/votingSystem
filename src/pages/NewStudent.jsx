import React from "react";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import BImage from "../Img/cc.jpg";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

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
            position: "relative", // Ensure pseudo-element is positioned correctly
            flexGrow: 1,
            p: 5,
            pl: 8,
            backgroundColor: "#e7e5e4",
            height: "100vh",
            width: "100%",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${BImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.09,
              zIndex: 1,
            },
          }}
        >
          <Toolbar />
          <Box>
            <Typography variant="h5" gutterBottom>
              <ClearAllIcon sx={{ mr: 1 }} />
              Student Registration Form
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <form onSubmit={formik.handleSubmit}>
              <Typography
                variant="subtitle2"
                gutterBottom
                mt={4}
                sx={{ display: "block" }}
              >
                Personal Datails
              </Typography>
              <Divider sx={{ width: "20%", borderBottomWidth: 2 }} />
              <Grid container spacing={2} mt={1}>
                <Grid item sm={3}>
                  <TextField
                    fullWidth
                    required
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
                <Grid item sm={6}>
                  <TextField
                    fullWidth
                    id="add1"
                    name="add1"
                    label="Address"
                    size="small"
                    placeholder="123/B, Uswewa, Abilipitiya."
                    value={formik.values.add1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.add1 && Boolean(formik.errors.add1)}
                    helperText={formik.touched.add1 && formik.errors.add1}
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
              </Grid>
              <Grid container spacing={2} mt={0}>
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
                <Grid item sm={3}>
                  <TextField
                    fullWidth
                    id="whatap"
                    name="whatap"
                    label="Whatsapp number"
                    size="small"
                    value={formik.values.whatap}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.whatap && Boolean(formik.errors.whatap)
                    }
                    helperText={formik.touched.whatap && formik.errors.whatap}
                  />
                </Grid>
              </Grid>
              <Typography
                variant="subtitle2"
                gutterBottom
                mt={4}
                sx={{ display: "block" }}
              >
                Imergency Contact Details
              </Typography>
              <Divider sx={{ width: "20%", borderBottomWidth: 2 }} />
              <Grid container spacing={2} mt={1}>
                <Grid item sm={3}>
                  <TextField
                    fullWidth
                    id="fname"
                    name="fname"
                    label="Name"
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
                    label="Relationship"
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
                    id="fname"
                    name="fname"
                    label="Contact Number"
                    size="small"
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.fname && Boolean(formik.errors.fname)}
                    helperText={formik.touched.fname && formik.errors.fname}
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
