interface TextFieldProps {
    placeholder: string
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
    value: string
}

const TextField = ({ placeholder, onChange, value }: TextFieldProps) => {
    return (
        <textarea placeholder={placeholder} onChange={onChange} value={value} />
    )
}

export default TextField
