import "./styles.css";
import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

import WorkHistory from "./pages/work-history";
import Skills from "./pages/skills";
import Education from "./pages/education";

import ArtCards from "./components/ArtCards";
import CodeCards from "./components/codeCards";
//import characterCards from "./components/characterCard";

import { Typography, Tabs, Tab, Container, Box, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

//photos***
import screenshot from "../static/images/screenshot.jpg";
import photo from "../static/images/Me-doodle.jpg";

//for art process grow transitions***
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    width: 380
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    margin: theme.spacing(2)
  },
  svg: {
    width: 100,
    height: 100
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
}));

//Tabs usage
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pl={3}>
          <div className="tab-div">{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function allyProps(index) {
  return {
    id: "full-width-tab-${index}",
    "aria-controls": "full-width-tabpanel-${index}"
  };
}

export default function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  {
    /*For process art usage*/
  }
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange2 = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <section className="header">
        <Container>
          <div>
            <Tabs
              id="myHeader"
              value={value}
              onChange={handleChange}
              variant="fullwidth"
              aria-label="full width tabs"
            >
              <Tab label={<Typography component="h3">Home</Typography>} />
              <Tab label={<Typography component="h3">About Me</Typography>} />
              <Tab label={<Typography component="h3">Code</Typography>} />
              <Tab label={<Typography component="h3">Art</Typography>} />
              <Tab label={<Typography component="h3">Resume</Typography>} />
            </Tabs>
          </div>
        </Container>
      </section>
      <section>
        <Container maxWidth="lg">
          {/*Home Tab---------------------------------------------- */}
          <TabPanel value={value} index={0}>
            <Grid container>
              <Grid item lg={12}>
                <h1>Portfolio</h1>
              </Grid>
            </Grid>
            {/*Art Section --------------------------------------*/}
            <Grid container>
              <Grid item lg={12}>
                <h2>Art</h2>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item lg={4} md={6} sm={8} xs={12}>
                <ArtCards
                  image="https://pbs.twimg.com/media/E4BAgjaVkAEg8fY?format=jpg&name=4096x4096"
                  title="Storm"
                  arttitle="Illustration"
                  description="Here you can find some of my art pieces."
                  link="https://twitter.com/anh_bizbunny/status/1405194025993490446"
                />
              </Grid>
              <Grid item lg={4} md={6} sm={8} xs={12}>
                <ArtCards
                  image="https://pbs.twimg.com/media/Ex8ITcdXEAUToz3?format=jpg&name=large"
                  title="Outfits"
                  arttitle="Character Art"
                  description="Here you can find some of my character art."
                  link="https://twitter.com/anh_bizbunny/status/1377829168503787522"
                />
              </Grid>
            </Grid>
            {/*END of Art Section --------------------------------------*/}
            {/*Games Section --------------------------------------*/}
            <Grid container>
              <Grid item lg={12}>
                <h2>Games</h2>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item lg={4} md={6} sm={8} xs={12}>
                <CodeCards
                  image="https://img.itch.zone/aW1hZ2UvNzI5NTQ5LzQwNTM4NjcuanBn/original/aT1VlY.jpg"
                  title="Renpy Game"
                  codetitle="Spider Witch"
                  description="My first time using Renpy and my first time making a full game at all."
                  link="https://anh-bizbunny.itch.io/spiderwitch"
                />
              </Grid>
              <Grid item lg={4} md={6} sm={8} xs={12}>
                <CodeCards
                  image="https://img.itch.zone/aW1hZ2UvNzMzNDk1LzQyMDg5ODcuanBn/original/0mUdvE.jpg"
                  title="Unity Mini Game"
                  codetitle="Endless Runner"
                  description="My first time using Unity. I wanted to start by learning to make something simple."
                  link="https://anh-bizbunny.itch.io/ghost-runner"
                />
              </Grid>
              <Grid item lg={4} md={6} sm={8} xs={12}>
                <CodeCards
                  image="https://img.itch.zone/aW1hZ2UvNzQ3NDQ5LzQyMDg5ODAuanBn/original/1W%2B2c%2B.jpg"
                  title="Unity App"
                  codetitle="Annoy the Duck"
                  description="Only my second time using Unity. I wanted to try something without using an online tutorial."
                  link="https://anh-bizbunny.itch.io/annoy-the-duck"
                />
              </Grid>
            </Grid>
            {/*END of Games Section --------------------------------------*/}
            {/*Code Section --------------------------------------*/}
            <Grid container>
              <Grid item lg={12}>
                <h2>Code</h2>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item lg={4} md={6} sm={8} xs={12}>
                <CodeCards
                  image="https://pbs.twimg.com/media/EB5kZQNWwAI0pYh?format=jpg&name=large"
                  title="art image grid"
                  codetitle="Responsive Image Grid"
                  description="My first attempt at making a responsive image grid in Codepen"
                  link="https://codepen.io/anh_bizbunny/pen/PoGELmb"
                />
              </Grid>
              <Grid item lg={4} md={6} sm={8} xs={12}>
                <CodeCards
                  image="https://pbs.twimg.com/media/Ex8KylgW8AIY_Eo?format=jpg&name=large"
                  title="Hero Image and Parallaxing"
                  codetitle="Hero Image and Parallax Scrolling"
                  description="My first use of Codepen."
                  link="https://codepen.io/anh_bizbunny/pen/gOONQbO"
                />
              </Grid>
              <Grid item lg={4} md={6} sm={8} xs={12}>
                <CodeCards
                  image={screenshot}
                  title="Parallaxing Text"
                  codetitle="Parallaxing Text"
                  description="My attempt at parallaxing text. I used other Codepens as reference."
                  link="https://codepen.io/anh_bizbunny/pen/WNGdZBj"
                />
              </Grid>
            </Grid>
          </TabPanel>
          {/*END of Code Section --------------------------------------*/}
          {/*About Me Tab---------------------------------------------- */}
          <TabPanel value={value} index={1}>
            <Grid item lg={12}>
              <h1>(Vee-Anne New-Yen)</h1>
              <img src={photo} className="img-size" alt="Me" />
              <h3>Artist and Programmer</h3>
              <p>
                My undergrad is in animation, and I am pursuing a Masters in
                Computer Science, the field I consider my true passion. Recently
                I've developed an interest in front-end development thanks to my
                most recent internship.
              </p>
            </Grid>
          </TabPanel>
          {/*END of About Me Section --------------------------------------*/}
          {/*Code Tab---------------------------------------------- */}
          <TabPanel value={value} index={2}>
            {/*Insert Code Stuff Here*/}
          </TabPanel>
          {/*END of Code Section --------------------------------------*/}
          {/*Art Tab---------------------------------------------- */}
          <TabPanel value={value} index={3}>
            {/*Insert Art Here*/}
            {/*-----Sophie*/}
            <Grid container>
              <Grid item lg={12}>
                <Grid container>
                  <img
                    src="https://pbs.twimg.com/media/Ex8ITcfXEAE5bL3?format=jpg&name=large"
                    className="img-size-art"
                    alt="A character I did for a portfolio class back in 2018. I named her Sophie. She's one of my favorites I've made in that class."
                  />
                </Grid>
                <div className={classes.root}>
                  <FormControlLabel
                    control={
                      <Switch checked={checked} onChange={handleChange2} />
                    }
                    label="Show Process"
                  />
                  <div className={classes.container}>
                    <Grow in={checked}>
                      <Container>
                        <Paper elevation={4} className={classes.paper}>
                          <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0db7cbf4-c9f3-417f-b837-fd7b97971037/delxvfl-d14f1cdd-d771-48b8-9d43-4e517ebcbef6.png/v1/fill/w_1024,h_576,q_80,strp/sophie_cyclops_sketch_by_phantomhive24_delxvfl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkYjdjYmY0LWM5ZjMtNDE3Zi1iODM3LWZkN2I5Nzk3MTAzN1wvZGVseHZmbC1kMTRmMWNkZC1kNzcxLTQ4YjgtOWQ0My00ZTUxN2ViY2JlZjYucG5nIiwiaGVpZ2h0IjoiPD01NzYiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8wZGI3Y2JmNC1jOWYzLTQxN2YtYjgzNy1mZDdiOTc5NzEwMzdcL3BoYW50b21oaXZlMjQtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.f9aIbXxemV8kCDOyyYhOAcynDaltDJrc-gK-fXo94vU"
                            className="img-size"
                            alt="sketches"
                          />
                        </Paper>
                        <Typography>sketches</Typography>
                      </Container>
                    </Grow>
                    {/* Conditionally applies the timeout prop to change the entry speed. */}
                    <Grow
                      in={checked}
                      style={{ transformOrigin: "0 0 0" }}
                      {...(checked ? { timeout: 1000 } : {})}
                    >
                      <Container>
                        <Paper elevation={4} className={classes.paper}>
                          <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0db7cbf4-c9f3-417f-b837-fd7b97971037/degzxhg-a9ed7bd1-9a7b-4ef7-a093-93b813f3645f.png/v1/fill/w_1024,h_576,q_80,strp/sophie_colors_by_phantomhive24_degzxhg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkYjdjYmY0LWM5ZjMtNDE3Zi1iODM3LWZkN2I5Nzk3MTAzN1wvZGVnenhoZy1hOWVkN2JkMS05YTdiLTRlZjctYTA5My05M2I4MTNmMzY0NWYucG5nIiwiaGVpZ2h0IjoiPD01NzYiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8wZGI3Y2JmNC1jOWYzLTQxN2YtYjgzNy1mZDdiOTc5NzEwMzdcL3BoYW50b21oaXZlMjQtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.iNS_mYjLObVPjXn81iPN0f7p4p_CLwgNZQ16FmTB-QE"
                            className="img-size"
                            alt="Experimenting with different color schemes"
                          />
                        </Paper>
                        <Typography>
                          Experimenting with different color schemes
                        </Typography>
                      </Container>
                    </Grow>
                    <Grow
                      in={checked}
                      style={{ transformOrigin: "0 0 0" }}
                      {...(checked ? { timeout: 2000 } : {})}
                    >
                      <Container>
                        <Paper elevation={4} className={classes.paper}>
                          <img
                            src="https://pbs.twimg.com/media/Ex8ITcdXEAUToz3?format=jpg&name=large"
                            className="img-size"
                            alt="Various potential outfits"
                          />
                        </Paper>
                        <Typography>Various potential outfits</Typography>
                      </Container>
                    </Grow>
                  </div>
                </div>
              </Grid>
            </Grid>
            {/*-----Sophie section END */}
          </TabPanel>
          {/*END of Art Section --------------------------------------*/}
          {/*Resume Tab---------------------------------------------- */}
          <TabPanel value={value} index={4}>
            {/*Insert Resume Here*/}
            <Grid item lg={12}>
              <h1>Work History</h1>
            </Grid>
            <Grid item lg={12}>
              <WorkHistory />
            </Grid>
            <Grid item lg={12}>
              <h1>Skills</h1>
              <Skills />
            </Grid>
            <Grid item lg={12}>
              <h1>Education</h1>
              <Education />
            </Grid>
          </TabPanel>
          {/*END of Resume Section --------------------------------------*/}
        </Container>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}
