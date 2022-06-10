import QuestionHeader from '@comic/molecules/QuestionHeader';
import ClosedQuestionChoices from '@comic/organisms/ClosedQuestionChoices';

interface MultiChoiceQuestionProps {
    title: string;
    questionText: string;
    possibleAnswers: Array<{
        id: string | number;
        text: string;
        chosen: boolean;
    }>;
}

const MultiChoiceQuestion = ({
    title,
    questionText,
    possibleAnswers,
}: MultiChoiceQuestionProps) => {
    return (
        <article>
            <QuestionHeader title={title} questionText={questionText} />
            <ClosedQuestionChoices choices={possibleAnswers} />
        </article>
    );
};

export default MultiChoiceQuestion;
