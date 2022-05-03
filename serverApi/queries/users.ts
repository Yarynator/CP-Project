import { GetUsers } from "../../firestore/firestore";

export type User = {
  ID: String,
  name: String,
  nickname?: String,
  surname: String,
  clubhouses?: Array<String>,
  favourites?: Array<String>
}

export const users = async (_parent: any, _args: any, context: any): Promise<User[]> => {
    //return [{name: 'Pepa', ID: 1, surname: "Novak", email: "novak@bezvamail.cz", password: "abcd", clubhouses: [5], favourites: [6]}, {name: 'Eva', ID: 2, surname: "Novak", email: "novak@bezvamail.cz", password: "abcd", clubhouses: [5], favourites: [6]}]
    
    return GetUsers();
}


/*export const users = (_parent: any, _args: any, context: any): Promise<User[]> => {
  return [{ID}];
  
}*/