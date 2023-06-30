import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from '../redux/ProductSlice';
import { addToCart } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Products = () => {

  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  const handleClick=(product)=>{
    dispatch(addToCart(product))
  }
  return (
    <div>
      <Navbar />
      <div className='py-5  bg-gray-100'>
        <div>
          <p className='text-2xl  bg-white md:py-5 py-2 text-center border-b-2 border-gray-100'>ALL PRODUCTS</p>
        </div>
        <div className="flex px-5 flex-row flex-wrap bg-white shadow-md" >
          {products.map((product) => {
            return (

              <div key={product.id} className=" lg:w-1/4 w-1/2 items-center text-center flex flex-col  justify-center md:gap-5 gap:3 lg:h-96 From cursor-pointer">
                <Link to={`/products/${product.id}`}>
                  <div className="lg:h-4/6 md:3/6 flex justify-center">
                    <img src={product.thumbnail} alt="img" className="h-full md:w-3/4 w-4/5 py-3" />
                  </div>
                  <div className="div">
                    <p className="text-sm">{product.title}</p>
                    
                    <p className="text-lime-700"> From ₹{product.price}</p>
                    <button onClick={()=>handleClick(product)}>ADD TO CART</button>
                  </div>
                </Link>
              </div>

            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products