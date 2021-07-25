//@ts-ignore
import { serve } from "https://deno.land/std@0.102.0/http/server.ts"
const server = serve({ port: 8000 })
console.log("http://localhost:8000/")
//@ts-ignore
for await (const req of server) {
  req.respond({ body: "Hello World\n" })
}

//RUN: deno run --allow-net <filename>
//-> 実行するプログラムに対して権限を明示的に指定する必要がある
