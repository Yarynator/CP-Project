import { AddClubhouse, AddUser } from "../../firestore/firestore";
import { Clubhouse } from "../queries";
type ClubhouseInput = {
    ID: String,
    name: String,
    img: String,
    description: String,
    web: String,
    street: String,
    city: String,
    zip: String
    admins: [String]
}

export const addClubhouse = async (_parent: any, args: { input: ClubhouseInput }, context: any, _info: any): Promise<Clubhouse> => {
    const clubhouse : Clubhouse = {
        ID: args.input.ID,
        name: args.input.name,
        img: args.input.img,
        description: args.input.description,
        web: args.input.web,
        street: args.input.street,
        city: args.input.city,
        zip: args.input.zip,
        admins: args.input.admins
    }

    AddClubhouse(clubhouse);

    return clubhouse;
}