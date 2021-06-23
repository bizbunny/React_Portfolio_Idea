import React from "react";
import "../styles.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
//import Paper from "@material-ui/core/Paper";
export default function AlignedTimeline() {
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="h2">
            <b>Web Development Intern</b>
          </Typography>
          <Typography variant="h7" component="h4">
            SuperWorld
          </Typography>
          <Typography>January 2021 - June 2021</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="h2">
            <b>Volunteer</b>
          </Typography>
          <Typography variant="h7" component="h4">
            Chicago Children's Museum
          </Typography>
          <Typography>April 2019 - February 2020</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="h2">
            <b>Sales Associate</b>
          </Typography>
          <Typography variant="h7" component="h4">
            Uniqlo
          </Typography>
          <Typography>July 2019 - October 2019</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="h2">
            <b>Remote Animation Intern</b>
          </Typography>
          <Typography variant="h7" component="h4">
            Happy Mercs
          </Typography>
          <Typography>October 2018 - January 2019</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
