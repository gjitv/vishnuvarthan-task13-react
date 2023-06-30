import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editProduct } from '../redux/ProductSlice'


const ProductEdit = () => {
    const pid= useParams().id
    const dispatch=useDispatch()
    console.log(pid)
    const products = useSelector(state => state.products.products);
    console.log(products)
    const initialState= products.filter((item)=>item.id == pid)
    const [formValue, setFormValue] = useState(initialState[0]);
    const {title,description,price,rating, discountPercentage, stock, brand, category}= formValue
    console.log(title)

   
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(editProduct(pid, formValue))
    }

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
      }
  return (
    <div>
        <h1>edit</h1>
        <form onSubmit={()=>handleSubmit()} className='flex flex-wrap md:w-3/4 flex-col gap-5' >
          <p className=' text-2xl text-bold py-5'>Add New Products</p>
          <p>Product Name</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='text' placeholder="title" name='title' value={title} onChange={onInputChange} required />
          <p>Description</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='text' placeholder='Description' name='description' value={description} onChange={onInputChange} required />
          <p>Price</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='number' placeholder='Price' name='price' value={price} onChange={onInputChange} required />
          <p>Rating</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='number' placeholder='rating' name='rating' value={rating} onChange={onInputChange} required />
          <p>Discount Percentage</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='number' placeholder='discountPercentage' name='discountPercentage' value={discountPercentage} onChange={onInputChange} required />
          <p>Stock</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='number' placeholder='stock' name='stock' value={stock} onChange={onInputChange} required />
          <p>Brand</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='text' placeholder='brand' name='brand' value={brand} onChange={onInputChange} required />
          <p>Category</p>
          <input className='p-3 md:w-3/4 w-full rounded-md  bg-gray-200' type='text' placeholder='category' name='category' value={category} onChange={onInputChange} required />
          <button type='submit ' className="bg-blue-500 w-48 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-8" >
           save changes
          </button>
        </form>
    </div>
  )
}

export default ProductEdit