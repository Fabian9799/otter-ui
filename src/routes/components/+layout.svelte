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
</script>

<div class="flex gap-4">
	<div class="border-r border-gray-800 min-h-screen w-64 p-4 flex flex-col gap-2">
		<div class="border-b border-gray-800 pb-2 flex flex-row flex-wrap gap-2">
			<a class="p-2 bg-gray-800 hover:bg-gray-700 duration-200 rounded-md" href="/">Home</a>
			<a class="p-2 bg-gray-800 hover:bg-gray-700 duration-200 rounded-md" href="/install"
				>Installation</a
			>
		</div>
		{#each data.components as component}
			<a
				class="p-2  {$page.params.name == component.name
					? 'bg-gray-700 hover:bg-gray-600'
					: 'bg-gray-800 hover:bg-gray-700'} duration-200 rounded-md"
				href="/components/{component.name}">{component.name}</a
			>
		{/each}
	</div>
	<div class="p-8 grow">
		<slot />
	</div>
</div>
