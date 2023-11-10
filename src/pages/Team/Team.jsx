
import React from 'react'
import { data } from './components/team-data';
import { Row, Col, Card, Flex, Typography } from 'antd';
const { Title } = Typography;
import "./Team.scss"


const Team = () => {
  return (
    <>
      <div className='teams-container'>
        <Bg />
        <Title className='heading'>Our Team</Title>
        <div style={{ width: '95%', maxWidth: '1000px', margin: '0 auto' }} className='custom-grid-container'>
          <Cards />
        </div>
      </div>
    </>
  )
}


const Bg = () => {
  return (
    <div className="container">
      <div className="bubbles">
        <span style={{
          // @ts-ignore
          "--i": "11"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "12"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "24"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "10"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "14"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "16"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "19"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "20"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "22"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "25"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "21"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "15"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "13"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "26"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "17"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "13"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "11"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "11"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "12"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "24"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "10"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "14"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "16"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "19"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "20"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "22"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "25"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "21"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "15"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "24"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "10"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "14"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "14"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "16"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "19"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "20"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "22"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "25"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "21"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "15"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "13"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "26"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "17"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "13"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "11"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "11"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "12"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "24"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "12"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "14"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "23"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "25"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "18"
        }}></span>
        <span style={{
          // @ts-ignore
          "--i": "21"
        }}></span>
      </div>
    </div>
  )
}
const Cards = () => {

  return (
    <div >
      <Row gutter={16}>
        {data.map((item, index) => (
          <Col xs={24} sm={12} key={index}>
            <div className='floating'>
              <Card className='card-container'
                bodyStyle={{
                  padding: 0,
                  overflow: 'hidden',

                }}
              >
                <Flex className='ant-row' gap={10}>
                  <Flex justify='space-around'>
                    <img
                      alt="avatar"
                      src={item.img}
                      className='team-member-image'
                    />

                  </Flex>
                  <Flex vertical
                    align='flex-end'
                    style={{
                      padding: 32,
                    }}
                    className='ant-text'
                  >

                    <Typography.Title level={3}>
                      {item.name}
                    </Typography.Title>
                    <Typography.Title level={5}>
                      {item.desg}
                    </Typography.Title>
                    <Typography.Title level={5}>
                      {item.desg}
                    </Typography.Title>

                  </Flex>
                </Flex>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
};








export default Team

