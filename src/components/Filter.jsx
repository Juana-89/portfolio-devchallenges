import { useState, useEffect } from 'react'
import { Card, Flex, Typography, Button, Image } from 'antd';
import {projects} from '../assets/data/data.js'
import Adidas from '../assets/Adidas_Logo.svg.png';
import HyM from '../assets/H&M-Logo.svg.png';

const FilterProjects = () => {
  const cardStylesProjects = {
    width: 1048,
    height: 115,
    margin: 'auto'
  };

  const buttonStyles = {
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid black',
    marginRight: 20,
    transition: 'background-color 0.3s ease', 
    ':hover': {
      backgroundColor: '#1890ff',
      color: '#fff',
    },
  }

  const cardStylesSelectedProjects = {
    maxWidth: 329,
    width:'100%',
    height: 568,
    marginRight: 20
  };

  const [showTechs, setShowTechs] = useState([]);
  const [filteredTechNoRepeat, setFilteredTechNoRepeat ] = useState([])
  const [selectProject, setSelectProject] = useState(null);

  useEffect(() => {
    setShowTechs(projects);
    setFilteredTechNoRepeat([...new Set(projects.map((p) => p.tech))]);
  }, []);

  const showProjects = (tech) => {
     setSelectProject(tech);
  }

  return (
    <Flex vertical style={{marginTop: 20}}>
      <Card
      hoverable
      style={cardStylesProjects}
      >
        <Typography.Title level={4} style= {{marginTop:5 }}>
          Projects
        </Typography.Title>
        <Flex horizontal style={{marginBottom:50}}>
        {filteredTechNoRepeat.map((project, index) => (
          <div key={index}>
            <Button 
              type="primary" 
              key={index} 
              onClick={()=>showProjects(project)}
              style={buttonStyles}>
              {project}
            </Button>
          </div>
        ))}
        </Flex>
        {selectProject && (
          <Flex style={{marginTop: 20, marginLeft: -25}} gap='middle'>
            {showTechs
              .filter((project) => project.tech === selectProject)
              .map((project, index) => (
                <Card key={index} style={cardStylesSelectedProjects}>
                  <img src={project.img} style={{width: '292px', height: '170px'}}/>
                  <p style={{fontSize: '16px'}}>{project.hashtag}</p>
                  <Typography.Title level={5} style={{marginTop: 8}}>{project.name}</Typography.Title>
                  <p>{project.description}</p>
                  <Flex gap='large' style={{marginTop:30}}>
                    <a href= {project.repo} target="_blank">
                      <Button type="primary" size='large'>Demo</Button>
                    </a>
                    <a href= {project.prd} target="_blank">
                      <Button type="primary" size='large' ghost>Code</Button>
                    </a>
                  </Flex>
                </Card>
              ))}
          </Flex>
        )}
      </Card>
    </Flex>
  )
}

export default FilterProjects