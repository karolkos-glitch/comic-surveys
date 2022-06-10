import Checkbox from '@comic/atoms/Checkbox'

interface ClosedQuestionAnswerProps {
    text: string
    chosen: boolean
}

const ClosedQuestionAnswer = ({ text, chosen }: ClosedQuestionAnswerProps) => {
    return (
        <div>
            <Checkbox checked={chosen} />
            <span>{text}</span>
        </div>
    )
}

export default ClosedQuestionAnswer
