import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import IconButton from '@mui/material/IconButton'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import '../../styles/components/URLDisplayer.css'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Tooltip from '@mui/material/Tooltip'
import { useState } from 'react'

interface IURLDisplyerProps {
    url: string
}

export default function URLDisplyer(props: IURLDisplyerProps) {
    const { url } = props
    const [open, setOpen] = useState(false)

    const handleTooltipClose = () => {
        setOpen(false)
    }

    const handleTooltipOpen = () => {
        setOpen(true)

        setTimeout(() => {
            setOpen(false)
        }, 2000)
    }

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
                        <CopyToClipboard onCopy={handleTooltipOpen} text={url}>
                            <Tooltip
                                PopperProps={{
                                    disablePortal: true,
                                }}
                                onClose={handleTooltipClose}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title="Copied"
                                placement="top"
                            >
                                <IconButton aria-label="copy">
                                    <ContentCopyIcon />
                                </IconButton>
                            </Tooltip>
                        </CopyToClipboard>
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
