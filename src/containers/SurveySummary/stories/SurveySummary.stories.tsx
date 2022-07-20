import { ComponentStory, ComponentMeta } from '@storybook/react';

import SurveySummary from '@comic/containers/SurveySummary';

export default {
    title: 'Containers/Survey Summary',
    component: SurveySummary,
} as ComponentMeta<typeof SurveySummary>;

const Template: ComponentStory<typeof SurveySummary> = () => (
        <SurveySummary />
);

export const View = Template.bind({});

View.storyName = 'Survey Summary';