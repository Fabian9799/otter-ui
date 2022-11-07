<script lang="ts">
	export let name = '';
	import Button from '$lib/internal/button.svelte';
	let copied = false;

	const copyToClipboard = (str: string) => {
		if (navigator && navigator.clipboard && navigator.clipboard.writeText)
			return navigator.clipboard.writeText(str);
		return Promise.reject('The Clipboard API is not available.');
	};
</script>

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
				<Button {copied}>{copied ? 'Copied!' : 'Copy'}</Button>
			</button>
		</div>
	{/await}
	<div>
		{#await import(`../../lib/component/${name}.svelte`) then c}
			<svelte:component this={c.default} />
		{/await}
	</div>
</div>
