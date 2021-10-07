<script>
	export let label = '';
	export let instructions = '';
	export let style = '';
	export let value;
	export let placeholder;
	export let type = 'text';

	function handleInput(e) {
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	}
</script>

<div class="flex flex-col py-0 w-full h-auto mb-0 px-0" {style}>
	{#if label}
		<div class="w-full h-auto flex justify-between">
			<div class="h-auto w-auto py-0">
				<label for="name" class="transition-all text-sm ml-3 px-1"> {label} </label>
			</div>
		</div>
	{/if}

	<div class="relative flex items-center w-full h-full group">
		<div class="absolute left-0 z-10">
			<slot />
		</div>
		<input
			on:input={handleInput}
			{type}
			{value}
			{placeholder}
			class="block w-full text-md px-4 py-1.5 pl-10 transition-all border border-gray-300 rounded-2xl"
		/>
	</div>
	{#if instructions}
		<div class="w-full h-auto">
			<div class="h-auto w-auto py-0">
				<span class="instructions ml-3 px-1 text-xs text-gray-500">
					{instructions}
				</span>
			</div>
		</div>
	{/if}
</div>

<style>
</style>
