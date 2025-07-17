import type { Config } from "drizzle-kit";

// Mock configuration that doesn't require a real database connection
export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg", // Keep this for type compatibility
  dbCredentials: {
    // Use a placeholder to avoid errors during build
    connectionString: "postgresql://mock:mock@localhost:5432/mockdb",
  },
} satisfies Config;
