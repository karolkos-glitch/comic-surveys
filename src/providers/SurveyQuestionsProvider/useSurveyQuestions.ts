import { useReducer } from 'react';
import questionsReducer, { initialState } from './questionsReducer';

const useSurveyQuestions = () => {
    return useReducer(questionsReducer, initialState);
};

export default useSurveyQuestions;
