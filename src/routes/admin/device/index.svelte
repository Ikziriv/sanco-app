<script>
	import DeviceNav from '../../../components/backend/device/DeviceNav.svelte';
	// Progress Bar
	export let progress = 30;
	$: progress = ((totalSecond - seconedLeft) / totalSecond) * 100;
	// Timer Start
	const totalSecond = 20;
	let seconedLeft = totalSecond;
	let isRunning = false;
	function startTimer() {
		isRunning = true;
		const timer = setInterval(() => {
			seconedLeft -= 1;
			if (seconedLeft == 0) {
				clearInterval(timer);
				isRunning = false;
				seconedLeft = totalSecond;
			}
		}, 1000);
	}
</script>

<svelte:head>
	<title>Dashboard - Device / EWON FLEXY 205</title>
</svelte:head>

<DeviceNav />
<div class="w-full md:w-8/12 h-auto">
	<div
		class="w-full h-screen bg-white scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
	>
		<div class="flex flex-col w-full h-auto flex-grow">
			<div
				class="flex items-center flex-shrink-0 bg-white h-auto md:h-20 w-full border-b py-4 px-8 z-20"
			>
				<div class="w-full flex justify-between">
					<div class="flex flex-col text-left">
						<span class="font-bold text-2xl text-gray-800">Device / Ewon Flexy 205</span>
						<span class="text-xs text-gray-600 pl-0"
							>Ewon Flexy provides tray sealing machines with real time production data</span
						>
					</div>

					<div class="flex flex-row">
						<button
							class="flex items-center justify-center mt-0.5 h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-800"
						>
							Add New
						</button>
						<button class="relative ml-2 text-sm focus:outline-none group">
							<div class="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-800">
								<svg
									class="w-5 h-5 mx-auto"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
									/>
								</svg>
							</div>
							<div
								class="absolute right-0 flex-col items-start hidden w-40 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex"
							>
								<a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 1</a>
								<a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 2</a>
								<a class="w-full px-4 py-2 text-left hover:bg-gray-900" href="#">Menu Item 3</a>
							</div>
						</button>
					</div>
				</div>
			</div>

			<div class="flex-grow w-full h-auto px-4 py-4 overflow-auto">
				<div class="w-full h-auto border bg-white rounded-xl">
					<div class="flex justify-between">
						<div class="w-auto h-auto px-4 py-4">
							<div class="flex flex-row justify-between">
								<div class="w-full h-auto">
									<div class="grid grid-cols-4 gap-2 w-full">
										<div
											class="border rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-800 relative"
										>
											<p
												class="text-xs w-max text-gray-700 dark:text-white font-semibold border-b uppercase border-gray-200"
											>
												OEE
											</p>
											<div class="flex items-end space-x-2 my-6">
												<p class="text-4xl text-gray-800 dark:text-white font-bold">95.4%</p>
											</div>

											<div class="absolute bottom-0 inset-x-0 h-auto w-auto">
												<div class="w-full h-3 rounded-xl bg-gray-100">
													<div class="w-10/12 h-full text-center text-xs text-white bg-green-400" />
												</div>
											</div>
										</div>

										<div
											class="border rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-800 relative"
										>
											<p
												class="text-xs w-max text-gray-700 dark:text-white font-semibold border-b uppercase border-gray-200"
											>
												Quality
											</p>
											<div class="flex items-end space-x-2 my-6">
												<p class="text-4xl text-gray-800 dark:text-white font-bold">97.91%</p>
											</div>

											<div class="absolute bottom-0 inset-x-0 h-auto w-auto">
												<div class="w-full h-3 rounded-xl bg-gray-100">
													<div class="w-11/12 h-full text-center text-xs text-white bg-green-400" />
												</div>
											</div>
										</div>

										<div
											class="border rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-800 relative"
										>
											<p
												class="text-xs w-max text-gray-700 dark:text-white font-semibold border-b uppercase border-gray-200"
											>
												Availability
											</p>
											<div class="flex items-end space-x-2 my-6">
												<p class="text-4xl text-gray-800 dark:text-white font-bold">64%</p>
											</div>

											<div class="absolute bottom-0 inset-x-0 h-auto w-auto">
												<div class="w-full h-3 rounded-xl bg-gray-100">
													<div class="w-6/12 h-full text-center text-xs text-white bg-green-400" />
												</div>
											</div>
										</div>

										<div
											class="border rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-800 relative"
										>
											<p
												class="text-xs w-max text-gray-700 dark:text-white font-semibold border-b uppercase border-gray-200"
											>
												Operation
											</p>
											<div class="flex items-end space-x-2 my-6">
												<p class="text-4xl text-gray-800 dark:text-white font-bold">96.88%</p>
											</div>

											<div class="absolute bottom-0 inset-x-0 h-auto w-auto">
												<div class="w-full h-3 rounded-xl bg-gray-100">
													<div class="w-10/12 h-full text-center text-xs text-white bg-green-400" />
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="w-40 h-auto">
									<div class="flex flex-col justify-end w-full overflow-y-auto ml-10">
										<div class="mb-3 flex w-40">
											<div
												class="w-12 h-6 flex items-center bg-gray-300 rounded-full mx-1 px-1 bg-sky-700"
											>
												<!-- Switch -->
												<div
													class="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-6"
												/>
											</div>
											<span class="text-xs text-gray-400 font-medium ml-2"> Robot 1 </span>
										</div>
										<div class="mb-3 flex w-40">
											<div
												class="w-12 h-6 flex items-center bg-gray-300 rounded-full mx-1 px-1 bg-sky-700"
											>
												<!-- Switch -->
												<div
													class="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-6"
												/>
											</div>
											<span class="text-xs text-gray-400 font-medium ml-2"> Robot 2 </span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="w-full h-auto px-4 py-0">
				<div class="w-full h-auto border bg-white rounded-tl-xl rounded-tr-xl relative">
					<div class="flex justify-between">
						<div class="w-auto h-auto px-4 py-4">
							<div class="flex flex-row justify-start">
								<div class="grid grid-cols-4 gap-4">
									<div class="col-span-4 md:col-span-1 flex">
										<button
											type="button"
											class="py-2 px-4 flex justify-center items-center  bg-white hover:bg-gray-100 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 md:w-12 h-12 rounded-lg "
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												class="bi bi-gear-wide"
												viewBox="0 0 16 16"
											>
												<path
													d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"
												/>
											</svg>
										</button>
									</div>
									<div class="col-span-4 md:col-span-1 flex">
										<button
											type="button"
											class="py-2 px-4 flex justify-center items-center  bg-white hover:bg-gray-100 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 md:w-12 h-12 rounded-lg "
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												class="bi bi-file-earmark-bar-graph-fill"
												viewBox="0 0 16 16"
											>
												<path
													d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"
												/>
											</svg>
										</button>
									</div>
									<div class="col-span-4 md:col-span-1 flex">
										<button
											type="button"
											class="py-2 px-4 flex justify-center items-center  bg-white hover:bg-gray-100 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 md:w-12 h-12 rounded-lg "
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												class="bi bi-bar-chart-line-fill"
												viewBox="0 0 16 16"
											>
												<path
													d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"
												/>
											</svg>
										</button>
									</div>
									<div class="col-span-4 md:col-span-1 flex">
										<button
											type="button"
											class="py-2 px-4 flex justify-center items-center  bg-red-500 hover:bg-red-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white border border-red-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 md:w-12 h-12 rounded-lg "
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												class="bi bi-hand-index-thumb-fill"
												viewBox="0 0 16 16"
											>
												<path
													d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>

						<div class="w-auto h-auto px-4 py-5">
							<div class="flex flex-row justify-end">
								<div class="grid grid-cols-2 gap-2">
									<div class="col-span-2 md:col-span-1 flex">
										<button
											disabled={isRunning}
											on:click={startTimer}
											type="button"
											class="start py-2 px-4 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												class="bi bi-play-fill mr-2"
												viewBox="0 0 16 16"
											>
												<path
													d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
												/>
											</svg>
											Start
										</button>
									</div>
									<div class="col-span-2 md:col-span-1 flex">
										<button
											type="button"
											class="py-2 px-4 flex justify-center items-center  bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												class="bi bi-stop-fill mr-2"
												viewBox="0 0 16 16"
											>
												<path
													d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"
												/>
											</svg>
											Stop
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="absolute bottom-0 inset-x-0">
						<div class="w-full h-1 bg-gray-200">
							<div class="h-full bg-green-400 z-10" style="width: {progress}%;" />
						</div>
					</div>
				</div>

				<div class="flex justify-between mb-2 px-4">
					<small class="text-xs text-left text-gray-400">Progress : {progress}%</small>
					<small class="text-xs text-left text-gray-400">Timer : {seconedLeft} / sec</small>
				</div>
			</div>

			<div class="w-full h-auto px-4 py-4">
				<div class="w-full h-auto border bg-white rounded-xl">
					<div class="flex flex-col md:flex-row justify-center md:justify-between">
						<div class="w-auto h-auto px-4 py-4">
							<div class="flex flex-col md:flex-row justify-center md:justify-start">
								<div
									class="shadow-lg rounded-2xl py-4 px-8 bg-white dark:bg-gray-800 mb-8 md:mr-4 md:mb-0"
								>
									<div class="flex items-center">
										<p class="text-sm leading-none text-black dark:text-white ml-0">Production</p>
									</div>
									<div class="flex flex-col justify-start">
										<p class="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
											4487
										</p>
										<div class="flex items-center text-blue-500 text-sm">
											<svg
												width="20"
												height="20"
												fill="currentColor"
												viewBox="0 0 1792 1792"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
												/>
											</svg>
											<span class="text-gray-400 ml-1"> Actual Value </span>
										</div>
									</div>
								</div>

								<div
									class="shadow-lg rounded-2xl py-4 px-8 bg-white dark:bg-gray-800 mb-8 md:mr-4 md:mb-0"
								>
									<div class="flex items-center">
										<p class="text-sm leading-none text-black dark:text-white ml-0">Production</p>
									</div>
									<div class="flex flex-col justify-start">
										<p class="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
											9000
										</p>
										<div class="flex items-center text-green-500 text-sm">
											<svg
												width="20"
												height="20"
												fill="currentColor"
												viewBox="0 0 1792 1792"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
												/>
											</svg>
											<span class="text-gray-400 ml-1"> Target Value </span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="w-auto h-auto px-4 py-4">
							<div class="flex flex-col md:flex-row justify-center md:justify-end">
								<div class="shadow-lg rounded-2xl py-4 px-8 bg-white dark:bg-gray-800 mr-0">
									<div class="flex items-center">
										<p class="text-sm leading-none text-black dark:text-white ml-0">Production</p>
									</div>
									<div class="flex flex-col justify-start">
										<p class="text-yellow-500 dark:text-gray-100 text-4xl text-left font-bold my-4">
											49.85
										</p>
										<div class="flex items-center text-yellow-500 text-sm">
											<svg
												width="20"
												height="20"
												fill="currentColor"
												viewBox="0 0 1792 1792"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
												/>
											</svg>
											<span class="text-gray-400 ml-1"> Average Value </span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.start[disabled] {
		background-color: rgb(194, 194, 194);
		cursor: not-allowed;
	}
</style>
