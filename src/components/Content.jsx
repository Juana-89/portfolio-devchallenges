import React from 'react'
import { Card, Flex, Typography, Progress } from 'antd';

const ContentBody = () => {
  const cardStyle = {
    width: 415,
    height: 311,
    margin: '20px 130px'
  };

  const data = [
    { label: 'HTML', percent: 80 },
    { label: 'CSS', percent: 60 },
    { label: 'Javascript', percent: 50 },
    { label: 'NodeJs', percent: 50 },
    { label: 'React', percent: 50 },
    { label: 'Vue', percent: 30 },
  ];

  return (
    <div>
       <Card
        hoverable
        style={cardStyle}
        >
        <Typography.Title level={5} style= {{marginBottom: 10, marginTop:5 }}>
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
    </div>
  )
}

export default ContentBody