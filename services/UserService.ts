//@ts-ignore
import { UserRepository } from "../repositories/UserRepository.ts"
//@ts-ignore
import { InsertUser } from "../types.ts"

export class UserService {
  readonly userRepository = new UserRepository()

  getUsers = async () => {
    return await this.userRepository.find()
  }

  createUser = async (user: InsertUser) => {}
}
