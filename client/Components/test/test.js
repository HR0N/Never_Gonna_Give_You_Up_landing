import React, {useEffect, useState} from "react";
import ss from "./test.module.scss"
import PopupEngineClass from "@/sublimates/Popup/PopupEngineClass";
import RegularEngineClass from "@/sublimates/Regular/RegularEngineClass";
import TelegramBotClass from "@/sublimates/Telegram/TelegramBotClass";
import SliderComponent from "@/sublimates/Components/Slider/SliderComponent";

const regular = new RegularEngineClass();
const popup = new PopupEngineClass();
const tgbot = new TelegramBotClass();

const Test = () => {


    return (
        <>
            <div className={ss.test}>
                <p>test Component</p>

                <SliderComponent>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </SliderComponent>

            </div>
        </>
    );
};

export default Test;