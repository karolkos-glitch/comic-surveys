import { createContext, useContext } from 'react';

// TODO: maybe in low level?
type QuestionContext = Question;

const questionContext = createContext<QuestionContext | null>(null);

export const useQuestionContext = () => {
  const ctx = useContext(questionContext);
  if(!ctx) {
    throw new Error('useQuestionContext inside QuestionContextProvider!!!');
  }

  return ctx;
}


interface IQuestionContextProvider {
  children: JSX.Element;
  question: QuestionContext;
}

const QuestionContextProvider: React.FC<IQuestionContextProvider> = (
  { question, children }
  ) => {
  return <questionContext.Provider value={question}>
    {children}
  </questionContext.Provider>
}