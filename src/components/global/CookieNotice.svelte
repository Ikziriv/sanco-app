<script lang="ts">
	import { onMount } from 'svelte';
	import cookies from 'js-cookie';
	import ExternalLink from './ExternalLink.svelte';
	import Splitbee from './Splitbee.svelte';
	// We don't want the cookie notice to flash on every page reload, therefore hidden by default
	export let showCookieNotice = false;
	export let didOptOut = false;
	export let consentGiven = false;
	onMount(() => {
		// Hide cookie notice if the opt-out cookie exists
		if (cookies.get('didOptOut') === 'true') {
			didOptOut = true;
		} else {
			// Cookie notice is shown when no sb_uid cookie from Splitbee (user didn't accept or decline yet
			// If sb_uid cookie is there, we know that user consented to Splitbee collection in the past
			consentGiven = !!cookies.get('sb_uid');
			showCookieNotice = !cookies.get('sb_uid');
		}
	});
	const onConfirm = () => {
		showCookieNotice = false;
		consentGiven = true;
	};
	const onDecline = () => {
		cookies.set('didOptOut', 'true', { expires: 365, secure: true });
		showCookieNotice = false;
	};
</script>

{#if showCookieNotice}
	<div class="fixed bottom-0 w-full py-6 px-8 text-sm text-white bg-gray-800 z-30">
		<div class="flex justify-between">
			<div class="ma-w-sm">
				<p class="mb-3 text-thin">
					Our website uses cookies to analyze how the site is used <br /> and to ensure your
					experience is consistent between visits. <br />
					<a sveltekit:prefetch href="/privacy-policy" class="mr-2 underline">Privacy Policy</a>
					<ExternalLink href="https://www.cookiesandyou.com/" customClass="underline">
						Learn More
					</ExternalLink>
				</p>
			</div>

			<div class="text-center mr-3 py-2">
				<button class="mr-2 cookie-notice-btn" on:click={onConfirm}>Accept</button>
				<button class="cookie-notice-btn mt-2 md:mt-0" on:click={onDecline}>Decline</button>
			</div>
		</div>
	</div>
{/if}

{#if !didOptOut && consentGiven}
	<Splitbee />
{/if}

<style lang="postcss">
	.cookie-notice-btn {
		@apply px-4 py-2 mr-2 font-thin text-white bg-sky-700 rounded text-sm;
	}
	.cookie-notice-btn:hover {
		@apply bg-sky-800;
	}
</style>
