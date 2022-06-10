import { ComponentStory, ComponentMeta } from '@storybook/react'

import QuestionHeader from '@comic/molecules/QuestionHeader'

export default {
    title: 'Molecules/Question Header',
    component: QuestionHeader,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        checked: {
            control: 'boolean',
        },
    },
} as ComponentMeta<typeof QuestionHeader>

const Template: ComponentStory<typeof QuestionHeader> = (args) => (
    <QuestionHeader {...args} />
)

export const View = Template.bind({})

View.args = {
    title: 'Pytanie 1',
    questionText: 'Jak oceniasz swoje doswiadczenie programistyczne?',
}

View.storyName = 'Question Header'
