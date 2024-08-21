import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const links = sqliteTable("links", {
  id: text("id", { length: 20 }).notNull().primaryKey(),
  og: text("og", { length: 50 }).notNull(),
  shorted: text("shorted", { length: 256 }).notNull(),
  createdAt: text("created_at").notNull().default(new Date().toString()),
});
