<script>
	export let segment;
</script>

<div class="flex flex-col w-full h-auto">
	<div class="grid grid-cols-3 gap-0 w-full">
		<div class="col-span-1 md:col-span-3">
			<a class="mb-0 border-b" aria-current={segment === undefined ? 'page' : undefined} href=".">
				<div class="w-full h-20" style="background-color: #e4eaf1;">
					<span class="flex justify-center py-7">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-info-circle w-6 h-6"
							viewBox="0 0 16 16"
						>
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path
								d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
							/>
						</svg>
					</span>
				</div>
			</a>
		</div>
		<div class="col-span-1 md:col-span-3">
			<a class="mb-0 border-b" aria-current={segment === 'about' ? 'page' : undefined} href="about">
				<div class="w-full h-20" style="background-color: #e4eaf1;">
					<span class="flex justify-center py-7">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-layers w-6 h-6"
							viewBox="0 0 16 16"
						>
							<path
								d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z"
							/>
						</svg>
					</span>
				</div>
			</a>
		</div>
		<div class="col-span-1 md:col-span-3">
			<a
				class="mb-0 border-b"
				rel="prefetch"
				aria-current={segment === 'blog' ? 'page' : undefined}
				href="blog"
			>
				<div class="w-full h-20" style="background-color: #e4eaf1;">
					<span class="flex justify-center py-7">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-download w-6 h-6"
							viewBox="0 0 16 16"
						>
							<path
								d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
							/>
							<path
								d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
							/>
						</svg>
					</span>
				</div>
			</a>
		</div>
	</div>
</div>

<style>
</style>
