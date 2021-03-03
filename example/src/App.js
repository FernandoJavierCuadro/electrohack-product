import React from 'react'

import { Product } from 'electrohack-product'
import 'electrohack-product/dist/index.css'

const App = ({ product, buyFunction }) => {
  return <Product product={product} buyFunction={buyFunction} />
}

export default App
