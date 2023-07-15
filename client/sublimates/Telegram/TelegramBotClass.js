import TelegramBotEngineClass from "@/sublimates/Telegram/TelegramBotEngineClass";

export default class TelegramBotClass extends TelegramBotEngineClass {


    /*
    * Send message function. Receives a message in string format.
    * To transfer in a line, you need to specify _t_ | void
    * */
    send_message(message){super.send_message(message)};


    /*
    * Error reporting function. Receives a message in string format.
    * To transfer in a line, you need to specify _t_ | void
    * */
    send_error_report(message) {
        super.send_error_report(message);
    }

}




