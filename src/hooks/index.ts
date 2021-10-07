import type { Request } from '@sveltejs/kit'
import cookie from 'cookie';
import { auth } from '$lib/supabase'
import { expReq, expResp, deExpResp } from '$lib/utils'
import { API_AUTH, RESP_USER_GUEST } from '$lib/const'

/** @type {import('@sveltejs/kit').GetSession} */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getSession(request: Request) {
    const cookies = cookie.parse(request.headers.cookie || '');
    const loggedIn = cookies.jwt !== undefined || false;
    const theme = cookies.theme || 'dark';
    const { user } = request.locals
    // only include the properties that are needed client-side — exclude anything else attached to the user like access tokens etc
    // we know that the `user` object won't have anything sensitive so we're making the entire `user` object available
    // Note: `getSession` runs only when SvelteKit server-renders a page, not for the API handlers.
    return {
        loggedIn,
        theme,
        user
    };
}

/** @type {import('@sveltejs/kit').Handle} */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function handle({ request, resolve }: { request: Request, resolve: (request: Request) => Response | Promise<Response> }) {
    // populate the `user` object for all the calls
    request.locals.user = await (await auth.api.getUserByCookie(expReq(request))).user || RESP_USER_GUEST // Converts request to have `req.headers.cookie` on `req.cookies, as `getUserByCookie` expects parsed cookies on `req.cookies`
    // prepare response
    let response = await resolve(request);
    // Set/Reset authentication cookies for Supabase, when user signs in or signs out
    if (request.method === 'POST' && request.path === API_AUTH) {
        auth.api.setAuthCookie(request, expResp(response)) // Converts `response` to express compatible format, which Supabase expects for setting headers
        response = deExpResp(response) // Converts response back to its original format
    }

    return {
        ...response,
        headers: {
            ...response.headers,
            'x-custom-header': 'svelte-starter-kit'
        }
    };
}

/** @type {import('@sveltejs/kit').GetSession} */
// export const getSession: GetSession = (request) => {
//     const cookies = cookie.parse(request.headers.cookie || '').session || null
//     return cookies
// }