import { error } from '@sveltejs/kit';
import pMap from 'p-map';
import { basename } from 'path';
import type { RequestHandler } from '@sveltejs/kit';

type Component = {
	name: string;
	src: string;
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const modules = import.meta.glob('../../lib/component/*', { as: 'raw' });
	const icons: Component[] = [];
	await pMap(Object.entries(modules), async function ([filename]) {
		const src: string = (await import(
			`../../lib/component/${basename(filename).split('.svelte')[0]}.svelte` + '?raw'
		).then((x) => x.default)) as string;
		icons.push({
			name: basename(filename).split('.svelte')[0],
			src
		});
	});

	return {
		components: icons
	};
}
