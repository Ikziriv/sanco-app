<script>
	// import supabase from '$lib/supabase';
	import Field from '../../components/frontend/Field.svelte';
	let search = '';
</script>

<svelte:head>
	<title>IOT Sanco Indonesia | Product</title>
</svelte:head>

<section class="body-font">
	<div class="relative">
		<div class="relative bg-opacity-90 bg-sky-900 border-b border-white">
			<div class="absolute inset-x-0 top-0">
				<div class="w-full h-auto py-1 px-2 md:px-8 pb-1">
					<div
						class="relative z-0 md:z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center"
					>
						<div
							class="relative items-center pl-1 flex flex-col md:flex-row w-full md:max-w-68 sm:pr-2 sm:ml-0"
						>
							<div
								class="relative p-1 flex items-center justify-start w-full mb-2 md:mb-0 ml-2 md:ml-4 mr-4 sm:mr-0 sm:left-auto"
							>
								<div class="navbar-menu lg:order-1 flex w-auto">
									<a
										class="block lg:inline-block mt-0 md:mt-4 lg:mt-0 mr-0 text-white hover:text-indigo-600"
										href="/"
									>
										Home
									</a>
									<span class="mx-2 text-white">/</span>
									<a
										class="font-semibold block lg:inline-block mt-0 md:mt-4 lg:mt-0 mr-6 text-amber-500 hover:text-indigo-600"
										href="/product"
									>
										Product
									</a>
								</div>
							</div>
							<div
								class="relative justify-start md:justify-end left-auto md:right-auto z-0 md:z-50 flex w-full md:w-80 h-auto"
							>
								<Field bind:value={search} placeholder="Search">
									<svg
										class="w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path
											d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
										/>
									</svg>
								</Field>
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
				class="relative px-4 md:py-8 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
			>
				<div class="flex flex-col items-start justify-between xl:flex-row">
					<div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-6/12 py-4">
						<h2
							class="max-w-lg mt-24 md:mt-0 font-sans text-5xl font-bold tracking-tight text-white sm:leading-none"
						>
							Product <br class="hidden md:block" />
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
