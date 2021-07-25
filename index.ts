//@ts-ignore
import { Application } from "https://deno.land/x/oak/mod.ts"
//@ts-ignore
import router from "./routes.ts"

const app = new Application()
const port = 8000

app.use(router.routes())

//@ts-ignore
await app.listen({ port })
