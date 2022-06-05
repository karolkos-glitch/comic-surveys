import { ComponentStory, ComponentMeta } from '@storybook/react';

import ClosedQuestionChoices from '@comic/organisms/ClosedQuestionChoices';


export default {
  title: 'Organisms/Closed Question Choices',
  component: ClosedQuestionChoices,
} as ComponentMeta<typeof ClosedQuestionChoices>;

const Template: ComponentStory<typeof ClosedQuestionChoices> = (args) => (
  <ClosedQuestionChoices {...args} />
);

export const View = Template.bind({});

View.args = {
  choices: [
    {id: 1, text: 'Duze doświadczenie', chosen: false},
    {id: 2, text: 'Średnie doświadczenie', chosen: true},
    {id: 3, text: 'Małe doświadczenie', chosen: false},
    {id: 4, text: 'Zerowe doświadczenie', chosen: false},
  ]
}

View.storyName = 'Closed Question Choices'