import React from 'react'

import { ProductCard } from 'electrohack-product'
import 'electrohack-product/dist/index.css'

const App = ({ product, buyFunction }) => {
  return <ProductCard product={product} buyFunction={buyFunction} />
}

export default App
