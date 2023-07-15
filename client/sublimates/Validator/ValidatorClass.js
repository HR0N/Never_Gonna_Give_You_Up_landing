import ValidatorEngineClass from "@/sublimates/Validator/ValidatorEngineClass";

export default class ValidatorClass extends ValidatorEngineClass{

    /*
    |--------------------------------------------------------------------------
    | Regular validation functions
    |--------------------------------------------------------------------------
    |
    | They validate and nothing more.
    |
    */

    /*
    * Check if a string is a valid email format | boolean
    * */
    isEmail(val){return super.isEmail(val)};


    /*
    * Check if string length is in allowed range from minimum to maximum | boolean
    * */
    isLength(val, min, max){return super.isLength(val, {min, max})};


    /*
    * Checking for the identity of passwords | boolean
    * */
    isPasEquals(v1, v2){return super.equals(v1, v2)};


    /*
    * Check for allowed characters. Only numbers and letters are allowed. (a-zA-Z0-9) | boolean
    * */
    isAlphanumeric(val){return super.isAlphanumeric(val)};


    /*
    * Checks if a string is empty | boolean
    * */
    isEmpty(val){return super.isEmpty(val)};


    /*
    * Not implemented ?!
    * */
    isStrongPassword(){};


    /*
    * remove characters that appear in the blacklist. ?!
    * */
    blacklist(val, chars){return super.blacklist(val, chars)};


    /*
    * replace <, >, &, ', " and / with HTML entities. ?!
    * */
    escape(val){return super.escape(val)};


    /*
    * trim characters (whitespace by default) from input. | string
    * */
    trim(val, chars){return super.trim(val, chars)};



    // t0do: Validation functions returning error description
    /*
    * Check if a string is a valid email format | '' : "email invalid"
    * */
    isEmailMsg(val){return super.isEmailMsg(val)};


    /*
    * Check if string length is in allowed range | '' : `diapason: ${min}-${max} symbols`
    * */
    isLengthMsg(val, min, max){return super.isLengthMsg(val, min, max)};


    /*
    * Checking for the identity of passwords | '' : "passwords don't match"
    * */
    isPasEqualsMsg(v1, v2){return super.isPasEqualsMsg(v1, v2)};


    /*
    * Check for allowed characters | '' : "only letters and numbers"
    * */
    isAlphanumericMsg(val){return super.isAlphanumericMsg(val)};




    /*
    |--------------------------------------------------------------------------
    | Modified Functions
    |--------------------------------------------------------------------------
    |
    | These are modified functions. They can validate under different conditions.
    | Blah blah, it's already evening and I'm tired, figure it out for yourself...
    |
    */

    /*
    * modified function for synchronous email validation | void
    * */
    email(p1, p2, p3, p4, p5){super.email(p1, p2, p3, p4, p5)};


    /*
    * modified function for synchronous password validation | void
    * */
    pas(p1, p2, p3, p4, p5){super.pas(p1, p2, p3, p4, p5)};


    /*
    * modified function for synchronous confirmation password validation | void
    * */
    pas2(p1, p2, p3, p4, p5){super.pas2(p1, p2, p3, p4, p5)};


}