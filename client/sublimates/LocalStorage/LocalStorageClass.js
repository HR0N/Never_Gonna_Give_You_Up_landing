import LocalStorageEngineClass from "@/sublimates/LocalStorage/LocalStorageEngineClass";

export default class LocalStorageClass extends LocalStorageEngineClass{


    /*
    * Get localStorage data by key | string
    * */
    get(key){return super.get(key)};


    /*
    * Get parsed localStorage data by key | array / object / string
    * */
    get_parsed(key){return super.get_parsed(key)};


    /*
    * Write a key-value pair to localStorage | string
    * */
    set(key, value){return super.set(key, value)};


    /*
    * Delete cell from localStorage by key |
    * */
    remove(key){return super.remove(key)};


    /*
    * Completely clear localStorage |
    * */
    clear(){return super.clear()};


    /*
    * Get cell value length | number
    * */
    length(key){return super.length(key)};

}