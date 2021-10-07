<script>
	import { createEventDispatcher } from 'svelte';
	import { locales } from '../../lib/scripts/l10n';

	export let value;
	const dispatch = createEventDispatcher();
	function handleLocaleChange(event) {
		event.preventDefault();
		dispatch('locale-changed', event.target.value);
	}
</script>

<div class="flex justify-center items-center w-auto px-0 py-0 bg-transparent">
	<div class="text-gray-800 rounded">
		<select
			{value}
			on:change={handleLocaleChange}
			class="text-xs mt-0 block w-full py-0 px-1 border-0 border-gray-300 bg-sky-900 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 text-white"
		>
			{#each Object.keys(locales) as locale}
				<option class="font-semibold" value={locale}>{locales[locale]}</option>
			{/each}
		</select>
	</div>
</div>

<style>
</style>
