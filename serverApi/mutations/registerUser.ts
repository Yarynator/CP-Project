import { AddUser } from "../../firestore/firestore";
import { User } from "../queries";
type RegisterInput = {
    ID: String,
    name: String,
    nickname?: String,
    surname: String,
    clubhouses?: Array<String>,
    favourites?: Array<String>
}

export const registerUser = async (_parent: any, args: { input: RegisterInput }, context: any, _info: any): Promise<User> => {
    const user : User = {
        ID: args.input.ID,
        name: args.input.name,
        nickname: args.input.nickname,
        surname: args.input.surname,
        clubhouses: args.input.clubhouses,
        favourites: args.input.favourites,
    }

    AddUser(user);

    return user;
}