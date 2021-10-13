<script>
	import { Swipe, SwipeItem } from 'svelte-swipe';

	const swipeConfig = {
		autoplay: false,
		delay: 2000,
		showIndicators: true,
		transitionDuration: 1000,
		defaultIndex: 0
	};
</script>

<div class="w-full h-screen realtive">
	<div class="flex justify-center w-full h-screen py-0 relative">
		<Swipe {...swipeConfig}>
			<SwipeItem>
				<div class="relative">
					<img
						src="/img/jumbotron/slide-1.png"
						class="object-none absolute inset-0 object-cover w-full h-screen"
						alt=""
					/>
					<div class="relative bg-opacity-80 bg-gray-900 w-full h-screen">
						<div
							class="relative content-center mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-24"
						>
							<div class="flex flex-col items-start justify-between xl:flex-row">
								<div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-6/12 py-10">
									<h2
										class="max-w-lg mt-10 font-sans text-5xl font-bold tracking-tight text-white sm:leading-none"
									>
										Free Exhibition<br class="hidden md:block" />
									</h2>
									<p class="max-w-xl mt-8 mb-8 text-base text-gray-200">
										We provide innovative product solutions for sustainable progress <br
											class="hidden md:block"
										/>
										Our professional team works to increase productivity and cost effectiveness on the
										market.
									</p>
									<a
										href="/"
										aria-label=""
										class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-amber-500 hover:text-amber-600"
									>
										Register Now
										<svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
											<path
												d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</SwipeItem>
			<SwipeItem>
				<img
					src="/img/jumbotron/slide-2.png"
					class="object-none object-contain w-full h-screen"
					alt=""
				/>
			</SwipeItem>
		</Swipe>
	</div>
</div>

<style>
</style>
