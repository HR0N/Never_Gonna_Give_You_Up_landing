// todo:    https://www.npmjs.com/package/react-slick
import React from "react";
import ss from "./SliderComponent.module.scss";
import Slider from "react-slick";





const SliderComponent = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className={`${ss.slider_wrapper}`}>
                <Slider {...settings} className={`${ss.slider}`}>
                    <div className={`${ss.slick_slide}`}>
                        <h3>1</h3>
                    </div>
                    <div className={`${ss.slick_slide}`}>
                        <h3>2</h3>
                    </div>
                    <div className={`${ss.slick_slide}`}>
                        <h3>3</h3>
                    </div>
                    <div className={`${ss.slick_slide}`}>
                        <h3>4</h3>
                    </div>
                    <div className={`${ss.slick_slide}`}>
                        <h3>5</h3>
                    </div>
                    <div className={`${ss.slick_slide}`}>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default SliderComponent;