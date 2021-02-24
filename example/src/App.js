import React from 'react'

import { Product } from 'electrohack-product'
import 'electrohack-product/dist/index.css'

const App = ({product, addToCart}) => {
  return <Product product={product} addToCart={addToCart}/>
}

export default App
