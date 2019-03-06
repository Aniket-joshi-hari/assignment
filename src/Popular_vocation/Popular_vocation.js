import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import slide_one from '../Header-footer/Resources/slide_one.jpg';
import slide_two from '../Header-footer/Resources/slide_two.jpg';
import slide_three from '../Header-footer/Resources/slide_three.jpg';

const Popular_vocation = () => {
    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 500
        
    }
    return (
        
            
<div 
            className="carrousel_wrapper"
            style={{
                
                overflow:'hidden',
                width:'80%',
                margin:'0px auto',
                
                borderRadius:'2%',
                boxShadow:'1px slid #eee'

                      }}
        >
            <Carousel >
                <div >
                    <img src={slide_one}  />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slide_two} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slide_three} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>            
        </div>



            
        
    );
};

export default Popular_vocation;