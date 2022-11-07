<script lang="ts">
	import Footer from '$lib/internal/footer.svelte';
	import Link from '$lib/internal/link.svelte';
	import LogoText from '$lib/internal/logo-text.svelte';
</script>

<div class="max-w-xl mx-auto p-4">
	<div class="flex w-full justify-center items-center pt-20">
		<LogoText />
	</div>
	<p class="text-center font-bold text-2xl mt-4">Installation</p>
	<!-- installation start -->
	<div class="flex gap-2 flex-col">
		<h1 class="text-2xl">1. Install Tailwind</h1>
		<Link title="Tailwind" url="https://tailwindcss.com/docs/installation" />
		<h1 class="text-2xl ">2. Import the Sen font</h1>
		<h2 class="">Import the font at the <b>top</b> of your css file</h2>
		<p class="bg-gray-800 rounded-md p-4">
			<span class="text-pink-300">@import</span>
			<span class="text-sky-300">url</span>(<span class="text-orange-300"
				>https://fonts.bunny.net/css?family=sen:400,700,800</span
			>);
		</p>
		<h2 class="">Add the font to your tailwind config</h2>
		<p class="bg-gray-800 rounded-md p-4">a</p>
	</div>
	<!-- installation end -->
</div>

<Footer />
