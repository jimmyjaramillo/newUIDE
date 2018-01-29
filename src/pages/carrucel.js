import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import Slider from 'react-slick';
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';
import img7 from '../images/img7.jpeg';
import img8 from '../images/img8.jpeg';
import img9 from '../images/img9.jpeg';
import img10 from '../images/img10.jpeg';

class CarruselPage extends Component {
  render() {
    var settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Container>
        <div className="CenterCarrusel">
          <div className="Carrucel">
            <Slider {...settings}>
              <div><Image src={img1} size="large" /></div>
              <div><Image src={img2} size="large" /></div>
              <div><Image src={img3} size="large" /></div>
              <div><Image src={img4} size="large" /></div>
              <div><Image src={img5} size="large" /></div>
              <div><Image src={img7} size="large" /></div>
              <div><Image src={img8} size="massive" /></div>
              <div><Image src={img9} size="massive" /></div>
              <div><Image src={img10} size="massive" /></div>
            </Slider>
          </div>
        </div>
      </Container>
    )
  }
}

export default CarruselPage;