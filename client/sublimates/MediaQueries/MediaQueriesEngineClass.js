export default class MediaQueriesEngineClass {


    screen_320 = () => {
        if(typeof window === 'undefined') return false;
        return window.matchMedia('only screen and (max-width: 321px)').matches;
    };


    screen_375 = () => {
        if(typeof window === 'undefined') return false;
        return window.matchMedia('only screen and (max-width: 376px)').matches;
    };


    screen_425 = () => {
        if(typeof window === 'undefined') return false;
        return window.matchMedia('only screen and (max-width: 426px)').matches;
    };


    screen_768 = () => {
        if(typeof window === 'undefined') return false;
        return window.matchMedia('only screen and (max-width: 769px)').matches;
    };


    screen_1024 = () => {
        if(typeof window === 'undefined') return false;
        return window.matchMedia('only screen and (max-width: 1025px)').matches;
    };


    screen_1440 = () => {
        if(typeof window === 'undefined') return false;
        return window.matchMedia('only screen and (max-width: 1441px)').matches;
    };


    screen_2560 = () => {
        if(typeof window === 'undefined') return false;
        return window.matchMedia('only screen and (max-width: 2561px)').matches;
    };


}