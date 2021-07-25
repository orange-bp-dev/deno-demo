//@ts-ignore
import { Client } from "https://deno.land/x/mysql/mod.ts"
//@ts-ignore
export const client = await new Client().connect({
  hostname: "datsutanso.cyi2bf7igq4h.ap-northeast-1.rds.amazonaws.com",
  username: "admin",
  db: "Datsutanso_Schema",
  password: "arteryex2021"
})
