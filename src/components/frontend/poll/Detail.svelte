<script>
	// @ts-nocheck
	import { tweened } from 'svelte/motion';
	import PollStore from '../../../lib/stores/poll';
	export let poll = [];
	// reactive values
	// @ts-ignore
	$: totalVotes = poll.votesA + poll.votesB;
	// @ts-ignore
	$: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
	// @ts-ignore
	$: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;
	// tweened percentages.
	// this creates a smooth transition on the percentage
	// bar as the percentage increases or decreases.
	const tweenedA = tweened(0);
	const tweenedB = tweened(0);
	$: tweenedA.set(percentA);
	$: tweenedB.set(percentB);
	// $: console.log($tweenedA, $tweenedB);
	const handleVote = (option, id) => {
		PollStore.update((currentPolls) => {
			let copiedPolls = [...currentPolls];
			let upvotedPoll = copiedPolls.find((poll) => poll.id === id);
			if (option === 'a') {
				upvotedPoll.votesA++;
			}
			if (option === 'b') {
				upvotedPoll.votesB++;
			}
			return copiedPolls;
		});
	};
	const handleDelete = (id) => {
		PollStore.update((currentPolls) => {
			return currentPolls.filter((poll) => poll.id !== id);
		});
	};
</script>

<div class="bg-white w-full h-auto py-8 px-8">
	<div class="poll">
		<h3>
			{poll.question}
		</h3>
		<p>Total votes: {totalVotes}</p>
		<div class="answer" on:click={() => handleVote('a', poll.id)}>
			<div class="percent percent-a" style="width:{$tweenedA}%" />
			<span>{poll.answerA} ({poll.votesA})</span>
		</div>
		<div class="answer" on:click={() => handleVote('b', poll.id)}>
			<div class="percent percent-b" style="width:{$tweenedB}%" />
			<span> {poll.answerB} ({poll.votesB})</span>
		</div>
		<div class="delete">
			<div class="w-full h-auto py-2" on:click={() => handleDelete(poll.id)}>Delete</div>
		</div>
	</div>
</div>
