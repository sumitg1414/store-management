import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';

function Addproduct() {

    const {register,handleSubmit,reset,setValue,formState:{errors}}=useForm();
     const {id}=useParams();

    const saveproduct=product=>
      
      {

        if(!id){

        
      axios.post('http://localhost:5000/products',product).then(
        response=>{
          if(response.status==201){
            alert("product  details is Successfully Stored into the app")
            
         reset();
          }
          
        }
      ).catch(error=>{
        console.log(error)
        
      });
    }
    else{
      axios.put(`http://localhost:5000/products/${id}` ,product )
                 .then(response=>{
                     if(response.status===200){
                        alert("Product Details updated..!")
                        reset();
                     }
                 })
                 .catch(error=>console.log(error));
    }
  }
    const getEditData=()=>{
      if(id){
        axios.get(`http://localhost:5000/products/${id}`)
        .then(response=>{
          for(let prop in response.data){
            setValue(prop,response.data[prop])
          }
        })
      }
 }

 useEffect(getEditData,[]);
  return (
    <div className='d-flex justify-content-center'>
      <div className='w-50  border border-black mt-3 p-3'>
        <h1 className='text-black  text-center'>
          <i className='bi bi-box-fill'> &nbsp;</i>Welcome to Addproduct</h1>
        <form onSubmit={handleSubmit(saveproduct)}>
        <div className='mb-3'>
            <label htmlFor='id' className='text-black form-label fs-5 '>Enter ID:-</label>
            <input type='number' className='form-control' id="id" {...register("id")}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='prodname' className='text-black form-label fs-5 '>Enter Product Name:-</label>
            <input type='text' className='form-control' id="prodname" {...register("productName")}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='description' className='text-black form-label fs-5 '>Enter Description:-</label>
            <input type='text' className='form-control' id="description" {...register("description")}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='category' className='text-black form-label fs-5 '>Enter Category:-</label>
            <input type='text' className='form-control' id="category" {...register("category")}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='price' className='text-black form-label fs-5 '>Enter Price:-</label>
            <input type='number' className='form-control' id="price" {...register("price")}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='supplier' className='text-black form-label fs-5 '>Enter Supplier:-</label>
            <input type='text' className='form-control' id="supplier" {...register("supplier")}/>
          </div>
          <div >
            <label htmlFor='InStock' className='text-black form-check-label me-4 '>Is Product In Stock &nbsp;</label>
            <input type='checkbox' className='form-check-input'  {...register("InStock")}/>
          </div>
          <br></br>
          <div className='text-center'>
            <button type="submit" className='btn btn-success w-25'> Submit</button>
          </div>
          

        </form>
    </div>
    </div>
  )
}

export default Addproduct