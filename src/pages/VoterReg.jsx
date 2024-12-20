import React from "react";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import BImage from "../Img/vote2.jpg";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import ClearIcon from "@mui/icons-material/Clear";
import SaveIcon from "@mui/icons-material/Save";
function VoterReg() {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    fname: yup
      .string("Enter your first name")
      .required("First name is required"),
    lname: yup
      .string("Enter your first name")
      .required("First name is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    add: yup.string("Enter your address").required("Address is required"),
    bod: yup.string("Enter your birthdate").required("Birthdate is required"),
    contact: yup
      .string("Enter your contact number")
      .required("Contact number is required"),
    whatap: yup
      .string("Enter your WhatsApp number")
      .required("WhatsApp number is required"),
    ename: yup
      .string("Enter emergency contact name")
      .required("Emergency contact name is required"),
    relation: yup
      .string("Enter relationship")
      .required("Relationship is required"),
    enumber: yup
      .string("Enter emergency contact number")
      .required("Emergency contact number is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fname: "",
      lname: "",
      add: "",
      bod: "",
      contact: "",
      whatap: "",
      ename: "",
      relation: "",
      enumber: "",
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
            position: "relative",
            flexGrow: 1,
            p: 5,
            pl: 8,
            backgroundColor: "#e7e5e4",
            width: "100%",
            height: "100vh",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${BImage})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
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
              Voter Registration Form
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <form onSubmit={formik.handleSubmit}>
              <Box
                sx={{
                  height: "100%",
                }}
              >
                <Box name="main" sx={{ display: "flex" }}>
                  <Box name="left" sx={{ mr: 8 }}>
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
                      <Grid item sm={12}>
                        <TextField
                          fullWidth
                          id="fname"
                          sx={{ zIndex: 1 }}
                          name="fname"
                          label="Full Name"
                          size="small"
                          value={formik.values.fname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.fname && Boolean(formik.errors.fname)
                          }
                          helperText={
                            formik.touched.fname && formik.errors.fname
                          }
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <TextField
                          fullWidth
                          id="lname"
                          name="lname"
                          sx={{ zIndex: 1 }}
                          label="Name with Initials"
                          size="small"
                          value={formik.values.lname}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.lname && Boolean(formik.errors.lname)
                          }
                          helperText={
                            formik.touched.lname && formik.errors.lname
                          }
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} mt={0}>
                      <Grid item sm={5}>
                        <TextField
                          fullWidth
                          id="bod"
                          name="bod"
                          sx={{ zIndex: 1 }}
                          label="BirthDay"
                          size="small"
                          value={formik.values.bod}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.bod && Boolean(formik.errors.bod)
                          }
                          helperText={formik.touched.bod && formik.errors.bod}
                        />
                      </Grid>
                      <Grid item sm={5}>
                        <TextField
                          fullWidth
                          id="bod"
                          name="bod"
                          sx={{ zIndex: 1 }}
                          label="NIC"
                          size="small"
                          value={formik.values.bod}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.bod && Boolean(formik.errors.bod)
                          }
                          helperText={formik.touched.bod && formik.errors.bod}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={0}>
                      <Grid item sm={6}>
                        <TextField
                          fullWidth
                          id="email"
                          sx={{ zIndex: 1 }}
                          name="email"
                          label="District"
                          size="small"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.email && Boolean(formik.errors.email)
                          }
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",

                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        mt={4}
                        sx={{ display: "block" }}
                      >
                        Contact Details
                      </Typography>
                      <Divider sx={{ width: "20%", borderBottomWidth: 2 }} />
                      <Grid container spacing={2} mt={1}>
                        <Grid item sm={6}>
                          <TextField
                            fullWidth
                            id="ename"
                            name="ename"
                            sx={{ zIndex: 1 }}
                            label="Telephone number"
                            size="small"
                            value={formik.values.ename}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.ename &&
                              Boolean(formik.errors.ename)
                            }
                            helperText={
                              formik.touched.ename && formik.errors.ename
                            }
                          />
                        </Grid>
                        <Grid item sm={6}>
                          <TextField
                            fullWidth
                            id="relation"
                            name="relation"
                            label="Email"
                            size="small"
                            value={formik.values.relation}
                            onChange={formik.handleChange}
                            sx={{ zIndex: 1 }}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.relation &&
                              Boolean(formik.errors.relation)
                            }
                            helperText={
                              formik.touched.relation && formik.errors.relation
                            }
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2} mt={0}>
                        <Grid item sm={12}>
                          <TextField
                            fullWidth
                            id="enumber"
                            name="enumber"
                            sx={{ zIndex: 1 }}
                            label="Address"
                            size="small"
                            value={formik.values.enumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.enumber &&
                              Boolean(formik.errors.enumber)
                            }
                            helperText={
                              formik.touched.enumber && formik.errors.enumber
                            }
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: 5,
                    py: 8,
                  }}
                >
                  <Button
                    sx={{
                      px: 3,
                      backgroundColor: "#94a3b8",
                      color: "Black",
                      "&:hover": {
                        backgroundColor: "#f87171 ",
                        color: "white",
                      },
                      zIndex: 5,
                    }}
                    variant="contained"
                    type="button"
                    onClick={() => formik.resetForm()}
                    startIcon={<ClearIcon />}
                  >
                    Clear
                  </Button>

                  <Button
                    startIcon={<SaveIcon />}
                    sx={{
                      px: 3,
                      backgroundColor: "#166534",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#059669 ",
                        color: "black",
                      },
                      zIndex: 5,
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default VoterReg;
