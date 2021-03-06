import { supabase } from '$lib/supabase'


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
/**
 * @param {{ body: { get: (arg0: string) => any; }; }} request
 */
export async function post(request: any) {
    let email = request.body.get('email')
    let password = request.body.get('password')

    const { session, error } = await supabase.auth.signIn({ email, password })

    if (error) {
        return {
            // @ts-ignore
            status: error.status,
            body: error.message
        }
    }

    return {
        status: 200,
        body: 'success',
        headers: {
            'set-cookie': `session=${session?.user?.email}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${new Date(session.expires_at * 1000).toUTCString()};`
        }
    }
}