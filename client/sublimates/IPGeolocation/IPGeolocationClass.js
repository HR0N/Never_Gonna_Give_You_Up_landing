import IPGeolocationEngineClass from "@/sublimates/IPGeolocation/IPGeolocationEngineClass";

export default class IPGeolocationClass extends IPGeolocationEngineClass{


    /*
    * Can I use your API on my commercial website?
    * We do not allow commercial use of the free endpoint.
    * */



    /*
    * Returns a promise. The promise contains information about the user. | Promise - object
    * */
    async user_data() {
        return super.user_data();
    }


    /*
    * Returns a promise. The promise contains information about the user. | Promise - object
    * Returns the user's ip | example "12.345.678.987"
    * */
    async ip() {
        return super.ip();
    }


    /*
    * Returns a promise. The promise contains information about the user. | Promise - object
    * Returns the country code of the user | example "UA"
    * */
    async country() {
        return super.country();
    }


    /*
    * Returns a promise. The promise contains information about the user. | Promise - object
    * Returns the name of the country | example "Ukraine"
    * */
    async country_name() {
        return super.country_name();
    }


    /*
    * Returns a promise. The promise contains information about the user. | Promise - object
    * Returns the UTC of the user's region | example "+0200"
    * */
    async utc() {
        return super.utc();
    }


    /*
    * Returns a promise. The promise contains information about the user. | Promise - object
    * Returns the postal code of the region | example "07007"
    * */
    async postal() {
        return super.postal();
    }


    /*
    * Returns a promise. The promise contains information about the user. | Promise - object
    * Returns the user's ISP (Internet Service Provider) name  | example "Freenet LTD"
    * */
    async internet_provider() {
        return super.internet_provider();
    }


    /*
    * Returns a promise. The promise contains information about the user. | Promise - object
    * Returns the currency of the user's region | example "UAH"
    * */
    async currency() {
        return super.currency();
    }


}