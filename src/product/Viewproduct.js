import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Viewproduct() {

  const [products ,setProducts] =useState([]);

  function getProduct(){
    axios.get('http://localhost:5000/products').then(
      response=>{
        setProducts(response.data)
        console.log(response.data)
      }
    ).catch(
      error=> console.log(error)
    )

  }
  useEffect(getProduct,[])

  function deleteData(id)
    {
        axios.delete(`http://localhost:5000/products/${id}`)
        .then(response=>{
            if(response.status===200)
            {
                alert(`Product Information removed Successfully  ID:- ${ id} ..!`)
                window.location.reload();
            }
        })
        .catch(error=>console.log(error))
    }
  return (
    <div className='pt-3 '>
        <h1 className='text-center fs-7 '>All Products ..! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <i className='bi bi-shop-window'></i> */}
        </h1>

        <table className='bg-white  table table-hover table-success table-bordered'>
          <thead>
            <th>ID</th>
            <th>PRODUCTION NAME</th>
            <th>DESCRPTION</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>SUPPLIER</th>
            <th>INSTOCK</th>
            <th>ACTIONS</th>
          </thead>
          <tbody>
            {
              // products.map(
                // (prod,index)=><tr key={index}>
                //  <td>{index+1}</td>
                products.map((prod)=><tr>
                        <td>{prod.id}</td>
                 <td> {prod.productName}</td>
                 <td> {prod.description}</td>
                 <td> {prod.category}</td>
                 <td> {prod.price}</td>
                 <td> {prod.supplier}</td>
                 <td> 
                  <input type='checkbox' checked={prod.InStock}/></td>
                  <td>
                    <Link className='btn btn-outline-primary me-3 '  to={`/edit/${prod.id}`}><i class="bi bi-pencil-square"></i>
                    </Link>
                    
                    <button className='btn btn-outline-danger ' onClick={()=>deleteData(prod.id)}>
                      <i class ="bi bi-trash-fill"></i>
                    </button>
                  </td>

                </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}

export default Viewproduct