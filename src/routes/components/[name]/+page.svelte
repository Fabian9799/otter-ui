<script>
	import Component from '$lib/internal/component.svelte';
	import { page } from '$app/stores';
</script>

<div>
	{#key $page.params.name}
		<Component name={$page.params.name} />
	{/key}
</div>
