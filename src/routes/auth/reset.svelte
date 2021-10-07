<script>
	import { supabase } from '$lib/supabase';

	let email;

	async function reset() {
		const { data, error } = await supabase.auth.api.resetPasswordForEmail(email);
		if (error) {
			alert(error.message);
		}
	}
</script>

<section
	class="flex flex-col items-center justify-center w-full h-auto py-8 bg-white text-gray-700"
>
	<!-- Component Start -->
	<div class="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
		<form class="mt-6" on:submit|preventDefault={reset}>
			<div>
				<label for="email" class="block text-sm text-gray-800 dark:text-gray-200">Email</label>
				<input
					bind:value={email}
					type="email"
					class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
				/>
			</div>

			<div class="mt-6">
				<button
					class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
				>
					Reset Password
				</button>
			</div>
		</form>
	</div>
	<!-- Component End  -->
</section>
