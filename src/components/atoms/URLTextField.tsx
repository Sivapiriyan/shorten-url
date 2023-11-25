import TextField, { TextFieldProps } from '@mui/material/TextField'

function URLTextField(props: TextFieldProps) {
    return (
        <TextField
            fullWidth
            id="fullWidth"
            placeholder="Enter URL"
            {...props}
        />
    )
}

export default URLTextField
