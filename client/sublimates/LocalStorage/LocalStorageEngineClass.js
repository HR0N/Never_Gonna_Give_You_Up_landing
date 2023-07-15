export default class LocalStorageEngineClass {
    constructor() {
        this.storage = typeof window !== "undefined" ? localStorage : false;
    }


    get(key){
        if(!this.storage) return;
        return this.storage.getItem(key);
    }


    get_parsed(key){
        if(!this.storage) return;
        return JSON.parse(this.storage.getItem(key));
    }


    set(key, value){
        if(!this.storage) return;
        return this.storage.setItem(key, JSON.stringify(value));
    }


    remove(key){
        if(!this.storage) return;
        return this.storage.removeItem(key);
    }


    clear(){
        if(!this.storage) return;
        this.storage.clear();
    }


    length(key){
        if(!this.storage) return;
        return this.storage.getItem(key).length;
    }
}