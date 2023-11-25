import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Button, URLDisplayer, URLTextField } from '../components/atoms'
import '../styles/pages/ShortenURL.css'
import { useState } from 'react'
import { ValidateURL } from '../utils/validations'
import { getShortenUrl } from '../services/shortenUrl.service'
import { useSnackbar } from 'notistack'

function ShortenURL() {
    const [url, seturl] = useState('')
    const [urlError, seturlError] = useState('')
    const [shortenUrl, setshortenUrl] = useState('')
    const [loading, setloading] = useState(false)

    const { enqueueSnackbar } = useSnackbar()

    const getValidShortenURL = async (url: string) => {
        setloading(true)
        await getShortenUrl(url).then(
            (response: string) => {
                setshortenUrl(response)
                enqueueSnackbar('URL shortened Successfully!', {
                    variant: 'success',
                    anchorOrigin: { horizontal: 'center', vertical: 'top' },
                    key: '1',
                })
            },
            (error: any) => {
                enqueueSnackbar('Something went wrong..!', {
                    variant: 'error',
                    anchorOrigin: { horizontal: 'center', vertical: 'top' },
                    key: '1',
                })
            }
        )
        setloading(false)
    }

    return (
        <div>
            <Typography variant="h1" className="title">
                Create Short URL!
            </Typography>
            <Typography variant="subtitle1">
                Fast and simple website to create shortend URL, esay to remember
                and share.
            </Typography>

            <Grid container className="inputAndBtnConatiner">
                <Grid className="inputConatiner">
                    <URLTextField
                        value={url}
                        onChange={(event: any) => {
                            if (
                                event.target.value !== '' &&
                                !ValidateURL(event.target.value)
                            ) {
                                seturlError('Invalid URL')
                            } else {
                                seturlError('')
                            }
                            setshortenUrl('')
                            seturl(event.target.value)
                        }}
                        error={urlError !== ''}
                        helperText={urlError}
                    />
                </Grid>
                <Grid item className="btnConatiner">
                    <Button
                        className="buttonStyle"
                        variant="contained"
                        fullWidth
                        disabled={url === '' || urlError !== ''}
                        onClick={() => getValidShortenURL(url)}
                        loading={loading}
                    >
                        Get Short URL
                    </Button>
                </Grid>
            </Grid>
            {shortenUrl !== '' && (
                <Grid className="urlDisplayerConatiner">
                    <URLDisplayer url={shortenUrl} />
                </Grid>
            )}
        </div>
    )
}

export default ShortenURL
