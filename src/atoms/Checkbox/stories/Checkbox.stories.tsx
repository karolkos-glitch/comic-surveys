import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from '@comic/atoms/Checkbox'

export default {
    title: 'Atoms/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox {...args} />
)

export const Checked = Template.bind({})
Checked.args = {
    checked: true,
}

export const NotChecked = Template.bind({})
NotChecked.args = {
    checked: false,
}
