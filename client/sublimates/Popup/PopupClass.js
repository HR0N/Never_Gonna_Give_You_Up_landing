import PopupEngineClass from "@/sublimates/Popup/PopupEngineClass";

export default class PopupClass extends PopupEngineClass{


    /*
    * A function that returns a jsx object of a modal window that
    * displays information about the error. | jsx object
    * */
    error(error = 'default', setError = () => {}) {
        return super.error(error, setError);
    }


    /*
    * Draws a popup on top of the element. Assigned by the callback
    * function to the element. For click event. | void
    * */
    click_top(e, text) {
        super.click_top(e, text);
    }


    /*
    * Displays a popup on the right side of the element. Assigned by the callback
    * function to the element. For click event. | void
    * */
    click_right(e, text) {
        super.click_right(e, text);
    }


    /*
    * Draws a popup from below the element. Assigned by the callback
    * function to the element. For click event. | void
    * */
    click_bottom(e, text) {
        super.click_bottom(e, text);
    }


    /*
    * Displays a popup on the left of the element. Assigned by the callback
    * function to the element. For click event. | void
    * */
    click_left(e, text) {
        super.click_left(e, text);
    }

}