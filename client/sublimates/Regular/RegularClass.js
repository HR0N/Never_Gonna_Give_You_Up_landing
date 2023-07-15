import RegularEngineClass from "@/sublimates/Regular/RegularEngineClass";

export default class RegularClass extends RegularEngineClass{


    /*
    |--------------------------------------------------------------------------
    | Media Queries Class (extends, inherited capabilities) - media
    |--------------------------------------------------------------------------
    |
    | This class inherits the functionality of the Media Query Class.
    | Methods:
    | screen_320, screen_375, screen_425, screen_768, screen_1024, screen_1440,
    | screen_2560
    |
    */


    /*
    |--------------------------------------------------------------------------
    | Scroll Class (extends, inherited capabilities) - scroll
    |--------------------------------------------------------------------------
    |
    | This class inherits the functionality of the Scroll Class.
    | Methods:
    | visible, hidden
    |
    */


    /*
    |--------------------------------------------------------------------------
    | Form Serialize Class (extends, inherited capabilities) - serialize
    |--------------------------------------------------------------------------
    |
    | This class inherits the functionality of the Form Serialize Class.
    | Methods:
    | values, trim_values
    |
    */


    /*
    |--------------------------------------------------------------------------
    | IP Geolocation Class (extends, inherited capabilities) - ip
    |--------------------------------------------------------------------------
    |
    | This class inherits the functionality of the IP Geolocation Class.
    | Methods:
    | user_data, ip, country, country_name, utc, postal, internet_provider, currency
    |
    */


    /*
    * load function - load
    * Function to show if the window object is available | boolean
    * */
    load() {
        return super.load();
    }


    /*
    * Checks if the user is a bot | boolean
    * */
    is_bot() {
        return super.is_bot();
    }


    /*
    * Redirects the user to the home page with a 500ms delay. | void
    * Optionally accepts a delay parameter.
    * */
    redirect_homepage(time = 500) {
        super.redirect_homepage(time);
    }


    /*
    * The state_unshift() method adds a new element to an state (at the beginning), and "unshifts"
    * older elements | array
    * */
    state_unshift(state, setState, value) {
        return super.state_unshift(state, setState, value);
    }


    /*
    * The state_push() method adds a new element to an state (at the end) | array
    * */
    state_push(state, setState, value) {
        return super.state_push(state, setState, value);
    }


    /*
    * The state_shift() method removes the first state element and "shifts" all other elements to
    * a lower index. | array
    * */
    state_shift(state, setState) {
        return super.state_shift(state, setState);
    }


    /*
    * The state_pop() method removes the last element from an state | array
    * */
    state_pop(state, setState) {
        return super.state_pop(state, setState);
    }


    /*
    * Check if an array contains a value | boolean
    * */
    array_include_val(array, value) {
        return super.array_include_val(array, value);
    }


    /*
    * Check if an array contains one of the values of another array | boolean
    * */
    array_include_array(array1, array2) {
        return super.array_include_array(array1, array2);
    }


    /*
    * Prints a colored message to the console. | void
    * */
    console(msg, bg = 'background: #222', color = 'greenyellow') {
        super.console(msg, bg, color);
    }

}