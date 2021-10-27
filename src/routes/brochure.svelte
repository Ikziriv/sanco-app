<script>
	// import supabase from '$lib/supabase';
	// import WebViewer from '../components/frontend/pdftron/WebViewer.svelte';

	// const ready = (/** @type {{ detail: { instance: any; }; }} */ r) => {
	// 	const instance = r.detail.instance;
	// 	instance.loadDocument('/file/SANCO-HMS-COMBINE.pdf');
	// };
</script>

<svelte:head>
	<title>IOT Solution Indonesia | Brochure</title>
</svelte:head>

<section class="body-font">
	<div class="relative">
		<div class="relative bg-opacity-90 bg-sky-900 border-b border-white">
			<div class="absolute inset-x-0 top-0">
				<div class="w-full h-auto py-2 px-8">
					<div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
						<div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
							<div
								class="relative p-1 flex items-center justify-start w-full ml-4 mr-4 sm:mr-0 sm:left-auto"
							>
								<div class="navbar-menu lg:order-1 flex w-auto">
									<a
										class="block lg:inline-block mt-4 lg:mt-0 mr-0 text-white hover:text-indigo-600"
										href="/"
									>
										Home
									</a>
									<span class="mx-2 text-white">/</span>
									<a
										class="font-semibold block lg:inline-block mt-4 lg:mt-0 mr-6 text-amber-500 hover:text-indigo-600"
										href="/brochure"
									>
										Brochure
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="absolute inset-x-0 bottom-0 ">
				<svg class="text-white" viewBox="0 0 1160 163">
					<path
						fill="currentColor"
						d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
					/>
				</svg>
			</div>
			<div
				class="relative px-4 py-8 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
			>
				<div class="flex flex-col items-start justify-between xl:flex-row">
					<div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-6/12 py-4">
						<h2
							class="max-w-lg mt-0 font-sans text-5xl font-bold tracking-tight text-white sm:leading-none"
						>
							Brochure <br class="hidden md:block" />
						</h2>
						<p class="max-w-xl mt-4 mb-8 text-base text-gray-200">
							We provide innovative product solutions for sustainable progress <br
								class="hidden md:block"
							/>
							Our professional team works to increase productivity and cost effectiveness on the market.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section>
	<!-- <WebViewer on:ready={ready} /> -->
</section>
