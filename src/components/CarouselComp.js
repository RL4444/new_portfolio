import React from "react";
import Carousel from "nuka-carousel";
import CarouselSlide from "./CarouselSlide";
import ReactLoading from "react-loading";

const CarouselComp = props => {
    const mapSlideComponentImages = dataProp => {
        if (dataProp) {
            return dataProp.map((item, index) => {
                return (
                    <CarouselSlide
                        styles={props.styles}
                        slideImageUrl={item.imageUrl}
                        slideText={item.imageText}
                        key={index}
                        buttonDisplayText={item.buttonDisplayText}
                        buttonHref={item.buttonHref}
                    />
                );
            });
        } else {
            return (
                <ReactLoading
                    type={"spokes"}
                    color={"orange"}
                    height={300}
                    width={120}
                    className="loader"
                />
            );
        }
    };
    return (
        <div style={props.styles.carouselContainer}>
            <h3 style={props.styles.carouselHeadline}>{props.title}</h3>
            <Carousel>{mapSlideComponentImages(props.imagesArr)}</Carousel>
        </div>
    );
};

export default CarouselComp;
