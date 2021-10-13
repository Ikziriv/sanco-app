<script>
	import PollStore from '../../../lib/stores/poll';
	import { fade, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import PollDetails from './PollDetails.svelte';
</script>

<div class="grid grid-cols-1">
	<div class="col-span-1">
		<div class="poll-list">
			<!-- By calling the store here we don't need to use lifecycle hooks: onMount & onDestroy -->
			{#each $PollStore as poll (poll.id)}
				<div in:fade out:scale|local animate:flip={{ duration: 500 }}>
					<PollDetails {poll} />
				</div>
			{/each}
		</div>
	</div>
</div>
