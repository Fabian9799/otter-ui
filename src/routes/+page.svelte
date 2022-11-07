<script lang="ts">
	import InternalButton from '$lib/internal/button.svelte';
	import Button from '$lib/component/button.svelte';
	import ButtonLoading from '$lib/component/button-loading.svelte';
	import ButtonIcon from '$lib/component/button-icon.svelte';
	import ButtonError from '$lib/component/button-error.svelte';
	import Input from '$lib/component/input.svelte';
	import Select from '$lib/component/select.svelte';
	import Range from '$lib/component/range.svelte';
	import Color from '$lib/component/color.svelte';
	import Checkbox from '$lib/component/checkbox.svelte';
	import Toggle from '$lib/component/toggle.svelte';
	import Radio from '$lib/component/radio.svelte';
</script>

<div class="p-2">
	<div class="flex justify-center items-center mt-20">
		<div class="flex flex-col sm:flex-row gap-2">
			<img class="h-24 my-auto" src="otter.svg" alt="" />
			<h1 class="text-center my-auto text-7xl font-bold">
				Otter <span class="text-orange-400">UI</span>
			</h1>
		</div>
	</div>
	<div class="flex justify-center items-center mt-8">
		<div class="gap-4 flex">
			<a href="/install"><InternalButton>Install</InternalButton></a>
			<a href="/components"><InternalButton>Components</InternalButton></a>
		</div>
	</div>
	<div class="flex justify-center items-center mt-8">
		<div class="max-w-4xl border-2 rounded-xl border-gray-800 p-8 w-full flex flex-col gap-2">
			<div>
				<p class="text-lg">Buttons</p>
				<div class="flex gap-2 mt-2">
					<Button />
					<ButtonLoading />
					<ButtonIcon />
					<ButtonError />
				</div>
			</div>
			<div>
				<p class="text-lg">Input</p>
				<div class="flex gap-2 mt-2">
					<Input />
				</div>
			</div>
			<div>
				<p class="text-lg">Select</p>
				<div class="flex gap-2 mt-2">
					<Select />
				</div>
			</div>
			<div>
				<p class="text-lg">Range</p>
				<div class="flex gap-2 mt-2">
					<Range />
				</div>
			</div>
			<div>
				<p class="text-lg">Color</p>
				<div class="flex gap-2 mt-2">
					<Color />
				</div>
			</div>
			<div>
				<p class="text-lg">Checkbox</p>
				<div class="flex gap-2 mt-2">
					<Checkbox />
				</div>
			</div>
			<div>
				<p class="text-lg">Toggle</p>
				<div class="flex gap-2 mt-2">
					<Toggle />
				</div>
			</div>
			<div>
				<p class="text-lg">Radio</p>
				<div class="flex gap-2 mt-2">
					<Radio />
					<Radio />
				</div>
			</div>
		</div>
	</div>
	<div class="flex justify-center items-center mt-8 mb-2">
		<p class="text-gray-600">OtterUI - <a href="https://fabian9799.de">@fabian9799</a></p>
	</div>
</div>
