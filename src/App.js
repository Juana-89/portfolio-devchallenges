import React from 'react';
import { Layout, Space, Button } from 'antd';
import Nav from './components/Header.jsx';
import ContentBody from './components/Content.jsx';
import FilterProjects from './components/Filter.jsx';
import './App.css';
// const { Header, Footer, Sider, Content } = Layout;

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
      {/* <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>Content</Content>
      <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
    </Space>

);

export default App;