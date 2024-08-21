import "dotenv/config";
import { defineConfig } from "drizzle-kit";

//Configured for SQLite with Turso
export default defineConfig({
  dialect: "sqlite",
  driver: "turso",
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dbCredentials: {
    // DON'T FORGET TO INSERT DATABASE_URL AND DATABASE_AUTH_TOKEN in environment variables
    url: process.env.DATABASE_URL as string,
    authToken: process.env.DATABASE_AUTH_TOKEN as string,
  },
  strict: true,
  verbose: true,
});
