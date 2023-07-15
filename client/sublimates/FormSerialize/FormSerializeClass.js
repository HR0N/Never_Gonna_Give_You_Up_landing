import FormSerializeEngineClass from "@/sublimates/FormSerialize/FormSerializeEngineClass";

export default class FormSerializeClass extends FormSerializeEngineClass{


    /*
    * Receives the form's submit event. Returns an object with the data of all inputs of the form.
    * Input names are their key. Value - value. | object
    * */
    values(event) {
        return super.values(event);
    }


    /*
    * Receives the form's submit event. Returns an object with the data of all inputs of the form.
    * Input names are their key. Value - value. | object
    * Same function as "values" but additionally trims spaces.
    * */
    trim_values(event) {
        return super.trim_values(event);
    }

}