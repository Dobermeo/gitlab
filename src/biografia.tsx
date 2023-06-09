import React from 'react';
import styled from 'styled-components';
import anonymous from './assets/anonymous (2).jpg'
import hack from './assets/hack.jpg'
import cuenca from './assets/cuenca.jpg'
import mtu from './assets/mtu.jpg'
import './App.css';

const BiographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; 
  color: #fff;
  height: 100vh;
`;

const BiographyImage = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
`;

const BiographyText = styled.p`
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 15px;
  max-width: 800px;
`;

const BiographyPage: React.FC = () => {
  return (
    <BiographyContainer>
      <BiographyImage src={anonymous} alt="Biography" />
      <BiographyText>
        <p>Mi nombre es David Bermeo naci el 28 de abril del 2001 en Cuenca-Ecuador, estudie la educacion general
        basica en la escuela Eugenio Espejo, el bachillerato lo obtuve en el colegio Daniel Cordova Toral, donde
        me gradue en el area de electricidad, actualmente estoy estudiando la carrera de "DESARROLLO DE SOFTWARE"
        en el instituto Sudamericano que ya voy cursando cuarto ciclo.</p>
        Lo que mas me gusta de mi carrera y lo que estoy poco a poco especializandome es en el hacking etico
        he estado en cursos donde ya he aprendido lo basico e intermedio, me gusta mucho como pasatiempo tambien.
        <BiographyImage src={hack} alt="Biography" />
        <p>Otros de mis pasatiempos tambien es el futbol me encanta jugarlo y verlo tambien, soy un gran afiionado
          del "CLUB DEPORTIVO CUENCA" aqui en mi pais y en Europa el equipo de champions que soy hincha es del 
          "MANCHESTER UNITED"
        </p>
        <BiographyImage src={cuenca} alt="Biography" className="BiographyImage"/>
        <BiographyImage src={mtu} alt="Biography" className="BiographyImage"/>
      </BiographyText>
    </BiographyContainer>
  );
}

export default BiographyPage;
