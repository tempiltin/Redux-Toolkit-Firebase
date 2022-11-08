// imort package ======================
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// import Components =======================
import Helmet from '../Components/Helmet/Helmet'
import Services from '../services/Services';
import ProductsList from "../UI/ProductsList"
import Clock from '../UI/Clock';
// data imort ======================
import products from '../db/products';

// import styles ======================
import "../style/Home.css"
import timeCountIMG from "../Assets/image/count.png"
import IMG from "../Assets/image/Slide-JJM1.png"

// function =============================================================

const Home = () => {
  // States==============================================================
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(() => {
    // data filter
    const filterTrendingProducts = products.filter(item => item.category === "chair")
    const filterBestSalesProducts = products.filter(item => item.category === "sofa")
    const filterMobileProducts = products.filter(item => item.category === "mobile")
    const filterWirelessProducts = products.filter(item => item.category === "wireless")
    const filterPopularProducts = products.filter(item => item.category === "watch")

    setTrendingProducts(filterTrendingProducts)
    setBestSalesProducts(filterBestSalesProducts)
    setMobileProducts(filterMobileProducts)
    setWirelessProducts(filterWirelessProducts)
    setPopularProducts(filterPopularProducts)
  }, [])



  // Compinents ========================================================= return 
  return <Helmet title={"Home"}>
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg="6" md={"6"}>
            <div className="hero_content">
              <p className="hero_subtitle"> Trending product in {year} </p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis assumenda magni obcaecati earum reprehenderit nisi atque perspiciatis sunt et porro?</p>
              <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'>
                <Link to={"/shop"}>SHOP NOW</Link>
              </motion.button>
            </div>
          </Col>

          <Col lg="6" md={"6"}>
            <div className="hero_img">
              <img src={IMG} alt="Hero Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services />
    <section className="trending_products">
      <Container>
        <Row>
          <Col lg={"12"} className={"text-center"}>
            <h2 className='section_title'>Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts} />
        </Row>
      </Container>
    </section>



    <section className="best_sales">
      <Container>
        <Row>
          <Col lg={"12"} className={"text-center"}>
            <h2 className='section_title'>Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts} />
        </Row>
      </Container>
    </section>


    <section className="timer_count">
      <Container>
        <Row>
          <Col lg={"6"} md={"6"}>
            <div className="clock_top_content">
              <h4 className='text-white fs-6 mb-2'>Limited offers</h4>
              <h3 className='text-white fs-5 mb-3'>Quality Armshair</h3>
            </div>
            <Clock />
            <motion.button whileTap={{ scale: 1.2 }} className='buy_btn store_btn'>
              <Link to={"/shop"}>Visit Store</Link>
            </motion.button>
          </Col>
          <Col lg={"6"} md={"6"} className={"text-end"}>
            < motion.img whileHover={{ scale: 1.2 }} src={timeCountIMG} alt={Date()} />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new_arrivals">
      <Container>
        <Row>
          <Col lg={"12"} className="text-center">
            <h2 className="section_title mb-3">New Arrivals</h2>
          </Col>
          <ProductsList data={mobileProducts} />
          <ProductsList data={wirelessProducts} />
        </Row>
      </Container>
    </section>


    <section className="popular_category">
      <Container>
        <Row>
          <Col lg={"12"} className="text-center mb-5">
            <h2 className="section_title mb-4">Popular in Category</h2>
          </Col>
          <ProductsList data={popularProducts} />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home