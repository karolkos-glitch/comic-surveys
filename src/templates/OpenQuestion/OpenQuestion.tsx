import TextField from "@comic/atoms/TextField";
import QuestionHeader from "@comic/molecules/QuestionHeader";

interface OpenQuestionProps {
  title: string;
  questionText: string;
  value: string;
};

const OpenQuestion = ({ title, questionText, value}: OpenQuestionProps) => {
  const onChangeHandler = () => {
    console.log('Change handler');
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