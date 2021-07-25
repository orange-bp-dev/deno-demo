//@ts-ignore
import { Application } from "https://deno.land/x/oak/mod.ts"
//@ts-ignore
import router from "./routes.ts"

const app = new Application()
const port = 8005

app.use(router.routes())
// console.log(`server on ${port}`)

app.use((ctx) => {
  ctx.response.body = "Hello World"
})

//@ts-ignore
await app.listen({ port })
