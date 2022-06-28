import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function ProductDetailsPage(){

  const location = useLocation();
  const{title,description,image,price}=location.state
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  }
  return(
      <Container>
        <Row>
          <Col sm></Col>
            <Col sm><Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
              <Card.Header as="h5">Product Details</Card.Header>
                <Card.Img variant="top" src={image} style={{height:"16rem"}} className="mt-3" />      
                <Card.Body>
                  <Card.Title>Title:{title}</Card.Title>
                  <Card.Text>Description:{description}</Card.Text>
                  <Card.Text>Price:{price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button 
                      variant={"primary"}  
                      onClick={goHome}
                      className='col-lg-12'>
                        Product List
                    </Button>  
                  </div>  
                </Card.Body>
              </Card>
              </Col>
              <Col sm></Col>
          </Row>
      </Container>
  )
}

export default ProductDetailsPage;