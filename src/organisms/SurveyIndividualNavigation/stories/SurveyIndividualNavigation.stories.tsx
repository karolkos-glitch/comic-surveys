import { ComponentStory, ComponentMeta } from '@storybook/react';

import SurveyIndividualNavigation 
from '@comic/organisms/SurveyIndividualNavigation';

export default {
    title: 'Organisms/Survey Individual Navigation',
    component: SurveyIndividualNavigation,
} as ComponentMeta<typeof SurveyIndividualNavigation>;

const Template: ComponentStory<typeof SurveyIndividualNavigation> = (args) => (
    <SurveyIndividualNavigation {...args} />
);

export const View = Template.bind({});

View.args = {
    onPrevious: () => null,
    onNext: () => null,
    surveyCurrentNumber: 22,
    totalSurveysCount: 35,
};

View.storyName = 'Survey Individual Navigation';
