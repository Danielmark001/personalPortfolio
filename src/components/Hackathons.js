import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import HackathonCard from "./HackathonCard";
import projects from "../assets/objects/projects";

const Hackathons = () => {
  return (
    <>
      <Container>
        <Typography
          sx={{ paddingBottom: "10px" }}
          textAlign="left"
          variant="h6"
        >
          Hackathons & Projects
        </Typography>
        <Grid container spacing={4}>
            {projects.map((project, index) => {
              return (
            <Grid xs={12} md={6} item>
              <HackathonCard project={project} />
            </Grid>
              )
            })}
            
        </Grid>
        
      </Container>
    </>
  );
};

export default Hackathons;
