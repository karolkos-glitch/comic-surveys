import QuestionHeader from '@comic/molecules/QuestionHeader'
import GivenAnswer from '@comic/molecules/GivenAnswer/GivenAnswer';
import type { GivenAnswerProps } 
from '@comic/molecules/GivenAnswer/GivenAnswer';
import type { QuestionHeaderProps } 
from '@comic/molecules/QuestionHeader/QuestionHeader'

 
type SingleChoiceQuestionAnswerProps = QuestionHeaderProps & GivenAnswerProps;

const SingleChoiceQuestionAnswer = ({ 
  title, questionText, content 
}: SingleChoiceQuestionAnswerProps) => {
  return (
    <div>
      <QuestionHeader title={title} questionText={questionText} />
      <GivenAnswer content={content} />
    </div>
  )
}

export default SingleChoiceQuestionAnswer