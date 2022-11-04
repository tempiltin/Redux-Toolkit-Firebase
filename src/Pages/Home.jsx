import React from 'react'
import Helmet from '../Components/Helmet/Helmet'
import Services from '../services/Services';
import { Container, Row, Col } from 'reactstrap';
import IMG from "../Assets/image/Slide-JJM1.png"
import "../style/Home.css"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Home = () => {
  const year = new Date().getFullYear()
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
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home