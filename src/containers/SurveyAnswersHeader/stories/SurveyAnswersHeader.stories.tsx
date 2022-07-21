import { ComponentStory, ComponentMeta } from '@storybook/react';

import SurveyAnswersHeader from '@comic/containers/SurveyAnswersHeader';

export default {
    title: 'Containers/Survey Answers Header',
    component: SurveyAnswersHeader,
} as ComponentMeta<typeof SurveyAnswersHeader>;

const Template: ComponentStory<typeof SurveyAnswersHeader> = () => (
        <SurveyAnswersHeader />
);

export const View = Template.bind({});

View.storyName = 'Survey Answers Header';