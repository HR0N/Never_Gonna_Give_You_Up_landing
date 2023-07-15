import AuthEngineClass from "@/sublimates/Auth/AuthEngineClass";

export default class AuthClass extends AuthEngineClass {


    /*
    * User authentication |
    * */
    authentication(data){return super.authentication(data)};


    /*
    * User log out |
    * */
    log_out(){return super.log_out()};


    /*
    * Returns whether the user is a guest of the site | boolean
    * */
    is_guest(){return super.is_guest()};


    /*
    * Returns whether user is a site user | boolean
    * */
    is_user(){return super.is_user()};


    /*
    * Returns whether the user is a site administrator | boolean
    * */
    is_admin(){return super.is_admin()};


    /*
    * Returns the user id if the user is authenticated | string, false
    * */
    user_id(){return super.user_id()};


    /*
    * Returns the username if the user is authenticated | string, false
    * */
    name(){return super.name()};


    /*
    * Returns the role of the user if they are authenticated | string, false
    * */
    role(){return super.role()};


    /*
    * Returns the user's token if authenticated | string, false
    * */
    token(){return super.token()};

}
