import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useStyles } from "./styles";
import StepCard from "../StepCard/StepCard";

const Results = () => {
    const classes = useStyles();
  return (
    <Container align='center'>
      <Box>
        <Typography variant="h2">Your Results</Typography>
      </Box>
      <Box
        component="main"
        display="grid"
        gridTemplateRows="repeat(5, 1fr)"
        gap={2}
      >
        <Paper gridRow="span 8" elevated={12}>
          <StepCard />
        </Paper>
        <Paper gridRow="span 8" elevated={12}>
          <StepCard />
        </Paper>
        <Paper gridRow="span 8" elevated={12}>
          <StepCard />
        </Paper>
        <Paper gridRow="span 8" elevated={12}>
          <StepCard />
        </Paper>
        <Paper gridRow="span 8" elevated={12}>
          <StepCard />
        </Paper>

      </Box>
    </Container>
  );
};

export default Results;
