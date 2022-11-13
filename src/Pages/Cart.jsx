import React from 'react';
import "../style/cart.css";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../UI/CommonSection"
import { Col, Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';
//============Redux ======================
import { cartActions } from "../Redux/slices/cartSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector((state)=> state.cart.totalAmount)
  return <Helmet title={"Cart"}>
    <CommonSection title={"Shopping Cart"} />
    <section className='section_cart_db'>
      <Container>
        <Row>
          <Col lg='9'>
            {
              cartItems.length === 0 ? <h2 className='fs-4 text-center'>No item added to the cart</h2> :
                (<table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <motion.th whileTap={{ scale: 1.2 }}>Delete</motion.th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems.map((item, index) =>
                      (
                       
                       <Tr item={item} key={index}/>
                      ))
                    }
                  </tbody>
                </table>)
            }

          </Col>
          <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center'>Subtotal  <span className='fs-4 fw-bold'>&nbsp; ${totalAmount}</span></h6>
             
              <p>taxes and shipping will calculate in checkout</p>
              <div>
                <button className="buy_btn">
                  <Link to={'/shop'}>Continue Shopping</Link>
                </button>
                <button className="buy_btn">
                  <Link to={'/checkout'}>Checkout</Link>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}
// TR ========================================================================================

const Tr = ({item}) => {
  const dispatch = useDispatch();
  const deleteProduct = ()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return <tr >
    <td><motion.img whileTap={{ scale: 1.1 }} src={item.image} alt="" /></td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}px</td>
    <motion.td whileTap={{ scale: 1.1 }} onClick={deleteProduct}><i className='ri-delete-bin-line'></i></motion.td>
  </tr>
}

export default Cart