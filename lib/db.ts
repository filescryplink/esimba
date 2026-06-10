import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

// Mock db for development - won't actually connect to database
const mockDb = {
  select: () => ({ from: () => ({ where: () => ({ limit: () => [] }) }) }),
  insert: () => ({ values: () => {} }),
} as any;

export const db = mockDb;
export const getDb = () => mockDb;