import React from 'react'
import "./Cards.scss"
import { Card,Row,Col,Flex,Button,Space } from 'antd';
// import woc from 'woc.png';
const Cards = () => {
  return (
    <>

        <Card className='displayCard' 
            style={{
              width: 305.941,
              height: 300,
              borderRadius: 47,
              opacity: 0.4,
              backgroundPosition: 'center',
              backgroundImage: "url(/woc.png)",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              // backgroundColor: 'rgba(211,211,211,0.5),'
            }}
        >
          <div className="space-align-block">
            <Space align="baseline">
              <Button className='primary secondary'>View Projects</Button>
            </Space>
          </div>
        </Card>

    </>
  )
}

export default Cards;
