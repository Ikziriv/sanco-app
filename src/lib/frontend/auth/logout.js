import supabase from '$lib/supabasepabase'


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get() {
    const { error } = await supabase.auth.signOut()

    if (error) {
        return {
            status: error.status,
            body: error.message,
        }
    }

    return {
        status: 302,
        headers: {
            'location': '/auth',
            'set-cookie': `session=; path=/; expires=0;`
        }
    }
}