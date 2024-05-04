import { index, integer, text, sqliteTable } from 'drizzle-orm/sqlite-core';
/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

export const suburbs = sqliteTable(
	'suburbs',
	{
		id: integer('id').primaryKey(),
		suburb: text('suburb'),
		priceMedian: integer('price_median'),
		bathroomsMedian: integer('bathrooms_median'),
		bedroomsMedian: integer('bedrooms_median'),
		garageMedian: integer('garage_median'),
		latitude: integer('latitude', { mode: 'number' }),
		longitude: integer('longitude', { mode: 'number' })
	},
	(suburbs) => ({
		suburbIndex: index('suburb_idx').on(suburbs.suburb)
	})
);
