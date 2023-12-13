import React from 'react'
import { Card, Flex, Typography, Progress, Image } from 'antd';
import Adidas from '../assets/Adidas_Logo.svg.png';
import HyM from '../assets/H&M-Logo.svg.png';
import Footer from './Footer'

const ContentBody = () => {
  const cardStyle = {
    width: 415,
    height: 311,
    margin: '20px'
  };

  const cardStyleHobbies = {
    width: 415,
    height: 830,
    margin: '20px'
  };

  const cardStyleCSS = {
    width: 596,
    height: 657,
    margin: '20px'
  };

  const cardStyleExperiencie = {
    width: 596,
    height: 482,
    margin: '20px'
  };

  const data = [
    { label: 'HTML', percent: 80 },
    { label: 'CSS', percent: 60 },
    { label: 'Javascript', percent: 50 },
    { label: 'NodeJs', percent: 50 },
    { label: 'React', percent: 50 },
    { label: 'Vue', percent: 30 },
  ];

  const imageStyle = {
    borderRadius: 8
  }
  return (
    <Flex horizontal justify="center" style={{marginTop: 20}}>
      <Flex vertical>
        {/* Card Frontend */}
        <Card
          hoverable
          style={cardStyle}
          >
          <Typography.Title level={4} style= {{marginBottom: 10, marginTop:5 }}>
            FRONT END
          </Typography.Title>
          <Flex vertical style={{ gap: '5px' }}>
              {data.map((item) => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span  style={{ flex: 1 }}>{item.label}</span>
                  <Progress percent={item.percent} style={{ flex: 2, marginLeft: '8px' }} />
                </div>
              ))}
          </Flex>
        </Card>
        {/* Card Hobbies */}
        <Card
          hoverable
          style={cardStyleHobbies}
          >
            <Flex vertical>
              <Typography.Title level={4} style= {{marginBottom: 20, marginTop:5 }}>
                Hobbies
              </Typography.Title>
              <Flex vertical style={{ gap: '5px', marginBottom:35 }}>
                <Image
                src="https://cdn.pixabay.com/photo/2016/08/12/20/14/river-1589616_1280.jpg"
                width={370}
                height={139}
                style={imageStyle}
                />
                <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Traveling</p>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </Flex>
            <Flex vertical style={{ gap: '5px', marginBottom:35 }}>
                <Image
                src="https://cdn.pixabay.com/photo/2016/11/19/12/44/burgers-1839090_1280.jpg"
                width={370}
                height={139}
                style={imageStyle}
                />
                <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Cooking</p>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </Flex>
            <Flex vertical style={{ gap: '5px', marginBottom:35 }}>
                <Image
                src="https://cdn.pixabay.com/photo/2016/11/19/10/57/girl-1838605_1280.jpg"
                width={370}
                height={139}
                style={imageStyle}
                />
                <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Biking</p>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </Flex>
          </Flex>
        </Card>
        </Flex>
        <Flex vertical>
        {/* Card CSS */}
        <Card
          hoverable
          style={cardStyleCSS}
          >
            <Flex horizontal style= {{marginTop: 35}}>
              <Typography.Title level={4} style= {{marginBottom: 20, marginTop:5 }}>
                How to organize your CSS
              </Typography.Title>
                <Flex vertical style={{ gap: '5px', marginBottom:60 }}>
                  <Image
                  src="https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851_1280.jpg"
                  width={390}
                  height={321}
                  style={imageStyle}
                  />
                </Flex>
              </Flex>    
              <p style={{marginBottom: 20}}>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>
              <p style={{marginBottom: 60}}>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
              <p  style= {{color:"#1890ff"}}>dev.to</p>
        </Card>
        {/* Card Experiencie */}
        <Card
          hoverable
          style={cardStyleExperiencie}
          >
            <Typography.Title level={4} style= {{marginBottom: 20, marginTop:5 }}>
                Experiencie
            </Typography.Title>
              <Flex horizontal style={{ marginTop: 60, marginBottom:20 }} gap='large' >
                <img src={Adidas}
                  style={{ width: '115px',height: '80px'}}
                />
                  <Flex vertical>
                    <p style={{marginBottom: 10}}>Feb 2017 - Current</p>
                    <p style={{marginBottom: 20, fontWeight:'bold'}}>Front-end developer</p>
                    <p style={{marginBottom: 60}}>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                  </Flex>
              </Flex>
              <Flex horizontal gap='large' >
                <img src={HyM}
                  style={{ width: '115px',height: '80px'}}
                />
                  <Flex vertical>
                    <p style={{marginBottom: 10}}>Aug 2016 - Feb 2018</p>
                    <p style={{marginBottom: 20, fontWeight:'bold'}}>Full-stack developer</p>
                    <p style={{marginBottom: 60}}>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                  </Flex>
                </Flex>
              </Card>
          </Flex>      
    </Flex>
  )
}

export default ContentBody