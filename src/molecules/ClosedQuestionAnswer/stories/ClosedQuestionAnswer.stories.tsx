import { ComponentStory, ComponentMeta } from '@storybook/react';

import ClosedQuestionAnswer from '@comic/molecules/ClosedQuestionAnswer';


export default {
  title: 'Molecules/Closed Question Answer',
  component: ClosedQuestionAnswer,
} as ComponentMeta<typeof ClosedQuestionAnswer>;

const Template: ComponentStory<typeof ClosedQuestionAnswer> = (args) => (
  <ClosedQuestionAnswer {...args} />
);

export const Chosen = Template.bind({});

Chosen.args = {
  text: 'Odpowiedź poprawna',
  chosen: true
}

export const NotChosen = Template.bind({});

NotChosen.args = {
  text: 'Odpowiedź błędna',
  chosen: false
}


