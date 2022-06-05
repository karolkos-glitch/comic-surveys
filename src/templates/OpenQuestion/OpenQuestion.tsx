import type { ChangeEventHandler } from "react";
import TextField from "@comic/atoms/TextField";
import QuestionHeader from "@comic/molecules/QuestionHeader";
import { useSurveyContext } from "@comic/providers/SurveyQuestionsProvider";
interface OpenQuestionProps {
  questionId: string | number;
  title: string;
  questionText: string;
  value: string;
};

const OpenQuestion = ({ 
  questionId, title, questionText, value
}: OpenQuestionProps) => {
  const [,dispatch] = useSurveyContext();
  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    dispatch({
      type: 'ANSWER_OPEN_QUESTION',
      payload: {
        questionId,
        answer: e.target.value,
      }
    })
  }

  return (
    <article>
      <QuestionHeader title={title} questionText={questionText} />
      <TextField 
        placeholder="Odpowiedz tutaj" 
        value={value} 
        onChange={onChangeHandler} 
      />
    </article>
  )
}

export default OpenQuestion