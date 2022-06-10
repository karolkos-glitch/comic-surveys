import ClosedQuestionAnswer from '@comic/molecules/ClosedQuestionAnswer';

interface ClosedQuestionChoicesProps {
    choices: Array<{
        id: string | number;
        text: string;
        chosen: boolean;
    }>;
}

const ClosedQuestionChoices = ({ choices }: ClosedQuestionChoicesProps) => {
    return (
        <div>
            {choices.map(({ id, text, chosen }) => (
                <ClosedQuestionAnswer key={id} text={text} chosen={chosen} />
            ))}
        </div>
    );
};

export default ClosedQuestionChoices;
