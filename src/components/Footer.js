import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 2,
        marginTop: "50px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center" spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Connect With Me
            </Typography>
            <Link
              href="https://www.linkedin.com/in/vanessa-mae-82073922a/"
              color="inherit"
            >
              <LinkedIn />
            </Link>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Brought to you by "}
            <Link color="inherit" href="https://your-website.com/">
              Daniel Mark
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
