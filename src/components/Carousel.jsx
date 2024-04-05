import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor() {
        super();
        // setting initial state
        this.state = {
            currIndex: 0,
        };
    }

    increaseCount = () => {
        if (this.state.currIndex < images.length - 1) {
            this.setState({
                currIndex: this.state.currIndex + 1,
            });
        } else {
            this.setState({
                currIndex: 0,
            });
        }
    };
    decreaseCount = () => {
        if (this.state.currIndex > 0) {
            this.setState({
                currIndex: this.state.currIndex - 1,
            });
        } else {
            this.setState({
                currIndex: images.length - 1,
            });
        }
    };

    render() {
        const arrowColor = {
            color: "white"
        }
        return (
            <>
                <div className="carousel-container flex">
                    <div className="leftArrow arrowDiv flex" onClick={this.decreaseCount}>
                        <ArrowBackIosIcon style={arrowColor} />
                    </div>
                    <h2 className="title">{images[this.state.currIndex].title}</h2>
                    <img src={images[this.state.currIndex].img} alt="" />
                    <h4 className="caption">{images[this.state.currIndex].subtitle}</h4>
                    <div
                        className="rightArrow arrowDiv flex"
                        onClick={this.increaseCount}
                    >
                        <ArrowForwardIosIcon style={arrowColor}/>
                    </div>
                </div>
            </>
        );
    }
}

export default Carousel;