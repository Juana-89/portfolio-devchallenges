import React from 'react';
import { Layout, Space } from 'antd';
import Nav from './components/Header.jsx';
import ContentBody from './components/Content.jsx';
import FilterProjects from './components/Filter.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Nav/>
      <ContentBody/>
      <FilterProjects/>
      <Footer />  
    </Layout>
    </Space>

);

export default App;