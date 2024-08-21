import { db } from "@/drizzle/db"
import { links } from "@/drizzle/schema"
import { eq } from "drizzle-orm"

export async function getUrl(shortId:string){
try {
    const og_url = await db.select().from(links).where(eq(links.shorted,shortId))
    return og_url[0].og
} catch (error) {
    throw new Error(JSON.stringify(error))
}
}