//@ts-ignore
// import { db } from "../db/mongo.ts"
//@ts-ignore
import { InsertUser } from "../types.ts"
//@ts-ignore
import { client } from "../db/mysql.ts"

export class UserRepository {
  // readonly userCollection = db.collection("users")

  async find() {
    // return await this.userCollection.find()
    const users = await client.query(`select * from admin`)
    console.log(users)
    return users
  }

  async insertOne(user: InsertUser) {
    // return await this.userCollection.insertOne(user)
  }
}
