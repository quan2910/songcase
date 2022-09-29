
import {UserManage} from "./service/userManage";
import {User} from "./model/User";
import {Song} from "./model/Song";
import {SongManager} from "./service/songManager";
import {Album} from "./model/Album";
import {AlbumManage} from "./service/albumManage";
// @ts-ignore
let input = require('readline-sync');
let listUserManage: UserManage = new UserManage();
let listSongManage:SongManager = new SongManager();
let listAlbumManage: AlbumManage = new AlbumManage();
let currentUser: User;
function menuLogin() {
    let menu = `----------menu----------\n1.Đang nhap\n2.Dang ky\n0.Thoat`
    let choice: string = null;
    do{
        console.log(menu);
        choice = input.question("Nhap lua chon cua ban: ");
        switch (choice){
            case "1":
                login();
                break;
            case "2":
                register();
                break;
            case "0":
                break;
            default:
                console.log("Sai roi chon lai")
                break;
        }
    }while (choice!="0")
}

function register() {
    let name = input.question("Nhap ho ten :");
    let userName = input.question("Ten dang nhap: ");
    let checkUsn = false;
    for (let i = 0; i < listUserManage.listUser.length; i++) {
        if(listUserManage.listUser[i].userName == userName) {
            checkUsn = true;
        }
    }
    if (checkUsn) {
        console.log("Da ton tai")
        menuLogin();
    }
    let passWord = input.question("Mat khau: ");
    let user = new User(name, userName, passWord);
    listUserManage.add(user);
}
function login(){
    let userNameInput = input.question("Ten dang nhap: ");
    let passWordInput = input.question("Mat khau: ");
    if(passWordInput == "admin" && userNameInput == "admin"){
        console.log("Dang nhap admin thanh cong!")
        console.log(songManage())
}
    for (let i = 0; i < listUserManage.listUser.length; i++) {
        if(listUserManage.listUser[i].passWord == passWordInput && listUserManage.listUser[i].userName == userNameInput) {
            console.log("Dang nhap thanh cong!!!")
            currentUser = listUserManage.listUser[i];
            console.log(albumManage());
        }
    }
    console.log("tai khoan khong dung!!!")

}
function songManage(){
let menu= `---------menu----------\n1.Them bai hat\n2.Hien thi bai hat\n3.Xoa bai hat\n4.Tim kiem bai hat\n5.Dang xuat`
    let choice: string;
    do{
        console.log(menu);
        choice = input.question("Nhap lua chon cua ban: ");
        switch (choice){
            case"1":
                addNewSong();
                break;
            case "2":
                showSong();
                break;
            case "3":
                Choose1();
                break;
            case "4":
                findSongByName();
                break;
            case "5":
                menuLogin();
                break;
            default:
                console.log("Sai roi chon lai")
                break;
        }
    }while (choice!="0")
}
function albumManage()
{let menu= `---------menu----------\n1.Them album\n2.Hien thi album\n3.Xoa album\n4.Sua album\n5.Lua chon album\n6.Tim kiem album\n7.Dang xuat`
    let choice: string;
    do{
        console.log(menu);
        choice = input.question("Nhap lua chon cua ban: ");
        switch (choice){
            case "1":
                addNewAlbum();
                break;
            case "2":
                showAlbum();
                break;
            case "3":
                Choose();
                break;
            case "4":
                editAlbum();
                break;
            case "5":
                let id = input.question("Nhap ma album muon hien thi: ");
                choiceAlbum(id);
                break;
            case "6":
                findAlbumByName();
                break;
            case "7":
                menuLogin();
                break;
            default:
                console.log("Sai roi chon lai")
                break;
        }
    }while (choice!="0")
}
function addNewSong() {
    let id = input.question("Nhap ma bai hat muon them vao: ");
    let songName = input.question("Nhap tên bai hat muon them: ");
    let singer = input.question("Nhap ten ca si: ");
    let composer = input.question("Nhap ten tac gia: ");
    let song = new Song(id, songName, singer, composer);
    listSongManage.add(song);
}
function showSong() {
   listSongManage.showAll();
}
function deleteSong(){
    let id = input.question("Nhap ma bai hat muon xoa: ");
    listSongManage.deleteById(id);
}
function addNewAlbum () {
    let id = input.question("Nhap ma album muon them vao: ");
    let name = input.question("Nhap ten album muon them vao: ");
    let album = new Album(id, name, currentUser);
    listAlbumManage.add(album);
}
function showAlbum(){
    for (let i = 0; i < listAlbumManage.showAll().length; i++) {
        if (listAlbumManage.showAll()[i].createdUser == currentUser) {
            console.log(listAlbumManage.showAll()[i]);
        }
    }
}
function choiceAlbum(id: number) {
    for (let i = 0; i < listAlbumManage.listAlbum.length; i++) {
        if(listAlbumManage.listAlbum[i].id == id) {
            let menu=`-----menu-----\n1.Hien thi danh sach bai hat\n2.Them bai hat\n3.Xoa bai hat\n4.Sua bai hat\n5.Quay lai menu Album`
            let choice: string;
            do{
                console.log(menu);
                choice = input.question("Nhap lua chon cua ban: ");
                switch (choice){
                    case "1":
                        console.log(listAlbumManage.listAlbum[i].listSong)
                        break;
                    case "2":
                        addSongInAlbum();
                        break;
                    case "3":
                        deleteSongInAlbum();
                        break;
                    case "4":
                        editSongInAlbum();
                        break;
                    case "5":
                        albumManage();
                        break;
                    default:
                        console.log("Sai roi chon lai")
                        break;
                }
            }while (choice!="0")
        }
    }
}
function deleteSongInAlbum() {
    let idAlbum = input.question("Nhap id ablumn: ")
    let id = input.question("Nhap ma bai hat muon xoa: ")
    listAlbumManage.findAlbumById(idAlbum).deleteSongById(id);
}
function addSongInAlbum(){
    let idAlbum = input.question("Nhap id album muon them bai hat: ")
    let id = input.question("Nhap id bai hat muon them: ");
    let name = input.question("Nhap ten bai hat muon them: ");
    let singer = input.question("Nhap ten ca si: ");
    let composer = input.question("Nhap ten tac gia: ");
    let songInAlbum = new Song (id, name,singer, composer);
    listAlbumManage.findAlbumById(idAlbum).addSongIntoAlbum(songInAlbum);

}
function deleteAlbum(){
    let id = input.question("Nhap ma album muon xoa: ");
    listAlbumManage.deleteById(id);
}
function editAlbum(){
    let id = input.question("Nhap id album muon sua: ");
    let nameAl = input.question("Nhap ten moi album: ");
    let album = new Album(id, nameAl, currentUser);
    listAlbumManage.editById(id, nameAl);
}
function Choose() {
    let menu = `Ban co muon xoa hay khong?\n1.YES\n2.NO`
    let choice: string;
    do{
        console.log(menu);
        choice = input.question("Nhap lua chon cua ban: ");
        switch (choice){
            case "1":
                deleteAlbum();
                albumManage();
                break;
            case "2":
                albumManage();
                break;
            default:
                console.log("Sai roi chon lai")
                break;
        }
    }while (choice!="0")
}
function Choose1() {
    let menu = `Ban co muon xoa hay khong?\n1.YES\n2.NO`
    let choice: string;
    do{
        console.log(menu);
        choice = input.question("Nhap lua chon cua ban: ");
        switch (choice){
            case "1":
                deleteSong();
                songManage();
                break;
            case "2":
                songManage();
                break;
            default:
                console.log("Sai roi chon lai")
                break;
        }
    }while (choice!="0")
}
function findSongByName() {
    let name = input.question("Nhap ten bai hat can tim: ");
    listSongManage.findByName(name);
}
function findAlbumByName() {
    let name = input.question("Nhap ten album can tim: ");
    listAlbumManage.findAlbumByName(name);
}
function editSongInAlbum() {
    let albumId = input.question("Nhap id album: ");
    let id = +input.question("Nhap id bai hat muon sua: ");
    let name = input.question("Nhap ten bai hat: ");
    let singer = input.question("Nhap ten ca si: ");
    let composer = input.question("Nhap ten tac gia: ");
    let songIntoAlbum = new Song (id, name, singer, composer);
    listAlbumManage.findAlbumById(albumId).editSongById(id, songIntoAlbum);
}

menuLogin()