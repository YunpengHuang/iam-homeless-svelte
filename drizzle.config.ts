import type { Config } from 'drizzle-kit';
import 'dotenv/config';

// TODO: change to turso for development use
export default {
	schema: './src/lib/server/schema.ts',
	out: './drizzle',
	driver: 'libsql',
	dbCredentials: {
		url: process.env.DATABASE_URL!
	},
	breakpoints: true
} satisfies Config;
