import React from "react";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import BImage from "../Img/bbb.jpg";

function VoterList() {
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
              Registered Voters
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>.....</Box>
        </Box>
      </Box>
    </>
  );
}

export default VoterList;
