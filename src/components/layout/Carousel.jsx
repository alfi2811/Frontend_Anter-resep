import React, { Component } from 'react';
import coba from './coba.jpg';

import Slider from "react-slick";
import './Carousel.css';
 
export default class Carousel extends Component {
    render(){
        const settings = {
            className: "center",
            centerMode: true,            
            infinite: true,
            centerPadding: "100px",
            slidesToShow: 1,
            dots: true,
            speed: 500
          };
        return(
        <div className="mt-5">                    
        <Slider {...settings}>
          <div>
            <img src={coba} style={{width: '100%'}} className="px-3" alt=""/>
          </div>
          <div>
          <img src={coba} style={{width: '100%'}} className="px-3" alt=""/>
          </div>
          <div>
            <img src={coba} style={{width: '100%'}} className="px-3" alt=""/>
          </div>
          <div>
            <img src={coba} style={{width: '100%'}} className="px-3" alt=""/>
          </div>
          <div>
            <img src={coba} style={{width: '100%'}} className="px-3" alt=""/>
          </div>
          <div>
            <img src={coba} style={{width: '100%'}} className="px-3" alt=""/>
          </div>
        </Slider>           
        </div>
        )
    }
}