import { GetClubhouses } from "../../firestore/firestore";

export type Clubhouse = {
  ID: String,
  name: String,
  img: String,
  description: String,
  web: String,
  street: String,
  city: String,
  zip: String,
  admins?: Array<String>
}

export const clubhouses = async (_parent: any, _args: any, context: any): Promise<Clubhouse[]> => {
    //return[{ID: "fs", name: "Name", img: "img", description: "desc", web: "web", street: "street", city: "city", zip: "zip"}];
    return GetClubhouses();
}