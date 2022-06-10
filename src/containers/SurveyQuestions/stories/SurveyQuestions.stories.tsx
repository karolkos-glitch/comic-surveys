import { ComponentStory, ComponentMeta } from '@storybook/react';

import SurverQuestions from '@comic/containers/SurveyQuestions';
import QuestionsProvider from '@comic/providers/SurveyQuestionsProvider';

export default {
    title: 'Containers/Survey Questions',
    component: SurverQuestions,
} as ComponentMeta<typeof SurverQuestions>;

const Template: ComponentStory<typeof SurverQuestions> = () => (
    <QuestionsProvider>
        <SurverQuestions />
    </QuestionsProvider>
);

export const View = Template.bind({});

View.storyName = 'Survey Questions';
