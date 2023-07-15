import React, {useEffect, useRef} from "react";
import ss from "./Screen.module.scss";


const Screen = ({track}) => {

    const ref_parent = useRef();
    const ref_track = useRef();

    const render_title = () => {
        const element = ref_track.current;
        const element_width = element.getBoundingClientRect().width;
        const difference_width = Math.round(200 - element_width);
        if(difference_width > 0){
            document.body.style.cssText = `--difference_width: 0px`;
        }else{
            document.body.style.cssText = `--difference_width: -${Math.abs(difference_width)}px`;
        }
    };

    useEffect(() => {
        render_title();
    });

    return (
        <>
            <div className={ss.screen_wrapper}>
                <div className={ss.screen}
                    onClick={render_title}
                     ref={ref_parent}
                >
                    {track && <div className={`${ss.info}`} ref={ref_track}>{track}</div>}
                </div>
            </div>
        </>
    );
};

export default Screen;