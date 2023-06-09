import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Card, Row, Col } from 'antd';
import htmlImage from './assets/career/html.png';
import cssImage from './assets/career/css.png'
import jsImage from './assets/career/js.png'
import tsImage from './assets/career/ts.png'
import javaImage from './assets/career/java.jpg'
import reactImage from './assets/career/React.png'
import angularImage from './assets/career/Angular.png'
import linuxImage from './assets/career/linux.png'
import kaliImage from './assets/career/kali.jpg'
import pentImage from './assets/career/penste.jpg'


const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; 
  color: #fff;
  height: 100vh;
`;

const CareerText = styled.p`
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 15px;
  max-width: 800px;
`;

const CareerPage: React.FC = () => {

    const imageList = [
        {
          src: htmlImage,
          alt: "HTML",
        },
        {
          src: cssImage,
          alt: "CSS"
        },
        {
            src: jsImage,
            alt: "JavaScript"
        },
        {
            src: tsImage,
            alt:"Typescript"
        },
        {
            src: javaImage,
            alt:"Java"
        },
        {
            src: reactImage,
            alt: "React"
        },
        {
            src: angularImage,
            alt: "Angular"
        },
        {
            src: linuxImage,
            alt: "Linux"
        },
        {
            src: kaliImage,
            alt: "Kali Linux"
        },
        {
            src: pentImage,
            alt: "Pentesting"
        }
        // Más imágenes aquí...
      ];

  return (
    <CareerContainer>
      <CareerText>
        <p>
            Estudio "DESARROLLO DE SOFTWARE" donde ha aprendido muchas cosas en la era de la tecnologia
            en lo que va de:
            <p>*Programacion</p>
            <p>*Bases de datos</p>
            <p>*Desrollo de Back-end y Front-end</p>
            <p>*Redes</p>
            <p>A continuacion les muestro esta galeria con los lenguajes de programacion que ya domino,
                asi como tambien los frameworks:
            </p>
        </p>
      </CareerText>
      <Row gutter={3} justify="center">
        {imageList.map((image, index) => (
          <Col key={index} span={5}>
            <Card bordered={false} style={{ width: '150px', height: '140px'}}>
              <img 
              src={image.src} 
              alt={image.alt}  
              style={{ width: '75px', display: 'block', margin: 'auto'}}/>
              <p style={{textAlign: 'center'}}>{image.alt}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </CareerContainer>
  );
}

export default CareerPage;
