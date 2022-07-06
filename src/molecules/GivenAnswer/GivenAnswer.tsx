export interface GivenAnswerProps {
 content: string;
}

const GivenAnswer = ({ content }: GivenAnswerProps) => {
  return (
    <div>{content}</div>
  )
}

export default GivenAnswer