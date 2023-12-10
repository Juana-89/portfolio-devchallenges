import React from 'react'
import { Layout, Button, Card, Flex, Typography, Descriptions } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

// const headerStyle = {
//     textAlign: 'center',
//     width: 1046,
//     margin: '0 auto',
//     backgroundColor: 'transparent',
//   };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
    
  };

  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };

const cardStyle = {
  width: 1046,
  margin: 'auto'
 
};

const imgStyle = {
  display: 'block',
  width: 271,
  padding: 15,
  borderRadius: 23
};

const items = [
    {
        children: "Self-motivated developer, who is willing to learn and create outstanding UI applications. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis ducimus quibusdam odio dolorem doloremque enim numquam quas dolore qui neque aperiam quasi provident dolor perferendis voluptatem illo, amet tenetur."
    }
]

const Nav = () => {
  return (
    <Layout style={{marginTop: 50}}>
        <Card
        hoverable
        style={cardStyle}
        bodyStyle={{
          padding: 0,
          overflow: 'hidden',
        }}
    >
        <Flex justify="space-between">
          <img
              alt="avatar"
              src="https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg"
              style={imgStyle}
          />
       
            <Flex
            vertical
            align="flex-start"
            justify="space-between"
            > 
            <div style= {{display: 'flex', justifyContent: 'space-around', gap:400}}>
              <div>
                <Typography.Title level={4} style= {{marginBottom: 0 }}>
                Juana Llanje
                </Typography.Title>
                <Typography.Title level={5} style= {{marginTop: 0, fontWeight: 'lighter'}}>
                Front-end developer
                </Typography.Title>
              </div>
              <Flex 
              vertical 
              >
                <div style={{marginTop:30 }}>
                  <MailOutlined /> juanalcez88@gmail.com
                </div>
                <div>
                  <PhoneOutlined /> (+51) 987654321
                </div> 
               </Flex>
              </div> <br/>
              <Descriptions items={items}/>
            {/* <Button type="primary" href="https://ant.design" target="_blank">
            Get Start
            </Button> */}
            </Flex>
        </Flex>
    </Card>
    {/* </Header> */}
    {/* <Content style={contentStyle}>Content</Content>
    <Footer style={footerStyle}>Footer</Footer>  */}
    </Layout>
  )
}

export default Nav