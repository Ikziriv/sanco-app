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
	class="md:ml-auto md:mr-auto flex flex-wrap items-center font-semibold text-base justify-center"
>
	<a class:active={$page.path === '/'} href="/" class="mr-5 hover:text-gray-900">Home</a>
	<a class:active={$page.path === '/product'} href="/product" class="mr-5 hover:text-gray-900"
		>Product</a
	>
	<a class:active={$page.path === '/brochure'} href="/brochure" class="mr-5 hover:text-gray-900"
		>E-Brochure</a
	>
	<a class:active={$page.path === '/exhibition'} href="/exhibition" class="mr-5 hover:text-gray-900"
		>Exhibition</a
	>
	<a class:active={$page.path === '/contact'} href="/contact" class="mr-5 hover:text-gray-900"
		>Contact</a
	>
</nav>

<style>
	a.active {
		color: #f79216;
	}
</style>
