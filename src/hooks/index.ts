import * as cookie from 'cookie';
// import { auth } from '$lib/supabase'
// import { expReq, expResp, deExpResp } from '$lib/utils'
// import { API_AUTH, RESP_USER_GUEST } from '$lib/const'

/** @type {import('@sveltejs/kit').Handle} */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
    const loggedIn = cookies.jwt !== undefined || false;
    const theme = cookies.theme || 'dark';
	
	event.locals.user = jwt ? JSON.parse(jwt) : null;

	return await resolve(event);
}

/** @type {import('@sveltejs/kit').GetSession} */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getSession({ locals }) {
    return {
		user: locals.user && {
			username: locals.user.username,
			email: locals.user.email,
			image: locals.user.image,
			bio: locals.user.bio
		}
    };
}