import { useState, useEffect } from 'react'
import { Card, Flex, Typography, Button, Pagination, Layout } from 'antd';
import FooterPage from './Footer.jsx';
import {projects} from '../assets/data/data.js'
const { Footer } = Layout;
const FilterProjects = () => {

  const cardStylesProjects = {
    width: 1048,
    height: 115,
    margin: 'auto'
  };

  const cardStylesSelectedProjects = {
    maxWidth: 329,
    width: 1048,
    height: 468,
    marginRight: 20,
    marginTop: 20
  };

  const paginationStyles = {
    float: 'right',
    marginTop: 20
  }

  const sectionCarfStylesProject = {
    marginTop: 20, 
    marginLeft: -25, 
    width: 1048
  }
  const footerStyle = {
    textAlign: 'center',
    width: '100%'
}
  const [showTechs, setShowTechs] = useState([]);
  const [filteredTechNoRepeat, setFilteredTechNoRepeat ] = useState([])
  const [selectProject, setSelectProject] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  useEffect(() => {
    setFilteredTechNoRepeat([...new Set(projects.map((p) => p.tech))].sort());
     setShowTechs(projects);
  }, [projects]);

  const showProjects = (tech) => {
     setSelectProject(tech);
     setClickedButton(tech);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <Layout>
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
          <Flex wrap='wrap' style={sectionCarfStylesProject}>
            {showTechs
              .filter((project) => !selectProject || project.tech === selectProject)
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
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
        <Flex style={paginationStyles}>
          <Pagination
           responsive={true}
           defaultCurrent={1} 
           total={showTechs
             .filter((project) => !selectProject || project.tech === selectProject)
             .length
           } 
           pageSize={itemsPerPage}
           onChange={handlePageChange}
           />;
        </Flex>
        <br/>
        <FooterPage />  
      </Card>   
    </Flex>
    </Layout>
  )
}

export default FilterProjects