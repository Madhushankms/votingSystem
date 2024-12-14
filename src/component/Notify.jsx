import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

function Notify({ type, contend, onClose }) {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Collapse in={Text}>
          <Alert
            severity={type}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  onClose();
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {contend}
          </Alert>
        </Collapse>
      </Box>
    </div>
  );
}

export default Notify;
