<script lang="ts">
	import { _ } from '$lib/scripts/i18n';
	import { fade } from 'svelte/transition';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import axios from 'redaxios';
	let submitForm = false;

	const encode = (data: any) => {
		return Object.keys(data)
			.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&');
	};
	const { form, errors, isValid, isSubmitting, handleChange, handleSubmit, handleReset } =
		createForm({
			initialValues: {
				fullname: '',
				company: '',
				email: '',
				phone: ''
			},
			validationSchema: yup.object().shape({
				fullname: yup.string().required('Name is a required field.'),
				company: yup.string().required('Company is a required field.'),
				email: yup
					.string()
					.email('Email must be a valid email.')
					.required('Email is a required field.'),
				phone: yup
					.string()
					.required('Phone is a required field.')
					.min(12, (value) => `Phone must be at least ${value.min} characters long.`)
			}),
			onSubmit: (values: { fullname: string; company: string; email: string; phone: string }) => {
				axios
					.post('/', encode({ 'form-name': 'solution', ...values }), {
						headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
					})
					.then(() => {
						handleReset();
						submitForm = true;
						setTimeout(() => {
							submitForm = false;
						}, 5000);
					})
					.catch((error) => console.error(error));
			}
		});
	// import { supabase } from '$lib/supabase';
	// let category = '';

	// function getCategory() {
	// 	return supabase.from('categories').select(`name`);
	// }

	// async function addCategory() {
	// 	const newCategory = await supabase.from('categories').insert({ name: category });
	// 	console.log(newCategory);
	// }

	// async function signUp() {
	// 	const { user, error } = await supabase.auth.signUp({
	// 		email: 'kingpoxxx@gmail.com',
	// 		password: 'example-password'
	// 	});
	// 	console.log(user, error);
	// }

	// async function signOut() {
	// 	const { error } = await supabase.auth.signOut();
	// 	console.log(error);
	// }
</script>

<svelte:head>
	<title>Sanco IOT Indonesia | Home</title>
</svelte:head>

