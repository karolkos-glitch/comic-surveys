type QuestionStatus = "SUMMARY" | "INDIVIDUAL" | "QUESTION";

type QuestionType = 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'OPEN';

  type ID = number | string;

  interface Answer {
    id: ID;
    questionID: ID;
    text: string;
  }

  type Question = {
    type: 'SINGLE_CHOICE';
    id: ID;
    questionText: string;
    possibleAnswers: Array<Answer>;
    answer: Answer;
  } | {
    type: 'MULTIPLE_CHOICE';
    id: ID;
    questionText: string;
    possibleAnswers: Array<Answer>;
    answer: Array<Answer>;
  } | {
    type: 'OPEN';
    id: ID;
    questionText: string;
    answer: Answer;
  }

  /**
   * WIDOK survey-questions
   * */
  interface SurveyQuestions {
    id: ID;
    questions: Array<Question>;
    startTime: Date;
    endTime: Date;
  }

  type Time = string;
  /**
   * WIDOK surver-individual
   * */
  interface SurveyIndividual {
    id: ID;
    questions: Array<Question>;
    time: Time;
    date: Date;
  }

  /**
   * WIDOK survey-summary
   * */
  interface SurveySummary {
    id: ID;
    surveys: Array<SurveyIndividual>;
  }
