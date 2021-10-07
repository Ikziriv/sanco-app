<script>
	import { fly, fade } from 'svelte/transition';
	import Portal from '../../components/backend/Portal.svelte';
	import { clickOutside } from '../../lib/scripts/outside';

	export let isModalOpen = false;
	export let background = true;
	export let titleModal = '';

	function closeModal() {
		isModalOpen = false;
	}
</script>

{#if isModalOpen}
	<Portal>
		<div
			use:clickOutside
			on:click-outside={closeModal}
			class="container items-center px-5 py-12 lg:px-20 modal-wrapper"
			transition:fly={{ opacity: 0, y: 100 }}
		>
			<div
				class="w-full bg-white px-5 mx-auto border rounded-lg shadow-xl lg:px-0 text-gray-500 lg:w-1/2"
				aria-hidden="false"
				aria-describedby="modalDescription"
				role="dialog"
			>
				<div class="flex justify-between border-b">
					<div class="flex items-center justify-start px-4 py-4">
						<span class="font-semibold text-lg">{titleModal}</span>
					</div>

					<div class="flex items-center justify-end px-4 py-4">
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
								class="bi bi-x w-6 h-6"
								viewBox="0 0 16 16"
							>
								<path
									d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="w-full h-auto p-6">
					<slot />
				</div>
			</div>
		</div>
		{#if background}
			<div on:click={closeModal} transition:fade class="background" />
		{/if}
	</Portal>
{/if}

<style>
	.modal-wrapper {
		position: fixed;
		inset: 100px 0;
		margin: 0 auto;
		width: 100%;
		z-index: 1001;
	}
	.background {
		background: black;
		cursor: pointer;
		inset: 0;
		opacity: 0.7;
		position: fixed;
		z-index: 1000;
	}
</style>
