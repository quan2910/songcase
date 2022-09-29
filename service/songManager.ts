import {Manager} from "./manager";
import {Song} from "../model/Song";

export class SongManager implements Manager<Song>{
    listSong: Song[] = [];
    add(t: Song) {
        this.listSong.push(t);
    }

    deleteById(id: number) {
        let index = this.findById(id);
        this.listSong.splice(index, 1)
    }

    editById(id: number, t: Song) {
        let index = this.findById(id);
        this.listSong[index] = t
    }

    findById(id: number) {
        for (let i = 0; i < this.listSong.length; i++) {
            if (this.listSong[i].id == id) {
                return i
            }
        } return -1
    }

    showAll() {
        console.log(this.listSong);
    }
    findByName(name: string) {
        for (let i = 0; i < this.listSong.length; i++) {
            if (this.listSong[i].songName == name) {
                return this.listSong[i]
            }
        }
        return null
    }

}