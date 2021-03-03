import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product, buyFunction }) => {
  return (
    <div className='col-md-6 col-lg-4 mb-3'>
      <div className='card my-2 shadow-about-us'>
        {product.name && (
          <Link
            to={{
              pathname:
                '/products/' +
                product.name.toLowerCase().trim().replace(/ /g, '-'),
              state: { product }
            }}
          >
            <div
              className='img-card'
              style={{
                backgroundImage: `url(${product.image})`
              }}
              alt='First slide'
            ></div>
          </Link>
        )}

        <div
          className='card-body card-height second-color d-flex flex-column justify-content-between'
          bg='snow'
        >
          {product.name && (
            <div>
              <Link
                to={{
                  pathname:
                    '/products/' +
                    product.name.toLowerCase().trim().replace(/ /g, '-'),
                  state: { product }
                }}
                className='text-dark'
              >
                <h5 className='card-title'>{product.name}</h5>
              </Link>
            </div>
          )}

          {product.brand.logo && (
            <div>
              <img src={product.brand.logo} alt='' className='card-logo-size' />
            </div>
          )}

          <div>
            {product.price && <p className='lead mb-0'>$ {product.price}</p>}

            {product.stock && (
              <>
                {product.stock > 0 ? (
                  <>
                    <p className='my-2'>
                      <small>In stock</small>
                    </p>
                    <button
                      className='btn btn-custom btn-block'
                      onClick={() => buyFunction(product)}
                    >
                      <i className='fas fa-shopping-cart mr-2'></i> Add to Cart
                    </button>
                  </>
                ) : (
                  <>
                    <p className='my-2'>
                      <small>Out of Stock</small>
                    </p>
                    <button disabled className='btn btn-custom btn-block'>
                      <i className='fas fa-shopping-cart mr-2'></i> Add to Cart
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
