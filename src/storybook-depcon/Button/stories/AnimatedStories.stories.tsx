import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import SurveyQuestions from '@comic/containers/SurveyQuestions';
import QuestionsProvider from '@comic/providers/SurveyQuestionsProvider';

export default {
  title: 'Depcon/Animated Stories',
  component: SurveyQuestions,
  argTypes: { onClick: { action: 'submit form!'}}
} as ComponentMeta<typeof SurveyQuestions>;

const Template: ComponentStory<typeof SurveyQuestions> = () => (
  <QuestionsProvider>
    <SurveyQuestions />
  </QuestionsProvider>

);

export const View = Template.bind({});
View.storyName = 'Animated Stories';


// eslint-disable-next-line complexity
View.play = async () => {

  const textfields= await screen.findAllByPlaceholderText('Odpowiedz tutaj');

  if(textfields[0]){
    await userEvent.type(textfields[0], 'Nie mam pojecia', {
      delay: 100,
    });
  }

  if(textfields[1]){
    await userEvent.type(textfields[1], 'Jasne, ze goryl', {
      delay: 300,
    });
  }

  if(textfields[2]){
    await userEvent.type(textfields[2], 'Prawiek i inne czasy', {
      delay: 200,
    });
  }

  const button = await screen.findByRole('button');

  userEvent.click(button);
}