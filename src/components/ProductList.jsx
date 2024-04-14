import React from 'react'
import { products } from '../data'

const ProductList = () => {
  return (
    <ul>
        {products.map((product,index)=><li key={product.id}>{product.name}</li>)}
    </ul>
  )
}

export default ProductList