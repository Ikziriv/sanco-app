<script>
	import sanco from '../../../static/img/sanco-logo.svg';
	// import colors from "../helpers/constanta.js";

	export let segment;
</script>

<div class="flex flex-col w-full h-auto overflow-auto">
	<div class="w-full h-20 bg-gray-900">
		<div class="flex py-4 justify-center">
			<img alt="PT Sanco Logo" class="w-10 h-auto" src={sanco} />
		</div>
	</div>
	<div class="grid grid-cols-5 gap-0 w-full">
		<div class="col-span-1 md:col-span-5">
			<a href="item">
				<div class="w-full h-20" class:selected={segment === 'item'}>
					<span class="flex justify-center py-7">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-box w-6 h-6 text-gray-400"
							viewBox="0 0 16 16"
						>
							<path
								d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
							/>
						</svg>
					</span>
				</div>
			</a>
		</div>

		<div class="col-span-1 md:col-span-5">
			<a aria-current={segment === 'user' ? 'page' : undefined} href="user">
				<div
					class="w-full h-20"
					style={segment === 'user'
						? 'background-color: {colors.selected}'
						: 'background-color: {colors.default}'}
				>
					<span class="flex justify-center py-7">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-people w-6 h-6 text-gray-400"
							viewBox="0 0 16 16"
						>
							<path
								d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
							/>
						</svg>
					</span>
				</div>
			</a>
		</div>

		<div class="col-span-1 md:col-span-5">
			<a aria-current={segment === 'device' ? 'page' : undefined} href="device">
				<div
					class="w-full h-20"
					style={segment === 'device'
						? 'background-color: {colors.selected}'
						: 'background-color: {colors.default}'}
				>
					<span class="flex justify-center py-7">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-hdd w-6 h-6 text-gray-400"
							viewBox="0 0 16 16"
						>
							<path
								d="M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
							/>
							<path
								d="M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198V11zM3.655 4.26 1.592 8.043C1.724 8.014 1.86 8 2 8h12c.14 0 .276.014.408.042L12.345 4.26a.5.5 0 0 0-.439-.26H4.094a.5.5 0 0 0-.44.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"
							/>
						</svg>
					</span>
				</div>
			</a>
		</div>

		<div class="col-span-1 md:col-span-5">
			<a rel="prefetch" aria-current={segment === 'folder' ? 'page' : undefined} href="folder">
				<div
					class="w-full h-20"
					style={segment === 'folder'
						? 'background-color: {colors.selected}'
						: 'background-color: {colors.default}'}
				>
					<span class="flex justify-center py-7">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-folder w-6 h-6 text-gray-400"
							viewBox="0 0 16 16"
						>
							<path
								d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"
							/>
						</svg>
					</span>
				</div>
			</a>
		</div>

		<div class="col-span-1 md:col-span-5">
			<a rel="prefetch" aria-current={segment === 'setting' ? 'page' : undefined} href="setting">
				<div
					class="w-full h-20"
					style={segment === 'setting'
						? 'background-color: {colors.selected}'
						: 'background-color: {colors.default}'}
				>
					<span class="flex justify-center py-7">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-gear w-6 h-6 text-gray-400"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
							/>
							<path
								d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
							/>
						</svg>
					</span>
				</div>
			</a>
		</div>
	</div>
</div>

<style>
	a div.selected {
		background-color: #ff3e00;
		color: white;
	}
</style>
