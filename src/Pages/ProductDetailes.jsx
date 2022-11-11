import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import products from "../db/products";
import Helmet from "../Components/Helmet/Helmet";
import ProductList from "../UI/ProductsList"
import CommonSection from "../UI/CommonSection"
import { Col, Container, Row } from 'reactstrap';
import "../style/product_detailes_section.css";
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Redux/slices/cartSlice';
import { toast } from 'react-toastify';
const ProductDetailes = () => {
  const [tab, setTab] = useState('desc');
  const dispatch = useDispatch()
  const [rating, setRating] = useState(null)
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const { id } = useParams()
  const product = products.find(item => item.id === Number(id));

  const { img, name, price, description, short_description, avgRating, review, category } = product;
  const relatedProducts = products.filter(item => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault()
    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value
    const reviewObj ={
      user_name:reviewUserName,
      text:reviewUserMsg,
      rating
    }
    toast.success("Review submitted")
    console.log(reviewObj);
  }

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: img,
      name: name,
      price,

    }))
    toast.success('Product added successfully')
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])
  return <Helmet title={name}>
    <CommonSection />

    <section className='pt-0 product_detailes_section mt-3'>
      <Container>

        <Row >
          <Col lg={"6"}>
            <motion.img whileHover={{ scale: 1.1 }} src={img} alt="" />
          </Col>
          <Col lg={"6"} >
            <div className="product_detailes">
              <h2>{name}</h2>
              <div className="product_rating d-flex align-items-center gap-5 mb-4">
                <div>
                  <span><i className='ri-star-s-fill'></i></span>
                  <span><i className='ri-star-s-fill'></i></span>
                  <span><i className='ri-star-s-fill'></i></span>
                  <span><i className='ri-star-s-fill'></i></span>
                  <span><i className='ri-star-half-s-fill'></i></span>
                </div>
                <p className='text-dark mb-0'>(<span>{avgRating}</span>ratings)</p>
              </div>
              <div className="d-flex align-items-center gap-5">
                <span className='product_price'> ${price}  </span>
                <span><span> &nbsp;</span> Category: {category.toUpperCase()}</span>
              </div>
              <p className='text-dark mt-2'>{short_description}</p>
              <motion.button whileTap={{ scale: 1.2 }} className="buy_btn" onClick={addToCart}>Add to Cart</motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="tab_wrapper d-flex align-items-center gap-5">
              <h6 className={`${tab === 'desc' ? 'active_tab' : ""}`} onClick={() => setTab('desc')}>Discreption</h6>
              <h6 className={`${tab === 'rev' ? 'active_tab' : ""}`} onClick={() => setTab('rev')}>Reviews ({review.length})</h6>
            </div>

            {
              tab === 'desc' ? <div className="tab_content mt-4"> <p > {description}</p></div> :
                <div className='product_review'>
                  <div className="review_wrapper">
                    <ul>
                      {
                        review?.map((item, index) => (
                          <li key={index} className={'mb-4'}>
                            <h6>Jhon doe</h6>
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul>

                    <div className="review_form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form_group">
                          <input type="text" placeholder='Enter Name' ref={reviewUser} required />
                        </div>
                        <div className="form_group d-flex align-items-center">
                          <motion.span whileTap={{ scale: 1.2 }} className='cursor-pointer' onClick={() => setRating(1)}>1<i className='ri-star-s-fill'></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} className='cursor-pointer' onClick={() => setRating(2)}>2<i className='ri-star-s-fill'></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} className='cursor-pointer' onClick={() => setRating(3)}>3<i className='ri-star-s-fill'></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} className='cursor-pointer' onClick={() => setRating(4)}>4<i className='ri-star-s-fill'></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} className='cursor-pointer' onClick={() => setRating(5)}>5<i className='ri-star-s-fill'></i></motion.span>
                        </div>
                        <div className="form_group">
                          <textarea rows={4} type="text" placeholder='Review Message .....' ref={reviewMsg} required />
                        </div>

                        <motion.button type='submit' whileTap={{ scale: 1.2 }} className="buy_btn">Submit</motion.button>
                      </form>
                    </div>
                  </div>
                </div>
            }
          </Col>
          <Row>
            <Col lg='12' className='mt-5'>
              <h2 className="related_title">You might also like </h2>
            </Col>
            <ProductList data={relatedProducts} />
          </Row>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default ProductDetailes