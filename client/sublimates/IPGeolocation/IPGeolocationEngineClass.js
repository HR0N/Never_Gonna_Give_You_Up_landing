export default class IPGeolocationEngineClass {


    async user_data(){
        return await fetch('https://ipapi.co/json/')
            .then(r => r.json())
            .then(r => r);
    }


    async ip(){
        return await this.user_data().then(r => r.ip);
    }


    async country(){
        return await this.user_data().then(r => r.country);
    }


    async country_name(){
        return await this.user_data().then(r => r.country_name);
    }


    async utc(){
        return await this.user_data().then(r => r.utc_offset);
    }


    async postal(){
        return await this.user_data().then(r => r.postal);
    }


    async internet_provider(){
        return await this.user_data().then(r => r.org);
    }


    async currency(){
        return await this.user_data().then(r => r.currency);
    }



}