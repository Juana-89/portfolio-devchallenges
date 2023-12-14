import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const footerStyle = {
    textAlign: 'center',
    width: '100%'
}

  const FooterPage = () => {
    return (
      <Layout>
        <Footer style={footerStyle}>
            Creado por <a href="http://"><strong>Juana-89 </strong></a> <span style={{color:"red"}}>❤</span>- devChallenges.io
        </Footer>
      </Layout>
    )
  }
  
  export default FooterPage
  
  
  
