import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import CustomMobileStepper from "./MobileStepper";

const HackathonCard = ({project}) => {
  return (
    <Card sx={{ borderRadius:"12px", padding: '15px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)' }}>
      <CardHeader
        title={project.title}
        subheader={project.type}
      />
      <CustomMobileStepper project={project} />
      <CardContent style={{ minHeight: "100px"}}>
        <Typography variant="body2">
          {project.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <a target="blank" href={project.url}>
          <Button size="small">Details</Button>
        </a>
    </CardActions>
    </Card>
  );
};

export default HackathonCard;
