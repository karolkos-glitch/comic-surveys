import { ComponentStory, ComponentMeta } from '@storybook/react';

import SurverIndividual from '@comic/containers/SurveyIndividual';

export default {
    title: 'Containers/Survey Individual',
    component: SurverIndividual,
} as ComponentMeta<typeof SurverIndividual>;

const Template: ComponentStory<typeof SurverIndividual> = () => (
        <SurverIndividual />
);

export const View = Template.bind({});

View.storyName = 'Survey Individual';