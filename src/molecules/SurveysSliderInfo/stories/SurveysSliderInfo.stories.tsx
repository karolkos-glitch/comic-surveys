import { ComponentStory, ComponentMeta } from '@storybook/react';

import SurveysSliderInfo 
from '@comic/molecules/SurveysSliderInfo';

export default {
    title: 'Molecules/Surveys Slider Info',
    component: SurveysSliderInfo,
} as ComponentMeta<typeof SurveysSliderInfo>;

const Template: ComponentStory<typeof SurveysSliderInfo> = (args) => (
        <SurveysSliderInfo {...args} />
);

export const View = Template.bind({});

View.args = {
    surveyCurrentNumber: 5,
    totalSurveysCount: 10,
};

View.storyName = 'Surveys Slider Info';