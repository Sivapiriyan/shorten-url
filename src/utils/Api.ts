import axios from 'axios'

export const Method = {
    GET: 'get',
}

const getHeaders = async (adHeaders: object) => {
    return {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            ...adHeaders,
        },
    }
}

export default async function api(
    method: string,
    header: object | null,
    url: string,
    body: any | null
) {
    const headers = await getHeaders(header === null ? {} : header)
    return new Promise((resolve, reject) => {
        axios({
            method,
            url,
            data: body === '' ? undefined : body,
            headers: headers.headers,
        })
            .then((response: any) => {
                resolve(response)
            })
            .catch((error: any) => {
                reject(error)
            })
    })
}
