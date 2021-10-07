<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { toast } from '../../../lib/scripts/toast';
	export let message = '';
	export let duration = 1000;

	let progress = tweened(100, { duration });

	onMount(async () => {
		await progress.set(0);
		toast.remove();
	});
</script>

<div class="relative w-80 h-16 flex flex-row bg-white">
	<div class="flex items-center justify-center bg-gray-300 w-2 h-full" />
	<div class="px-6 py-2">
		<h5 class="font-semibold text-gray-900">Hey heads up!</h5>
		<p class="text-sm text-gray-900">{message}</p>
	</div>
	<button class="ml-auto mr-2">
		<svg
			class="w-4 h-4 text-gray-900"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>

	<div class="absolute bottom-0 inset-x-0 w-full h-1 bg-sky-900">
		<div class="h-1 bg-gray-500 progress" style={`width: ${$progress}%;`} />
	</div>
</div>

<style>
</style>
