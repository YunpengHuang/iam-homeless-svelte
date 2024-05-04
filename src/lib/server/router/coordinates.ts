import { db } from '../db';
import * as schema from '$lib/server/schema';
import { gte, lte, and } from 'drizzle-orm';
import type { UserInputeData } from '$lib/types';

export async function getCoordinates(inputData: UserInputeData) {
	return db
		.select({
			suburb: schema.suburbs.suburb,
			latitude: schema.suburbs.latitude,
			longitude: schema.suburbs.longitude
		})
		.from(schema.suburbs)
		.where(
			and(
				lte(schema.suburbs.priceMedian, inputData.priceMax),
				gte(schema.suburbs.priceMedian, inputData.priceMin),
				lte(schema.suburbs.bathroomsMedian, inputData.bathrooms),
				lte(schema.suburbs.bedroomsMedian, inputData.bedrooms),
				lte(schema.suburbs.garageMedian, inputData.garage)
			)
		)
		.limit(10);
}
