import React, { useState } from 'react'
import CommonSection from '../UI/CommonSection';
import Helmet from "../Components/Helmet/Helmet"
import { Col, Container, Row } from 'reactstrap';
import "../style/shop.css";
import products from "../db/products";
import ProductList from "../UI/ProductsList";
import categoryFor from '../db/CategoryFor';
import DataError from '../Components/NotFound/DataError';
const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = e => {
    setTimeout(() => {
      const filterValue = e.target.value;
      const filterProducts = products.filter(item => item.category === filterValue)
      setProductsData(filterProducts)
    }, 300)
  }
  const handleSearch = e=>{
    const searchValue = e.target.value;

    const searchedProducts = products.filter(item=> item.name.toLowerCase().includes(searchValue.toLowerCase()))
    setProductsData(searchedProducts)
  }


  return <Helmet title={"Shop"}>
    <CommonSection title={"Products"} />
    <section>
      <Container>
        <Row>
          <Col lg={"3"} md={"4"}>
            <div className="filter_widget">
              <select onChange={handleFilter}>
                <option>Filter By Category</option>
                {
                  categoryFor.map((item, index) => (
                    <option value={item.category} key={index}>{item.name}</option>
                  ))
                }
              </select>
            </div>
          </Col>
          <Col lg={"3"} md={"4"}>
            <div className="filter_widget">
              <select >
                <option>Sort By</option>
                <option value="ascrending">Ascrending</option>
                <option value="descrending">Descrending</option>
              </select>
            </div>
          </Col>
          <Col lg={"6"} md={"6"}>
            <div className="search_box">
              <input type="text" placeholder='Search......' onChange={handleSearch} />
              <span>
                <i className='ri-search-line text-dark'></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          {
            productsData.length === 0 ? <DataError /> : <ProductList data={productsData} />
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Shop