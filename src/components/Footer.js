import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Box, Grid } from "@material-ui/core";

//import Deviantart from "../../static/images/deviantartUPDATED.png";
import Github from "../../static/images/githubUPDATED.png";
import Instagram from "../../static/images/instagramUPDATED.png";
import Linkedin from "../../static/images/linkedinUPDATED.png";
import Twitter from "../../static/images/twitterUPDATED.png";

import "../styles.css";
export default function Footer() {
  return (
    <Container maxWidth="lg">
      <Grid container alignItems="center" className="social-container">
        <Grid item lg={4}>
          <Typography>Social</Typography>
        </Grid>
        <Grid item lg={8}>
          <ul className="social-media">
            <li className="social-media">
              <a
                className="link"
                href="https://github.com/bizbunny"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} className="social-size" alt="Github icon" />
              </a>
            </li>
            <li className="social-media">
              <a
                className="link"
                href="https://www.instagram.com/anh_bizbunny/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Instagram}
                  className="social-size"
                  alt="Instagram icon"
                />
              </a>
            </li>
            <li className="social-media">
              <a
                className="link"
                href="linkedin.com/in/vi-anh-nguyen-7a5698103"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Linkedin}
                  className="social-size"
                  alt="Linkedin icon"
                />
              </a>
            </li>
            <li className="social-media">
              <a
                className="link"
                href="https://twitter.com/anh_bizbunny"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Twitter} className="social-size" alt="Twitter icon" />
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
}
