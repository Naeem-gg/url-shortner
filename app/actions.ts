"use server";
import { nanoid } from "nanoid";
import { db } from "@/drizzle/db";
import { links } from "@/drizzle/schema";

export async function handleSubmit(url: string) {
  try {
    const shortUrl = await db
      .insert(links)
      .values([
        {
          id: nanoid(15),
          og: url,
        },
      ])
      .returning();

    return {shorted:shortUrl[0].id};
  } catch (error) {
      console.log(error)
    throw new Error("Something went wrong")
  }
}
