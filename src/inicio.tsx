import React from 'react';
import styled from 'styled-components';
import hackdav from './assets/career/hackdav.png'
import  Flash  from 'react-awesome-reveal';
import './App.css';

const StartContainer = styled.div`
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

const StartPage: React.FC = () => {
  return (
    <StartContainer>
      <WarningText>
          Sapea no mas 
        </WarningText>
        <img src={hackdav} alt="start" style={{ width: "150px" }}/>
      <Flash triggerOnce>
        <WarningText>
          ¡Igual tu dispositivo ya es mio!
        </WarningText>
        <WarningText>
          Att: ANONYMOUS06 
        </WarningText>
      </Flash>
    </StartContainer>
  );
}

export default StartPage;
