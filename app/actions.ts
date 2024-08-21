"use server"
import {nanoid} from "nanoid"
import { db } from "@/drizzle/db"
import { links } from "@/drizzle/schema"

export async function handleSubmit(url:string): Promise<string>{
    try {
        const shortUrl = await db.insert(links).values([
            {
                id:nanoid(15),
                og:url,
                shorted:nanoid(10)
            }
        ]).returning()

        return shortUrl[0].shorted
    } catch (error) {
    return JSON.stringify(error)
    }
}