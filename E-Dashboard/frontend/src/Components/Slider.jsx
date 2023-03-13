import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import { img1 } from '../Assets/img1.jpg'
const img1 = require('../Assets/img1.jpg')
const img2 = require('../Assets/img2.jpg')
const img3 = require('../Assets/img3.jpg')

const Slider = () => {
    const options = {
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    };

    return (
        <OwlCarousel className="owl-theme"
            items={1}
            margin={10}
            loop
            nav
            autoplay
            {...options}
        >
            <div className="item"><img src={img1} alt="image1" /></div>
            <div className="item"><img src={img2} alt="image2" /></div>
            <div className="item"><img src={img3} alt="image3" /></div>
            <div className="item"><img src={img1} alt="image4" /></div>
            <div className="item"><img src={img2} alt="image5" /></div>

        </OwlCarousel>
    );
};

export default Slider;
