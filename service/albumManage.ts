import {Manager} from "./manager";
import {Album} from "../model/Album";
import {Song} from "../model/Song";

export class AlbumManage implements Manager<Album> {
    listAlbum: Album[] = [];

    add(t: Album) {
        this.listAlbum.push(t);
    }

    deleteById(id: number) {
        let index = this.findById(id);
        this.listAlbum.splice(index, 1)
    }

    editById(id: number, t: Album) {
        let index = this.findById(id);
        this.listAlbum[index] = t
    }

    findById(id: number) {
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].id == id) {
                return i
            }
        }
        return -1
    }

    showAll() {
        return this.listAlbum;
    }

    findAlbumById(id: number) {
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].id == id) {
                return this.listAlbum[i];
            }
        }
        return null;
    }
    findAlbumByName(name: string) {
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].albumName == name ){
                return this.listAlbum[i];
            }
        }
        return null;
    }
}