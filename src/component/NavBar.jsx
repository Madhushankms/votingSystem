import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../Img/logo.png";
import profile from "../Img/sachini.jpg";
import Avatar from "@mui/material/Avatar";

function NavBar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#a1a1aa",
          boxShadow: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", mx: 3 }}>
          <img src={logo} width={140}></img>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ color: "Black" }}>
              Miss : Sachini Liyanage
            </Typography>
            <Avatar
              alt="Cindy Baker"
              sx={{ width: 43, height: 43, mx: 3 }}
              src={profile}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
