import {Song} from "./Song";
import {User} from "./User";

export class Album {
    private _id: number;
    private _albumName: string;
    private _listSongIntoAlbum = [];
    private _createdUser: User;


    constructor(id: number, albumName: string, createdUser: User) {
        this._id = id;
        this._albumName = albumName;
        this._createdUser = createdUser;
    }

    get albumName(): string {
        return this._albumName;
    }

    set albumName(value: string) {
        this._albumName = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get listSong(): any[] {
        return this._listSongIntoAlbum;
    }

    set listSong(value: any[]) {
        this._listSongIntoAlbum = value;
    }

    get listSongIntoAlbum(): any[] {
        return this._listSongIntoAlbum;
    }

    set listSongIntoAlbum(value: any[]) {
        this._listSongIntoAlbum = value;
    }

    get createdUser(): User {
        return this._createdUser;
    }

    set createdUser(value: User) {
        this._createdUser = value;
    }

    addSongIntoAlbum(t: Song) {
        this._listSongIntoAlbum.push(t)
    }
    findSongById(id: number){
            for (let i = 0; i < this._listSongIntoAlbum.length; i++) {
                if (this._listSongIntoAlbum[i].id == id) {
                    return i
                }
            } return -1
        }
    deleteSongById(id: number){
        let index = this.findSongById(id);
        this._listSongIntoAlbum.splice(index, 1)
    }
    editSongById(id: number, t: Song){
        let index = this.findSongById(id);
        this._listSongIntoAlbum[index] = t;
    }
}