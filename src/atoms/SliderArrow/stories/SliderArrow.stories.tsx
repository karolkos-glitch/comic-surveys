import { ComponentStory, ComponentMeta } from '@storybook/react';

import SliderArrow from '@comic/atoms/SliderArrow';

export default {
    title: 'Atoms/Slider Arrow',
    component: SliderArrow,
} as ComponentMeta<typeof SliderArrow>;

const Template: ComponentStory<typeof SliderArrow> = (args) => (
    <SliderArrow {...args} />
);

export const Previous = Template.bind({});
Previous.args = {
    type: 'previous',
    onClickHandler: () => null,
};

export const Next = Template.bind({});
Next.args = {
    type: 'next',
    onClickHandler: () => null,
};
