import React from "react";
import "../styles.css";
import { Typography, Container, Grid } from "@material-ui/core";
export default function EducationFunc() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={4}>
          <Typography>
            <b>DePaul University</b> : Computer Science Master's Degree |
            Expected Graduation Year : 2023
          </Typography>
          <Typography>
            <b>Columbia College Chicago</b> : Cinema Arts and Science Bachelors
            Degree
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
