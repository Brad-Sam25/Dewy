import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { questions } from "../../helpers/QuestionBank";
import {
  Typography,
  Container,
  Box,
  StyledAvatar,
  Button,
} from "@mui/material";
import { useStyles } from "./styles";
import FaceIcon from "@mui/icons-material/Face";
import FaceRetouchingOffIcon from "@mui/icons-material/FaceRetouchingOff";
import WaterIcon from "@mui/icons-material/Water";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import styled from "styled-components";

const StyledAvatarTest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  transition: 0.2s all ease;

  &.one {
    transform: ${(props) =>
      props.question === 0 ? "scale(1.1, 1.1)" : "scale(1 , 1)"};
    filter: ${(props) =>
      props.question === 0 ? "brightness(120%)" : "brightness(100%)"};
  }
  &.two {
    transform: ${(props) =>
      props.question === 1 ? "scale(1.2, 1.2)" : "scale(1 , 1)"};
    filter: ${(props) =>
      props.question === 1 ? "brightness(120%)" : "brightness(100%)"};
  }
  &.three {
    transform: ${(props) =>
      props.question === 2 ? "scale(1.2, 1.2)" : "scale(1 , 1)"};
    filter: ${(props) =>
      props.question === 2 ? "brightness(120%)" : "brightness(100%)"};
  }
  &.four {
    transform: ${(props) =>
      props.question === 3 ? "scale(1.2, 1.2)" : "scale(1 , 1)"};
    filter: ${(props) =>
      props.question === 3 ? "brightness(120%)" : "brightness(100%)"};
  }
  &.five {
    transform: ${(props) =>
      props.question === 4 ? "scale(1.2, 1.2)" : "scale(1 , 1)"};
    filter: ${(props) =>
      props.question === 4 ? "brightness(120%)" : "brightness(100%)"};
  }
`;

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setoptionChosen] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const nextQuestion = () => {
    setCurrQuestion(currQuestion + 1);
  };

  const getResults = () => {
    setCurrQuestion(currQuestion + 1);
    history.push("/results");
  };
  return (
    <Container align="center">
      <Box className={classes.qNum}>
        <StyledAvatarTest
          style={{ backgroundColor: "purple" }}
          className="one"
          question={currQuestion}
        >
          <FaceIcon />
        </StyledAvatarTest>
        <StyledAvatarTest
          style={{ backgroundColor: "purple" }}
          className="two"
          question={currQuestion}
        >
          <FaceRetouchingOffIcon />
        </StyledAvatarTest>
        <StyledAvatarTest
          style={{ backgroundColor: "purple" }}
          className="three"
          question={currQuestion}
        >
          <WaterIcon />
        </StyledAvatarTest>
        <StyledAvatarTest
          style={{ backgroundColor: "purple" }}
          className="four"
          question={currQuestion}
        >
          <SanitizerIcon />
        </StyledAvatarTest>
        <StyledAvatarTest
          style={{ backgroundColor: "purple" }}
          className="five"
          question={currQuestion}
        >
          <WbSunnyIcon />
        </StyledAvatarTest>
      </Box>
      <Box className={classes.questionBox}>
        <Typography variant="h4">{questions[currQuestion].prompt}</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
      >
        <Button onClick={() => setoptionChosen("optionA")} variant="contained">
          {questions[currQuestion].optionA}
        </Button>
        <Button onClick={() => setoptionChosen("optionB")} variant="contained">
          {questions[currQuestion].optionB}
        </Button>
        <Button onClick={() => setoptionChosen("optionC")} variant="contained">
          {questions[currQuestion].optionC}
        </Button>
        {currQuestion === 0 ? (
          <Button
            onClick={() => setoptionChosen("optionD")}
            variant="contained"
          >
            {questions[currQuestion].optionD}
          </Button>
        ) : null}
        {currQuestion == questions.length - 1 ? (
          <Button onClick={getResults} variant="outlined">
            Get Results
          </Button>
        ) : (
          <Button onClick={nextQuestion} variant="outlined">
            Next
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Quiz;
