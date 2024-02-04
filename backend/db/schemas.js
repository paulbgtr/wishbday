import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  userId: serial("user_id")
    .notNull()
    .references(() => users.id),
  userEmail: serial("user_email").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  wishTitle: text("wish_title").notNull(),
  wishBody: text("wish_body").notNull(),
  wishDate: timestamp("wish_date"),
  createdAt: timestamp("created_at").notNull(),
});
