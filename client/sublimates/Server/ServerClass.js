import ServerEngineClass from "@/sublimates/Server/ServerEngineClass";

export default class ServerClass extends ServerEngineClass{



    /*
    |--------------------------------------------------------------------------
    | Auth methods
    |--------------------------------------------------------------------------
    |
    | Authorization methods on the API backend
    |
    */


    /*
    * login | void
    * */
    login(data, error = () => {}, success = () => {}) {
        super.login(data, error, success);
    }


    /*
    * registration | void
    * */
    registration(data, error = () => {}, success = () => {}) {
        super.registration(data, error, success);
    }

    /*
    |--------------------------------------------------------------------------
    | Non-authenticated CRUD methods
    |--------------------------------------------------------------------------
    |
    | The main crud methods (create, read, update, delete) are described here.
    | These methods are generic and needed to create an interface for the main
    | class. Also added a search method.
    |
    */

    /*
    * create - a method for creating a record in the database. | void
    * */
    create(url, data, error = ()=>{}, success = ()=>{}){super.create(url, data, error, success)};


    /*
    * read - a method for getting records from the database. | void
    * */
    read(url, error = ()=>{}, success = ()=>{}){super.read(url, error, success)};


    /*
    * update - a method for changing a record in the database. | void
    * */
    update(url, data, id, error = ()=>{}, success = ()=>{}){super.update(url, data, id, error, success)};


    /*
    * delete - a method for deleting a record from the database. | void
    * */
    delete(url, id, error = ()=>{}, success = ()=>{}){super.delete(url, id, error, success)};


    /*
    * search - a method for searching for a specific record in the database. | void
    * */
    search(url, id, error = ()=>{}, success = ()=>{}){super.search(url, id, error, success)};


    /*
    * create_file - a method for uploading files. | void
    * */
    create_files(url, id, error = ()=>{}, success = ()=>{}){super.create_files(url, id, error, success)};



    /*
    |--------------------------------------------------------------------------
    | Authenticated CRUD Methods
    |--------------------------------------------------------------------------
    |
    | The main crud methods (create, read, update, delete) are described here.
    | These methods are generic and needed to create an interface for the main
    | class. Also added a search method.
    |
    */

    /*
    * create - a method for creating a record in the database. | void
    * */
    _create(url, data, error = ()=>{}, success = ()=>{}){super._create(url, data, error, success)};


    /*
    * read - a method for getting records from the database. | void
    * */
    _read(url, error = ()=>{}, success = ()=>{}){super._read(url, error, success)};


    /*
    * update - a method for changing a record in the database. | void
    * */
    _update(url, data, id, error = ()=>{}, success = ()=>{}){super._update(url, data, id, error, success)};


    /*
    * delete - a method for deleting a record from the database. | void
    * */
    _delete(url, id, error = ()=>{}, success = ()=>{}){super._delete(url, id, error, success)};


    /*
    * search - a method for searching for a specific record in the database. | void
    * */
    _search(url, id, error = ()=>{}, success = ()=>{}){super._search(url, id, error, success)};


    /*
    * create_file - a method for uploading files. | void
    * */
    _create_files(url, id, error = ()=>{}, success = ()=>{}){super.create_files(url, id, error, success)};


}

