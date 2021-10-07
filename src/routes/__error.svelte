<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	import { dev } from '$app/env';
	export let error, status;
</script>

<svelte:head>
	<title>{status} {error} | Sanco Indonesia</title>
</svelte:head>

<main class="prose mx-auto py-8">
	<h1>{status}</h1>
	<pre>{error.message}</pre>
	<p>
		If you expected something here, consider
		<a href="https://github.com/GrygrFlzr/kit-docs/issues">filing an issue on GitHub</a>!
	</p>

	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</main>
