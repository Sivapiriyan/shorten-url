import axios from 'axios'

export const Method = {
    GET: 'get',
}

export default async function api(
    method: string,
    url: string,
    body: any | null
) {
    return new Promise((resolve, reject) => {
        axios({
            method,
            url,
            data: body === '' ? undefined : body,
        })
            .then((response: any) => {
                resolve(response.data)
            })
            .catch((error: any) => {
                reject(error)
            })
    })
}
