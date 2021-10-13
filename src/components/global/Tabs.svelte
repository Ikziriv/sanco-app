<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let items;
	export let activeItem;
</script>

<div class="w-full h-auto py-2">
	<ul>
		{#each items as item}
			<li on:click={() => dispatch('tabChange', item)} class="mr-2 py-1">
				<div class:active={item === activeItem}>{item}</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.active {
		color: #d91b42;
		border-bottom: 2px solid #d91b42;
		padding-bottom: 8px;
	}
</style>
