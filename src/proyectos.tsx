import React from 'react';
import { Collapse } from 'antd';
import inteleduImage from './assets/intel.png'
import styled from 'styled-components';
import prueba from './assets/prueba.jpg'

export interface Project {
    title: string;
    image: string; 
    description: string;
    
  }
  
  
  const projects: Project[] = [
    {
      title: 'IntelEdu',
      image: inteleduImage,
      description: 
      'IntelEdu es una platafroma de ganmificacion para niños con discapacidad intelectual, la cual consta de apartado tanto para estudiantes como para profesores, en si la platafroma lo que nos ofrece es que hay juegos desarrollados por nosotros mismos con bases en el internet, lo caul podran jugar de manera ilimitada. La seguiridad esta protegida por un loguin que es para todos los usuarios que vayan a ocuparla. El rpofesor podra ver avances de los estudiantes ya que esto guardara los puntajes de cada juego, Esta esta desarrollado con el framework de angular y el lenguaje de typescript y el back esta con java y maven.',
      
    },

  ];

  const ProjectImage = styled.img`
margin-left: auto; 
margin-right: auto;
`;

const Projects: React.FC = () => {
  return (
    <div>
      <h1>Mis Proyectos</h1>
      <Collapse>
        {projects.map((project, index) => (
          <Collapse.Panel
            key={index}
            header={project.title}
            extra={<img src={project.image} alt={project.title} style={{ width: "50px" }} />}
          >
            <p>{project.description}</p>
            {
                <ProjectImage src={prueba} alt="Project"/>
                
                
            }
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Projects;
