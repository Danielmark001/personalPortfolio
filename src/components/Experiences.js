import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Grid, StepButton, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import { ThemeContext } from "@emotion/react";
import experiencesObject from "../assets/objects/experiences";

const Experiences = () => {
  const theme = useContext(ThemeContext);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experiencesObject);
  }, [experiences]);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    if (activeStep == step) {
      setActiveStep(-1);
    } else {
      setActiveStep(step);
    }
  };

  return (
    <Box>
      
      <Container>
      <Typography sx={{ paddingBottom: '10px'}} textAlign="left" variant="h6">
        Experiences
      </Typography>
      <Box sx={{ marginTop: '1em', marginBottom: '2em'}}>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {experiences.map((jobObject, index) => (
            <Step key={index}>
              <StepButton
                sx={{
                  fontSize: "24px", // Adjust the font size as needed
                  padding: "10px 20px", // Adjust the padding as needed
                  "& .MuiStepLabel-label": {
                    fontSize: "1em", // Adjust the font size of the text as needed
                  },
                  "& .MuiSvgIcon-root": {
                    width: "1.5em",
                    height: "1.5em", // Adjust the font size of the text as needed
                  },
                }}
                color="inherit"
                onClick={handleStep(index)}
              >
                {jobObject.title}
              </StepButton>
              <StepContent>
                <ExperienceCard jobObject={jobObject} />
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === experiences.length - 1 ? "Finish" : "Next"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
        
      </Container>
    </Box>
  );
};

export default Experiences;
