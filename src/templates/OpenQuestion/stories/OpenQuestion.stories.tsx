import { ComponentStory, ComponentMeta } from '@storybook/react'

import OpenQuestion from '@comic/templates/OpenQuestion'
import QuestionsProvider from '@comic/providers/SurveyQuestionsProvider'

export default {
    title: 'Templates/Open Question',
    component: OpenQuestion,
} as ComponentMeta<typeof OpenQuestion>

const Template: ComponentStory<typeof OpenQuestion> = (args) => (
    <QuestionsProvider>
        <OpenQuestion {...args} />
    </QuestionsProvider>
)

export const View = Template.bind({})

View.args = {
    questionId: 3,
    title: 'Pytanie numer 5',
    questionText: 'Jak zyć dobrze?',
    value: 'Nie znam odpowiedzi jeszcze na to pytanie.',
}

View.storyName = 'Open Question'
