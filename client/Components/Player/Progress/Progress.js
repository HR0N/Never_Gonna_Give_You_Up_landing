import React, {useRef, useState} from "react";
import ss from "./Progress.module.scss"


const Progress = ({progress, duration, setCurrentTime}) => {

    const [buttonDown, setButtonDown] = useState(false);
    const ref_progress = useRef();

    const engine = e => {
        const bar_position_left = ref_progress.current.getBoundingClientRect().left;
        const click_pos = e.clientX;
        let difference = Math.round(click_pos - bar_position_left);

        if(difference < 0){difference = 0}
        else if(difference > 200){difference = 200}

        let progress_percent = difference / 200 * 100;
        progress_percent = Math.round((duration() / 100) * progress_percent);
        setCurrentTime(progress_percent);
    };

    const mouseUp = e => {
        setButtonDown(false);
        engine(e);
    };
    const mouseMove = e => {
        buttonDown && engine(e);
    };

    return (
        <>
            <div className={`${ss.extra_wrapper}`}
                 onMouseMove={mouseMove}
                 onMouseUp={mouseUp}
                 onMouseLeave={() => {setButtonDown(false)}}
            >
                <div className={ss.progress_wrapper}  ref={ref_progress}
                     onMouseDown={() => {setButtonDown(true)}}
                >
                    <div className={ss.progress} style={{'width':`${100 - Math.round(progress)}%`}}/>
                </div>
            </div>
        </>
    );
};

export default Progress;