import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import "./footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  const year = new Date().getFullYear()
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg={"4"}>
          <div className="logo">
            <div>
              <h1 className='text-white'>Multimart</h1>
            </div>
          </div>
          <p className="footer_text mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo repudiandae ut laboriosam tenetur tempora natus quod dolorem officiis voluptatum minus.
          </p>
        </Col>
        <Col lg={"3"}>
          <div className="footer_quick-links">
            <h4 className="quick-links-title text-white">Top Categories</h4>
            <ListGroup >
              <ListGroupItem className='ps-0 border-0'>
                <Link to={"#"}>Mobile Products</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to={"#"}>Modern sofa</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to={"#"}>Arm Chair</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to={"#"}>Smart Watches</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg={"2"}>
          <div className="footer_quick-links">
            <h4 className="quick-links-title text-white">Useful Links</h4>
            <ListGroup >
              <ListGroupItem className='ps-0 border-0'>
                <Link to={"/shop"}>Shop</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to={"/cart"}>Cart</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to={"/login"}>Login</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to={"#"}>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg={"3"}>
          <div className="footer_quick-links">
            <h4 className="quick-links-title text-white">Contact</h4>
            <ListGroup >
              <ListGroupItem className='ps-0 border-0'>
                <span>
                  <i className="ri-map-pin-line"></i>
                  <p>123,Samarkhand , Uzbekistan</p>
                </span>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 text-white'>
                <span className='text-white'>
                  <i className="ri-phone-line"></i>
                  <a href={"tel:+998337074105"}>+998-(33)-707-41-05</a>
                </span>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <span>
                  <i className="ri-mail-line"></i>
                  <a href={"mailto:temurbekshukurov0707@gmail.com"}>temurbekshukurov0707@gmail.com</a>
                </span>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg={"12"}>
          <p className="footer_copyright text-center mt-3"> Copyright {year} develeoper by <a href="https://www.tempiltin.uz/">Tempiltin</a></p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer