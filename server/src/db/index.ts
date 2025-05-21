import { drizzle } from "drizzle-orm/libsql";

// You can specify any property from the libsql connection options
export const db = drizzle({
	connection: {
		url: process.env.TURSO_DB_URL || "file:dev.db",
		authToken: process.env.TURSO_DB_AUTH_TOKEN || undefined,
	},
});
