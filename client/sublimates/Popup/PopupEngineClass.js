import ScrollClass from "@/sublimates/Scroll/ScrollClass";
import ss from "@/sublimates/Popup/Popup.module.scss";
import $ from "jquery";

import full from "@/public/media/Error_boundary/tone1_problem_tne2.mp3";
import tone_1 from "@/public/media/Error_boundary/Quindar_tones (1).mp3";
import tone_2 from "@/public/media/Error_boundary/Quindar_tones (2).mp3";
import problem from "@/public/media/Error_boundary/Houston, we have a problem.mp3";
import RandomClass from "@/sublimates/Random/RandomClass";
import Link from "next/link";
import React from "react";
import ErrorsClass from "@/sublimates/Errors/ErrorsClass/ErrorsClass";


export default class PopupEngineClass {
    constructor() {
        this.scroll = new ScrollClass();
        this.random = new RandomClass();
        this.beeps = [tone_1, tone_2, problem];
        this.errors = new ErrorsClass();
        this.player = typeof window !== 'undefined' ? new Audio() : false;

    }

    #astronaut_beep(){
        this.player.src = this.beeps[this.random.getRandomInt(0,2)];
        this.player.play();
    }

    #nana(e){
        return {
            elem: $(e.target),
            clientX: e.clientX,
            clientY: e.clientY,
            top: $(e.target)[0].getBoundingClientRect().top,
            right: $(e.target)[0].getBoundingClientRect().right,
            bottom: $(e.target)[0].getBoundingClientRect().bottom,
            left: $(e.target)[0].getBoundingClientRect().left,
            height: elem => Math.floor($(elem).outerHeight()),
            width: elem => Math.floor($(elem).outerWidth()),
        };
    }

    error(error, setError = () => {}){
        const err = this.errors.error(error.request.status);
        if(!err.critical) return;
        return (
            <div className={`${ss.popup}`}>
                <div className={`${ss.close}`} onClick={() => setError(false)}>X</div>
                <div className={`${ss.title_wrap}`}>
                    <div className={`${ss.new_error}`}>Error</div>
                    <div className={`${ss.title}`}>Oops!</div>
                    <div className={`${ss.img_astronaut}`} onClick={this.#astronaut_beep.bind(this)}> </div>
                    <div className={`${ss.img_earth}`}> </div>
                </div>
                <div className={`${ss.description_1}`}><div className={`${ss.sm_label}`}>code:</div> {err.title}</div>
                <div className={`${ss.description_2}`}><div className={`${ss.sm_label}`}>message:</div> {err.description}</div>
                <div className={`${ss.buttons}`}>
                    <Link href={'/'} className={`btn btn-dark`}>Go HomePage</Link>
                </div>
            </div>
        );
    }

    click_top(e, text){
        const nana = this.#nana(e);
        const inner_elem = $(`<div class="fade_in_out">${text}</div>`);
        nana.elem.parent().find('.fade_in_out').remove();
        nana.elem.parent().append(inner_elem);
        inner_elem.css({
            'top': nana.top - nana.height(inner_elem) - 6,
            'left': nana.clientX - nana.width(inner_elem) / 2,
        });
        inner_elem.on('click', () => inner_elem.remove());
    }

    click_right(e, text) {
        const nana = this.#nana(e);
        const inner_elem = $(`<div class="fade_in_out">${text}</div>`);
        nana.elem.parent().find('.fade_in_out').remove();
        nana.elem.parent().append(inner_elem);
        inner_elem.css({
            'top': nana.clientY - nana.height(inner_elem) / 2,
            'left': nana.right + 6,
        });
        inner_elem.on('click', () => inner_elem.remove());
    }

    click_bottom(e, text){
        const nana = this.#nana(e);
        const inner_elem = $(`<div class="fade_in_out">${text}</div>`);
        nana.elem.parent().find('.fade_in_out').remove();
        nana.elem.parent().append(inner_elem);
        inner_elem.css({
            'top': nana.bottom + 6,
            'left': nana.clientX - nana.width(inner_elem) / 2,
        });
        inner_elem.on('click', () => inner_elem.remove());
    }

    click_left(e, text){
        const nana = this.#nana(e);
        const inner_elem = $(`<div class="fade_in_out">${text}</div>`);
        nana.elem.parent().find('.fade_in_out').remove();
        nana.elem.parent().append(inner_elem);
        inner_elem.css({
            'top': nana.clientY - nana.height(inner_elem) / 2,
            'left': nana.left - nana.width(inner_elem) - 6,
        });
        inner_elem.on('click', () => inner_elem.remove());
    }


}