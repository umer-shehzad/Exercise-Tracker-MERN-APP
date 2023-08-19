import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = () => {
  return (
    <Carousel className='slider-wrapper'>
      <div>
        <img 
        src="/images/image1.jpg" alt="Exercise Tracker Screenshot 1" className='custom-image'/>
      </div>
      <div>
        <img src="/images/image2.jpg" alt="Exercise Tracker Screenshot 2" />
      </div>
      <div>
        <img src="/images/image3.jpg" alt="Exercise Tracker Screenshot 3" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
