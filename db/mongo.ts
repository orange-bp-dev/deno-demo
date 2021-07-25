//@ts-ignore
import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts"

const client = new MongoClient()
client.connectWithUri("mongodb+srv://admin:1qazxsw2@cluster0.dnlev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

export const db = client.database("deno")
