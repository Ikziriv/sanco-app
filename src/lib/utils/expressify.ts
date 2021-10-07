
import * as cookie from 'cookie'

export function expReq(req) {
    const cookies = cookie.parse(req.headers.cookie || '');
    const cookiesArray = [];
    if (!cookies.theme) {
        const theme = req.query.get('theme') || 'dark';
        cookiesArray.push(`theme=${theme};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`);
    }
    return {
        ...req,
        cookies: cookies,
        'set-cookie': cookiesArray,
    }
}

export function expResp(resp) {
    return {
        ...resp,
        getHeader: (header) => resp.headers[header.toLowerCase()],
        setHeader: (header, value) => resp.headers[header.toLowerCase()] = value,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        status: (p) => ({ json: (p) => { } })
    }
}

export function deExpResp(resp) {
    const {
        getHeader,
        setHeader,
        ...returnAbleResp
    } = resp
    return returnAbleResp
}