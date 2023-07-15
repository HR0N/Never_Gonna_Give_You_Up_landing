import ErrorsList from "@/sublimates/Errors/ErrorsClass/HttpErrorsList";

export default class ErrorsEngineClass extends ErrorsList{
    constructor() {
        super();
    }
    #exist(obj){
        return typeof obj !== 'undefined';
    }

    #get_description(err){
        return typeof err.response?.data?.message !== 'undefined' ? err.response.data.message : err.message;
    }


    handleError(err){
        switch(err.request.status){
            case 401: return {critical: false, title: this.errors[401].title, description: this.errors[401].description};

            case 422: return {critical: false, title: this.errors[422].title, description: this.errors[422].description};

            default: return {critical: true, title: 'Error not defined!', description: 'Bug report sent to Yoda.'};
        }
    }

}