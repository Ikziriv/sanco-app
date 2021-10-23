<script lang="ts">
	export let active = false;
	export let classes = '';
	export let color = 'blue';
	export let onClick = (): void => {};
</script>

<button
	on:click={onClick}
	class:active
	class="relative block w-10 flex-shrink-0 h-6 rounded-full {active
		? `bg-${color}-500`
		: 'bg-gray-200 dark:bg-gray-900'} {classes}"
>
	<span class="knob absolute top-1 left-1 h-4 w-4 rounded-full bg-white dark:bg-gray-800" />
</button>

<style>
	.knob {
		transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.active {
		left: 20px;
	}
</style>
