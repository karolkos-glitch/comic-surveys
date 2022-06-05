import OpenQuestion from "@comic/templates/OpenQuestion";
import { useSurveyContext } from "@comic/providers/SurveyQuestionsProvider";

const SurveyQuestions = () => {
  const [{ questions }] = useSurveyContext();

  return (<section>
    <h1>Ankieta</h1>
    {questions.map((question, index) => {
      if(question.type !== 'OPEN') return null;
      const { id, questionText, answer } = question;
      return (
        <OpenQuestion 
          key={id}
          questionId={id}
          title={`Pytanie nr ${index+1}`}
          questionText={questionText} 
          value={answer} 
        />
      )}
    )}
    </section>)
}

export default SurveyQuestions;