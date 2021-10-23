<script context="module">
	export async function load({ page, fetch, session, context }) {
		return {
			props: {
				session
			}
		};
	}
</script>

<script>
	import { page } from '$app/stores';
	// export let session;
</script>

<nav
	class="md:ml-auto md:mr-auto block md:flex md:flex-wrap py-2 md:py-0 px-2 md:px-0 items-start md:items-center font-semibold text-base justify-start md:justify-center"
>
	<a sveltekit:prefetch class:active={$page.path === '/'} href="/" class="mr-5 hover:text-gray-900"
		>Home</a
	>
	<a
		sveltekit:prefetch
		class:active={$page.path === '/product'}
		href="/product"
		class="mr-5 hover:text-gray-900">Product</a
	>
	<a
		sveltekit:prefetch
		class:active={$page.path === '/brochure'}
		href="/brochure"
		class="mr-5 hover:text-gray-900">E-Brochure</a
	>
	<a
		sveltekit:prefetch
		class:active={$page.path === '/exhibition'}
		href="/exhibition"
		class="mr-5 hover:text-gray-900">Exhibition</a
	>
	<a
		sveltekit:prefetch
		class:active={$page.path === '/contact'}
		href="/contact"
		class="mr-5 hover:text-gray-900">Contact</a
	>
</nav>

<style>
	a.active {
		color: #f79216;
	}
</style>
