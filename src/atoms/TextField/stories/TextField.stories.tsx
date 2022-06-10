import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextField from '@comic/atoms/TextField'
import { useState } from 'react'
import type { ChangeEventHandler } from 'react'

export default {
    title: 'Atoms/TextField',
    component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => {
    const [textFieldValue, setTextFieldValue] = useState<string>(args.value)
    const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setTextFieldValue(e.target.value)
    }

    return (
        <TextField
            {...args}
            onChange={onChangeHandler}
            value={textFieldValue}
        />
    )
}

export const Empty = Template.bind({})

Empty.args = {
    placeholder: 'Napisz tutaj',
}

export const WithContent = Template.bind({})

WithContent.args = {
    placeholder: 'Napisz tutaj',
    value: 'No tak średnio znam odpowiedź na to pytanie',
}
