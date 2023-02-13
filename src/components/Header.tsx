import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

//this is Navbar component, with toggle dark mode button

export default function Header({ checked, handleChange }: any) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => {
              navigate(`/`);
            }}
          >
            <i>Movies 3PC</i>
          </Typography>
          Dark Mode
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            color="default"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
