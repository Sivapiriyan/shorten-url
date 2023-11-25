import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import IconButton from '@mui/material/IconButton'
import '../../styles/components/URLDisplayer.css'

interface IURLDisplyerProps {
    url: string
}

export default function URLDisplyer(props: IURLDisplyerProps) {
    const { url } = props

    return (
        <Card elevation={4}>
            <CardContent>
                <Grid container className="headerContainer">
                    <Grid item>
                        <Typography color="GrayText" variant="subtitle2">
                            Shortend URL
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="copy">
                            <ContentCopyIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid className="urlContainer">
                    <Typography className="shortenUrl" variant="subtitle1">
                        {url}
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    )
}
