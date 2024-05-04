import { getCoordinates } from '$lib/server/router/coordinates';
import type { UserInputeData } from '$lib/types';

export async function load({ url }) {
	const searchTerms: UserInputeData = {
		priceMax: url.searchParams.get('maxPrice'),
		priceMin: url.searchParams.get('minPrice'),
		bedrooms: url.searchParams.get('numberOfBedrooms'),
		bathrooms: url.searchParams.get('numberOfBathrooms'),
		garage: url.searchParams.get('numberOfGarage')
	};
	const coordinatesDataDB = await getCoordinates(searchTerms);
	return {
		searchTerms: searchTerms,
		coordinates: coordinatesDataDB
	};
}
