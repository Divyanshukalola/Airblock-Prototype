import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "@mui/material/Typography";

import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillFileEarmarkBreakFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";
// import { BsFillCalendarCheckFill } from "react-icons/bs";

export default function CustomizedTimeline(props) {
  const Stage1 = props.S1 === "S1" ? "primary" : null;
  const Stage2 = props.S2 === "S2" ? "color='primary'" : null;
  const Stage3 = props.S3 === "S3" ? "color='primary'" : null;
  const Stage4 = props.S4 === "S4" ? "color='secondary'" : null;
  return (
    <Timeline position="alternate">
      <span style={props.S1 === "S1" ? null : { color: "#cccccc" }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Stage 1
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              style={
                props.S1 === "S1"
                  ? { backgroundColor: "#1976d2" }
                  : { backgroundColor: "#cccccc" }
              }
            >
              <BsFillCalendarCheckFill></BsFillCalendarCheckFill>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Scheduled
            </Typography>
            <Typography>12-12-2000</Typography>
          </TimelineContent>
        </TimelineItem>
      </span>
      <span style={props.S2 === "S2" ? null : { color: "#cccccc" }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Stage 2
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              style={
                props.S2 === "S2"
                  ? { backgroundColor: "#1976d2" }
                  : { backgroundColor: "#cccccc" }
              }
            >
              <BsClockHistory />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Work Commenced
            </Typography>
            <Typography>1-23-2001</Typography>
          </TimelineContent>
        </TimelineItem>
      </span>
      <span style={props.S3 === "S3" ? null : { color: "#cccccc" }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Stage 3
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              style={
                props.S3 === "S3"
                  ? { backgroundColor: "#1976d2" }
                  : { backgroundColor: "#cccccc" }
              }
              variant="outlined"
            >
              <BsFillFileEarmarkBreakFill style={{ color: "white" }} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Final Checks
            </Typography>
            <Typography>2-12-2001</Typography>
          </TimelineContent>
        </TimelineItem>
      </span>
      <span style={props.S4 === "S4" ? null : { color: "#cccccc" }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            Stage 4
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              style={
                props.S4 === "S4"
                  ? { backgroundColor: "#9c27b0" }
                  : { backgroundColor: "#cccccc" }
              }
            >
              <BsClipboardCheck />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Compelted
            </Typography>
            <Typography>3-5-2001</Typography>
          </TimelineContent>
        </TimelineItem>
      </span>
    </Timeline>
  );
}
