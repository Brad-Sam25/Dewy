import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { setQuestionOne, setQuestionTwo, setQuestionThree, setQuestionFour, setQuestionFive } from "../../actions";

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
      props.question === 0 ? "brightness(140%)" : "brightness(100%)"};
  }
  &.two {
    transform: ${(props) =>
      props.question === 1 ? "scale(1.2, 1.2)" : "scale(1 , 1)"};
    filter: ${(props) =>
      props.question === 1 ? "brightness(140%)" : "brightness(100%)"};
  }
  &.three {
    transform: ${(props) =>
      props.question === 2 ? "scale(1.2, 1.2)" : "scale(1 , 1)"};
    filter: ${(props) =>
      props.question === 2 ? "brightness(140%)" : "brightness(100%)"};
  }
  &.four {
    transform: ${(props) =>
      props.question === 3 ? "scale(1.2, 1.2)" : "scale(1 , 1)"};
    filter: ${(props) =>
      props.question === 3 ? "brightness(140%)" : "brightness(100%)"};
  }
  &.five {
    transform: ${(props) =>
      props.question === 4 ? "scale(1.2, 1.2)" : "scale(1 , 1)"};
    filter: ${(props) =>
      props.question === 4 ? "brightness(140%)" : "brightness(100%)"};
  }
`;

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setoptionChosen] = useState("");

  console.log(optionChosen);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const nextQuestion = () => {
    if(currQuestion === 0){
      dispatch(setQuestionOne(optionChosen))
    } 
    else if (currQuestion === 1) {
      dispatch(setQuestionTwo(optionChosen))
    } 
    else if ( currQuestion === 2) {
      dispatch(setQuestionThree(optionChosen))
    }
    else if ( currQuestion === 3) {
      dispatch(setQuestionFour(optionChosen))
    }
    setCurrQuestion(currQuestion + 1);
  };
  const previousQuestion = () => {
    setCurrQuestion(currQuestion - 1);
  };

  const getResults = () => {
    if ( currQuestion === 4) {
      dispatch(setQuestionFive(optionChosen))
    }
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
        <Button
          onClick={() => {
            setoptionChosen("optionA");
          }}
          variant="contained"
          className={classes.optionBtn}
        >
          {questions[currQuestion].optionA}
        </Button>
        <Button
          onClick={() => {
            setoptionChosen("optionB");
          }}
          variant="contained"
          className={classes.optionBtn}
        >
          {questions[currQuestion].optionB}
        </Button>
        <Button
          onClick={() => {
            setoptionChosen("optionC");
          }}
          variant="contained"
          className={classes.optionBtn}
        >
          {questions[currQuestion].optionC}
        </Button>
        {currQuestion === 0 ? (
          <Button
            onClick={() => {
              setoptionChosen("optionD");
            }}
            variant="contained"
            className={classes.optionBtn}
          >
            {questions[currQuestion].optionD}
          </Button>
        ) : null}
        {currQuestion == questions.length - 1 ? (
           <Box
           display="grid"
           gridTemplateColumns="repeat(2, 1fr)"
           gap={10}
           className={classes.btnBox}
         >
           <Button
             onClick={previousQuestion}
             variant="outlined"
             className={classes.traverseBtn}
             style={{visibility: currQuestion === 0 ? 'hidden' : 'visible'}}
           >
             Back
           </Button>
           <Button onClick={getResults} variant="outlined" className={classes.resultsBtn}>
            Get Results
          </Button>
         </Box>
        ) : (
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gap={10}
            className={classes.btnBox}
          >
            <Button
              onClick={previousQuestion}
              variant="outlined"
              className={classes.traverseBtn}
              style={{visibility: currQuestion === 0 ? 'hidden' : 'visible'}}
            >
              Back
            </Button>
            <Button
              onClick={nextQuestion}
              variant="outlined"
              className={classes.traverseBtn}
            >
              Next
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Quiz;
