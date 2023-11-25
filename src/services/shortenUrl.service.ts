import Api, { Method } from '../utils/Api'

const getShortenUrl = async (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        Api(
            Method.GET,
            {},
            `${process.env.REACT_APP_SHORTEN_URL}?url=${url}`,
            ''
        )
            .then((response: any) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export { getShortenUrl }
