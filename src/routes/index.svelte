<script>
	import { _ } from '$lib/scripts/i18n';
	import Jumbotron from '../components/frontend/Jumbotron.svelte';
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
	<Jumbotron />
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
