import { AppBar, Box, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const navButton = (text = "", link = "/") => (
  <Typography
    variant="h6"
    component={Link}
    to={link}
    sx={{
      flexGrow: 1,
      display: {
        sm: "block",
        textDecoration: "none",
        color: "black",
        flex: 1,
      },
    }}
  >
    {text}
  </Typography>
);

const Header = () => {
  return (
    <Box sx={{ display: "flex", color: "#fff" }}>
      <CssBaseline />
      <AppBar
        sx={{
          background: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: 'none'
        }}
        component="nav"
        position="static"
      >
        <Box sx={{ width:'100%', paddingRight: '20px'}}>
          <Grid container justifyContent="flex-end">
            <Grid item>{navButton("Blog", "/blogs")}</Grid>
          </Grid>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
