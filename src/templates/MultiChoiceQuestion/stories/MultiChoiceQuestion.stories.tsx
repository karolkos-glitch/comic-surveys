import { ComponentStory, ComponentMeta } from '@storybook/react';

import MultiChoiceQuestion from '@comic/templates/MultiChoiceQuestion';
import QuestionsProvider from '@comic/providers/SurveyQuestionsProvider';

export default {
    title: 'Templates/Multi Choice Question',
    component: MultiChoiceQuestion,
} as ComponentMeta<typeof MultiChoiceQuestion>;

const Template: ComponentStory<typeof MultiChoiceQuestion> = (args) => (
    <QuestionsProvider>
        <MultiChoiceQuestion {...args} />
    </QuestionsProvider>
);

export const View = Template.bind({});

View.args = {
    title: 'Pytanie numer 1',
    questionText: 'Jak oceniasz swoje doświadczenie w Javie?',
    possibleAnswers: [
        { id: 1, text: 'Duze doświadczenie', chosen: false },
        { id: 2, text: 'Średnie doświadczenie', chosen: true },
        { id: 3, text: 'Małe doświadczenie', chosen: false },
        { id: 4, text: 'Zerowe doświadczenie', chosen: false },
    ],
};

View.storyName = 'Multi Choice Question';
