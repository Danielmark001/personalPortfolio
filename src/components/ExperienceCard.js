import { Avatar, Card, Chip, Divider, Grid, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import bgm from "../assets/images/html.png";
import { ThemeContext } from '@emotion/react'

const ExperienceCard = (jobObject) => {
  const theme = useContext(ThemeContext)


  return (
    <Card sx={{ borderRadius:"12px", padding: '15px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)' }}>
      <Grid sx={{ marginBottom: '1.0rem'}} container flexDirection="row" alignItems='center'>
        <Grid item xs={6}>
          <Typography fontWeight="bold" variant="body1">{jobObject.jobObject.title}</Typography>
          <Typography variant="body2">{jobObject.jobObject.position}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography textAlign="right">{jobObject.jobObject.time}</Typography>
        </Grid>
      </Grid>
      <Stack direction="row" spacing={1}>
      
      { jobObject.jobObject.languages.map((lang) => {
        return (
            <Chip avatar={<Avatar src={bgm}  />} color="primary" label={lang} variant="outlined" />
        )
      })}   
         </Stack>
      <List>
      { jobObject.jobObject.desc.map((des) => {
        return (
          <>
          <ListItem>
              <ListItemText>
                {des}
              </ListItemText>
            </ListItem>
            <Divider />
          </>
        )
      })}
      </List>
      
    </Card>
  );
};

export default ExperienceCard;
