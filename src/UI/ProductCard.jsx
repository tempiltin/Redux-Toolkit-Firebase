import React from 'react'
import {Link} from "react-router-dom"
import "../style/product-card.css"
import { motion } from 'framer-motion'
import { Col } from 'reactstrap';
import { toast } from 'react-toastify';
//
import { useDispatch } from 'react-redux';
import { cartActions } from '../Redux/slices/cartSlice';

const ProductCard = ({item}) => {

    const dispatch = useDispatch()

    const addToCard = ()=>{
        dispatch(cartActions.addItem({
            id:item.id,
            productName:item.name,
            price:item.price,
            image:item.img,
        }))

        toast.success('Product added successfully')
    }

    return (
        <Col lg={"3"} md={"4"} className="mb-2">
            <div className="product_item">
                <div className="product_img">
                    <motion.img whileHover={{scale:0.9}} src={item.img} alt="" />
                    
                </div>
                <div className="p-2 product-info">
                    <h3 className="product_name"><Link to={`/shop/${item.id}`}>{item.name} </Link></h3>
                    <span >{item.category}</span>
                </div>
                <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">${item.price}</span>
                    <motion.span whileTap={{scale:1.2}} onClick={addToCard}><i className='ri-add-line'></i></motion.span>
                </div>
            </div>

        </Col>
    )
}

export default ProductCard;