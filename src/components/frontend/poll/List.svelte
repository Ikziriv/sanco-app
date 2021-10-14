<script>
	import PollStore from '../../../lib/stores/poll';
	import { fade, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Detail from './Detail.svelte';
</script>

<div class="grid grid-cols-1">
	<div class="col-span-1">
		<div class="poll-list">
			<!-- By calling the store here we don't need to use lifecycle hooks: onMount & onDestroy -->
			{#each $PollStore as poll (poll.id)}
				<div in:fade out:scale|local animate:flip={{ duration: 500 }}>
					<!-- <Detail {poll} /> -->
				</div>
			{/each}
		</div>
	</div>
</div>
