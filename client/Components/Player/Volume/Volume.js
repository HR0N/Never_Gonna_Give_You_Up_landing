import React, {useRef, useState} from "react";
import ss from "./Volume.module.scss"


const Volume = ({volume, setVolume, currentTime, duration, toggle_mute, hover}) => {


    const [buttonDown, setButtonDown] = useState(false);
    const volume_bar_ref = useRef();
    const volume_point_ref = useRef();


    const pointDownHandler = e => {
        setButtonDown(true);
        const bar_position = volume_bar_ref.current.getBoundingClientRect();
        const click_pos = e.clientX;
        let bar_value = Math.round(click_pos - bar_position.left) * 2;
        if(bar_value > 100) bar_value = 100;
        if(bar_value < 0) bar_value = 0;
        setVolume(bar_value);
    };
    const pointOverHandler = e => {
        if(buttonDown){
            const bar_position = volume_bar_ref.current.getBoundingClientRect();
            const click_pos = e.clientX;
            let bar_value = Math.round(click_pos - bar_position.left) * 2;
            if(bar_value > 100) bar_value = 100;
            if(bar_value < 0) bar_value = 0;
            setVolume(bar_value);
        }
    };


    return (
        <>
            <div className={ss.volume_wrapper}
                 onMouseUp={() => {setButtonDown(false)}}
                 onMouseLeave={() => {setButtonDown(false)}}
                 onMouseMove={pointOverHandler}
            >
                <div className={`${ss.volume} ${hover && ss.show_volume}`}>

                    <div className={`${ss.volume_icon}`}
                        onClick={toggle_mute}
                    >
                        {volume === 0 && <i className="fa-solid fa-volume-xmark"/>}
                        {(volume > 0 && volume < 60) && <i className="fa-solid fa-volume-low"/>}
                        {volume >= 60 && <i className="fa-solid fa-volume-high"/>}
                    </div>


                    <div className={`${ss.volume_bar_wrap}`}>
                        <div className={`${ss.volume_bar}`} ref={volume_bar_ref}
                         onMouseDown={pointDownHandler}
                        >
                            <div className={`${ss.volume_point}`} ref={volume_point_ref}
                            style={{'left':`${(volume / 2) - 5}px`}}/>
                        </div>
                    </div>
                    <div className={`${ss.volume_time}`}>
                        <span>{`${currentTime}`}</span>
                        <span> / </span>
                        <span>{`${duration}`}</span>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Volume;