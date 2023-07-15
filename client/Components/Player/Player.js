import React, {useEffect, useState} from "react";
import ss from "./Player.module.scss";
import {PlayerEngineClass} from "@/sublimates/Player/PlayerEngineClass";
import Volume from "@/Components/Player/Volume/Volume";
import DateEngineClass from "@/sublimates/Date/DateEngineClass";
import Progress from "@/Components/Player/Progress/Progress";
import Screen from "@/Components/Player/Screen/Screen";


const player = new PlayerEngineClass();
const date = new DateEngineClass();


const Player = () => {


    const [playerReady, setPlayerReady] = useState(false);
    const [playerHover, setPlayerHover] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration, setDuration] = useState('0:00');

    const [music, setMusic] = useState(['Enya Boadicea', 'Ich lieb dich nicht immer   Pixie Paris', 'Intro   The XX']);

    useEffect(() => {
        player.init_player(() => {
            setPlaying(false);
        });
        player.set(music[1]);
    }, []);

    useEffect(() => {
        player.set_volume(volume);
    }, [volume]);




    const playHandler = () => {
        setPlaying(true);
        player.play(() => {
            const new_current_time = `${date.sec_to_utc(player.currentTime()).format('m:ss')}`;
            setCurrentTime(new_current_time);
            setProgress(player.currentTime() / player.duration() * 100);
        });
        setDuration(date.sec_to_utc(player.duration()).format('m:ss'));
    };
    const pauseHandler = () => {
        setPlaying(false);
        player.pause();
    };
    const stopHandler = () => {
        player.stop();
        setPlaying(false);
        setProgress(0);
        setCurrentTime('0:00');
    };
    const togglePlayHandler = () => {
        playing ? pauseHandler() : playHandler();
    };

    return (
        <>
            <div className={ss.player_wrapper}>

                <div className={`${ss.buttons}`}>
                    <div className="btn btn-outline-dark"
                         onClick={togglePlayHandler}
                    >{playing
                        ? <i className="fa-solid fa-pause"></i>
                        : <i className="fa-solid fa-play"></i>}
                    </div>
                    <div className="btn btn-outline-dark"
                         onClick={stopHandler}
                    ><i className="fa-solid fa-stop"></i></div>

                </div>


                <div className={ss.player}
                     onMouseOver={() => {setPlayerHover(true)}}
                     onMouseLeave={() => {setPlayerHover(false)}}
                >

                    <Screen
                        track={music[1]}
                    />
                    <Progress progress={progress}
                              duration={() => player.duration()}
                              setCurrentTime={value => {player.currentTime(value)}}
                    />
                    <Volume
                        volume={volume}
                        setVolume={setVolume}
                        currentTime={currentTime}
                        duration={duration}
                        toggle_mute={() => {player.toggle_mute(volume, setVolume)}}
                        hover={playerHover}
                    />
                </div>


            </div>
        </>
    );
};

export default Player;