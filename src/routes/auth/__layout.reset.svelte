<script>
	import '../../app.postcss';
	import sanco from '../../../static/img/sanco-logo.svg';
</script>

<header class="text-gray-600 body-font border-b">
	<div class="w-full text-white bg-sky-900">
		<div class="container flex items-center justify-between px-4 py-4 mx-auto">
			<div class="flex">
				<p class="mx-3 text-sm font-bold">
					<span class="font-thin">+62-21-58905070</span>

					<!-- <span class="font-thin">info@sanco.co.id</span> -->
				</p>
			</div>

			<div class="flex">
				<div class="flex justify-center items-center mr-0.5">
					<span class="">
						<svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					</span>
					<!-- Switch Container -->
					<div class="w-12 h-6 flex items-center bg-gray-300 rounded-full mx-1 px-1 bg-sky-700">
						<!-- Switch -->
						<div class="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-6" />
					</div>
					<span class="">
						<svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<nav class="flex w-1/2 flex-wrap items-center text-base md:ml-auto">
			<a
				sveltekit:prefetch
				href="/"
				class="flex order-first lg:order-none title-font font-medium items-start text-gray-900 lg:items-start lg:justify-start mb-4 md:mb-0"
			>
				<div class="flex py-0 justify-start">
					<img src="/img/sanco-logo.png" class="w-40" alt="" />
				</div>
			</a>
		</nav>
		<div class="w-1/2 inline-flex lg:justify-end ml-5 lg:ml-0">
			<button
				class="inline-flex items-center bg-sky-900 border-0 rounded-lg py-2 px-3 focus:outline-none hover:bg-sky-800 text-sm text-white mt-4 md:mt-0"
			>
				Request Dashboard
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
			</button>
		</div>
	</div>
</header>
<main>
	<slot />
</main>
