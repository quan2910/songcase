export class User {
    private _name: string;
    private _userName: string;
    private _passWord: string;

    constructor(name: string, userName: string, passWord: string) {
        this._name = name;
        this._userName = userName;
        this._passWord = passWord;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get passWord(): string {
        return this._passWord;
    }

    set passWord(value: string) {
        this._passWord = value;
    }
}