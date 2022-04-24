import QuestionSummary from "components/QuestionSummary";
import QuestionIndividual from "components/QuestionIndividual";
import QuestionInProgress from "components/QuestionInProgress";

interface IQuestion {
  status: QuestionStatus;
  type: QuestionType;
}

const Question: React.FC<IQuestion> = ({ status, type }) => {
  const views = {
    [QuestionStatus.SUMMARY]: <QuestionSummary type={type} />,
    [QuestionStatus.INDIVIDUAL]: <QuestionIndividual type={type} />,
    [QuestionStatus.QUESTION]: <QuestionInProgress  type={type} />
  };

  return views[status];
}

export default Question;