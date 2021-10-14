<script>
	// @ts-nocheck
	import { slide } from '../../../lib/scripts/slide';
	export let imgsrc = '';
	export let buttonText = '';
	export let isOpen = false;
</script>

<div class="w-full">
	
	<button
		class="px-4 py-4 w-full"
		on:click={() => (isOpen = !isOpen)}
	>
		<div class="flex w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 border-l-4 border-amber-500">
			<div class="w-1/3 bg-cover px-6 py-2">
				<img src="{imgsrc}" class="bg-contain w-64"  alt="HMS + Sanco">
			</div>

			<div class="w-2/3 p-4 md:p-4">
				<div class="flex justify-end mt-3 item-center">
					<small class="text-sm font-thin text-gray-700 dark:text-gray-200 mr-2">{buttonText}</small>
					<button class="px-2 text-center py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
						<span class:isOpen>▲</span>
					</button>
				</div>
			</div>
		</div>
	</button>

	<div use:slide={{ isOpen, duration: 200 }} on:animationEnd={() => console.log('animation ended')}>
		<slot />
	</div>
</div>

<style>
	span {
		margin-right: 5px;
		display: inline-block;
		transform: rotate(0.25turn);
		transition: transform 0.3s ease;
	}
	.isOpen {
		transform: rotate(0.5turn);
	}
</style>
