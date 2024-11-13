import "dotenv/config";

import { defineConfig } from "drizzle-kit";

console.log(process.env.DATABASE_URL)

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts", // Path to your schema file
  out: "/drizzle", // Output directory for generated files
  dbCredentials: {
    url: "postgresql://linguify_owner:q0ING9bPiznH@ep-silent-queen-a6kw9sa2.us-west-2.aws.neon.tech/linguify?sslmode=require",
  },
});
