type ID = number | string;

enum QuestionStatus {
  SUMMARY = 'SUMMARY',
  INDIVIDUAL = 'INDIVIDUAL',
  QUESTION = 'IN_PROGRESS',
}

enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  OPEN = 'OPEN',
}

interface Answer {
  id: ID;
  questionID: ID;
  text: string;
}

type Question = {
  type: [QuestionType.SINGLE_CHOICE];
  id: ID;
  questionText: string;
  possibleAnswers: Array<Answer>;
  answer: Answer;
} | {
  type: [QuestionType.MULTIPLE_CHOICE];
  id: ID;
  questionText: string;
  possibleAnswers: Array<Answer>;
  answer: Array<Answer>;
} | {
  type: [QuestionType.OPEN];
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