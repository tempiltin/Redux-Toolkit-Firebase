import React from 'react'
import { useParams } from 'react-router-dom';
import products from "../db/products";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../UI/CommonSection"
import { Col, Container, Row } from 'reactstrap';
const ProductDetailes = () => {
  const {id} = useParams()

  const product = products.find(item => item.id === Number(id));
  console.log(products)
  console.log(id)
  const {img, name,price, description,avgRating,review } = product;

  return <Helmet>
    <CommonSection />

    <section className='pt-0'>
      <Container>
       
        <Row >
          <Col lg={"6"}>
            <img src={img} alt="" />
          </Col>
          <Col lg={"6"}>
          <div className="product_detailes">
            <h2>name</h2>
             <div className="product_rating">
              <div>
                <span><i className='ri-star-s-fill'></i></span>
                <span><i className='ri-star-s-fill'></i></span>
                <span><i className='ri-star-s-fill'></i></span>
                <span><i className='ri-star-s-fill'></i></span>
                <span><i className='ri-star-s-fill'></i></span>
                <span><i className='ri-star-s-fill'></i></span>
                <span><i className='ri-star-s-fill'></i></span>
                <span><i className='ri-star-half-s-fill'></i></span>
              </div>
             </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default ProductDetailes