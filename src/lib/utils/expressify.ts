
import * as cookie from 'cookie'

export function expReq(req) {
    return {
        ...req,
        cookies: cookie.parse(req.headers.cookie || '')
    }
}

export function expResp(resp) {
    return {
        ...resp,
        getHeader: (header) => resp.headers[header.toLowerCase()],
        setHeader: (header, value) => resp.headers[header.toLowerCase()] = value,
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