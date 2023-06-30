import { useSelector, useDispatch } from "react-redux"
import { fetchProducts, removeFromProducts } from '../redux/ProductSlice';
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Admin from "../Pages/Admin";


const AdminProducts = () => {
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch();
  const navigate= useNavigate();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  const handleClick=(product)=>{
    dispatch(removeFromProducts(product))
  }
  const handleEdit =(id)=>{
    navigate(`/admin/productEdit/${id}`)
  }
  return (
    <div>
      <Admin/>
      <div className='py-5  bg-gray-100'>
        <div>
          <p className='text-2xl  bg-white md:py-5 py-2 text-center border-b-2 border-gray-100'>ALL PRODUCTS</p>
        </div>
        <div className="flex px-5 flex-row flex-wrap bg-white shadow-md" >
          {products.map((product) => {
            return (

              <div key={product.id} className=" lg:w-1/4 w-1/2 items-center text-center flex flex-col  justify-center md:gap-5 gap:3 lg:h-96 From cursor-pointer">
                {/* <Link to={`/products/${product.id}`}> */}
                  <div className="lg:h-4/6 md:3/6 flex justify-center">
                    <img src="" alt="img" className="h-full md:w-3/4 w-4/5 py-3" />
                  </div>
                  <div className="div">
                    <p className="text-sm">{product.title}</p>
                    
                    <p className="text-lime-700"> From ₹{product.price}</p>
                    <button className="px-5" onClick={()=>handleClick(product)}>Delete</button>
                    {/* <button onClick={()=>handleEdit(product.id)}  className="px-5">Edit</button> */}
                  </div>
                {/* </Link> */}
              </div>

            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AdminProducts