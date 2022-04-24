import OpenQuestion from "./OpenQuestion";
import SingleChoiceQuestion from "./SingleChoiceQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

interface IQuestion {
  type: QuestionType;
}

const QuestionInProgress: React.FC<IQuestion> = ({ type }) => {
  const views = {
    [QuestionType.OPEN]: <OpenQuestion />,
    [QuestionType.SINGLE_CHOICE]: <SingleChoiceQuestion />,
    [QuestionType.MULTIPLE_CHOICE]: <MultipleChoiceQuestion />
  };

  return views[type];
}

export default QuestionInProgress