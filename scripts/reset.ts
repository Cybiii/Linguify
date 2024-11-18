import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(
  "postgresql://linguify_owner:q0ING9bPiznH@ep-silent-queen-a6kw9sa2.us-west-2.aws.neon.tech/linguify?sslmode=require"
);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Resetting the database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    
    console.log("Resetting finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to reset the database");
  }
};

main();
