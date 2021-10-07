<script context="module">
	export async function load({ page, fetch, session, context }) {
		if (!session) {
			return {
				status: 302,
				redirect: '/auth/register'
			};
		}
		return {
			props: {
				session
			}
		};
	}
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="w-10/12 h-auto">
	<div class="w-full h-screen overflow-y-auto bg-gray-100 bg-opacity-50">
		<div class="flex flex-col w-full h-auto">
			<div class="bg-gray-100 bg-opacity-50 h-20 w-full border-b py-4 px-8">
				<div class="w-full flex justify-between">
					<div class="flex flex-col text-left">
						<span class="font-bold text-2xl text-gray-800">Dashboard</span>
						<span class="text-xs text-gray-600 pl-0">Management All Widget in One Click</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
