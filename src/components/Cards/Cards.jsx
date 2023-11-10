import React from 'react'
import { Card,Row,Col } from 'antd';
// import woc from 'woc.png';
const Cards = () => {
  return (
    <>

    <Row gutter={16}>
      <Col span={8}>
        <Card className='displayCard' 
            style={{
              width: 305.941,
              height: 300,
              borderRadius: 47,
              opacity: 0.3,
              backgroundPosition: 'center',
              backgroundImage: "url(/woc.png)",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              // backgroundColor: 'rgba(211,211,211,0.5),'
            }}
        >
          
        </Card>
      </Col>
  </Row>

    </>
  )
}

export default Cards;
