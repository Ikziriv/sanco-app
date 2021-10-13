<script>
	import { fly, fade } from 'svelte/transition';
	import Portal from '../../../components/backend/Portal.svelte';
	import { clickOutside } from '../../../lib/scripts/outside';

	export let isModalOpen = true;
	export let background = true;
	export let titleModal = '';
	export let subTitleModal = '';

	function closeModal() {
		isModalOpen = false;
	}
</script>

{#if isModalOpen}
	<Portal>
		<div
			use:clickOutside
			on:click-outside={closeModal}
			class="fixed items-center px-5 py-12 lg:px-0 z-50 inset-y-0 right-0 mt-48 mr-2"
			transition:fly={{ opacity: 0, y: 100 }}
		>
			<div
				class="w-full bg-white sm:px-0 md:px-5 mx-auto border rounded-lg shadow-xl lg:px-0 text-gray-500"
				aria-hidden="false"
				aria-describedby="modalDescription"
				role="dialog"
			>
				<div class="flex justify-between border-b rounded-t-lg" style="background-color: #0a5f54;">
					<div class="flex items-center justify-start px-4 py-4 bg-transparent">
						<div class="flex justify-start">
							<div class="mr-3">
								<div class="p-2 bg-gray-50 rounded-full">
									<img class="rounded-full w-10 p-1" src="/img/sanco-logo.svg" />
								</div>
							</div>
							<div class="flex flex-col py-2 px-4">
								<span class="font-semibold text-md text-white">{titleModal}</span>
								<span class="font-thin text-xs text-white"> {subTitleModal} </span>
							</div>
						</div>
					</div>

					<div class="flex items-center justify-end px-2 py-4 bg-transparent">
						<button
							on:click={closeModal}
							class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-900 focus:outline-none"
							type="button"
							aria-label="Close"
							aria-hidden="true"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-x w-6 h-6 text-white"
								viewBox="0 0 16 16"
							>
								<path
									d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div
					class="w-full h-auto p-6"
					style="background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');"
				>
					<slot />
				</div>
				<div class="w-full h-auto py-4 px-4">
					<a
						target="_blank"
						href="https://api.whatsapp.com/send?phone=628119235070&text=Hello, I have a question about"
					>
						<div class="bg-green-500 hover:bg-green-600 text-center w-full rounded-full py-1">
							<div class="flex justify-between">
								<span class="text-white ml-6 py-1 font-semibold">Start Chat</span>
								<div class="w-auto px-2 py-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-whatsapp mr-2 w-6 h-6 text-white fill-current"
										viewBox="0 0 16 16"
									>
										<path
											d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
										/>
									</svg>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		{#if background}
			<div on:click={closeModal} transition:fade class="background" />
		{/if}
	</Portal>
{/if}

<style>
</style>
