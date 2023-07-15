import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import axios from "axios";
import AuthClass from "@/sublimates/Auth/AuthClass";


export  default class ServerEngineClass {
    constructor() {
        this.url_dev = "http://127.0.0.1:8000/";
        this.url_prod = process.env.NEXT_PUBLIC_SERVER_DOMAIN;
        this.auth = new AuthClass();


        this.axios = axios.create({
            baseURL: this.url_prod,
            timeout: 5000,
            headers: {
                'X-Requested-Width': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            withCredentials: true,
        });
    }


    #guest_headers = () => {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
    };


    #user_headers = () => {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${this.#get_token()}`,
        };
    };
    #guest_files_headers = () => {
        return {
            'Content-type': 'multipart/form-data',
            'Accept': 'application/json',
        };
    };


    #user_files_headers = () => {
        return {
            'Content-type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': `Bearer ${this.#get_token()}`,
        };
    };


    #get_token = () => this.auth.token();


    /*
    |--------------------------------------------------------------------------
    | Method for calling the Sanctum
    |--------------------------------------------------------------------------
    |
    | This method is needed to associate a request with Sanctum. See the
    | Sanctum manual for details.
    |
    */
    #sanctum(callback){
        this.axios.get('sanctum/csrf-cookie').then(callback());
    }


    /*
    |--------------------------------------------------------------------------
    | Auth methods
    |--------------------------------------------------------------------------
    |
    | Authorization methods on the API backend
    |
    */
    login(data, error = ()=>{}, success = ()=>{}){
        this.#sanctum(response => {
            this.axios.post(`api/login`, data, {headers: this.#guest_headers()})
                .catch( err =>{ error(err) })
                .then( response =>{ success(response) });
        });
    }


    registration(data, error = ()=>{}, success = ()=>{}){
        this.#sanctum(response => {
            this.axios.post(`api/register`, data, {headers: this.#guest_headers()})
                .catch( err =>  error(err) )
                .then( response => success(response) );
        });
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
    create(url, data, error = ()=>{}, success = ()=>{}){
        this.axios.post(`api/${url}`, data, {headers: this.#guest_headers()})
            .catch( err =>  error(err) )
            .then( response => success(response) );
    }


    read(url, error = ()=>{}, success = ()=>{}){
        this.axios.get(`api/${url}`, {headers: this.#guest_headers()})
            .catch( err =>  error(err) )
            .then( response => success(response) );
    }


    update(url, data, id, error = ()=>{}, success = ()=>{}){
        this.axios.post(`api/${url}/${id}`, data, {headers: this.#guest_headers()})
            .catch( err =>  error(err) )
            .then( response => success(response) );
    }


    delete(url, id, error = ()=>{}, success = ()=>{}){
        this.axios.get(`api/${url}/${id}`, {headers: this.#guest_headers()})
            .catch( err =>  error(err) )
            .then( response => success(response) );
    }


    search(url, id, error = ()=>{}, success = ()=>{}){
        this.axios.get(`api/${url}/${id}`, {headers: this.#guest_headers()})
            .catch( err =>  error(err) )
            .then( response => success(response) );
    }

    create_files(url, data, error = ()=>{}, success = ()=>{}){
        this.axios.post(`api/${url}`, data, {headers: this.#guest_files_headers()})
            .catch( err =>  error(err) )
            .then( response => success(response) );
    }

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
    _create(url, data, error = ()=>{}, success = ()=>{}){
        this.#sanctum(response => {
            this.axios.post(`api/${url}`, data, {headers: this.#user_headers()})
                .catch( err =>  error(err) )
                .then( response => success(response) );
        });
    }


    _read(url, error = ()=>{}, success = ()=>{}){
        this.#sanctum(response => {
            this.axios.get(`api/${url}`, {headers: this.#user_headers()})
                .catch( err =>  error(err) )
                .then( response => success(response) );
        });
    }


    _update(url, data, id, error = ()=>{}, success = ()=>{}){
        this.#sanctum(response => {
            this.axios.post(`api/${url}/${id}`, data, {headers: this.#user_headers()})
                .catch( err =>  error(err) )
                .then( response => success(response) );
        });
    }


    _delete(url, id, error = ()=>{}, success = ()=>{}){
        this.#sanctum(response => {
            this.axios.get(`api/${url}/${id}`, {headers: this.#user_headers()})
                .catch( err =>  error(err) )
                .then( response => success(response) );
        });
    }


    _search(url, id, error = ()=>{}, success = ()=>{}){
        this.#sanctum(response => {
            this.axios.get(`api/${url}/${id}`, {headers: this.#user_headers()})
                .catch( err =>  error(err) )
                .then( response => success(response) );
        });
    }

    _create_files(url, data, error = ()=>{}, success = ()=>{}){
        this.axios.post(`api/${url}`, data, {headers: this.#user_files_headers()})
            .catch( err =>  error(err) )
            .then( response => success(response) );
    }
}