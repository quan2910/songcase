import {Manager} from "./manager";
import {User} from "../model/User";

export class UserManage implements Manager<User> {
    listUser: User[] = [];



    add(t: User) {
        this.listUser.push(t);
    }

    deleteById(id: number) {

    }

    editById(id: number) {

    }

    findById(id: number) {

    }

    showAll() {

    }

}