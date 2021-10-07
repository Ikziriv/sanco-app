<script context="module">
	export async function load({ session }) {
		const localTheme = session.theme;
		return { props: { localTheme } };
	}
</script>

<script>
	import { setupI18n, isLocaleLoaded, locale, dir, _ } from '../lib/scripts/i18n';
	// import supabase from '$lib/supabase';
	import '$lib/main.css';
	import { jwt, theme } from '$lib/stores';

	import Navbar from '../components/frontend/Navbar.svelte';
	import Footer from '../components/frontend/Footer.svelte';
	// import LoadingScreen from '../components/frontend/LoadingScreen.svelte';
	import LocaleSelector from '../components/global/LocaleSelector.svelte';
	import { toggleTheme } from '$lib/stores/theme';
	import { IcoMoon, IcoSun } from '../components/global/icons';

	import NProgress from '../components/global/NProgress.svelte';

	import '../app.postcss';

	let scrollY;

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'en' });
	}
</script>

<svelte:window bind:scrollY />

<NProgress />
{#if $isLocaleLoaded}
	<header
		class="text-gray-600 body-font border-b border-gray-100 shadow-lg
		overflow-x-hidden top-0 z-20
		{scrollY === 0 ? 'sticky' : 'relative'}"
	>
		<div class="w-full text-white bg-sky-900">
			<div class="container flex items-center justify-between px-4 py-4 mx-auto">
				<div class="flex">
					<a
						href="/theme"
						class="block ml-1 mr-5"
						aria-label="Toggle Light and Dark mode"
						on:click|preventDefault={() => {
							toggleTheme(theme, $theme);
						}}
					>
						<div class="hidden dark:block">
							<IcoSun />
						</div>
						<div class="dark:hidden">
							<IcoMoon />
						</div>
					</a>
					<div class="flex">
						<span class="mr-2">
							<svg
								class="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
								/></svg
							>
						</span>
						<LocaleSelector
							value={$locale}
							on:locale-changed={(e) => setupI18n({ withLocale: e.detail })}
						/>
					</div>
				</div>

				<div class="flex">
					<div class="flex justify-center items-center mr-0 md:mr-0.5">
						<p class="mx-3 text-sm font-bold">
							<span class="font-thin">+62-21-58905070</span>

							<span class="font-thin">info@sanco.co.id</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container mx-auto flex p-5 flex-col md:flex-row md:items-center">
			<a href="/" class="flex title-font font-medium md:items-center text-gray-900 mb-4 md:mb-0">
				<img src="/img/sanco-logo.png" class="w-40" alt="" />
			</a>
			<Navbar />
			<a
				href="/auth"
				class="inline-flex uppercase rounded-lg items-center tracking-wide bg-white border border-sky-900 py-2 px-4 focus:outline-none hover:border-amber-500 text-sky-900 text-sm font-semibold mt-4 md:mt-0"
				>Login
				<svg
					class="w-4 h-4 ml-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5l7 7-7 7"
					/></svg
				>
			</a>
		</div>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<Footer />
	</footer>
{:else}
	<div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
		<span
			class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
			style="
    top: 50%;
"
		>
			<i class="fas fa-circle-notch fa-spin fa-5x" />
		</span>
	</div>
{/if}

<style lang="postcss">
	header {
		background: #fff;
		backdrop-filter: saturate(180%) blur(20px);
	}
</style>
