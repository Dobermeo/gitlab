import React from 'react';
import styled from 'styled-components';
import condav from './assets/career/condav.png'
import whats from './assets/contact/whats.png'
import face from './assets/contact/face.png'
import './App.css';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; 
  color: #fff;
  height: 100vh;
`;

const WarningText = styled.p`
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 18px;
  max-width: 800px;
  color: #ff0000; // Rojo para la advertencia
`;

const ContactPage: React.FC = () => {
  return (
    <ContactContainer>

<WarningText>
          Si quieres recuperar todos los archivos de tu dispoitivo contactame!!!!
        </WarningText>
     
        <img src={condav} alt="start" style={{ width: "150px" }}/>

        <WarningText>
          Ya que si no lo haces toda tu informacion del mismo sera toda mia!!!!
        </WarningText>

        <WarningText>
          HAZ CLICK EN LOS ICONOS DONDE ME QUIERES CONTACTAR TIENES 2 HORAS!!!
        </WarningText>

        <WarningText>
          Si avisas a la policia lo sabre ya que tengo intervenidos todas las lineas y en ese caso tu dispositivo sera una BOMBA!!!!!
        </WarningText>

        <a href="https://api.whatsapp.com/send?phone=0968426499" >
            <img src={whats} alt="Whatsapp" style={{ width: '90px', display: 'block', margin: 'auto'}} /> 
        </a>

        <a href="https://www.facebook.com/david.bermeo.9619?mibextid=ZbWKwL" >
            <img src={face} alt="Facebook" style={{ width: '200px', display: 'block', margin: 'auto'}} /> 
        </a>
      
    </ContactContainer>
  );
}

export default ContactPage;
