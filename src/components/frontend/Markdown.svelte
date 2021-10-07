<script>
	import marked from 'marked';
	export let text = '';
	let markdownText = text;
	// Reactive Expression
	$: {
		markdownText = marked(text);
	}
</script>

<div class="w-full h-auto">
	<div class="grid grid-cols-2 gap-4">
		<div class="col-span-2 md:col-span-1">
			<textarea bind:value={text} cols="30" rows="10" />
		</div>
		<div class="col-span-2 md:col-span-1">
			{@html markdownText}
		</div>
	</div>
</div>
