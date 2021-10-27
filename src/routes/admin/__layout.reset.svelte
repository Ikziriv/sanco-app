<script>
	import { supabase } from '$lib/supabase';
	import { session } from '$app/stores';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	import NavLeft from '../../components/backend/NavLeft.svelte';
	import NavRight from '../../components/backend/NavRight.svelte';

	import '../../app.postcss';

	export let segment;

	// if (browser) {
	// 	$session = supabase.auth.session();
	// 	setTimeout(() => ($session ? goto('/admin') : goto('auth/register')));
	// 	supabase.auth.onAuthStateChange((event, ssn) => {
	// 		$session = ssn;
	// 		setTimeout(() => ($session ? goto('/admin') : goto('auth/register')));
	// 	});
	// }
</script>

<div class="flex flex-row">
	<div class="w-full h-screen bg-gray-100">
		<div class="flex flex-col md:flex-row w-full">
			<div class="w-full md:w-1/12 h-64 md:h-screen bg-gray-800 relative">
				<NavLeft {segment} />

				<div class="absolute bottom-0 left-0 w-full h-auto">
					<div class="flex flex-col px-4">
						<div class="border-t-2 border-gray-700 px-4" />
					</div>
					<a href="user">
						<div class="w-full h-20">
							<span class="flex justify-center py-7">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-person-circle w-6 h-6 text-gray-400"
									viewBox="0 0 16 16"
								>
									<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
									<path
										fill-rule="evenodd"
										d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
									/>
								</svg>
							</span>
						</div>
					</a>
				</div>
			</div>

			<slot />

			<div class="w-full md:w-1/12" style="background-color: #f0f4f9;">
				<NavRight {segment} />
			</div>
		</div>
	</div>
</div>

<style>
</style>
