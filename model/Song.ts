export class Song {
    private _id: number;
    private _songName: string;
    private _singer: string;
    private _composer: string;


    constructor(id: number, songName: string, singer: string, composer: string) {
        this._id = id;
        this._songName = songName;
        this._singer = singer;
        this._composer = composer;
    }

    get songName(): string {
        return this._songName;
    }

    set songName(value: string) {
        this._songName = value;
    }

    get singer(): string {
        return this._singer;
    }

    set singer(value: string) {
        this._singer = value;
    }

    get composer(): string {
        return this._composer;
    }

    set composer(value: string) {
        this._composer = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}