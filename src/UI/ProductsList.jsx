import React from 'react'

import ProductCard from './ProductCard'
const Products = ({data}) => {
  return <>
  {
    data?.map((item,index)=>(

      <ProductCard  item={item} key={index}/>
    ))
  }
  </>
}

export default Products