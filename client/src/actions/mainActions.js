import {
  QUESTION_ONE,
  QUESTION_TWO,
  QUESTION_THREE,
  QUESTION_FOUR,
  QUESTION_FIVE,
} from "../constants/actionTypes";

export const setQuestionOne = (str) => (dispatch) => {
  dispatch({
    type: QUESTION_ONE,
    payload: str,
  });
};

export const setQuestionTwo = (str) => (dispatch) => {
  dispatch({
    type: QUESTION_TWO,
    payload: str,
  });
};

export const setQuestionThree = (str) => (dispatch) => {
  dispatch({
    type: QUESTION_THREE,
    payload: str,
  });
};

export const setQuestionFour = (str) => (dispatch) => {
  dispatch({
    type: QUESTION_FOUR,
    payload: str,
  });
};

export const setQuestionFive = (str) => (dispatch) => {
  dispatch({
    type: QUESTION_FIVE,
    payload: str,
  });
};
