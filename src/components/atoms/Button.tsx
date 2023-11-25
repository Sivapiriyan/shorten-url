import Button, { ButtonProps } from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

interface IButtonProps extends ButtonProps {
    loading?: boolean
}

function CustomButton(props: IButtonProps) {
    const { loading } = props
    return loading ? ( // checking loading value if the value true return a loader contain button else normal button should return
        <Button {...props} size="large" disabled>
            <CircularProgress size={25} color="primary" />
        </Button>
    ) : (
        <Button {...props} size="large" />
    )
}

export default CustomButton
