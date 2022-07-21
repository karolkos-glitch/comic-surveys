import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '..';


export default {
  title: 'Depcon/Button Stories',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
      <Button {...args} />
);

export const View = Template.bind({});

View.args = {
  children: 'Siema',
  onClick: action('My button was clicked!')
}
View.storyName = 'Standard';


export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  children: 'Siema'
}