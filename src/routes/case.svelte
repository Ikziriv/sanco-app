<script>
	import Icon from 'svelte-awesome';
	// import supabase from '$lib/supabase';
	import Accordion from '../components/frontend/Accordion.svelte';
	import Modal from '../components/frontend/Modal.svelte';
	// import Toast from '../components/frontend/toast/Toast.svelte';
	// import { toast } from '$lib/scripts/toast';
	let isModalOpen = false;
</script>

<svelte:head>
	<title>IOT Solution Indonesia | Study Case</title>
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
										href="/case"
									>
										Study Case
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
							Study Case <br class="hidden md:block" />
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

<section class="body-text mb-16">
	<div
		class="mx-auto container overflow-hidden flex flex-col md:flex-row justify-between py-4 px-8 pb-4 text-center md:text-left"
	>
		<div class="w-full text-gray-900 mt-6 md:mt-0 leading-normal">
			<h4 class="mt-2 text-3xl uppercase font-bold text-sky-900">Sanco Case Study</h4>
			<span class="text-base text-gray-600"
				>Get in touch! Our staff, distributors and partners are here to help.</span
			>
		</div>
		<div class="text-gray-700 flex flex-col items-end w-full md:w-1/4 mt-6 md:mt-0">
			<Modal bind:isModalOpen background={true} titleModal="Contact Information">
				<div class="w-full h-auto">Lorem</div>
			</Modal>
			<button
				on:click={() => (isModalOpen = true)}
				class="inline-block py-2 px-3 uppercase font-bold tracking-wide text-amber-500"
			>
				Follow Us
			</button>
			<div class="flex pl-0 justify-center">
				<a class="flex items-center text-gray-900 hover:text-black mr-6 no-underline" href="#"
					><i class="fab fa-github-alt" /></a
				>
				<a class="flex items-center text-gray-900 hover:text-black mr-6 no-underline" href="#"
					><i class="fab fa-slack" /></a
				>
				<a class="flex items-center text-gray-900 hover:text-black no-underline" href="#"
					><i class="fab fa-twitter" /></a
				>
			</div>
		</div>
	</div>

	<div class="mx-auto container w-full h-auto">
		<div class="grid grid-cols-5 gap-4 w-full h-auto px-8 py-8">
			<div class="col-span-5 md:col-span-1">
				<div class="max-w-xs overflow-hidden bg-transparent rounded-lg p-2">
					<div class="px-0 py-0">
						<img src="/img/case/case1.png" class="w-64" alt="" />
					</div>
				</div>
			</div>

			<div class="col-span-5 md:col-span-1">
				<div class="max-w-xs overflow-hidden bg-transparent rounded-lg p-2">
					<div class="px-0 py-0">
						<img src="/img/case/case2.png" class="w-64" alt="" />
					</div>
				</div>
			</div>

			<div class="col-span-5 md:col-span-1">
				<div class="max-w-xs overflow-hidden bg-transparent rounded-lg p-2">
					<div class="px-0 py-0">
						<img src="/img/case/case3.png" class="w-64" alt="" />
					</div>
				</div>
			</div>

			<div class="col-span-5 md:col-span-1">
				<div class="max-w-xs overflow-hidden bg-transparent rounded-lg p-2">
					<div class="px-0 py-0">
						<img src="/img/case/case4.png" class="w-64" alt="" />
					</div>
				</div>
			</div>

			<div class="col-span-5 md:col-span-1">
				<div class="max-w-xs overflow-hidden bg-transparent rounded-lg p-2">
					<div class="px-0 py-0">
						<img src="/img/case/case5.png" class="w-64" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
