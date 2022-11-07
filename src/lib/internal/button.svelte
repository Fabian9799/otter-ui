<script>
	export let copied = false;
</script>

<button
	class="rounded-md {copied
		? 'bg-green-800 hover:bg-green-700 focus:bg-green-700'
		: 'bg-gray-800 hover:bg-gray-700 focus:bg-gray-700'} px-3 py-2 font-semibold text-white duration-200  focus:outline-0"
	><slot /></button
>
