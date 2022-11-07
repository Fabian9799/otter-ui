<script>
	export let copied = false;
</script>

<button
	class="group flex rounded-md  px-3 py-2 duration-200 hover:gap-2 {copied
		? 'bg-green-800 hover:bg-green-700 focus:bg-green-700'
		: 'bg-gray-800 hover:bg-gray-700 focus:bg-gray-700'} focus:outline-0"
>
	<svg class="my-auto w-0 duration-300 group-hover:w-5" viewBox="0 0 24 24">
		<g fill="none">
			<path d="M0 0h24v24H0z" />
			<path
				class="fill-yellow-300"
				d="M19 2c1.1046 0 2 .89543 2 2v12c0 1.1046-.8954 2-2 2h-2v2c0 1.1046-.8954 2-2 2H5c-1.10457 0-2-.8954-2-2V8c0-1.10457.89543-2 2-2h2V4c0-1.10457.89543-2 2-2h10Zm-9 13H8c-.55228 0-1 .4477-1 1 0 .51285.38604429.9355092.88337975.9932725L8 17h2c.5523 0 1-.4477 1-1 0-.51285-.386027-.9355092-.8833761-.9932725L10 15Zm9-11H9v2h6c1.1046 0 2 .89543 2 2v8h2V4Zm-7 7H8c-.55228 0-1 .4477-1 1s.44772 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1Z"
			/>
		</g>
	</svg>
	<span class="my-auto font-semibold text-white">{copied ? 'Copied!' : 'Copy'}</span>
</button>
