import React, { useState } from "react";
import { questions } from "../../helpers/QuestionBank";
import { Typography, Container, Box, Avatar, Button } from "@mui/material";
import { useStyles } from "./styles";
import FaceIcon from "@mui/icons-material/Face";
import FaceRetouchingOffIcon from "@mui/icons-material/FaceRetouchingOff";
import WaterIcon from "@mui/icons-material/Water";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setoptionChosen] = useState("");
  const classes = useStyles();

  return (
    <Container align="center">
      <Box className={classes.qNum}>
        {/* {scIcons.forEach((scIcon) => {
          <Avatar>{scIcon}</Avatar>;
        })} */}
        <Avatar style={{ backgroundColor: "purple" }}>
          <FaceIcon />
        </Avatar>
        <Avatar style={{ backgroundColor: "purple" }}>
          <FaceRetouchingOffIcon />
        </Avatar>
        <Avatar style={{ backgroundColor: "purple" }}>
          <WaterIcon />
        </Avatar>
        <Avatar style={{ backgroundColor: "purple" }}>
          <SanitizerIcon />
        </Avatar>
        <Avatar style={{ backgroundColor: "purple" }}>
          <WbSunnyIcon />
        </Avatar>
      </Box>
      <Box>
        <Typography>{questions[currQuestion].prompt}</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
      >
        <Button onClick={() => setoptionChosen("optionA")}>
          {questions[currQuestion].optionA}
        </Button>
        <Button onClick={() => setoptionChosen("optionB")}>
          {questions[currQuestion].optionB}
        </Button>
        <Button onClick={() => setoptionChosen("optionC")}>
          {questions[currQuestion].optionC}
        </Button>
        <Button onClick={() => setoptionChosen("optionD")}>
          {questions[currQuestion].optionD}
        </Button>
      </Box>
    </Container>
  );
};

export default Quiz;
