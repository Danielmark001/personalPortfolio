import { ArrowRight } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import bgm from "../assets/images/me.png";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Title = () => {
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.up("md"))
    ? "3.5rem"
    : "1.2rem";
  const pdfPath = "/pdfs/vanessamaeresume.pdf"; // Adjust the path as per your directory structure
  const onDownload = () => {
    // Open the PDF file in a new window
    window.open(pdfPath, "_blank");
  };

  return (
    <Container>
      <Grid
        container
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid
          item
          lg={7}
          md={6}
          xs={7}
          justifyContent="space-around"
          flexDirection="column"
        >
          <Typography variant="h2">Daniel Mark</Typography>
          <Box sx={{ justifyContent: "center" }}>
            <TypeAnimation
              sequence={[
                "Hello World !", // Types 'One'
                2000, // Waits 1s
                "I am a developer", // Types 'One'
                2000, // Waits 1s
                "I love to code", // Deletes 'One' and types 'Two'
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: medium,
                display: "inline-block",
                fontFamily: "Consolas, sans-serif",
                textDecorationThickness: "2px",
              }}
            />
          </Box>

          <a href={pdfPath} target="_blank" style={{ textDecoration: "none" }}>
            <Button
              sx={{ marginTop: "30px", borderRadius: "20px" }}
              aria-label="resume"
              variant="contained"
              color="primary"
            >
              <Typography variant="h6">Resume</Typography>
              <ArrowRight />
            </Button>
          </a>
        </Grid>
        <Grid item lg={5} md={6} xs={5}>
          <Avatar
            sx={{ width: "100%", height: "100%", backgroundColor: "white" }}
          >
            <img
              src={bgm}
              alt="Avatar"
              loading="lazy"
              style={{ width: "100%", height: "100%" }}
            />
          </Avatar>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Title;
