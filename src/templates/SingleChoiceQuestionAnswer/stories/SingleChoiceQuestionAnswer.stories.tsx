import { ComponentStory, ComponentMeta } from '@storybook/react';

import SingleChoiceQuestionAnswer 
from '@comic/templates/SingleChoiceQuestionAnswer';

export default {
    title: 'Templates/Single Choice Question Answer',
    component: SingleChoiceQuestionAnswer,
} as ComponentMeta<typeof SingleChoiceQuestionAnswer>;

const Template: ComponentStory<typeof SingleChoiceQuestionAnswer> = (args) => (
        <SingleChoiceQuestionAnswer {...args} />
);

export const View = Template.bind({});

View.args = {
    title: 'Pytanie numer 5',
    questionText: 'Jak zyć dobrze?',
    content: 'Nie wiem kurde'
};

View.storyName = 'Single Choice Question Answer';