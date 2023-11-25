import { URL_VALIDATE } from '../constants/regex'

function ValidateURL(url: string) {
    return URL_VALIDATE.test(url)
}

export { ValidateURL }
