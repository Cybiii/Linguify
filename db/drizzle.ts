import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import "dotenv/config"

import * as schema from "./schema";

const sql = neon("postgresql://linguify_owner:q0ING9bPiznH@ep-silent-queen-a6kw9sa2.us-west-2.aws.neon.tech/linguify?sslmode=require");

const db = drizzle(sql, { schema });

export default db;
