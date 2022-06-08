interface QuestionHeaderProps {
  title: string;
  questionText: string;
}

const QuestionHeader = ({ title, questionText }: QuestionHeaderProps) => {
  return (
    <>
      <h2>{title}</h2>
      <h2>{title}</h2>
      <p>{questionText}</p>
    </>
  )
}

export default QuestionHeader