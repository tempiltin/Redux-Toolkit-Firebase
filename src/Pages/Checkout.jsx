import React from 'react'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../UI/CommonSection';
import "../style/chekout.css"
import { useSelector } from 'react-redux';
const Checkout = () => {
  // 
  const totalQty = useSelector(state=>state.cart.totalQuantity);
  const totalAmount  = useSelector(state=>state.cart.totalAmount);

  return <Helmet title="Checkout">
    <CommonSection title="Checkout" />
    <section>
      <Container>
        <Row className='align-items-center'>
          <Col lg="8">
            <h6 className='mb-4 fw-bold'>Billing information</h6>
            <Form>
              <FormGroup className='form_droup'>
                <input type="text" placeholder='Enter your name' />
              </FormGroup>
              <FormGroup className='form_droup'>
                <input type="email" placeholder='Enter your email' />
              </FormGroup>
              <FormGroup className='form_droup'>
                <input type="number" placeholder='Enter your number' />
              </FormGroup>
              <FormGroup className='form_droup'>
                <input type="text" placeholder='Street address' />
              </FormGroup>
              <FormGroup className='form_droup'>
                <input type="text" placeholder='Postal code' />
              </FormGroup>
              <FormGroup className='form_droup'>
                <input type="text" placeholder='City' />
              </FormGroup>
              <FormGroup className='form_droup'>
                <input type="text" placeholder='Country' />
              </FormGroup>
            </Form>
          </Col>
          <Col lg="4">
            <div className="checkout_cart">
              <h6 className='text-white'>Total Qty: <span className='text-white'>{totalQty} items</span></h6>
              <h6 className='text-white'>SubTotal: <span className='text-white'>${totalAmount}</span></h6>
              <h6 className='text-white'><span className='text-white'>Shipping: <br /> free shipping</span> <span className='text-white'>$0</span></h6>
              <h6 className='text-white'>Free Shipping</h6>
              <h4 className='text-white'>Total Cost <span className='text-white'>${totalAmount}</span></h4>

              <button className="buy_btn auth_btn">
                Place in order
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Checkout