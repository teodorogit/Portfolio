import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import matheusLogo from '../../assets/matheus.png'
import voluntario from '../../assets/voluntario.jpg'
import qrcode_github from '../../assets/qrcode_github.png'
import classes from './Carousel.module.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={classes.container}>
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width:'100%'}}>
      <Carousel.Item>
        <img src={matheusLogo} text="First slide"  style={{width:'100%'}}/>
        <Carousel.Caption>
          <h3>Matheus Teodoro</h3>
          <p>21 Anos, Cursando último ano de A.D.S</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={qrcode_github}text="Third slide"  style={{width:'100%'}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;