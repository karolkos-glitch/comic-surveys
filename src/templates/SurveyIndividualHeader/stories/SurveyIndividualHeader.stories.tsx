import { ComponentStory, ComponentMeta } from '@storybook/react';

import SurveyIndividualHeader 
from '@comic/templates/SurveyIndividualHeader';

export default {
    title: 'Templates/Survey Individual Header ',
    component: SurveyIndividualHeader,
} as ComponentMeta<typeof SurveyIndividualHeader>;

const Template: ComponentStory<typeof SurveyIndividualHeader> = (args) => (
        <SurveyIndividualHeader {...args} />
);

export const View = Template.bind({});

View.args = {
  duration: '25m 35s',
  completeSurveyTime: '2021-04-02-12:35',
  previousSurvey: () => null,
  nextSurvey: () => null,
  currentSurveyNumber: 4,
  totalSurveysCount: 20,
}

View.storyName = 'Survey Individual Header ';