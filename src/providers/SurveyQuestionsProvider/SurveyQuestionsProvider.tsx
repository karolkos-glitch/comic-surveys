import { createContext, useContext } from "react";
import useSurveyQuestions from "./useSurveyQuestions";

const SurveyQuestionsContext = createContext<
  ReturnType<typeof useSurveyQuestions> | undefined
>(undefined);

export const useSurveyContext = () => {
  const ctx = useContext(SurveyQuestionsContext);
  if(!ctx) {
    throw new Error('You cannot use this hook without QuestionsProvider!!!')
  }
  return ctx;
}

const QuestionsProvider = ({children}: {children: React.ReactNode}) => {
  const value = useSurveyQuestions();
  
  return <SurveyQuestionsContext.Provider value={value}>
    {children}
  </SurveyQuestionsContext.Provider>
}

export default QuestionsProvider;