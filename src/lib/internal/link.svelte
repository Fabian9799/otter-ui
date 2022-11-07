<script type="ts">
	export let title = '';
	export let url = '';
	let full_url = new URL(url);
</script>

<a href={url} target="_blank" rel="noreferrer">
	<div
		class="p-3 rounded-md border-gray-800 hover:border-gray-700 group border-2 hover:bg-gradient-to-r from-gray-800 via-transparent"
	>
		<div class="flex gap-3">
			<div class="w-14 h-14 flex-none">
				<img src="https://icon.horse/icon/{full_url.hostname}" alt="" />
			</div>
			<div class="flex flex-col grow min-w-0">
				<p class="text-2xl grow text-gray-300">{title}</p>
				<p class="text-gray-500 group-hover:text-gray-400 truncate">{url}</p>
			</div>
		</div>
	</div>
</a>
