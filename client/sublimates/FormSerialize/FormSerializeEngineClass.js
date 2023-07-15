import $ from "jquery";
import ValidatorClass from "@/sublimates/Validator/ValidatorClass";

export default class FormSerializeEngineClass {
    constructor() {
        this.validator = new ValidatorClass();
    }


    #fetch_field(data, field){
        field && field.map((k, v)=>{
            if($(v).attr('type') !== 'checkbox' && $(v).attr('type') !== 'radio'){
                data[$(v).attr('name')] = $(v).val();
            }else{
                data[$(v).attr('name')] = $(v).prop('checked');
            }
        });
    }

    values(event){  // inputs must have name
        let data = {};
        let form = event.target;
        let input = $(form).find('input');
        let textarea = $(form).find('textarea');
        let select = $(form).find('select');

        this.#fetch_field(data, input);
        this.#fetch_field(data, textarea);
        this.#fetch_field(data, select);

        return data;
    }

    trim_values(event){
        let data = this.values(event);
        Object.keys(data).map((v, k)=>{
            data[v] = this.validator.escape(this.validator.trim(data[v]));
        });
        return data;
    }


}