import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Client } = pkg;
import { users, contacts } from "./schemas.js";
import "dotenv/config";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();
const db = drizzle(client);

export const getUserByEmail = async (email) => {
  return await db.select().from(users).where(eq(users.email, email));
};

export const getUserById = async (id) => {
  return await db.select().from(users).where(eq(users.id, id));
};

export const createUser = async (email, password) => {
  return await db
    .insert(users)
    .values({ email, password })
    .returning({ id: users.id, email: users.email });
};

export const getContactByUserId = (userId, contactId) => {
  return db
    .select()
    .from(contacts)
    .where(and(eq(contacts.userId, userId), eq(contacts.id, contactId)));
};

export const getContactsByUserId = (userId) => {
  return db.select().from(contacts).where(eq(contacts.userId, userId));
};
