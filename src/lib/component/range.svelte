<input
	class="range duration-200 [--thumb:theme(colors.gray.600)] [--track:theme(colors.gray.800)] hover:[--thumb:theme(colors.gray.500)] hover:[--track:theme(colors.gray.700)] focus:[--thumb:theme(colors.gray.500)] focus:[--track:theme(colors.gray.700)]"
	type="range"
/>

<style>
	.range {
		background-color: transparent;
		height: 28px;
		-webkit-appearance: none;
		margin: 10px 0;
		width: 100%;
	}
	.range:focus {
		outline: none;
	}
	.range::-webkit-slider-runnable-track {
		width: 100%;
		height: 7px;
		cursor: pointer;
		background: var(--track);
		border-radius: 6px;
	}
	.range::-webkit-slider-thumb {
		height: 22px;
		width: 22px;
		border-radius: 6px;
		background: var(--thumb);
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -7.5px;
	}
	.range:focus::-webkit-slider-runnable-track {
		background: var(--track);
	}
	.range::-moz-range-track {
		width: 100%;
		height: 7px;
		cursor: pointer;
		background: var(--track);
		border-radius: 6px;
	}
	.range::-moz-range-thumb {
		height: 22px;
		width: 22px;
		border-radius: 6px;
		background: var(--thumb);
		cursor: pointer;
	}
	.range::-ms-track {
		width: 100%;
		height: 7px;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
	.range::-ms-fill-lower {
		background: var(--track);
		border-radius: 12px;
	}
	.range::-ms-fill-upper {
		background: var(--track);
		border-radius: 12px;
	}
	.range::-ms-thumb {
		margin-top: 1px;
		height: 22px;
		width: 22px;
		border-radius: 6px;
		background: var(--thumb);
		cursor: pointer;
	}
	.range:focus::-ms-fill-lower {
		background: var(--track);
	}
	.range:focus::-ms-fill-upper {
		background: var(--track);
	}
</style>
