import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Products=(props)=>{
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate('/productDetailsPage', { state: data});
  }

  return (
    <>
      <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
        <Card.Img variant="top" src={props.product.image} style={{height:"16rem"}} className="mt-3" />
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Title>{props.product.price}</Card.Title>
          <div className="button_div d-flex justify-content-center">
            <Button 
              variant={"primary"}  
              onClick={()=>handleClick(props.product)}
              className='col-lg-12'>
                Product Details
            </Button>  
          </div>  
        </Card.Body>
      </Card>
    </>
  )
}

export default Products