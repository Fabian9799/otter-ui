<script lang="ts">
	type Component = {
		name: string;
		src: string;
	};
	type Component2 = {
		components: Component[];
	};
	export let data: Component2 = { components: [] };
	import { page } from '$app/stores';
	import Button from '$lib/internal/button.svelte';
	import Svg from '$lib/internal/svg.svelte';

	let show_sidebar = true;
</script>

<div class="flex gap-4 relative">
	<div class="absolute sm:hidden p-2 top-0">
		<button
			on:click={() => {
				show_sidebar = true;
			}}
			><Button>
				<svg class="w-5 h-5" viewBox="0 0 24 24">
					<g fill="none">
						<path
							d="M24 0v24H0V0h24ZM12.5934901 23.257841l-.0115499.0016721-.0710625.0355308-.0189986.003703-.0151639-.003703-.0710604-.0355308c-.0098319-.0031469-.0186055-.0004896-.0235127.0053943l-.0041098.0109236-.0170913.4272787.0049537.0203897.0110101.0122145.1035729.0739792.0148714.0039203.0117661-.0039203.103575-.0739792.0126036-.0160406.0033589-.0165636-.0170917-.4272787c-.0019886-.0101297-.0085498-.0165317-.0160709-.01799Zm.2649005-.1125548-.0138421.002021-.1847042.0923525-.0099621.0102455-.0026879.0112062.0179.4295275.0048406.0127789.0084511.0070753.2009542.0927458c.0120883.003661.0228931-.0002514.0284884-.0080125l.0039949-.0140625-.0341458-.6146308c-.0023895-.0119434-.0102675-.0195315-.0192871-.0212469Zm-.7153433.002021c-.0098295-.0049147-.020871-.0020466-.0274108.0052882l-.0057192.0139377-.0341459.6146308c-.0006391.0115.0070385.0206963.0168767.0234037l.0156079-.0013287.2009546-.0927458.0094391-.0080584.0038546-.0117958.0178967-.4295275-.003156-.0125938-.0094919-.0088579-.1847058-.0923525Z"
						/>
						<path
							class="fill-gray-500"
							d="M20 17.5c.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5H9c-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5h11Zm-15.5 0c.82843 0 1.5.6716 1.5 1.5s-.67157 1.5-1.5 1.5S3 19.8284 3 19s.67157-1.5 1.5-1.5Zm15.5-7c.8284 0 1.5.6716 1.5 1.5 0 .7796706-.5949121 1.4204457-1.3555442 1.4931332L20 13.5H9c-.82843 0-1.5-.6716-1.5-1.5 0-.7796706.59488554-1.4204457 1.35553954-1.4931332L9 10.5h11Zm-15.5 0c.82843 0 1.5.6716 1.5 1.5s-.67157 1.5-1.5 1.5S3 12.8284 3 12s.67157-1.5 1.5-1.5Zm0-7C5.32843 3.5 6 4.17157 6 5s-.67157 1.5-1.5 1.5S3 5.82843 3 5s.67157-1.5 1.5-1.5Zm15.5 0c.8284 0 1.5.67157 1.5 1.5 0 .77969882-.5949121 1.420449-1.3555442 1.49313345L20 6.5H9c-.82843 0-1.5-.67157-1.5-1.5 0-.77969882.59488554-1.420449 1.35553954-1.49313345L9 3.5h11Z"
						/>
					</g>
				</svg>
			</Button></button
		>
	</div>
	<div
		class="border-r border-gray-800 min-h-screen bg-gray-900 w-64 p-4 {show_sidebar
			? 'flex'
			: 'hidden sm:flex'} z-10 flex-col gap-2 absolute sm:relative top-0"
	>
		<div class="border-b border-gray-800 pb-2 flex flex-row flex-wrap gap-2">
			<a class="p-2 bg-gray-800 hover:bg-gray-700 duration-200 rounded-md" href="/">Home</a>
			<a class="p-2 bg-gray-800 hover:bg-gray-700 duration-200 rounded-md" href="/install"
				>Installation</a
			>
		</div>
		{#each data.components as component}
			<a
				on:click={() => {
					show_sidebar = false;
				}}
				class="p-2 flex gap-2  {$page.params.name == component.name
					? 'bg-gray-700 hover:bg-gray-600'
					: 'bg-gray-800 hover:bg-gray-700'} duration-200 rounded-md"
				href="/components/{component.name}"
			>
				<Svg name="icon-{component.name}" class="w-6 h-6" />
				<p>{component.name}</p>
			</a>
		{/each}
	</div>
	<div class="p-8 grow">
		<slot />
	</div>
</div>