<section class="body-font">
	<div class="relative">
		<img
			src="https://www.ewon.biz/images/default-source/top-banners---1920-500---all-brands/ewon-slides/about-us-1920x500.jpg?sfvrsn=f8aa0ed7_2"
			class="absolute inset-0 object-cover object-right w-full h-full"
			alt=""
		/>
		<div class="relative bg-opacity-80 bg-sky-900 border-b border-white">
			<div class="absolute inset-x-0 bottom-0 ">
				<svg class="text-white" viewBox="0 0 1160 163">
					<path
						fill="currentColor"
						d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
					/>
				</svg>
			</div>
			<div
				class="relative px-4 py-8 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10"
			>
				<div class="flex flex-col items-start justify-between xl:flex-row">
					<div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-6/12 py-10">
						<h2
							class="max-w-lg mt-10 font-sans text-5xl font-bold tracking-tight text-white sm:leading-none"
						>
							{@html $_('home.sec_hero.title')}<br class="hidden md:block" />
						</h2>
						<p class="max-w-xl mt-8 mb-8 text-base text-gray-200">
							We provide innovative product solutions for sustainable progress <br
								class="hidden md:block"
							/>
							Our professional team works to increase productivity and cost effectiveness on the market.
						</p>
						<a
							href="/"
							aria-label=""
							class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-amber-500 hover:text-amber-600"
						>
							Learn more
							<svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
								<path
									d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
								/>
							</svg>
						</a>
					</div>
					<div class="w-full max-w-xl xl:px-8 xl:w-6/12">
						<div class="bg-white rounded shadow-2xl py-8 px-8">
							<h3 class="mb-2 text-xl font-semibold sm:text-center sm:text-2xl">Solution Form</h3>
							<p class="text-xs sm:text-center text-gray-600 sm:text-sm mb-4">
								We will provide a good solution to your company
							</p>
							<form name="solution" on:submit={handleSubmit}>
								<div class="grid grid-cols-2">
									<div class="col-span-2 md:col-span-1">
										<div class="mb-1 sm:mb-2">
											<label for="fullname" class="inline-block mb-1 font-medium">Full Name</label>
											<input
												placeholder="John Doe"
												type="text"
												class="flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
												id="fullname"
												name="fullname"
												on:blur={handleChange}
												on:change={handleChange}
												bind:value={$form.fullname}
											/>
											{#if $errors.fullname}
												<div class="px-2 text-xs text-red-500 mb-2">
													<small transition:fade>{$errors.fullname}</small>
												</div>
											{/if}
										</div>
									</div>
									<div class="col-span-2 md:col-span-1">
										<div class="mb-1 sm:mb-2">
											<label for="company" class="inline-block mb-1 font-medium">Company</label>
											<input
												placeholder="Sanco Indonesia"
												type="text"
												class="flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
												id="company"
												name="company"
												on:blur={handleChange}
												on:change={handleChange}
												bind:value={$form.company}
											/>
											{#if $errors.company}
												<div class="px-2 text-xs text-red-500 mb-2">
													<small transition:fade>{$errors.company}</small>
												</div>
											{/if}
										</div>
									</div>
								</div>
								<div class="mb-1 sm:mb-2">
									<label for="email" class="inline-block mb-1 font-medium">Email</label>
									<input
										placeholder="sanco@indonesia.com"
										type="text"
										class="flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
										id="email"
										name="email"
										on:blur={handleChange}
										on:change={handleChange}
										bind:value={$form.email}
									/>
									{#if $errors.email}
										<div class="px-2 text-xs text-red-500 mb-2">
											<small transition:fade>{$errors.email}</small>
										</div>
									{/if}
								</div>
								<div class="mb-1 sm:mb-2">
									<label for="phone" class="inline-block mb-1 font-medium">Phone</label>
									<input
										placeholder="081234567890"
										type="text"
										class="flex-grow w-full h-12 px-4 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
										id="phone"
										name="phone"
										on:blur={handleChange}
										on:change={handleChange}
										bind:value={$form.phone}
									/>
									{#if $errors.phone}
										<div class="px-2 text-xs text-red-500 mb-2">
											<small transition:fade>{$errors.phone}</small>
										</div>
									{/if}
								</div>
								<div class="mt-4 mb-0">
									<button
										disabled={!$isValid || $isSubmitting}
										type="submit"
										class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-900 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
									>
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="body-font">
	<div
		class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
	>
		<div class="grid gap-5 row-gap-8 lg:grid-cols-2">
			<div class="flex flex-col justify-center">
				<div class="max-w-xl mb-6">
					<h2
						class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
					>
						Welcome our <br class="hidden md:block" />
						visitors
					</h2>
					<p class="text-base text-gray-700 md:text-lg ">
						Talk to us to find the right solution <br /> for your IOT industry's requirements
					</p>
				</div>
				<div class="grid gap-5 row-gap-8 sm:grid-cols-2">
					<div
						class="bg-white border-l-4 shadow-sm border-amber-500 hover:border-amber-700 hover:shadow-lg"
					>
						<div class="h-full p-5 border border-l-0 rounded-r">
							<h6 class="mb-2 font-bold leading-5">Indonesia Visitor</h6>
							<p class="text-sm text-gray-900">
								If you are a domestic visitor, this section is for you, please sign in, all products
								for local customers
							</p>
						</div>
					</div>
					<div
						class="bg-white border-l-4 shadow-sm border-amber-500 hover:border-amber-700 hover:shadow-lg"
					>
						<div class="h-full p-5 border border-l-0 rounded-r">
							<h6 class="mb-2 font-bold leading-5">Overeas Visitor</h6>
							<p class="text-sm text-gray-900">
								If you are an overseas visitor, this section is for you, please sign in, all
								products for overseas customers
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<img
					class="object-cover object-right w-full h-56 rounded shadow-lg sm:h-96"
					src="https://cdn.hms-networks.com/images/default-source/top-banners---1920-500---all-brands/ewon-slides/edited_machine-builder_1920x500px_v1_lighter.jpg?sfvrsn=711401d7_1"
					alt=""
				/>
			</div>
		</div>
	</div>
</section>

<section class="w-full h-auto items-center bg-gray-100 bg-opacity-50">
	<div class="px-4 py-16 mt-0 mx-auto max-w-5xl">
		<div class="grid grid-cols-2 mt-0 gap-4 text-center lg:grid-cols-6">
			<div class="flex items-center justify-center">
				<img src="/img/industries/img-1.png" alt="Todoist Logo" class="block object-cover h-20" />
			</div>
			<div class="flex items-center justify-center">
				<img src="/img/industries/img-2.png" alt="Todoist Logo" class="block object-cover h-20" />
			</div>
			<div class="flex items-center justify-center">
				<img src="/img/industries/img-3.png" alt="Todoist Logo" class="block object-cover h-20" />
			</div>
			<div class="flex items-center justify-center">
				<img src="/img/industries/img-4.png" alt="Todoist Logo" class="block object-cover h-20" />
			</div>
			<div class="flex items-center justify-center">
				<img src="/img/industries/img-5.png" alt="Todoist Logo" class="block object-cover h-20" />
			</div>
			<div class="flex items-center justify-center">
				<img src="/img/industries/img-6.png" alt="Todoist Logo" class="block object-cover h-20" />
			</div>
		</div>
	</div>
</section>

<section class="body-text">
	<div
		class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
	>
		<div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
			<h2
				class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
			>
				<span class="inline-block mb-1 sm:mb-4">
					Exhibitons List<br class="hidden md:block" />
				</span>
				<div
					class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"
				/>
			</h2>
			<p class="text-gray-700 lg:text-sm lg:max-w-md">
				<span class="font-bold">"Don't miss it "</span> visit our exhibition and get interesting offers
				from us, all the offers we provide will be your advantage.
			</p>
		</div>
		<div class="grid gap-6 row-gap-5 mb-8 sm:grid-cols-2 md:grid-cols-3 sm:row-gap-6">
			<a href="/" aria-label="View Item">
				<div
					class="bg-amber-500 hover:bg-amber-600 relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="absolute inset-y-0 right-0 w-auto h-56 md:h-64 xl:h-80">
						<div class="h-56 md:h-64 xl:h-80 items-center bg-sky-700 px-2 py-4">
							<svg
								class="w-6 h-6 text-white"
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
						</div>
					</div>
					<img
						class="object-contain object-center w-auto h-56 md:h-64 xl:h-80"
						src="/img/exhibitions/thumb-rev-4.jpg"
						alt=""
					/>
					<div
						class="absolute inset-0 px-6 py-20 transition-opacity duration-200 bg-sky-900 bg-opacity-75 opacity-0 hover:opacity-100"
					>
						<p class="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
						<p class="text-sm tracking-wide text-gray-300">
							Painted between 1503 and 1517, Da Vinci’s alluring portrait has been dogged by two
							questions since the day it was made: Who’s the subject and why is she smiling?
						</p>
					</div>
				</div>
			</a>
			<a href="/" aria-label="View Item">
				<div
					class="bg-amber-500 hover:bg-amber-600 relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="absolute inset-y-0 right-0 w-auto h-56 md:h-64 xl:h-80">
						<div class="h-56 md:h-64 xl:h-80 items-center bg-sky-700 px-2 py-4">
							<svg
								class="w-6 h-6 text-white"
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
						</div>
					</div>
					<img
						class="object-contain object-start w-auto h-56 md:h-64 xl:h-80"
						src="/img/exhibitions/thumb-rev-5.jpg"
						alt=""
					/>
					<div
						class="absolute inset-0 px-6 py-20 transition-opacity duration-200 bg-sky-900 bg-opacity-75 opacity-0 hover:opacity-100"
					>
						<p class="mb-4 text-lg font-bold text-gray-100">The Starry Night</p>
						<p class="text-sm tracking-wide text-gray-300">
							Vincent Van Gogh’s most popular painting, The Starry Night was created by Van Gogh at
							the asylum in Saint-Rémy, where he’d committed himself in 1889.
						</p>
					</div>
				</div>
			</a>
			<a href="/" aria-label="View Item">
				<div
					class="bg-amber-500 hover:bg-amber-600 relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="absolute inset-y-0 right-0 w-auto h-56 md:h-64 xl:h-80">
						<div class="h-56 md:h-64 xl:h-80 items-center bg-sky-700 px-2 py-4">
							<svg
								class="w-6 h-6 text-white"
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
						</div>
					</div>
					<img
						class="object-contain object-start w-autoh-56 md:h-64 xl:h-80"
						src="/img/exhibitions/thumb-rev-6.png"
						alt=""
					/>
					<div
						class="absolute inset-0 px-6 py-20 transition-opacity duration-200 bg-sky-900 bg-opacity-75 opacity-0 hover:opacity-100"
					>
						<p class="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
						<p class="text-sm tracking-wide text-gray-300">
							Opulently gilded and extravagantly patterned, The Kiss, Gustav Klimt’s fin-de-siècle
							portrayal of intimacy, is a mix of Symbolism and Vienna Jugendstil, the Austrian
							variant of Art Nouveau.
						</p>
					</div>
				</div>
			</a>
			<a href="/" aria-label="View Item">
				<div
					class="bg-amber-500 hover:bg-amber-600 relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="absolute inset-y-0 right-0 w-auto h-56 md:h-64 xl:h-80">
						<div class="h-56 md:h-64 xl:h-80 items-center bg-sky-700 px-2 py-4">
							<svg
								class="w-6 h-6 text-white"
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
						</div>
					</div>
					<img
						class="object-contain object-start w-auto h-56 md:h-64 xl:h-80"
						src="/img/exhibitions/thumb-rev-7.jpg"
						alt=""
					/>
					<div
						class="absolute inset-0 px-6 py-20 transition-opacity duration-200 bg-sky-900 bg-opacity-75 opacity-0 hover:opacity-100"
					>
						<p class="mb-4 text-lg font-bold text-gray-100">The Harvesters</p>
						<p class="text-sm tracking-wide text-gray-300">
							Bruegel’s fanfare for the common man is considered one of the defining works of
							Western art. This composition was one of six created on the theme of the seasons.
						</p>
					</div>
				</div>
			</a>
			<a href="/" aria-label="View Item">
				<div
					class="bg-amber-500 hover:bg-amber-600 relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="absolute inset-y-0 right-0 w-auto h-56 md:h-64 xl:h-80">
						<div class="h-56 md:h-64 xl:h-80 items-center bg-sky-700 px-2 py-4">
							<svg
								class="w-6 h-6 text-white"
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
						</div>
					</div>
					<img
						class="object-contain object-start w-auto h-56 md:h-64 xl:h-80"
						src="/img/exhibitions/thumb-rev-8.jpg"
						alt=""
					/>
					<div
						class="absolute inset-0 px-6 py-20 transition-opacity duration-200 bg-sky-900 bg-opacity-75 opacity-0 hover:opacity-100"
					>
						<p class="mb-4 text-lg font-bold text-gray-100">The Harvesters</p>
						<p class="text-sm tracking-wide text-gray-300">
							Bruegel’s fanfare for the common man is considered one of the defining works of
							Western art. This composition was one of six created on the theme of the seasons.
						</p>
					</div>
				</div>
			</a>
			<a href="/" aria-label="View Item">
				<div
					class="bg-amber-500 hover:bg-amber-600 relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
				>
					<div class="absolute inset-y-0 right-0 w-auto h-56 md:h-64 xl:h-80">
						<div class="h-56 md:h-64 xl:h-80 items-center bg-sky-700 px-2 py-4">
							<svg
								class="w-6 h-6 text-white"
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
						</div>
					</div>
					<img
						class="object-contain object-start w-auto h-56 md:h-64 xl:h-80"
						src="/img/exhibitions/thumb-rev-9.jpg"
						alt=""
					/>
					<div
						class="absolute inset-0 px-6 py-20 transition-opacity duration-200 bg-sky-900 bg-opacity-75 opacity-0 hover:opacity-100"
					>
						<p class="mb-4 text-lg font-bold text-gray-100">The Harvesters</p>
						<p class="text-sm tracking-wide text-gray-300">
							Bruegel’s fanfare for the common man is considered one of the defining works of
							Western art. This composition was one of six created on the theme of the seasons.
						</p>
					</div>
				</div>
			</a>
		</div>
	</div>
</section>
<!--
<div class="bg-gray-300">
	{#await getCategory()}
		Loading
	{:then response}
		<pre>{JSON.stringify(response, null, 2)}</pre>
	{/await}
</div>
<div class="bg-gray-200">
	<input type="text" bind:value={category} />
	<button on:click={addCategory}>Add</button>
</div> -->
