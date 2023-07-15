import React, {useEffect, useRef, useState} from "react";
import ss from "./Lineage2.module.scss";
import $ from 'jquery';
import Player from "@/Components/Player/Player";


const Lineage2 = () => {

    const [curtains, setCurtains] = useState(true);
    const [videoPause, setVideoPause] = useState(false);
    const [iFrameWasPlayed, setIFrameWasPlayed] = useState(false);
    const videoRef = useRef();
    const iFrameRef = useRef();
    const logoRef = useRef();

    const logoFadeIn = () => {
        setTimeout(() => {$(logoRef.current).fadeToggle(1000);}, 1000);
    };
    const logoFadeOut = () => {
        setTimeout(() => {$(logoRef.current).fadeToggle(1000);}, 1000);
    };

    const play = () => {
        if(!iFrameWasPlayed){
            iFrameRef.current.src += '?autoplay=1';
            setIFrameWasPlayed(true);
        }
        // videoRef.current.play();
    };

    const toggle_pause = () => {
        let cloneVideoPause = structuredClone(videoPause);
        if(cloneVideoPause){
            cloneVideoPause = false;
            videoRef.current.play();
        }else if(!cloneVideoPause){
            cloneVideoPause = true;
            videoRef.current.pause();
        }
        setVideoPause(cloneVideoPause);
    };

    const stop = () => {
        videoRef.current.stop();
    };

    /*const set_volume = (vol)=> {   // value 0 - 100
        videoRef.current.volume = vol / 100;
    };*/

    useEffect(() => {
        /*set_volume(50);*/
    }, []);

    return (
        <>
            <div className={ss.lineage2_wrapper}>
                <div className={ss.lineage2}>
                    <div className={`${ss.background}`}>
                        <div className={`${ss.back}`} onClick={() => {setCurtains(true); logoFadeIn()}}><img src="./../../media/images/l2/arrow-left-solid.svg" alt="back"/></div>
                        {/*<video
                            onClick={toggle_pause}
                            className={ss.player} ref={videoRef} src="./../../media/images/l2/Rick Astley - Never Gonna Give You Up.mp4" muted={false} autoPlay="autoplay"
                        />*/}
                        <iframe ref={iFrameRef} width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen/>
                    </div>
                    <div className={`${ss.curtains}`}>
                        <div ref={logoRef} className={`${ss.logo}`}
                             onClick={() => {
                                 setCurtains(false);
                                 logoFadeOut();
                                 play();
                             }}>
                            <img src="./../../media/images/l2/logo.png" alt="readytodie"/>
                        </div>
                        <div className={`${ss.curtain} ${ss.curtainLeft} ${!curtains && ss.hide}`}>
                            <div className={`${ss.half_title}`}><img src="./../../media/images/l2/Lin.png" alt=""/></div>
                        </div>
                        <div className={`${ss.curtain} ${ss.curtainRight} ${!curtains && ss.hide}`}>
                            <div className={`${ss.half_title}`}><img src="./../../media/images/l2/eage.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lineage2;