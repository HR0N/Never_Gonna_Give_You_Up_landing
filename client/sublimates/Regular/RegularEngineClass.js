import MediaQueriesClass from "@/sublimates/MediaQueries/MediaQueriesClass";
import ScrollClass from "@/sublimates/Scroll/ScrollClass";
import FormSerializeClass from "@/sublimates/FormSerialize/FormSerializeClass";
import IPGeolocationClass from "@/sublimates/IPGeolocation/IPGeolocationClass";
import isbot_lib from "isbot";


export default class RegularEngineClass {
    constructor() {
        this.media = new MediaQueriesClass();
        this.scroll = new ScrollClass();
        this.serialize = new FormSerializeClass();
        this.ip = new IPGeolocationClass();
    }


    load(){return typeof window !== 'undefined';}


    is_bot(){
        return this.load() && isbot_lib(navigator.userAgent)
    }


    redirect_homepage(time = 500){
        setTimeout(() => {location.href = '/';}, time);
    }


    state_unshift(state, setState, value){
        const array = [...state];
        array.unshift(value);
        setState(array);
        return array;
    }


    state_push(state, setState, value){
        const array = [...state];
        array.push(value);
        setState(array);
        return array;
    }


    state_shift(state, setState){
        const array = [...state];
        array.shift();
        setState(array);
        return array;
    }


    state_pop(state, setState){
        const array = [...state];
        array.pop();
        setState(array);
        return array;
    }


    array_include_val(array, value){
        return array.indexOf(value) > -1;
    }


    array_include_array(array1, array2){
        let result = false;
        array1.map( (v1) => {
            array2.map( (v2) => {
                if(v2.indexOf(v1) > -1){result = true;}
            });
        });
        return result;
    }


    console(msg, bg = 'background: #222', color = 'greenyellow'){
        console.log(`%c ${msg}`, `${bg}; color: ${color}`);
    }


}