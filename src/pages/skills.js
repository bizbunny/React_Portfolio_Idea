import React from "react";
import "../styles.css";
import { Typography, Container, Grid } from "@material-ui/core";
export default function SkillsFunc() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={4}>
          <Typography variant="h7" component="h4">
            Art Software
          </Typography>
          <Typography>Adobe Photoshop</Typography>
          <Typography>Adobe Illustrator</Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h7" component="h4">
            Programming / Markup
          </Typography>
          <Typography>C#</Typography>
          <Typography>Java</Typography>
          <Typography>Python</Typography>
          <Typography>HTML</Typography>
          <Typography>CSS</Typography>
          <Typography>React</Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h7" component="h4">
            Languages
          </Typography>
          <Typography>French</Typography>
          <Typography>English</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
