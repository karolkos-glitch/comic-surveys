import { ComponentStory, ComponentMeta } from '@storybook/react';

import GivenAnswer from '@comic/molecules/GivenAnswer';

export default {
    title: 'Molecules/Given Answer',
    component: GivenAnswer,
} as ComponentMeta<typeof GivenAnswer>;

const Template: ComponentStory<typeof GivenAnswer> = (args) => (
    <GivenAnswer {...args} />
);

export const View = Template.bind({});

View.args = {
    content: 'Odpowiedź na pytanie',
};

View.storyName = 'Given Answer'
