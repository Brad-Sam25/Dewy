import * as actionType from "../constants/actionTypes";

const initialState = {
    questionOne: '',
    questionTwo: '',
    questionThree: '',
    questionFour: '',
    questionFive: '',
};

const questionReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.QUESTION_ONE: 
            return {
                ...state,
                questionOne: action.payload
            }
        case actionType.QUESTION_TWO: 
            return {
                ...state,
                questionTwo: action.payload
            }
        case actionType.QUESTION_THREE: 
            return {
                ...state,
                questionThree: action.payload
            }
        case actionType.QUESTION_FOUR: 
            return {
                ...state,
                questionFour: action.payload
            }
        case actionType.QUESTION_FIVE: 
            return {
                ...state,
                questionFive: action.payload
            }
            default:
                return state;
    }
};

export default questionReducer;