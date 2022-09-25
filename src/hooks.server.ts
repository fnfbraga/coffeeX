import type { Handle } from '@sveltejs/kit';
import { client } from "$lib/pocket-base";
import worldCountriesList from './assets/countries/en/world.json'
import flags from './assets/countries/flags/48x48/flags-48x48.json'

export const handle: Handle = async ({ event, resolve }) => {
	const worldCountries = worldCountriesList
	const countries = await client.records.getFullList("countries")
	if (countries.length === 0) {
		try {
			for await (const country of worldCountries) {
				const data = { name_en: country.name, alpha2: country.alpha2, alpha3: country.alpha3, flag: (flags as any)[(country.alpha2 as any)] as any }
				await client.records.create("countries", data)
			}
		} catch (error) {
			console.error((error as any)?.message)
		}
	}

	return resolve(event);
};
