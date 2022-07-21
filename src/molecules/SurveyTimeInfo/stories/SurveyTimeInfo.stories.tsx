import { ComponentStory, ComponentMeta } from '@storybook/react';

import SurveyTimeInfo 
from '@comic/molecules/SurveyTimeInfo';

export default {
    title: 'Molecules/Survey Time Info',
    component: SurveyTimeInfo,
} as ComponentMeta<typeof SurveyTimeInfo>;

const Template: ComponentStory<typeof SurveyTimeInfo> = (args) => (
        <SurveyTimeInfo {...args} />
);

export const View = Template.bind({});

View.args = {
    surveyDate: '2021-04-02-12:35',
    duration: '21m 36s'
};

View.storyName = 'Survey Time Info';