import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();
export default {
	schema: './src/lib/server/schema.ts',
	out: './drizzle/migrations',
	driver: 'turso',
	dbCredentials: {
		url: process.env.TURSO_DB_URL!,
		authToken: process.env.TURSO_AUTH_TOKEN!
	}
} satisfies Config;
