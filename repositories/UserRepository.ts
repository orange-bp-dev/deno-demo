//@ts-ignore
import { db } from "../db/mongo.ts"
//@ts-ignore
import { InsertUser } from "../types.ts"

export class UserRepository {
  readonly userCollection = db.collection("users")

  async find() {
    return await this.userCollection.find()
  }

  async insertOne(user: InsertUser) {
    return await this.userCollection.insertOne(user)
  }
}
