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
	<title>IOT Solution Indonesia | Contact</title>
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
										href="/contact"
									>
										Contact
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
							Contact <br class="hidden md:block" />
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
			<h4 class="mt-2 text-3xl uppercase font-bold text-sky-900">Sanco Contact</h4>
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
		<div class="py-0 px-8">
			<h4 class="py-2 text-1xl uppercase font-thin text-gray-500">
				Find your nearest Sanco office
			</h4>
		</div>

		<div class="grid grid-cols-3 gap-4 w-full h-auto px-8 py-2">
			<div class="col-span-3 md:col-span-1">
				<div class="max-w-xs overflow-hidden bg-white rounded-lg p-2 shadow-lg dark:bg-gray-800">
					<div class="px-4 py-2 mb-4">
						<h1 class="text-1xl font-bold text-gray-700 tracking-wide uppercase dark:text-white">
							Head Office
						</h1>
						<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
							Komplek Meruya Garden Blok M No.11, Meruya Utara, Kembangan Jakarta 11620
						</p>
					</div>
					<!-- Accrodion -->
					<Accordion buttonText="More Contact">
						<div class="w-full">
							<div class="flex items-start justify-start px-4 py-1 border-b">
								<h1 class="text-sm font-medium text-sky-900">(+62) 21-58905070</h1>
							</div>

							<div class="flex items-center justify-between px-4 py-1 border-b">
								<h1 class="text-sm font-medium text-sky-900">(+62) 21-58905070</h1>
							</div>

							<div class="flex items-center justify-between px-4 py-1 border-b">
								<h1 class="text-sm font-medium text-sky-900">(+62) 21-58905071</h1>
							</div>
							<div class="flex items-center justify-between px-4 py-1 bg-gray-100">
								<h1 class="text-sm font-normal text-sky-900">info@sanco.co.id</h1>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-mailbox text-sky-900"
										viewBox="0 0 16 16"
									>
										<path
											d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"
										/>
										<path
											d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"
										/>
									</svg>
								</span>
							</div>
						</div>
					</Accordion>
				</div>
			</div>

			<div class="col-span-3 md:col-span-1">
				<div class="max-w-xs overflow-hidden bg-white rounded-lg p-2 shadow-lg dark:bg-gray-800">
					<div class="px-4 py-2 mb-4">
						<h1 class="text-1xl font-bold text-gray-700 tracking-wide uppercase dark:text-white">
							Branch Office
						</h1>
						<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
							Manyar Megah Indah (RMI) Blok L No.3A, Jln. Ngagel Jaya Selatan Surabaya 60284
						</p>
					</div>

					<!-- Accrodion -->
					<Accordion buttonText="More Contact">
						<div class="w-full">
							<div class="flex items-center justify-between px-4 py-1 border-b">
								<h1 class="text-sm font-medium text-sky-900">(+62) 31-99443070</h1>
							</div>

							<div class="flex items-center justify-between px-4 py-1 border-b">
								<h1 class="text-sm font-medium text-sky-900">(+62) 31-99443077</h1>
							</div>
							<div class="flex items-center justify-between px-4 py-1 bg-gray-100">
								<h1 class="text-sm font-normal text-sky-900">info@sanco.co.id</h1>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-mailbox text-sky-900"
										viewBox="0 0 16 16"
									>
										<path
											d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"
										/>
										<path
											d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"
										/>
									</svg>
								</span>
							</div>
						</div>
					</Accordion>
				</div>
			</div>

			<div class="col-span-3 md:col-span-1">
				<div class="max-w-xs overflow-hidden bg-white rounded-lg p-2 shadow-lg dark:bg-gray-800">
					<div class="px-4 py-2 mb-4">
						<h1 class="text-1xl font-bold text-gray-700 tracking-wide uppercase dark:text-white">
							Branch Office
						</h1>
						<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
							Komplek Semarang Plaza 1D & 2A Jl. K.H. Agus Salim No. 7 Semarang 50137
						</p>
					</div>

					<!-- Accrodion -->
					<Accordion buttonText="More Contact">
						<div class="w-full">
							<div class="flex items-center justify-between px-4 py-1 border-b">
								<h1 class="text-sm font-medium text-sky-900">(+62) 813-1065-2262</h1>
							</div>

							<div class="flex items-center justify-between px-4 py-1 border-b">
								<h1 class="text-sm font-medium text-sky-900">-</h1>
							</div>
							<div class="flex items-center justify-between px-4 py-1 bg-gray-100">
								<h1 class="text-sm font-normal text-sky-900">info@sanco.co.id</h1>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-mailbox text-sky-900"
										viewBox="0 0 16 16"
									>
										<path
											d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"
										/>
										<path
											d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"
										/>
									</svg>
								</span>
							</div>
						</div>
					</Accordion>
				</div>
			</div>
		</div>
	</div>
</section>
