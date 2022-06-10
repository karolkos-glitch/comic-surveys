export const initialState: QuestionsReducerState = {
    surveyId: 1,
    questions: [
        {
            id: 1,
            type: 'OPEN',
            questionText: 'Jaki jest sens zycia',
            answer: '',
        },
        {
            id: 2,
            type: 'OPEN',
            questionText: 'Lubisz boksik?',
            answer: '',
        },
        {
            id: 3,
            type: 'OPEN',
            questionText: 'Jak oceniasz swoją formę?',
            answer: '',
        },
    ],
};

export interface QuestionsReducerState {
    surveyId: string | number;
    questions: Array<Question>;
}

type QuestionsReducePureFn<PayloadType> = (
    state: QuestionsReducerState,
    payload: PayloadType
) => QuestionsReducerState;

type QuestionsReducerAction =
    | {
          type: 'FINISH_SURVEY';
      }
    | {
          type: 'ANSWER_OPEN_QUESTION';
          payload: {
              questionId: string | number;
              answer: string;
          };
      }
    | {
          type: 'ADD_ANSWER';
          payload: {
              questionId: string | number;
              answerId: string | number;
          };
      }
    | {
          type: 'DELETE_ANSWER';
          payload: {
              questionId: string | number;
              answerId: string | number;
          };
      };

const answerOpenQuestion: QuestionsReducePureFn<{
    questionId: string | number;
    answer: string;
}> = (currentState, { questionId, answer }) => {
    const newQuestions: Question[] = currentState.questions.map((question) => {
        if (question.type !== 'OPEN') return question;
        if (questionId !== question.id) return question;
        const modifiedQuestion = {
            ...question,
            answer,
        };
        return modifiedQuestion;
    });

    return {
        ...currentState,
        questions: newQuestions,
    };
};

const questionsReducer = (
    state: QuestionsReducerState = initialState,
    action: QuestionsReducerAction
): QuestionsReducerState => {
    switch (action.type) {
        case 'FINISH_SURVEY':
            console.log(state);
            return state;
        case 'ANSWER_OPEN_QUESTION':
            return answerOpenQuestion(state, action.payload);
        default:
            throw new Error();
    }
};

export default questionsReducer;
