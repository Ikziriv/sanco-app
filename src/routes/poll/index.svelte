<script>
	import { supabase } from '$lib/supabase';
	import Tabs from '../../components/global/Tabs.svelte';
	import PollList from '../../components/frontend/poll/List.svelte';
	// Tabs
	let items = ['Polling Progress', 'Add New Poll'];
	let activeItem = 'Polling Progress';
	const handleTabChange = (e) => {
		activeItem = e.detail;
	};
</script>

<section
	class="flex flex-col items-center justify-center w-full h-auto py-8 bg-white text-gray-700"
>
	<!-- Component Start -->
	<div class="w-full p-6 m-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
		<div class="grid grid-cols-2">
			<div class="col-span-2 md:col-span-1">
				<div
					class="w-full overflow-hidden bg-sky-900 border-b-2 border-amber-500 flex flex-col items-end justify-end mx-auto dark:bg-gray-800 relative shadow-lg"
				>
					<div
						class="z-0 w-full h-screen bg-contain bg-center bg-no-repeat rounded-lg shadow-md "
						style="background-image: url('/img/exhibitions/thumb-rev-8.jpg');"
					/>

					<div class="absolute inset-x-0 top-0 z-20">
						<div class="w-full h-auto flex flex-col items-start justify-start">
							<div
								class="w-32 -mt-0 overflow-hidden bg-sky-800 dark:bg-gray-700 shadow-lg md:w-48 border-l-8 border-amber-500 shadow"
							>
								<div class="flex items-center justify-center px-3 py-2">
									<span class="font-bold text-white dark:text-white">23/10/2021</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-span-2 md:col-span-1">
				<Tabs {items} {activeItem} on:tabChange={handleTabChange} />
				{#if activeItem === 'Polling Progress'}
					<PollList />
				{/if}
			</div>
		</div>
	</div>
	<!-- Component End  -->
</section>
