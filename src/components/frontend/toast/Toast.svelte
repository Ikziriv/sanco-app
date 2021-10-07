<script>
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { toast } from '../../../lib/scripts/toast';
	import Portal from '../Portal.svelte';
	import ToastMessage from './ToastMessage.svelte';

	export let duration = 1000;
</script>

<Portal>
	<div class="fixed top-0 right-0 w-80 h-16 ">
		{#each $toast as message (message)}
			<div
				on:click={() => toast.remove()}
				in:fly={{ opacity: 0, x: 100 }}
				out:fade
				animate:flip
				class="flex items-center h-16 w-80 pr-0 shadow-lg border border-gray-300"
			>
				<ToastMessage {message} {duration} />
			</div>
		{/each}
	</div>
</Portal>

<style>
	/* .toast.error {
		background: var(--toast-error-background, #e54b4b);
		color: black;
	} */
</style>
