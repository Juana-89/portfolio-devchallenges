import { useState, useEffect } from 'react'
import { Card, Flex, Typography, Button, Pagination } from 'antd';
import {projects} from '../assets/data/data.js'

const FilterProjects = () => {

  const cardStylesProjects = {
    width: 1048,
    height: 115,
    margin: 'auto'
  };

  const cardStylesSelectedProjects = {
    maxWidth: 329,
    width:'100%',
    height: 468,
    marginRight: 20
  };

  const paginationStyles = {
    float: 'right',
    marginTop: 20
  }

  const [showTechs, setShowTechs] = useState([]);
  const [filteredTechNoRepeat, setFilteredTechNoRepeat ] = useState([])
  const [selectProject, setSelectProject] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  useEffect(() => {
    setFilteredTechNoRepeat([...new Set(projects.map((p) => p.tech))].sort());
     setShowTechs(projects);
  }, [projects]);

  const showProjects = (tech) => {
     setSelectProject(tech);
     setClickedButton(tech);
  }

  return (
    <>
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
              onClick={() => showProjects(project)}
              className={clickedButton === project ? 'clickedButton' : ''}
              style={{
                backgroundColor: clickedButton === project ? '#1890ff' : '#fff',
                color: clickedButton === project ? '#fff' : '#000',
                border: clickedButton === project ? '1px solid #1890ff' : '1px solid black',
                marginRight: '20px',
                transition: 'background-color 0.3s ease',
              }}>
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
                  {Array.isArray(project.hashtag) && (
                    <li style={{fontSize: '16px'}}> {project.hashtag.map(tag => `#${tag}`).join(' ')}</li>
                  )}
                  <Typography.Title level={5} style={{marginTop: 8}}>{project.name}</Typography.Title>
                  <p>{project.description}</p>
                  <Flex gap='large' style={{marginTop:30}}>
                    <a href= {project.repo} target="_blank">
                      <Button type="primary" size='large' rel="noopener noreferrer">Demo</Button>
                    </a>
                    <a href= {project.prd} target="_blank" rel="noopener noreferrer">
                      <Button type="primary" size='large' ghost>Code</Button>
                    </a>
                  </Flex>
                </Card>
              ))}
          </Flex>
        )}
        <Flex style={paginationStyles}>
          <Pagination defaultCurrent={1} total={10} responsive={true} />;
        </Flex>
      </Card>
    </Flex>

    </>
  )
}

export default FilterProjects