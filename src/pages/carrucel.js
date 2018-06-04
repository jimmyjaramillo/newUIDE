import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import Slider from 'react-slick';
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img11 from '../images/img11.jpeg';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';
import img7 from '../images/img7.jpeg';
import img8 from '../images/img8.jpeg';
import img9 from '../images/img9.jpeg';
import img10 from '../images/img10.jpeg';
import img12 from '../images/img12.jpeg';
import img13 from '../images/img13.jpeg';
import img14 from '../images/img14.jpeg';
import img15 from '../images/img15.jpeg';
import img16 from '../images/img16.jpeg';

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
              <div><Image src={img16} size="large" alt="Estudiantes UIDE" aria-labelledby="Programando" aria-describedby="Practicas de laboratorio"/></div>
              <div><Image src={img1} size="large" alt="Estudiantes UIDE 2" aria-describedby="Practicas de laboratorio 2"/></div>
              <div><Image src={img2} size="large" alt="Estudiantes UIDE 3" aria-describedby="Practicas de laboratorio 3"/></div>
              <div><Image src={img11} size="large" alt="Estudiantes UIDE 4" aria-describedby="Practicas de laboratorio 4"/></div>
              <div><Image src={img4} size="large" alt="Estudiantes UIDE 5" aria-describedby="Practicas de laboratorio 5"/></div>
              <div><Image src={img5} size="large" alt="Estudiantes UIDE 6" aria-describedby="Practicas de laboratorio 6"/></div>
              <div><Image src={img7} size="large" alt="Estudiantes UIDE 7" aria-describedby="Practicas de laboratorio 7"/></div>
              <div><Image src={img8} size="massive" alt="Estudiantes UIDE 8" aria-describedby="Practicas de laboratorio 8"/></div>
              <div><Image src={img9} size="massive" alt="Estudiantes UIDE 9" aria-describedby="Practicas de laboratorio 9"/></div>
              <div><Image src={img10} size="massive" alt="Estudiantes UIDE 10" aria-describedby="Practicas de laboratorio 10"/></div>
              <div><Image src={img12} size="massive" alt="Estudiantes UIDE 11" aria-describedby="Practicas de laboratorio 11"/></div>
              <div><Image src={img13} size="massive" alt="Estudiantes UIDE 12" aria-describedby="Practicas de laboratorio 12"/></div>
              <div><Image src={img14} size="massive" alt="Estudiantes UIDE 12" aria-describedby="Practicas de laboratorio 13"/></div>
            </Slider>
          </div>
        </div>
      </Container>
    )
  }
}

export default CarruselPage;