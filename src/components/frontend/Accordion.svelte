<script>
	// @ts-nocheck
	import { slide } from '../../lib/scripts/slide';
	export let buttonText = '';
	export let isOpen = false;
</script>

<div class="w-full">
	<button
		class="px-4 py-4 text-sm font-medium text-gray-800 hover:text-amber-500"
		on:click={() => (isOpen = !isOpen)}
	>
		<span class:isOpen>▲</span>
		{buttonText}
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
