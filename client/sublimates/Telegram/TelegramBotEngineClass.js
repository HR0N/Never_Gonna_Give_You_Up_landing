import $ from 'jquery';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default class TelegramBotEngineClass {
    constructor() {
        this.bot_token = process.env.NEXT_PUBLIC__BOT_TOKEN;
        this.chanel = 0;
    }

    #create_message(message) {
        const origin = `%0A%0A🏷 ${process.env.NEXT_PUBLIC_SITE_NAME}`;
        return message.replaceAll('_t_', '%0A') + origin; // _t_ = %0A = transfer to new line
    }

    #create_url(message, chanel = this.chanel, bot = this.bot_token) {
        return `https://api.telegram.org/bot${bot}/sendMessage?chat_id=${chanel}&text=${message}&parse_mode=HTML`;
    }

    #post_send = url => $.post(url);


    send_message(message) {
        let msg = this.#create_message(message);
        let url = this.#create_url(msg);
        this.#post_send(url);
    }


    send_error_report(message) {
        let msg = this.#create_message(message);
        let url = this.#create_url(msg,  process.env.NEXT_PUBLIC__CHANEL_MY_REPORTS);
        this.#post_send(url);
    }


}

