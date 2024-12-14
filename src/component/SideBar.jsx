import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ViewListIcon from "@mui/icons-material/ViewList";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
const drawerWidth = 240;
export default function SideBar() {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            position: "relative",
            pt: 2,
            boxShadow: 2,
            height: "100vh",
            position: "fixed",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                    onClick={() => navigate("/dashboard")}
                  >
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    DashBoard
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/newparty")}
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                  >
                    <ListItemIcon>
                      <AddCircleIcon />
                    </ListItemIcon>
                    New Party
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/newcandidate")}
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                  >
                    <ListItemIcon>
                      <PersonAddAlt1Icon />
                    </ListItemIcon>
                    New Candidate
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/newvoter")}
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                  >
                    <ListItemIcon>
                      <AutoAwesomeIcon />
                    </ListItemIcon>
                    New Voter
                    <ListItemText />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                    onClick={() => navigate("/adminreg")}
                  >
                    <ListItemIcon>
                      <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    New Admin
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                    onClick={() => navigate("/partylist")}
                  >
                    <ListItemIcon>
                      <ViewListIcon />
                    </ListItemIcon>
                    Party List
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                    onClick={() => navigate("/candidatelist")}
                  >
                    <ListItemIcon>
                      <FormatListNumberedIcon />
                    </ListItemIcon>
                    Candidate List
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                    onClick={() => navigate("/voterlist")}
                  >
                    <ListItemIcon>
                      <ChecklistRtlIcon />
                    </ListItemIcon>
                    Voter List
                    <ListItemText />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                    onClick={() => navigate("/adminlist")}
                  >
                    <ListItemIcon>
                      <SupervisorAccountIcon />
                    </ListItemIcon>
                    Administrators
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Box>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                    onClick={() => navigate("/profile")}
                  >
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    Profile
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                    onClick={() => navigate("/")}
                  >
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    LogOut
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
