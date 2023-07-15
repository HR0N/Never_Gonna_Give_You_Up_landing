import {useLocalStorage} from "@/sublimates/hooks/useLocalStorage";
import LocalStorageClass from "@/sublimates/LocalStorage/LocalStorageClass";
import IPGeolocationClass from "@/sublimates/IPGeolocation/IPGeolocationClass";


export default class AuthEngineClass {
    constructor() {
        this.storage = new LocalStorageClass();

        this.guest = {token: null, user: {id: null, name: null, role: "guest", token: null}};
    }


    #storage(){
        const [storage, setStorage] = useLocalStorage(this.guest, "user");
        return [storage, setStorage];
    }


    authentication(data){
        this.storage.set('user', data);
    }


    log_out(){
        this.storage.set("user", this.guest);
    }


    is_guest(){
        const [storage] = this.#storage();
        const user = storage.user;
        return user.hasOwnProperty('role') ? user.role === 'guest' : false;
    }


    is_user(){
        const [storage] = this.#storage();
        const user = storage.user;
        return user.hasOwnProperty('role') ? user.role !== 'guest' : false;
    }


    is_admin() {
        const [storage] = this.#storage();
        const user = storage.user;
        return user.hasOwnProperty('role') ? user.role === 'admin' : false;
    }


    user_id(){
        const [storage] = this.#storage();
        const user = storage.user;
        return user.hasOwnProperty('id') && user.role !== 'guest'
            ? user.id : false;
    }


    name(){
        const [storage] = this.#storage();
        const user = storage.user;
        return user.hasOwnProperty('role') && user.role !== 'guest'
            ? user.name : false;
    }


    role(){
        const [storage] = this.#storage();
        const user = storage.user;
        return user.hasOwnProperty('role') && user.role !== 'guest'
            ? user.role : false;
    }


    token(){
        const [storage] = this.#storage();
        const user = storage.user;
        return user.hasOwnProperty('role') && user.role !== 'guest'
            ? storage.token : false;
    }

}