import React, { useState } from "react";
import { questions } from "../../helpers/QuestionBank";
import { Typography, Container, Box, Avatar } from "@material-ui/core";
import { useStyles } from "./styles";
import { scIcons } from "./icons";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const classes = useStyles();


  return (
    <Container align="center">
      <Box className={classes.qNum}>
        {scIcons.forEach((scIcon) => {
            <Avatar>{scIcon}</Avatar>
        })}
        {/* <Avatar style={{ backgroundColor: "purple" }}>2</Avatar>
        <Avatar style={{ backgroundColor: "purple" }}>3</Avatar>
        <Avatar style={{ backgroundColor: "purple" }}>4</Avatar>
        <Avatar style={{ backgroundColor: "purple" }}>5</Avatar>
        <Avatar style={{ backgroundColor: "purple" }}>6</Avatar> */}
      </Box>
      <Box>
        <Typography>{questions[currQuestion].prompt}</Typography>
      </Box>
    </Container>
  );
};

export default Quiz;
