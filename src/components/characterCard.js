import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography, Container, Grid } from "@material-ui/core";

//import deviantart from "./static/images/deviantartUPDATED.png";
//import github from "./static/images/githubUPDATED.png";
//import twitter from "./static/images/twitterUPDATED.png";
//import instagram from "./static/images/instagramUPDATED.png";
//import linkedin from "./static/images/linkedinUPDATED.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180
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
{
  /*
  {
  imagelink,
  imagedescription,
  conceptart1link,
  description1,
  conceptart2link,
  description2,
  conceptart3link,
  description3
}
 */
}
export default function SimpleGrowchar() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Container>
      <Grid container>
        <img
          src="https://pbs.twimg.com/media/Ex8ITcfXEAE5bL3?format=jpg&name=large"
          alt="A character I did for a portfolio class back in 2018. I named her Sophie. She's one of my favorites I've made in that class."
        />
      </Grid>
      <div className={classes.root}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show Art"
        />
        <div className={classes.container}>
          <Grow in={checked}>
            <Container>
              <Paper elevation={4} className={classes.paper}>
                <img
                  src="https://pbs.twimg.com/media/Ex8ITcfXEAE5bL3?format=jpg&name=large"
                  alt="sketches"
                />
              </Paper>
              <Typography>Deviantart</Typography>
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
                  src="https://pbs.twimg.com/media/Ex8ITcfXEAE5bL3?format=jpg&name=large"
                  alt="Experimenting with different color schemes"
                />
              </Paper>
              <Typography>Github</Typography>
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
                  alt="Various potential outfits"
                />
              </Paper>
              <Typography>Instagram</Typography>
            </Container>
          </Grow>
        </div>
      </div>
    </Container>
  );
}
