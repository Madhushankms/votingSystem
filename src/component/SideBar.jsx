import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
const drawerWidth = 240;
export default function SideBar() {
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
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                  >
                    <ListItemIcon>
                      <PersonAddAlt1Icon />
                    </ListItemIcon>
                    New Student
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                  >
                    <ListItemIcon>
                      <AddCircleIcon />
                    </ListItemIcon>
                    New Match
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
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
                  >
                    <ListItemIcon>
                      <PersonAddAlt1Icon />
                    </ListItemIcon>
                    Student List
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                  >
                    <ListItemIcon>
                      <AddCircleIcon />
                    </ListItemIcon>
                    Match
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ py: 1.5, ":hover": { backgroundColor: "#78716c" } }}
                  >
                    <ListItemIcon>
                      <AdminPanelSettingsIcon />
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
