<script lang="ts">
	export let name = '';
	import CopyButton from '$lib/internal/copy-button.svelte';
	let copied = false;

	const copyToClipboard = (str: string) => {
		if (navigator && navigator.clipboard && navigator.clipboard.writeText)
			return navigator.clipboard.writeText(str);
		return Promise.reject('The Clipboard API is not available.');
	};
</script>

<div class="border rounded-md p-4 border-gray-800">
	<div class="w-full flex gap-2 flex-col">
		{#await import(`../../lib/component/${name}.svelte?raw`).then((x) => x.default) then src}
			<div>
				<button
					on:click={() => {
						copyToClipboard(src);
						copied = true;
						setTimeout(() => {
							copied = false;
						}, 2000);
					}}
				>
					<CopyButton {copied}>{copied ? 'Copied!' : 'Copy'}</CopyButton>
				</button>
			</div>
		{/await}
		<div class="w-full border-b border-gray-800" />
		{#await import(`../../lib/component/${name}.svelte`) then c}
			<div>
				<svelte:component this={c.default} />
			</div>
		{/await}
	</div>
</div>
