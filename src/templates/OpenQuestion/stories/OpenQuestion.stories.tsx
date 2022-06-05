import { ComponentStory, ComponentMeta } from '@storybook/react';

import OpenQuestion from '@comic/templates/OpenQuestion';


export default {
  title: 'Templates/Open Question',
  component: OpenQuestion,
} as ComponentMeta<typeof OpenQuestion>;

const Template: ComponentStory<typeof OpenQuestion> = (args) => (
  <OpenQuestion {...args} />
);

export const View = Template.bind({});

View.args = {
  title: 'Pytanie numer 5',
  questionText: 'Jak zyć dobrze?',
  value: 'Nie znam odpowiedzi jeszcze na to pytanie.'
}

View.storyName = 'Open Question'