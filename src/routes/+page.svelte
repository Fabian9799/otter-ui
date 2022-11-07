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
	import Footer from '$lib/internal/footer.svelte';
	import LogoText from '$lib/internal/logo-text.svelte';
</script>

<div class="p-3">
	<div class="flex justify-center items-center pt-20">
		<LogoText />
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
				<div class="flex gap-2 mt-2 flex-wrap">
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
	<Footer />
</div>
