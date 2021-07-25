//@ts-ignore
import { Router } from "https://deno.land/x/oak/mod.ts"
//@ts-ignore
import { createUsers, getUsers } from "./controllers/userController.ts"

const router = new Router()

router.get("/api/v1/users", getUsers)
router.post("/api/v1/users", createUsers)

export default router
