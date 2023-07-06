import { Theme } from "./themes"
import { UserId } from "./userId"

export interface Posts {
    "likes": string[],
    "_id": string,
    "text": string,
    "userId": UserId
   "themeId": Theme,
   "created_at": string,
   "updatedAt": string,
   "_v": number

}