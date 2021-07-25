//@ts-ignore
import { UserService } from "../services/UserService.ts"

const userService = new UserService()

export const getUsers = async ({ response }: { response: any }) => {
  response.body = await userService.getUsers()
}

export const createUsers = async ({ request, response }: { request: any; response: any }) => {
  if (!request.hasBody) {
    response.status = 400
    response.body = { message: "invalid" }
    return
  }

  const {
    value: { name, age }
  } = await request.body()
  const userId = await userService.createUser({ name, age })
  response.body = { msg: "user created", userId }
}
