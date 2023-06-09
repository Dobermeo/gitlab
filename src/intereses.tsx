import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import ethical from './assets/ethical.jpg'
import programacion from './assets/programacion.jpg'
import pentesting from './assets/pestesting.jpg'
import futbol from './assets/futbol.jpg'
import campo  from './assets/campo1.jpg'

const InterestImage = styled.img`
margin-left: auto; 
margin-right: auto;
`;

const Interest: React.FC = () => (
  <Carousel autoplay>
    <div>
    <InterestImage src={ethical} alt='Interest' />
    </div>
    <div>
      <InterestImage src={programacion} alt='Interest' />
    </div>
    <div>
      <InterestImage src={pentesting} alt='Interest' />
    </div>
    <div>
      <InterestImage src={futbol} alt='Interest' />
    </div>
    <div>
      <InterestImage src={campo} alt='Interest' />
    </div> 
  </Carousel>
);

export default Interest;