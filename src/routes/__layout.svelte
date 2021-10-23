<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		return {
			props: {
				path: page.path
			}
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	// import supabase from '$lib/supabase';
	import { appSettings } from '../lib/appSettings';
	import { dir, isLocaleLoaded, setupI18n, _ } from '$lib/i18n';
	import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';
	import ClickOutside from 'svelte-click-outside';
	import Icon from 'svelte-awesome';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { jwt, theme, data, dark } from '$lib/stores';

	import Navbar from '../components/frontend/Navbar.svelte';
	import CookieNotice from '../components/global/CookieNotice.svelte';
	import Footer from '../components/frontend/Footer.svelte';
	// import LoadingScreen from '../components/frontend/LoadingScreen.svelte';
	import LocaleSelector from '../components/global/LocaleSelector.svelte';

	import Toggle from '../components/frontend/inputs/Toggle.svelte';
	import { toggleTheme } from '$lib/stores/theme';
	import { IcoMoon, IcoSun } from '../components/global/icons';
	import Whatsapp from '../components/frontend/modal/Whatsapp.svelte';

	import NProgress from '../components/global/NProgress.svelte';

	import '../styles/tailwind.postcss';
	import '../styles/main.css';

	let open = false;
	let scrollY: number;
	let isModalOpen = true;
	let showScrollBar = false;
	let mouseX = 0;
	let scrolling = false;
	let msSinceLastScroll = 0;

	// $: if (document.dir !== $dir) {
	// 	document.dir = $dir;
	// }

	function toggleDarkMode() {
		dark.set(!$dark);
	}

	const toggleHamburgerMenu = () => {
		open = !open;
	};

	void setupI18n();
	onMount(async () => {
		$appSettings.darkMode
			? document.body.classList.add('scheme-dark')
			: document.body.classList.remove('scheme-dark');
		dark.set(localStorage.getItem('darkMode') === 'true');
		dark.subscribe((value) => localStorage.setItem('darkMode', value ? 'true' : 'false'));
		setInterval(() => {
			if (scrolling) msSinceLastScroll++;
			showScrollBar = (scrolling && msSinceLastScroll < 300) || mouseX > window.innerWidth - 15;
		}, 1);
	});
	function onScroll() {
		scrolling = true;
		msSinceLastScroll = 0;
	}
	function onMouse(event: MouseEvent) {
		mouseX = event.clientX;
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
					<!-- <div class="rounded-full py-0 px-0 mr-2" onClick={toggleDarkMode}>
						<Fa icon={$dark ? faMoon : faSun} scale={1.1} />
					</div> -->
					<!-- <Toggle on={$appSettings.darkMode} /> -->
					<a
						href="/theme"
						class="block py-0.5 ml-1 mr-5"
						aria-label="Toggle Light and Dark mode"
						onClick={toggleDarkMode}
					>
						<Fa icon={$dark ? faMoon : faSun} scale={1.2} />
						<!-- <div class="hidden dark:block">
							<IcoSun />
						</div>
						<div class="dark:hidden">
							<IcoMoon />
						</div> -->
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
						<!-- <LocaleSelector
							value={locales[$appSettings.language]}
							on:locale-changed={(e) =>
								setupI18n({ fallbackLocale: 'en', initialLocale: $appSettings.language })}
						/> -->
					</div>
				</div>

				<div class="flex">
					<div class="flex justify-center items-center mr-0 md:mr-0.5">
						<p class="mx-3 text-sm font-bold">
							<span class="font-thin">+62-21-58905070</span>

							<!-- <span class="font-thin">info@sanco.co.id</span> -->
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="container mx-auto flex p-5 flex-wrap justify-between items-center">
			<a href="/" class="flex title-font font-medium md:items-center text-gray-900 mb-4 md:mb-0">
				<img src="/img/sanco-logo.png" class="w-40" alt="" />
			</a>
			<div class="ml-auto md:hidden mb-4">
				<ClickOutside on:clickoutside={() => (open = false)}>
					<button
						class="flex items-center px-3 py-2 text-sky-900 border border-amber-500 hover:text-sky-800 hover:border-amber-600"
						aria-label="Hamburger menu"
						on:click={toggleHamburgerMenu}
					>
						<Icon data={faBars} />
					</button>
				</ClickOutside>
			</div>
			<div class:hidden={!open} class="w-full ml-auto md:flex md:w-auto">
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
		</div>
	</header>
	<main class="relative" on:scroll={onScroll} on:mousemove={onMouse}>
		<slot />
		<div class="fixed top-0 right-0 z-40 mt-40 mr-4">
			<div class="w-full h-auto bg-green-500 hover:bg-green-600 rounded-full px-1 py-1 shadow-lg">
				<button on:click={() => (isModalOpen = true)} class="inline-block py-2 px-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-whatsapp w-6 h-6 text-white fill-current"
						viewBox="0 0 16 16"
					>
						<path
							d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
						/>
					</svg>
				</button>
				<Whatsapp
					bind:isModalOpen
					titleModal="Sales Support"
					subTitleModal="Typically replies instantly"
				>
					<div class="w-auto h-auto bg-white rounded-lg shadow-md px-4 py-2">
						<div class="flex flex-col">
							<span class="font-semibold text-sm text-gray-500 mb-1">Sales Support</span>
							<p class="text-sm">
								Hi, There <br /> How can i help you?
							</p>
						</div>
					</div>
				</Whatsapp>
			</div>
		</div>
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

<CookieNotice />

<style lang="postcss">
	header {
		background: #fff;
		backdrop-filter: saturate(180%) blur(20px);
	}
</style>
